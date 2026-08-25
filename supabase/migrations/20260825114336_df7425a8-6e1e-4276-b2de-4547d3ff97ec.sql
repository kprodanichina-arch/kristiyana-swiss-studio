CREATE TABLE public.reviews (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name text NOT NULL,
    speed_rating integer NOT NULL CHECK (speed_rating BETWEEN 1 AND 5),
    complexity_rating integer NOT NULL CHECK (complexity_rating BETWEEN 1 AND 5),
    quality_rating integer NOT NULL CHECK (quality_rating BETWEEN 1 AND 5),
    message text,
    status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.reviews TO anon;
GRANT SELECT, INSERT ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved reviews"
ON public.reviews
FOR SELECT
TO anon, authenticated
USING (status = 'approved');

CREATE POLICY "Anyone can submit a review"
ON public.reviews
FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending');