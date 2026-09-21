import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SubscriptionCalculator } from "@/components/SubscriptionCalculator";
import { HowItWorks } from "@/components/HowItWorks";
import { ReceiptUploader } from "@/components/ReceiptUploader";
import { SubscriptionCategories } from "@/components/SubscriptionCategories";
import { RewardDemo } from "@/components/RewardDemo";
import { HolderBenefit } from "@/components/HolderBenefit";
import { SubsEconomy } from "@/components/SubsEconomy";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SubscriptionCalculator />
        <HowItWorks />
        <ReceiptUploader />
        <SubscriptionCategories />
        <RewardDemo />
        <HolderBenefit />
        <SubsEconomy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
