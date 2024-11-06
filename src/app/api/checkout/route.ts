import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

export const POST = async (request: Request) => {
  const { products } = await request.json(); // Extract products from the request body

  // Log the incoming products to check their structure
  console.log("Received products:", products);

  // Input validation
  if (!Array.isArray(products) || products.length === 0) {
    console.error("Invalid products input. Must be a non-empty array.");
    return NextResponse.json({ error: "Invalid products input." }, { status: 400 });
  }

  try {
    // Get active products from Stripe
    let activeProducts = await stripe.products.list({ active: true });

    // Create Stripe products if they don't exist
    for (const product of products) {
      const matchedProduct = activeProducts.data.find(
        (stripeProduct: any) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (!matchedProduct) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100, // Amount in cents
          },
        });
      }
    }

    // Fetch updated products from Stripe
    activeProducts = await stripe.products.list({ active: true });

    const stripeProducts = products.map((product: any) => {
      const matchedProduct = activeProducts.data.find(
        (stripeProduct: any) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      return {
        price: matchedProduct?.default_price,
        quantity: product.quantity,
      };
    }).filter(Boolean); // Filter out any undefined values

    // Dynamic URLs
    const successUrl = process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SUCCESS_URL_PROD
      : process.env.NEXT_PUBLIC_SUCCESS_URL;

    const cancelUrl = process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_CANCEL_URL_PROD
      : process.env.NEXT_PUBLIC_CANCEL_URL;

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: stripeProducts,
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    // Ensure the session URL is properly returned
    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Error creating checkout session", error);
    // Always return a proper status code and message
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
};
