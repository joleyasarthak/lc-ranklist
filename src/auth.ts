import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { Adapter } from 'next-auth/adapters';
// import { FirestoreAdapter } from "@auth/firebase-adapter"
// import { adminDB } from '@/firebase/firebase-admin';

export const authOptions : NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
      }) as Adapter,
    callbacks: {
        jwt: async ({user,token}) => {
            if(user) token.sub = user.id
            return token;
        },
        session: async ({session, token}) => {
            if(session?.user){
                if(token.sub){
                    session.user.id = token.sub;
                }
            } 
            const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getUsernameStatus?user_id=${session.user.id}`)
            if(res.status === 409){
                const response = await res.json()
                session.user.lc_username = response.data[0].lc_username;
                session.user.org = response.data[0].org;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
} satisfies NextAuthOptions;
