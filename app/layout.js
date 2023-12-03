import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Travel",
  description: "Travel UI/UX Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
