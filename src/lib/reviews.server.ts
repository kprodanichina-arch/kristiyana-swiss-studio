import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import type { Database } from "@/integrations/supabase/types";

export const reviewSchema = z.object({
  companyName: z.string().trim().min(1).max(200),
  speedRating: z.coerce.number().int().min(1).max(5),
  complexityRating: z.coerce.number().int().min(1).max(5),
  qualityRating: z.coerce.number().int().min(1).max(5),
  message: z.string().trim().min(1).max(2000),
});

function createPublishableFetch(key: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
    );
    if (init?.headers) {
      new Headers(init.headers).forEach((value, header) => headers.set(header, value));
    }
    if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
      headers.delete("Authorization");
    }
    headers.set("apikey", key);
    return fetch(input, { ...init, headers });
  };
}

export function createReviewsClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];

  if (!url || !key) {
    throw new Error("The reviews service is not configured.");
  }

  return createClient<Database>(url, key, {
    auth: {
      storage: undefined,
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      fetch: createPublishableFetch(key),
    },
  });
}