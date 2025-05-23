import fs from "fs";
import path from "path";
import type { PlopTypes } from "@turbo/gen";

// خواندن فایل Swagger JSON
function loadSwaggerPaths(filePath: string): string[] {
  try {
    const swaggerData = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, filePath), "utf-8"),
    );
    const paths = Object.keys(swaggerData.paths || {});
    return paths;
  } catch (error) {
    console.error("Error reading Swagger JSON:", error);
    return [];
  }
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const swaggerPaths = loadSwaggerPaths("./swagger.json");

  const methods: Array<"get" | "post" | "put" | "delete" | "patch"> = [
    "get",
    "post",
    "put",
    "delete",
    "patch",
  ];

  plop.setGenerator("api", {
    description: "Generates API methods and corresponding TypeScript files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the API name:",
      },
      {
        type: "list",
        name: "httpMethodChoice",
        message:
          "Select the HTTP method or choose CRUD to generate all methods:",
        choices: [...methods, "CRUD"],
        default: "get",
      },
      {
        type: "list",
        name: "type",
        message: "Select the API type (query or mutation):",
        choices: ["useQuery", "useMutation"],
        default: "useQuery",
        when: (answers) => answers.httpMethodChoice !== "CRUD",
      },
      {
        type: "list",
        name: "service",
        message: "Select the service this API belongs to:",
        choices: ["core", "guest"],
        default: "core",
      },
      {
        type: "input",
        name: "path",
        message: "Enter the API path:"
      },
      // {
      //   type: "list",
      //   name: "path",
      //   message: "Select the API path from Swagger JSON:",
      //   choices: swaggerPaths.length > 0 ? swaggerPaths : ["No paths available"],
      //   when: () => swaggerPaths.length > 0,
      // },
    ],
    actions(data) {
      if (!data || typeof data !== "object") {
        throw new Error("Invalid data received");
      }

      const selectedMethods: Array<
        "get" | "post" | "put" | "delete" | "patch"
      > =
        data.httpMethodChoice === "CRUD"
          ? methods
          : [
              data.httpMethodChoice as
                | "get"
                | "post"
                | "put"
                | "delete"
                | "patch",
            ];

      const actions: PlopTypes.ActionType[] = [];

      selectedMethods.forEach((method) => {
        const type = method === "get" ? "useQuery" : "useMutation";

        actions.push(
          {
            type: "add",
            path: `src/services/{{service}}/{{path}}/${method}/${method}-{{kebabCase name}}.schema.ts`,
            templateFile: "templates/schema.hbs",
            data: { method, type },
          },
          {
            type: "add",
            path: `src/services/{{service}}/{{path}}/${method}/use-${method}-{{kebabCase name}}.ts`,
            templateFile: `templates/hook.${type}.hbs`,
            data: { method, type },
          },
          {
            type: "add",
            path: `src/services/{{service}}/{{path}}/${method}/${method}-{{kebabCase name}}.ts`,
            templateFile: `templates/function.${type}.hbs`,
            data: { method, type },
          },
          {
            type: "add",
            path: `src/services/{{service}}/{{path}}/${method}/${method}-{{kebabCase name}}.types.ts`,
            templateFile: `templates/types.hbs`,
            data: { method, type },
          },
        );
      });

      return actions;
    },
  });
}
