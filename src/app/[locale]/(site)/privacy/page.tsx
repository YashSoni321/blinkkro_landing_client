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
          Kartsquare Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
            Last updated: October 8, 2025
          </p>
          <p className="mb-8">
            Kartsquare ("we", "our", or "us") is a global service, event
            booking, and social media platform where customers ("Users") can
            book services, purchase products, and interact with Service
            Providers, Organizations, and Influencers. Your privacy is important
            to us. This Privacy Policy explains what information we collect, how
            we use and share it, how we keep it secure, and your rights. We
            follow applicable data protection laws worldwide (for example,
            California's CalOPPA and CCPA, the EU's GDPR, Canada's PIPEDA,
            etc.). In compliance with Google Play and Apple App Store
            requirements, this policy is linked in our app listing and within
            the app itself.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              To operate and improve Kartsquare, we collect information you
              provide directly and some data automatically:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Personal Information:</strong> When you register or
                create a profile, we collect your name, email address, phone
                number, and physical address. Organizations or Service Providers
                may provide additional details (e.g. business name, service
                descriptions).
              </li>
              <li>
                <strong>Payment Information:</strong> We process payments
                securely through third-party payment gateways. We do not store
                your full credit card data on our servers; only transaction
                tokens or confirmations needed to complete your bookings or
                subscriptions.
              </li>
              <li>
                <strong>Service and Booking Data:</strong> We record details of
                your service requests, booked events, purchase history, dates
                and times of bookings, and any preferences you specify.
              </li>
              <li>
                <strong>Location Data:</strong> If you enable location features,
                we collect your device's location (e.g. GPS coordinates) to
                connect you with nearby professionals and events. You can
                disable location services in your device settings at any time.
              </li>
              <li>
                <strong>Camera and Media:</strong> Certain app features may
                require access to your device's camera or photo library (for
                example, to upload a profile picture, capture proof-of-service
                photos, or share images with the community). We only access your
                camera or photos with your permission and use the captured
                images/videos solely for the purposes you authorize.
              </li>
              <li>
                <strong>Communications:</strong> Records of messages between you
                and service providers, and any correspondence with our customer
                support team. We may also collect your feedback, reviews,
                ratings, or other content you post on the platform.
              </li>
              <li>
                <strong>Device and Usage Data:</strong> We automatically collect
                technical data about your device and app usage, such as device
                type, operating system, browser type, IP address, mobile
                carrier, crash reports, and usage analytics. We use Google
                Firebase (a Google-provided backend and analytics platform) to
                help with app performance, crash reporting, and usage analytics.
                Firebase may collect device identifiers (like an instance ID or
                anonymous usage identifiers) and diagnostic data.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the collected information for these purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Provide and Improve Services:</strong> Operate and
                maintain Kartsquare, personalize your experience, and recommend
                relevant services and events. We use your location and booking
                history to suggest nearby professionals or upcoming events you
                might be interested in. We analyze usage data (via Firebase
                Analytics) to understand how the app is used and to enhance
                functionality.
              </li>
              <li>
                <strong>Process Payments and Bookings:</strong> Facilitate
                secure transactions, verify purchases or subscriptions, and
                manage booking logistics (sending confirmations, updating
                schedules). Payment details are shared only with payment
                processors for transaction approval.
              </li>
              <li>
                <strong>Communicate with You:</strong> Send booking
                confirmations, reminders, status updates, and technical notices.
                We also respond to your inquiries and support requests via email
                or in-app messaging.
              </li>
              <li>
                <strong>Ensure Platform Safety and Quality:</strong> Verify user
                and provider identities (for example, by checking IDs or
                licenses), detect and prevent fraud, spam, or abusive behavior,
                and enforce our{" "}
                <Link href="/terms" className="text-primary underline">
                  Terms of Service
                </Link>
                . We may monitor communications and actions for compliance and
                safety.
              </li>
              <li>
                <strong>Marketing (with Consent):</strong> With your explicit
                opt-in, we may send you promotional offers, newsletters, or
                updates about new features. You can unsubscribe or opt out of
                marketing communications at any time. We do not use personal
                data for marketing purposes without your permission.
              </li>
              <li>
                <strong>Legal Compliance and Protection:</strong> Comply with
                laws and regulations (e.g. tax or financial reporting
                requirements), respond to lawful requests (such as subpoenas),
                and protect our rights and property. For example, we may use and
                disclose data if required to investigate or defend against legal
                claims.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell your personal data. We may share your information
              only in the following cases:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>With Service Providers and Vendors:</strong> We share
                necessary details with professionals and organizations you book.
                For example, if you request a home service, we give the provider
                your name, contact info, and service address so they can serve
                you. Similarly, when you attend an event or join a group, we
                share relevant info (like your name or contact) with the event
                organizer. We also share data with our technology providers
                (e.g. hosting, SMS/email services, analytics). In particular, we
                use Google Firebase for hosting and analytics; Firebase receives
                certain user data (such as user IDs, device info, and usage
                logs) as permitted by Google's terms. Firebase and other third
                parties are required to protect your data in accordance with
                their own privacy policies.
              </li>
              <li>
                <strong>With Payment Processors:</strong> We share your payment
                details (such as a transaction identifier and amount) with
                trusted payment gateways (Stripe, PayPal, or App Store/Google
                Play billing) solely to process your bookings or subscriptions
                securely. No full credit card number is stored on our servers.
              </li>
              <li>
                <strong>With Law Enforcement or Legal Requests:</strong> We
                disclose personal data if required by law (such as a court
                order, legal process, or government inquiry), or if we believe
                it is necessary to detect, prevent, or address illegal
                activities or protect the rights and safety of Kartsquare, its
                users, or others. For example, we may release information to law
                enforcement in response to a valid subpoena.
              </li>
              <li>
                <strong>With Your Consent:</strong> We will share your
                information with any third party only after obtaining your
                explicit permission (for example, if you choose to link a social
                media account or integrate with another service). We will inform
                you of what data is shared and why, and you can revoke this
                consent at any time.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your
              information. This includes using encryption (SSL/TLS) for data in
              transit and secure servers with access controls to prevent
              unauthorized access, alteration, disclosure, or destruction of
              your data. Access to your personal information is restricted to
              authorized employees, contractors, and agents who need it to
              perform their job. We regularly review our security practices and
              update them as necessary. While no method of transmission or
              storage is 100% secure, we strive to safeguard all personal data.
              In the unlikely event of a data breach that compromises your
              personal data, we will follow applicable breach notification laws
              and notify you and authorities as required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="mb-4">
              Kartsquare uses cookies and similar technologies to operate the
              app, remember your preferences, and understand usage patterns.
              Cookies are small data files placed on your device. We use them to
              recognize your device, keep you logged in, and personalize
              content. We also use analytic cookies and identifiers (for
              example, through Google Firebase Analytics) to measure usage,
              diagnose issues, and improve performance. Most mobile operating
              systems and browsers allow you to disable or clear cookies via
              settings. However, disabling cookies may affect the functionality
              of the app (for example, you might need to log in again each
              time). We do not use cookies for tracking you across unrelated
              apps or for targeted advertising without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">
              Depending on where you live, privacy laws may grant you certain
              rights regarding your personal data. In general, you have the
              following rights:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Access and Correction:</strong> You can access, review,
                and update your personal information (such as your profile or
                booking details) by logging into your account and editing your
                account settings. You may also contact us for copies of data we
                hold about you.
              </li>
              <li>
                <strong>Deletion ("Right to be Forgotten"):</strong> You may
                request deletion of your account and personal data at any time
                (subject to legal or contractual retention requirements). Upon
                your request, we will delete or anonymize your personal data as
                soon as feasible. Note that we may retain certain information
                (like transaction records) to comply with legal obligations. To request account deletion, visit our <Link href="/delete-account" className="text-primary underline font-semibold">Account Deletion Page</Link>.
              </li>
              <li>
                <strong>Opt-Out of Marketing:</strong> You can unsubscribe or
                opt out of marketing emails and promotional messages by
                following the unsubscribe link in our messages or adjusting your
                preferences in the app.
              </li>
              <li>
                <strong>Data Portability:</strong> You may request a
                machine-readable copy of the personal data you provided to us
                (for example, your profile data and booking history). We will
                provide it in a common format (CSV or JSON) where technically
                feasible.
              </li>
              <li>
                <strong>Consent Withdrawal:</strong> You can withdraw any
                consent you have given (for example, for location access or
                camera access) through your device settings. If you revoke
                access (such as disabling location services), features that
                depend on that permission will no longer function (e.g. we
                cannot suggest nearby services).
              </li>
              <li>
                <strong>Complaint and Governing Rights:</strong> If you reside
                in certain jurisdictions (such as the EU or California), you may
                have additional rights (like lodging a complaint with your data
                protection authority, or specific rights under GDPR/CCPA).
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              7. Data Retention
            </h2>
            <p className="mb-4">
              We keep your personal data only as long as necessary to fulfill
              the purposes outlined in this policy, unless a longer retention
              period is required or permitted by law. For example, your booking
              history and purchase receipts may be retained for a period
              required by tax or financial regulations. Once data is no longer
              needed, we delete it in a secure manner. Specifically, if you
              close your Kartsquare account, we will remove or anonymize your
              personal data from our active systems unless we need to retain
              certain information for legal obligations (such as transaction
              records for tax purposes). You can request account deletion at any
              time, and we will follow through as described above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="mb-4">
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from anyone under
              13. If we learn that we have collected data from a child under 13,
              we will promptly delete that information. If you believe a child
              under 13 has provided us personal data, please contact us so we
              can take appropriate actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              9. Changes to Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal requirements. When
              we make significant changes, we will notify you by email, in-app
              message, or by posting a notice on the app. We will also update
              the "Last Updated" date at the top. Your continued use of
              Kartsquare after such changes will constitute your acceptance of
              the revised policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
              10. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests about this
              Privacy Policy or our data practices, please contact us through
              our{" "}
              <Link href="/contactus" className="text-primary underline">
                Contact Page
              </Link>{" "}
              or via support@kartsquare.com. We will do our best to address your
              inquiries promptly.
            </p>
          </section>
          <p>
            {" "}
            Policy or our data practices, please contact us through our{" "}
            <Link href="/contactus" className="text-primary underline">
              Contact Page
            </Link>{" "}
            or via customer support.
          </p>
        </div>
      </div>
    </div>
  );
}
