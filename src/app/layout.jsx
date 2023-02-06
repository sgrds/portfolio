import "./globals.css";
import { Playfair_Display } from "@next/font/google";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={playfairDisplay.className}>
        <main className="mx-auto max-w-screen-xl bg-secondary text-primary">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
