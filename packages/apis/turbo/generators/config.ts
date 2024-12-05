import type { PlopTypes } from "@turbo/gen";

// Generator configuration for creating API files with specified methods and types
export default function generator(plop: PlopTypes.NodePlopAPI): void {
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
        name: "httpMethodChoice", // Changed variable name for clarity
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
        when: (answers) => answers.httpMethodChoice !== "CRUD", // Conditional prompt
      },
      {
        type: "list",
        name: "service",
        message: "Select the service this API belongs to:",
        choices: ["core" , "guest"],
        default: "core",
      },
      {
        type: "input",
        name: "path",
        message: "Specify the API path (sample: invoice/detail):",
      },
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
