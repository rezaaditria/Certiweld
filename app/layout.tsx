import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col ">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow ">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center pt-16 pb-6    relative">
              <div className="text-2xl md:text-3xl font-bold text-center px-4 relative z-10">
                <span className="block mb-2">Certiweld Pro</span>
                <span className="block text-lg font-medium">
                  Certified Skills. Trusted Results.
                </span>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-2">
                <Link
                  isExternal
                  aria-label="Insta"
                  href={siteConfig.links.insta}
                  className="flex items-center space-x-2"
                >
                  <InstagramIcon className="text-default-500 w-6 h-6 hover:text-default-700 transition-colors" />
                  <span className="text-default-500 hover:text-default-700 transition-colors">
                    @certiweld
                  </span>
                </Link>
              </div>

              <div className="mt-6 text-sm md:text-base text-gray-400 text-center">
                <p>
                  © {new Date().getFullYear()} Certiweld Pro. All rights
                  reserved.
                </p>
                <p> Indonesia</p>
              </div>
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-t from-current to-transparent"></div>
              </div>
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
