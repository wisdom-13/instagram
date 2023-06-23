import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '',
  dataset: '',
  useCdn: false,
  apiVersion: '',
})