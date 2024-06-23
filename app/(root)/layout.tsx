import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggesIn = {
    firstName: 'Yash', 
    lastName: 'Singh'
  }

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggesIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30}
             alt="logo icon" />
             <div>
              <MobileNav user={loggesIn} />
             </div>
          </div>
        {children}
          
        </div>
    </main>
  );
}
