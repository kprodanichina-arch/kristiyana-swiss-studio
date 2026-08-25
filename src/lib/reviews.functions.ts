import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client.server";

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

export const submitReview = createServerFn({ method: "POST" })
  .inputValidator((data) => reviewSchema.parse(data))
  .handler(async ({ data }) => {
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
