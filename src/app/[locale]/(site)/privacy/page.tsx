import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - How KartSquare Protects Your Data | KartSquare",
  description:
    "Your privacy is our priority. Read KartSquare&apos;s privacy policy to understand how we collect, use, and protect your personal information when you book services.",
  keywords: [
    "KartSquare privacy policy",
    "data protection",
    "user privacy",
    "information security",
    "service booking privacy",
  ],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <div className="container mx-auto max-w-4xl px-4 py-16 mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark underline dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-dark/80 dark:text-white/80">
          <p className="text-sm text-dark/60 dark:text-white/60 mb-8">
            Last updated: 08-10-2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              To provide a seamless service experience, we collect information
              you provide directly to us when you create an account, book a
              service, or contact customer support.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Personal Information:</strong> Your name, email address,
                phone number, and physical address.
              </li>
              <li>
                <strong>Payment Information:</strong> Your payment details are
                processed securely by our third-party payment gateway partners.
                We do not store your full credit card information on our
                servers.
              </li>
              <li>
                <strong>Service & Location Data:</strong> Details of the
                services you book, your booking history, and your location to
                connect you with nearby professionals.
              </li>
              <li>
                <strong>Communications:</strong> Records of your communication
                with service providers through our platform and with our support
                team.
              </li>
              <li>
                <strong>User-Generated Content:</strong> Reviews, ratings, and
                feedback you provide about services and providers.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>To Provide and Improve Our Services:</strong> We use
                your information to operate, maintain, and enhance our platform,
                including personalizing your experience with relevant service
                recommendations.
              </li>
              <li>
                <strong>To Process Payments and Bookings:</strong> To facilitate
                secure transactions and confirm your service appointments.
              </li>
              <li>
                <strong>To Communicate With You:</strong> To send booking
                confirmations, service updates, and respond to your support
                requests.
              </li>
              <li>
                <strong>For Marketing Purposes:</strong> To send you promotional
                materials and special offers, but only with your explicit
                consent. You can opt-out at any time.
              </li>
              <li>
                <strong>To Ensure Platform Safety:</strong> To verify accounts,
                prevent fraud, and enforce our{" "}
                <Link href="/terms" className="text-primary underline">
                  Terms and Conditions
                </Link>
                .
              </li>
              <li>
                <strong>For Analytics and Research:</strong> To understand user
                behavior and improve our service offerings and platform
                functionality.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>With Service Providers:</strong> We share necessary
                details (like your name, address, and service requirements) with
                the professionals you book to enable them to perform the
                service.
              </li>
              <li>
                <strong>With Payment Processors:</strong> To securely process
                your payments for booked services.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may share information if
                required by law, to protect our rights, or in response to a
                valid legal request.
              </li>
              <li>
                <strong>With Your Explicit Consent:</strong> We may share
                information with third parties for other purposes, but only when
                we have your direct permission.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement industry-standard security measures, including
              encryption and access controls, to protect your personal
              information against unauthorized access, alteration, disclosure,
              or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience, remember your preferences, analyze usage patterns, and
              provide personalized content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              6. Your Rights
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Access and Update:</strong> You can access and update
                your personal information through your account settings.
              </li>
              <li>
                <strong>Deletion:</strong> You have the right to request the
                deletion of your account and associated data, subject to legal
                and contractual retention requirements.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt-out of receiving marketing
                communications from us at any time by following the unsubscribe
                link in our emails.
              </li>
              <li>
                <strong>Data Portability:</strong> You can request a copy of
                your personal data in a machine-readable format.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              7. Data Retention
            </h2>
            <p className="mb-4">
              We retain your information for as long as your account is active
              or as needed to provide you with services and comply with our
              legal obligations. You may request deletion of your account at any
              time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="mb-4">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              9. Changes to Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes via email or in-app
              notifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              10. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us through our{" "}
              <Link href="/contactus" className="text-primary underline">
                Contact Page
              </Link>{" "}
              or via customer support.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
