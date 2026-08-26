import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const reviewSchema = z.object({
  companyName: z.string().trim().min(1).max(200),
  speedRating: z.coerce.number().int().min(1).max(5),
  complexityRating: z.coerce.number().int().min(1).max(5),
  qualityRating: z.coerce.number().int().min(1).max(5),
  message: z.string().trim().min(1).max(2000),
});

export type ReviewInput = z.infer<typeof reviewSchema>;

export type Review = {
  id: string;
  company_name: string;
  speed_rating: number;
  complexity_rating: number;
  quality_rating: number;
  message: string | null;
  status: string;
  created_at: string;
};

function createPublishableFetch(key: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
    );
    if (init?.headers) {
      new Headers(init.headers).forEach((value, k) => headers.set(k, value));
    }
    if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
      headers.delete("Authorization");
    }
    headers.set("apikey", key);
    return fetch(input, { ...init, headers });
  };
}

function createPublishableClient() {
  const url = process.env["SUPABASE_URL"]!;
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
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

export const submitReview = createServerFn({ method: "POST" })
  .validator((data) => reviewSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createPublishableClient();
    const { error } = await supabase.from("reviews").insert({
      company_name: data.companyName,
      speed_rating: data.speedRating,
      complexity_rating: data.complexityRating,
      quality_rating: data.qualityRating,
      message: data.message,
      status: "pending",
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  });

export const getApprovedReviews = createServerFn({ method: "GET" })
  .handler(async () => {
    const supabase = createPublishableClient();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return (data ?? []) as Review[];
  });
