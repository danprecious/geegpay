// "use client"
import Sidebar from "@/local-components/sidebar";
import "./globals.css";
import NavBar from "@/local-components/navBar";
import { ContextProvider } from "@/utils/context";
import BottomNav from "@/local-components/bottomNav";
import Provider from "@/utils/themeProvider";


export const metadata = {
  title: "Geepay",
  description: "!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="text-secondary dark:text-gray-300">
          <ContextProvider>
            <main className="flex w-full bg-bg dark:bg-gray-900">
              <div className="fixed hidden md:flex z-[99999]">
                <Sidebar />
              </div>
              <div className="md:w-[92vw] md:ms-[7vw] lg:w-[95vw] lg:ms-[5vw] w-full mb-16 md:mb-1">
                <NavBar />
                <div className="mt-[9vh]">{children}</div>
              </div>
              <BottomNav />
            </main>
          </ContextProvider>
        </body>
      </Provider>
    </html>
  );
}
