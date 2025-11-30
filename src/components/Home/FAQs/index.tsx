import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const FAQ: React.FC = () => {
  const t = useTranslations("faq");

  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 ">
          {/* Image Section */}
          <div className="lg:mx-0 mx-auto  ">
            <Image
              loading="lazy"
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
            <p className="text-gray-600 dark:text-gray-300 text-base font-semibold flex gap-2">
              <Icon
                icon="mdi:comment-question-outline"
                className="text-2xl text-primary "
              />
              {t("badge")}
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              {t("title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 pr-20 lg:text-xl">
              {t("description")}
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
                    1. {t("questions.easyToUse.question")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("questions.easyToUse.answer")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. {t("questions.safeSecure.question")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("questions.safeSecure.answer")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. {t("questions.provideValue.question")}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("questions.provideValue.answer")}
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
