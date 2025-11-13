import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title:
    "Terms and Conditions - KartSquare Service Booking Policies | KartSquare",
  description:
    "Read the official Terms and Conditions for using KartSquare. Understand your rights and responsibilities when booking home services, events, and professionals in India.",
  keywords: [
    "KartSquare terms and conditions",
    "service booking policy",
    "user agreement India",
    "payment terms",
    "cancellation policy",
    "KartSquare legal",
  ],
};

export default async function TermsPage() {
  const t = await getTranslations("termsPage");

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <div className="container mx-auto max-w-4xl px-4 py-16 mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark underline dark:text-white mb-8">
          {t("title")}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
            {t("lastUpdated")}
          </p>

          {/* 1. Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("acceptance.heading")}
            </h2>
            <p className="mb-4">
              {t.rich("acceptance.paragraph1", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>{t("acceptance.paragraph2")}</p>
          </section>

          {/* 2. Service Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("serviceDescription.heading")}
            </h2>
            <p className="mb-4">{t("serviceDescription.paragraph1")}</p>
            <p>{t("serviceDescription.paragraph2")}</p>
          </section>

          {/* 3. User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("userResponsibilities.heading")}
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>{t("userResponsibilities.item1")}</li>
              <li>{t("userResponsibilities.item2")}</li>
              <li>{t("userResponsibilities.item3")}</li>
              <li>{t("userResponsibilities.item4")}</li>
              <li>{t("userResponsibilities.item5")}</li>
            </ul>
          </section>

          {/* 4. Service Provider Obligations */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("providerObligations.heading")}
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>{t("providerObligations.item1")}</li>
              <li>{t("providerObligations.item2")}</li>
              <li>{t("providerObligations.item3")}</li>
              <li>{t("providerObligations.item4")}</li>
            </ul>
          </section>

          {/* 5. Event Booking Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("bookingPolicy.heading")}
            </h2>
            <p className="mb-4">{t("bookingPolicy.paragraph1")}</p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t("bookingPolicy.item1")}</li>
              <li>{t("bookingPolicy.item2")}</li>
              <li>{t("bookingPolicy.item3")}</li>
              <li>{t("bookingPolicy.item4")}</li>
            </ul>
          </section>

          {/* 6. Payment and Refunds */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("paymentPolicy.heading")}
            </h2>
            <p className="mb-4">{t("paymentPolicy.paragraph1")}</p>
            <p className="mb-4">{t("paymentPolicy.paragraph2")}</p>
            <p>{t("paymentPolicy.paragraph3")}</p>
          </section>

          {/* 7. Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("intellectualProperty.heading")}
            </h2>
            <p>{t("intellectualProperty.paragraph1")}</p>
          </section>

          {/* 8. Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("privacy.heading")}
            </h2>
            <p className="mb-4">
              {t.rich("privacy.paragraph1", {
                link: (chunks) => (
                  <Link href="/privacy" className="text-primary underline">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <p>{t("privacy.paragraph2")}</p>
          </section>

          {/* 9. Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("liability.heading")}
            </h2>
            <p className="mb-4">{t("liability.paragraph1")}</p>
            <p>{t("liability.paragraph2")}</p>
          </section>

          {/* 10. Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("termination.heading")}
            </h2>
            <p>{t("termination.paragraph1")}</p>
          </section>

          {/* 11. Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("governingLaw.heading")}
            </h2>
            <p>{t("governingLaw.paragraph1")}</p>
          </section>

          {/* 12. Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("changes.heading")}
            </h2>
            <p>{t("changes.paragraph1")}</p>
          </section>

          {/* 13. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              {t("contact.heading")}
            </h2>
            <p>
              {t.rich("contact.paragraph1", {
                email: (chunks) => (
                  <a
                    href={`mailto:${chunks}`}
                    className="text-primary underline"
                  >
                    {chunks}
                  </a>
                ),
                contactLink: (chunks) => (
                  <Link href="/contactus" className="text-primary underline">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
