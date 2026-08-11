import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { aiTools } from "../portfolio-data";

export default defineTool({
  name: "list_ai_tools",
  title: "List the AI pipeline",
  description: "List every AI tool in Rudraksh Paliwal's editing pipeline and what each one is used for.",
  inputSchema: {},
  outputSchema: { tools: z.array(z.record(z.string(), z.unknown())) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(aiTools, null, 2) }],
    structuredContent: { tools: aiTools },
  }),
});
