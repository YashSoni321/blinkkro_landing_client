import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events - Kartsquare Community & Service Events | Join Us",
  description:
    "Stay updated with kartsquare's upcoming events, workshops, and community gatherings. Connect with service providers and fellow customers across India.",
  keywords: [
    "Kartsquare events",
    "service events",
    "community gatherings",
    "workshops",
    "networking events",
    "upcoming events",
  ],
  openGraph: {
    title: "Upcoming Events - Kartsquare Community & Service Events",
    description:
      "Join kartsquare's exciting events that inspire, connect, and energize your lifestyle journey. Stay tuned for upcoming community events.",
    url: "https://kartsquare.com/events",
  },
  alternates: {
    canonical: "https://kartsquare.com/events",
  },
};

const Events = () => {
  return (
    <>
      <HeroSub
        title="Exciting Events Ahead!"
        description="Stay tuned for kartsquare's upcoming events that inspire, connect, and energize your lifestyle journey."
        badge="Events"
      />

      <section className="flex flex-col items-center justify-center  text-center">
        <div className="">
          <button className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/80 transition">
            Notify Me
          </button>
        </div>
      </section>
    </>
  );
};

export default Events;
