import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Products, Hero, Navbar } from "./component";

export default async function Home() {

  const products = await client.fetch(groq `*[_type=="product"]`)
  console.log(products);
  

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
    </>
  );
}
