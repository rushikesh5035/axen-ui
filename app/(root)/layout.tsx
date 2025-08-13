import Header from "@/components/landing/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Axen UI = Open Source Components",
    default: "Axen UI",
  },
};

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="relative w-full pt-0 md:pt-0">{children}</main>
      <Footer />
    </>
  );
};

export default Homelayout;
