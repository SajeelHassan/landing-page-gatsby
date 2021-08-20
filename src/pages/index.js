import React from "react"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import HomeInfo from "../components/HomeInfo/HomeInfo"
import KKGroupSection from "../components/KKGroupSection/KKGroupSection"
import OurClients from "../components/OurClients/OurClients"
import ServicesSection from "../components/SevicesCards/ServicesSection"

export default function Home() {
  return <>
    <Hero />
    <KKGroupSection />
    <OurClients />
    <HomeInfo />
    <ServicesSection />
    <Footer />
  </>
}
