import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 ">
          {/* Image Section */}
          <div className="lg:mx-0 mx-auto  ">
            <Image
              src="/images/hero/girl_hero_section.png"
              alt="faq-image"
              width={600}
              height={600}
              className="object-contain lg:h-[600px] h-[350px]"
              unoptimized={true}
            />
          </div>

          {/* FAQ Content */}
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="mdi:comment-question-outline"
                className="text-2xl text-primary "
              />
              FAQs
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Everything about KartSquare
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
              We believe booking services should be simple, safe, and valuable.
              Here are some frequently asked questions to help you trust and use
              KartSquare with ease.
            </p>

            {/* Accordion */}
            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. Is KartSquare easy to use?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! KartSquare is designed with a simple and intuitive
                    interface. Search, compare, and book services in just a few
                    taps — no confusion, just convenience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. Is KartSquare safe and secure?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We use secure payment gateways, verified service
                    providers, and trusted reviews so you can book with
                    confidence and peace of mind.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. How does KartSquare provide value?
                  </AccordionTrigger>
                  <AccordionContent>
                    KartSquare saves you time and effort by connecting you to
                    trending services instantly. From real-time availability to
                    exclusive offers, we make sure you always get the best deal
                    and experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
