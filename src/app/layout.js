import Sidebar from "@/local-components/sidebar";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import NavBar from "@/local-components/navBar";
import { ContextProvider } from "@/utils/context";

export const metadata = {
  title: "Geepay",
  description: "!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-secondary">
        <ContextProvider>
          <main className="flex w-full  bg-bg ">
            <div className="hidden md:flex">
              <Sidebar />
            </div>
            <div className="md:w-[95%] justify-end md:self-end w-full">
              <NavBar />
              <div className="">{children}</div>
            </div>
          </main>
        </ContextProvider>
      </body>
    </html>
  );
}
