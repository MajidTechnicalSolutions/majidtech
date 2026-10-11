import localFont from "next/font/local";
import { Toaster } from "sonner";
import "../src/index.css";
import Navbar from "../src/Navbar";
import ScrollToHash from "../src/components/ScrollToHash";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../src/site";

// The brand's mono typeface, self-hosted and preloaded so the hero text paints early.
const modernEra = localFont({
  src: "../src/utils/Fonts/ModernEraMono-Regular.woff2",
  variable: "--font-modern-era",
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | Majid Tech` },
  description: SITE_DESCRIPTION,
  openGraph: { type: "website", siteName: SITE_NAME, url: "/" },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={modernEra.variable}>
      <body>
        <div
          className="bg-black min-h-screen m-0 p-0 font-modernEra"
          style={{ backgroundImage: "url(/images/Pattern.svg)", backgroundRepeat: "no-repeat" }}
        >
          <Toaster
            position="top-right"
            theme="dark"
            richColors
            expand={true}
            duration={4000}
            toastOptions={{
              style: { background: "#1a1a1a", border: "1px solid #FD5A1E", color: "#ffffff" },
              className: "sonner-toast",
            }}
          />
          <main className="App py-6" id="App">
            <ScrollToHash offset={140} />
            <div className="m-auto w-9/12">
              <Navbar />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
