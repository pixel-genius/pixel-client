import { OpenAPIV2 } from "openapi-types";

export const resolveSchema_3_1 = (
  schema: OpenAPIV2.Schema,
  swagger: OpenAPIV2.Document,
): string => {
  if ("$ref" in schema) {
    const refKey = schema?.$ref?.split("/")?.pop();

    if (!refKey || !swagger.definitions?.[refKey]) {
      throw new Error(`Reference not found: ${schema.$ref}`);
    }

    return resolveSchema(swagger.definitions[refKey], swagger);
  } else if (schema.allOf) {
    // Handle allOf by combining all schemas
    if(schema.allOf.length === 1) {
      return resolveSchema(schema.allOf[0], swagger);
    }
    const allOfSchemas = schema.allOf.map((subSchema) => resolveSchema(subSchema, swagger));
    return `z.intersection(${allOfSchemas.join(", ")})`;
  } else if (schema.oneOf) {
    // Handle oneOf by creating a union of schemas
    const oneOfSchemas = schema.oneOf.map((subSchema) => resolveSchema(subSchema, swagger));
    return `z.union([${oneOfSchemas.join(", ")}])`;
  } else if (schema.type === "object") {
    const properties = schema.properties || {};
    const required = schema.required || [];
    const zodObject = Object.entries(properties).map(([key, propSchema]) => {
      const isRequired = required.includes(key);
      let zodType = resolveSchema(propSchema, swagger);
      if (propSchema.nullable) {
        zodType += ".nullable()";
      }
      if (!isRequired) {
        zodType += ".optional()";
      }
      if (propSchema.readOnly) {
        zodType += `.refine(value => true, { message: "${key} is read-only" })`;
      }
      return `${key}: ${zodType}`;
    });
    return `z.object({ ${zodObject.join(", ")} })`;
  }

  if (schema.type === "array") {
    const items = schema.items
      ? resolveSchema(schema.items, swagger)
      : "z.any()";
    return `z.array(${items})${schema.nullable ? ".nullable()" : ""}`;
  }

  let zodSchema = "";

  switch (schema.type) {
    case "string":
      zodSchema = "z.string()";
      if (schema.minLength !== undefined) {
        zodSchema += `.min(${schema.minLength})`;
      }
      if (schema.maxLength !== undefined) {
        zodSchema += `.max(${schema.maxLength})`;
      }
      if (schema.pattern) {
        zodSchema += `.regex(new RegExp(${JSON.stringify(schema.pattern)}))`;
      }
      if (schema.format) {
        switch (schema.format) {
          case "email":
            zodSchema += `.email()`;
            break;
          case "uuid":
            zodSchema += `.uuid()`;
            break;
          case "uri":
          case "url":
            zodSchema += `.url()`;
            break;
          case "date":
          case "date-time":
            zodSchema += `.datetime()`;
            break;
          case "password":
            zodSchema += `.refine(value => typeof value === 'string', { message: "Password format" })`;
            break;
          default:
            zodSchema += `.refine(value => true, { message: "Unsupported format: ${schema.format}" })`;
        }
      }
      break;

    case "number":
      zodSchema = "z.number()";
      if (schema.minimum !== undefined) {
        zodSchema += `.min(${schema.minimum})`;
      }
      if (schema.maximum !== undefined) {
        zodSchema += `.max(${schema.maximum})`;
      }
      break;

    case "integer":
      zodSchema = "z.number().int()";
      if (schema.minimum !== undefined) {
        zodSchema += `.min(${schema.minimum})`;
      }
      if (schema.maximum !== undefined) {
        zodSchema += `.max(${schema.maximum})`;
      }
      break;

    case "boolean":
      zodSchema = "z.boolean()";
      break;

    default:
      zodSchema = "z.any()";
  }

  if (schema.nullable) {
    zodSchema += ".nullable()";
  }

  if (schema.readOnly) {
    zodSchema += `.refine(value => true, { message: "This field is read-only" })`;
  }

  if (schema.description) {
    zodSchema += `.describe(${JSON.stringify(schema.description)})`;
  }

  return zodSchema;
};
