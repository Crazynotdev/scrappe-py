import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "db.rczoywbzcqpxfocmmlro.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjem95d2J6Y3FweGZvY21tbHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxOTcxNTEsImV4cCI6MjA4Nzc3MzE1MX0.aIejE7L19AMz68NANqREiSPJoU3nto-GgpwvEAu_P2o"
);
