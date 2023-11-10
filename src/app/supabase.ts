import {createClient} from "@supabase/supabase-js";
let supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL || "TODO: Your Supabase URL"
let supabase_key = process.env.SUPABASE_SERVICE_ROLE_KEY || "TODO: Your Supabase Key"

const supabase = createClient(
   supabase_url,
   supabase_key, {
      db: {
         schema: "next_auth"
      }
   }
 )
export default supabase;