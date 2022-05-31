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

  if (!model.name || model.name.length > 30) {
    details.push({
      message: "Name is required and must be less than 30 characters",
      name: "name",
      type: "required",
      value: model.name,
    });
  }

  if (!model.surname || model.surname.length > 30) {
    details.push({
      message: "Surname is required and must be less than 30 characters",
      name: "surname",
      type: "required",
      value: model.surname,
    });
  }

  if (!model.username || model.username.length > 10) {
    details.push({
      message: "Username is required and must be less than 10 characters",
      name: "username",
      type: "required",
      value: model.username,
    });
  }
  if (!model.password || model.password.length > 50) {
    details.push({
      message: "password is required and must be less than 50 characters",
      name: "password",
      type: "required",
      value: model.password,
    });
  }

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