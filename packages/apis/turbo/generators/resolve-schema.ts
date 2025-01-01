import { IJsonSchema, OpenAPIV2 } from "openapi-types";

export const resolveSchema = (
  schema: OpenAPIV2.Schema,
  swagger: OpenAPIV2.Document,
): string => {
  const resolveObject = (
    schema: OpenAPIV2.SchemaObject,
    swagger: OpenAPIV2.Document,
  ): string => {
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
        zodType += `.readonly()`;
      }
      return `${key}: ${zodType}`;
    });
    return `z.object({ ${zodObject.join(", ")} })`;
  };

  if ("$ref" in schema) {
    const refKey = schema?.$ref?.split("/")?.pop();

    if (!refKey || !swagger.definitions?.[refKey]) {
      throw new Error(`Reference not found: ${schema.$ref}`);
    }

    return resolveSchema(swagger.definitions[refKey], swagger);
  } else if (schema.allOf) {
    let zodSchema = "";

    if (schema.type === "object") {
      zodSchema += resolveObject(schema, swagger);

      if (schema.allOf.length === 1) {
        zodSchema += `.merge(${resolveSchema(schema.allOf[0] as OpenAPIV2.Schema, swagger)})`;
      } else {
        zodSchema = `z.unknown()`;
      }
    } else {
      if (schema.allOf.length === 1) {
        zodSchema += resolveSchema(
          schema.allOf[0] as OpenAPIV2.Schema,
          swagger,
        );
      } else {
        const allOfSchemas = schema.allOf.map((subSchema) =>
          resolveSchema(subSchema as OpenAPIV2.Schema, swagger),
        );
        zodSchema += `z.intersection(${allOfSchemas.join(", ")})`;
      }
    }

    return zodSchema;
  } else if (schema.oneOf) {
    const oneOfSchemas = schema.oneOf.map((subSchema) =>
      resolveSchema(subSchema as OpenAPIV2.Schema, swagger),
    );
    return `z.union([${oneOfSchemas.join(", ")}])`;
  } else if (schema.type === "object" || schema.type?.includes("object")) {
    return resolveObject(schema, swagger);
  }

  if (schema.type === "array" || schema.type?.includes("array")) {
    const items = schema.items
      ? resolveSchema(schema.items, swagger)
      : "z.any()";
    return `z.array(${items})${"nullable" in schema && schema.nullable ? ".nullable()" : ""}`;
  }

  let zodSchema = "";

  // Handle enums for both integer and string types
  if (schema.enum) {
    if (schema.type === "string" || schema.type?.includes("string")) {
      zodSchema = `z.enum([${schema.enum.map((e) => `'${e}'`).join(", ")}])`;
    } else {
      // INFO: Not support date
      zodSchema = `z.union([${schema.enum.map((e) => `z.literal(${e})`).join(", ")}])`;
    }
  } else {
    switch (true) {
      case schema.type === "string" || schema.type?.includes("string"):
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
            case "hostname":
              zodSchema += `.url()`;
              break;
            case "ipv4":
              zodSchema += `.ip({ version: "v4" })`;
            case "ipv6":
              zodSchema += `.ip({ version: "v6" })`;
              break;
            case "date":
            case "date-time":
              zodSchema += `.datetime({ offset: true })`;
              break;
            case "password":
              zodSchema += `.refine(value => typeof value === 'string', { message: "Password format" })`;
              break;
            default:
              zodSchema += `.refine(value => true, { message: "Unsupported format: ${schema.format}" })`;
          }
        }
        break;

      case schema.type === "number" || schema.type?.includes("number"):
        zodSchema = "z.number()";
        if (schema.minimum !== undefined) {
          zodSchema += `.min(${schema.minimum})`;
        }
        if (schema.maximum !== undefined) {
          zodSchema += `.max(${schema.maximum})`;
        }
        break;

      case schema.type === "integer" || schema.type?.includes("integer"):
        zodSchema = "z.number().int()";
        if (schema.minimum !== undefined) {
          zodSchema += `.min(${schema.minimum})`;
        }
        if (schema.maximum !== undefined) {
          zodSchema += `.max(${schema.maximum})`;
        }
        break;

      case schema.type === "boolean" || schema.type?.includes("boolean"):
        zodSchema = "z.boolean()";
        break;

      default:
        zodSchema = "z.any()";
    }
  }

  if (schema.nullable || schema.type?.includes("null")) {
    zodSchema += ".nullable()";
  }

  if (schema.readOnly) {
    zodSchema += ".readonly()";
  }

  if (schema.default) {
    if (schema.type === "string" || schema.type?.includes("string")) {
      zodSchema += `.default(${JSON.stringify(schema.default)})`;
    } else {
      zodSchema += `.default(${schema.default})`;
    }
  }
  if (schema.description) {
    zodSchema += `.describe(${JSON.stringify(schema.description + (schema.examples ? ` => Examples: ${schema.examples}` : ""))} )`;
  }

  return zodSchema;
};
