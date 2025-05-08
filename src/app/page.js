"use client";

import ChatWidget from "@/components/ChatWidget";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>SoftSell - Buy & Sell Software Licenses</title>
        <meta name="description" content="SoftSell is a platform to buy and sell software licenses easily and securely. Get the best deals on licensed software." />
        <meta name="keywords" content="software, software resale, buy software licenses, sell software licenses, secure transactions" />
        <meta name="author" content="SoftSell Team" />
        </Head>
    <div className="bg-gray-50"> 
      <Hero id="hero" />
      <HowItWorks id="how-it-works" />
      <WhyChooseUs id="why-choose-us" />
      <ContactForm id="contact" />
      <ChatWidget id="get-started" />
    </div>
    </>
  );
}
