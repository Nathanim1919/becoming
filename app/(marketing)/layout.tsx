import React from "react";
import Header from "../components/marketing/Header";
import Footer from "../components/marketing/Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
