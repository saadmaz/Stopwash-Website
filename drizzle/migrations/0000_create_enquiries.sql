CREATE TABLE public.contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text CHECK (char_length(phone) <= 40),
  enquiry_type text NOT NULL CHECK (char_length(enquiry_type) <= 60),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_enquiries TO anon, authenticated;
GRANT ALL ON public.contact_enquiries TO service_role;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact enquiries" ON public.contact_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.franchise_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text NOT NULL CHECK (char_length(phone) <= 40),
  territory text NOT NULL CHECK (char_length(territory) <= 120),
  occupation text CHECK (char_length(occupation) <= 200),
  experience text CHECK (char_length(experience) <= 3000),
  investment_range text CHECK (char_length(investment_range) <= 60),
  unit_interest text CHECK (char_length(unit_interest) <= 30),
  site_identified text CHECK (char_length(site_identified) <= 30),
  why_stopwash text CHECK (char_length(why_stopwash) <= 3000),
  contribution text CHECK (char_length(contribution) <= 3000),
  preferred_time text CHECK (char_length(preferred_time) <= 120),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.franchise_enquiries TO anon, authenticated;
GRANT ALL ON public.franchise_enquiries TO service_role;
ALTER TABLE public.franchise_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit franchise enquiries" ON public.franchise_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);