import { GraphQLBridge } from "uniforms-bridge-graphql";
import { buildASTSchema, parse } from "graphql";

const schema = `
  
input UserInput {
    id: Int!
    name: String
    surname: String
    username: String
    password: String
  }
  
`;

const schemaType = buildASTSchema(parse(schema)).getType("UserInput");
const schemaExtras = {};

const schemaValidator = (model) => {
  const details = [];

  return details.length ? { details } : null;
};

// console.table(
//   "GraphQLBridge",
//   new GraphQLBridge(schemaType, schemaValidator, schemaExtras.fields)
// );
export const bridge = new GraphQLBridge(
  schemaType,
  schemaValidator,
  schemaExtras
);