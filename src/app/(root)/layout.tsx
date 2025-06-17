import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);

  return (
      <div className={`flex-1 bg-white ${kalam.className}`}>
        {children}
      </div>
    
  );
}
