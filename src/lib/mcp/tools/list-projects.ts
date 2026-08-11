import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../portfolio-data";

export default defineTool({
  name: "list_projects",
  title: "List work samples",
  description:
    "List Rudraksh Paliwal's AI video work samples with client, year, runtime, AI tool stack and the link to the source.",
  inputSchema: {
    year: z.string().optional().describe("Optional year filter, e.g. \"2026\"."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ year }) => {
    const rows = year ? projects.filter((p) => p.year === year) : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { projects: rows },
    };
  },
});
