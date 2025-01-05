import { resolveSchema } from "./resolve-schema";

export const resolveParameters = (parameters: any[] , swagger: any): string => { 
    const zodParameters = parameters.map((param) => {
      if (param.in === "body" && param.schema) {
        const zodType = resolveSchema(param.schema , swagger);
        return `${param.name}: ${zodType}${param.required ? "" : ".optional()"}`;
      } else {
        const zodType = resolveSchema({ type: param.type } , swagger);
        return `${param.name}: ${zodType}${param.required ? "" : ".optional()"}`;
      }
    });
    return `z.object({ ${zodParameters.join(", ")} })`;
  };
