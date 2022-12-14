import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,   // Get this from tina.io
  token: process.env.TINA_TOKEN!,  // Get this from tina.io
  build: {
    publicFolder: "static",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "static",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        defaultItem: () => {
          return {
            title: "New Post",
            date: new Date().toISOString(),
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        // indexes: [
        //   name: "byDate",
        //   fields: [{ name: "date" }],
        // ],
      },
    ],
  },
});
