import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import GridBackground from "@/components/GridBackground";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Oussama Anou - Portfolio",
  description: "Software Engineer | Full-Stack Developer | Rabat, Morocco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} antialiased relative`}
        style={{ fontFamily: 'var(--font-manrope)' }}
      >
        <GridBackground />
        <div className="relative z-10">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
