import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}