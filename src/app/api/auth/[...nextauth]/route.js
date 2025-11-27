// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user }) {
      if (user.email) {
        try {
          const response = await fetch(
            "https://courese-managment-server.vercel.app/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: user.name,
                email: user.email,
                image: user.image,
              }),
            }
          );

          if (response.ok) {
            console.log("User saved to MongoDB via Express");
          } else {
            console.error("Failed to save user");
          }
        } catch (error) {
          console.error("Error in signIn callback:", error);
        }
      }
      return true;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
