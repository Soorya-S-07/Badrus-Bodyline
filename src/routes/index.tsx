import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Facility } from "@/components/site/Facility";
import { Hours } from "@/components/site/Hours";
import { Visit } from "@/components/site/Visit";
import { Founder } from "@/components/site/Founder";
import { Footer } from "@/components/site/Footer";

const TITLE = "Badrus Body Line — Premium Gym in Salem, Since 2000";
const DESCRIPTION =
  "Badrus Body Line is Salem's trusted unisex gym & fitness centre on Cherry Road. CrossFit, strength, cardio & personal training with experienced coaches. Rated 4.7★.";

const ldJson = {
  "@context": "https://schema.org",
  "@type": ["HealthClub", "LocalBusiness"],
  name: "Badrus Body Line",
  description: DESCRIPTION,
  foundingDate: "2000",
  telephone: "+91-97860-14148",
  founder: { "@type": "Person", name: "Mr. Badrudeen", jobTitle: "Founder & Fitness Mentor" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "KPR Complex, 1st Floor, Opposite Forest Office, Cherry Road",
    addressLocality: "Salem",
    postalCode: "636007",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "54" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "05:00", closes: "10:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "16:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "05:00", closes: "10:30" },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible Entrance" },
    { "@type": "LocationFeatureSpecification", name: "Well Ventilated" },
    { "@type": "LocationFeatureSpecification", name: "Wide Range of Equipment" },
    { "@type": "LocationFeatureSpecification", name: "Experienced Trainers" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#1f1a17" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(ldJson) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Facility />
        <Founder />
        <Hours />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
