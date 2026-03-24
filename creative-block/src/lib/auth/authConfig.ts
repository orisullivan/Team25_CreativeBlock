import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { pool } from "@/src/lib/postgres";
import PostgresAdapter from "@auth/pg-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
     trustHost: true,
     adapter: PostgresAdapter(pool),
     secret: process.env.AUTH_SECRET,
     session: {
        strategy: "jwt",  
                maxAge: 30*24*60*60,},
     pages: {signIn : "/login", },
     providers: [
          CredentialsProvider({
    
            name: "Credentials",
    
           credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },
          async authorize(credentials, req) {
              const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                 if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  }),
       Google({
         clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
         allowDangerousEmailAccountLinking: true,
        }),
     ],
    callbacks:
    {
        async jwt({token, user})
        {if (user) {return {...token, id: user.id,};}
        return token},
        async session({session, token}) {
            console.log("session callback", {session, token});
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,

                },
            };
        },
    },
})