import React from "react";
import { Metadata } from "next";
import {
  Home,
  Wrench,
  Sparkle,
  Car,
  Shield,
  CheckCircle,
  Phone,
  Star, 
  Users, 
  Download, 
} from "lucide-react";
import HeroSub from "@/components/shared/HeroSub";

export const metadata: Metadata = {
  title: "Services - Connect with Verified Local Providers | Kartsquare",
  description:
    "Discover trusted local service providers on Kartsquare. From home cleaning to repairs, beauty services to car wash - all verified and admin-approved.",
  keywords: [
    "local services",
    "verified providers",
    "home services",
    "beauty services",
    "repair services",
    "service marketplace",
    "Kartsquare",
  ],
  openGraph: {
    title: "Services - Connect with Verified Local Providers | Kartsquare",
    description:
      "Discover trusted local service providers on Kartsquare. From home cleaning to repairs, beauty services to car wash - all verified and admin-approved.",
  },
};

const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: Home,
      title: "Home Cleaning",
      description: "Professional house cleaning services",
    },
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Expert plumbing repairs and installations",
    },
    {
      icon: Sparkle,
      title: "Beauty Services",
      description: "Salon and spa services at your doorstep",
    },
    {
      icon: Wrench,
      title: "Appliance Repair",
      description: "Fix your home appliances quickly",
    },
    {
      icon: Car,
      title: "Car Wash",
      description: "Professional car cleaning services",
    },
    {
      icon: Home,
      title: "Home Maintenance",
      description: "General home repair and maintenance",
    },
  ];

  const bookingSteps = [
    {
      step: 1,
      title: "Choose Service",
      description: "Browse and select your needed service",
    },
    {
      step: 2,
      title: "Confirm Booking",
      description: "Set date, time and confirm details",
    },
    {
      step: 3,
      title: "Provider Arrives",
      description: "Verified provider comes to your location",
    },
    {
      step: 4,
      title: "Payment",
      description: "Pay securely after service completion",
    },
  ];

  const providerSteps = [
    {
      step: 1,
      title: "Register",
      description: "Create your provider account",
    },
    {
      step: 2,
      title: "Upload ID Proof",
      description: "Submit verification documents",
    },
    {
      step: 3,
      title: "Admin Verification",
      description: "Wait for admin approval",
    },
    {
      step: 4,
      title: "Add Services",
      description: "List your services and pricing",
    },
    {
      step: 5,
      title: "Get Bookings",
      description: "Start receiving customer bookings",
    },
  ];

  // --- ADDED: Data for new sections ---
  const testimonials = [
    {
      quote:
        "Booking a plumber on Kartsquare was so easy. The provider was verified, professional, and on time. Highly recommend!",
      name: "Sarah K.",
      rating: 5,
    },
    {
      quote:
        "I love that Kartsquare verifies every service. It gives me peace of mind when hiring someone for home cleaning.",
      name: "Mark T.",
      rating: 5,
    },
    {
      quote:
        "As a provider, joining was straightforward. The verification process was clear, and I started getting bookings within a week.",
      name: "David L.",
      rating: 4,
    },
  ];

  const faqData = [
    {
      question: "How do I know the service providers are trustworthy?",
      answer:
        "Your safety is our top priority. Every provider on Kartsquare must pass a mandatory ID verification process. Additionally, every service they list is individually reviewed and approved by our admin team before it's visible to customers.",
    },
    {
      question: "How is payment handled?",
      answer:
        "All payments are handled securely through the Kartsquare app. You pay only after the service is completed to your satisfaction, ensuring a safe transaction for both you and the provider.",
    },
    {
      question: "What if I have an issue with a service?",
      answer:
        "We're here to help. You can contact our 24/7 customer support directly through the app. We'll mediate any issues and work to find a fair resolution.",
    },
    {
      question: "I'm a service provider. How do I get paid?",
      answer:
        "Once you successfully complete a service and the customer confirms, the payment (minus our platform fee) is processed and transferred directly to your linked bank account. You can track all your earnings in the provider dashboard.",
    },
  ];
  // --- END ADDED ---

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <HeroSub
        title={'Connect with Verified Local Service Providers'}
        description={"Kartsquare makes it easy to find trusted professionals for all your service needs. Every provider is ID-verified and admin-approved for your safety."}
        badge={"Services"}
      />
      <section className="py-16 pt bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Kind of Services We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kartsquare connects you with verified local service providers
              across multiple categories. From home maintenance to personal
              care, find the right professional for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Categories of Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How Do I Book a Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How Do I Join Kartsquare?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to grow your service business? Join our network of verified
              providers and start receiving bookings today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            {providerSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400">
                  {step.step}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
          {/* <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Join as a Provider
            </button>
          </div> */}
        </div>
      </section>

      {/* --- ADDED: Customer Testimonials Section --- */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{review.quote}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END ADDED --- */}

      {/* --- UPDATED: Trust & Safety Section (Now "Why Choose Us") --- */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We build trust through transparency and rigorous security. Here's
              how we ensure a safe and reliable experience for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ID-Verified Providers
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All providers must pass an ID verification process before they
                can offer services.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Admin-Approved Services
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every single service is manually reviewed and approved by our
                team to ensure quality and legitimacy.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our dedicated support team is always available to help with any
                questions or issues.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- END UPDATED --- */}

      {/* --- ADDED: FAQ Section --- */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END ADDED --- */}

      {/* --- ADDED: Download App CTA Section --- */}
      {/* <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Started with Kartsquare Today
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Download the app to find and book verified services, or join as a
            provider to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#" // Replace with your App Store link
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </a>
            <a
              href="#" // Replace with your Google Play link
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </a>
          </div>
        </div>
      </section> */}
      {/* --- END ADDED --- */}
    </div>
  );
};

export default ServicesPage;