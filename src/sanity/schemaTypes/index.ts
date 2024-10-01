import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/product-schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
