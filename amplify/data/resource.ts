import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// Define your schema
const schema = a.schema({
  Expense: a
    .model({
      name: a.string(),
      amount: a.float(),
    })
    .authorization((allow) => [allow.owner()]),
});

// Export the schema type
export type Schema = ClientSchema<typeof schema>;

// Export the data definition
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});