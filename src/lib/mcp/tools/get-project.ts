import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../portfolio-data";

export default defineTool({
  name: "get_project",
  title: "Get a work sample",
  description: "Get the full details of one work sample by its title (case-insensitive).",
  inputSchema: { title: z.string().describe("Project title, e.g. \"Neon Monsoon\".") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ title }) => {
    const found = projects.find((p) => p.title.toLowerCase() === title.trim().toLowerCase());
    if (!found) throw new ToolError(`No project titled "${title}".`);
    return {
      content: [{ type: "text", text: JSON.stringify(found, null, 2) }],
      structuredContent: { project: found },
    };
  },
});
