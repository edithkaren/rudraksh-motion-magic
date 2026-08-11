import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import listAiTools from "./tools/list-ai-tools";
import listServices from "./tools/list-services";

// The OAuth issuer must be the direct Supabase host; the project ref is inlined
// at build time and survives publish unchanged.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "rudraksh-ai-studio",
  title: "Rudraksh AI Studio",
  version: "0.1.0",
  instructions:
    "Tools for Rudraksh Paliwal's AI video editing portfolio. Use `list_projects` and `get_project` for work samples, `list_ai_tools` for the AI pipeline, and `list_services_and_channels` for services and social channels.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listProjects, getProject, listAiTools, listServices],
});
