import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | BlinkKaro",
};

const Events = () => {
  return (
    <>
      <HeroSub
        title="Exciting Events Ahead!"
        description="Stay tuned for BlinkKaro's upcoming events that inspire, connect, and energize your lifestyle journey."
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
