import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
export const supabaseUrl = "https://gpyuzndvdzdcdegifyzt.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdweXV6bmR2ZHpkY2RlZ2lmeXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMDk1MTAsImV4cCI6MjAxNzY4NTUxMH0.oiwfwwd1SdJ21J2_1vE1640R4Q8mo3Lmtbm6z4oPHxo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
