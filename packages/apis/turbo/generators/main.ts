import { z } from "zod";
import fs from "fs";

import { resolveParameters } from "./resolve-parameters";
import { resolveSchema } from "./resolve-schema";

interface SwaggerSpec {
  paths: Record<string, any>;
  definitions?: Record<string, any>;
}

type Method = "get" | "post" | "put" | "delete" | "patch";

export function getZodSchemaFromSwagger(
  swagger: SwaggerSpec,
  path: string,
  method: Method,
): string {
  const pathObj = swagger.paths[path]?.[method];
  if (!pathObj) {
    throw new Error(`Path or method not found: ${path} ${method}`);
  }

  const requestSchemaParams = pathObj.parameters
    ? resolveParameters(pathObj.parameters, swagger)
    : "z.undefined()";

  const requestSchemaBody = pathObj.requestBody
    ? resolveSchema(
        pathObj.requestBody.content["application/json"].schema,
        swagger,
      )
    : "z.undefined()";

  const responseSchema = pathObj.responses?.["200"]?.schema
    ? resolveSchema(pathObj.responses["200"].schema, swagger)
    : "z.undefined()";

  return `
    const requestSchemaBody = ${requestSchemaBody};
    const requestSchemaParams = ${requestSchemaParams};
    const responseSchema = ${responseSchema};
  `;
}

// const swaggerJson = JSON.parse(fs.readFileSync("swagger.json", "utf-8"));
// const zodSchemaString = getZodSchemaFromSwagger(
//   swaggerJson,
//   "/accounts/users/{id}/",
//   "get"
// );
const swaggerJson = JSON.parse(fs.readFileSync("openapi.json", "utf-8"));
const zodSchemaString = getZodSchemaFromSwagger(
  swaggerJson,
  "/v1/dns/{domain}/records",
  "post",
);

console.log(zodSchemaString);
