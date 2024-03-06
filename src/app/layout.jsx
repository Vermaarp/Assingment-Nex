import "./globals.css";
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer";



export const metadata = {
  title: "Assignment",
  description: "Assignment Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
