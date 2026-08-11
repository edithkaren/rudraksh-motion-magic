import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services, socialChannels } from "../portfolio-data";

export default defineTool({
  name: "list_services_and_channels",
  title: "List services and channels",
  description:
    "List the services Rudraksh Paliwal offers along with his social channels (Instagram, YouTube, Pinterest, Figma, Framer).",
  inputSchema: {},
  outputSchema: {
    services: z.array(z.record(z.string(), z.unknown())),
    channels: z.array(z.record(z.string(), z.unknown())),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      { type: "text", text: JSON.stringify({ services, channels: socialChannels }, null, 2) },
    ],
    structuredContent: { services, channels: socialChannels },
  }),
});
