"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/shared/HeroSub";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatCard from "@/app/common/StatCard";

const sliderSettings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CategoriesCard = ({ service }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-3xl dark:hover:shadow-white/20 transition-all duration-300 border border-dark/10 dark:border-white/10 hover:border-primary/50 max-h-[36rem]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div
            className={`bg-gradient-to-br ${service.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon
              icon={service.icon}
              width={24}
              height={24}
              className="text-white"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-dark/60 dark:text-white/60 mb-4 leading-relaxed">
          {service.description}
        </p>
        <div className="space-y-2 mb-4">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Icon
                icon="ph:check"
                width={16}
                height={16}
                className="text-primary flex-shrink-0"
              />
              <span className="text-dark/70 dark:text-white/70">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn More</span>
          <Icon icon="ph:arrow-right" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

const SafetyFeaturesCard = ({ feature }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-3xl dark:hover:shadow-white/20 transition-all duration-300 border border-dark/10 dark:border-white/10 hover:border-primary/50 md:py-16 min-h-[32rem] max-h-[32rem] lg:min-h-full">
      <div
        className={`bg-gradient-to-br ${feature.color} p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <Icon
          icon={feature.icon}
          width={32}
          height={32}
          className="text-white"
        />
      </div>
      <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 text-center">
        {feature.title}
      </h3>
      <p className="text-dark/60 dark:text-white/60 text-center leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const ServicesPage = () => {
  // Service Categories with Images
  const serviceCategories = [
    {
      icon: "ph:broom",
      title: "Home Cleaning",
      description:
        "Professional house cleaning services including deep cleaning, regular maintenance, and specialized cleaning for your home.",
      image: "/images/kartsquare_categories/blinkkaro_home_services-min.jpg",
      color: "from-blue-500 to-blue-600",
      features: [
        "Deep Cleaning",
        "Regular Maintenance",
        "Move-in/out Cleaning",
      ],
    },
    {
      icon: "ph:wrench",
      title: "Plumbing Services",
      description:
        "Expert plumbing repairs, installations, and maintenance by verified professionals available 24/7.",
      image: "/images/kartsquare_categories/blinkkaro_plumber-min.jpg",
      color: "from-green-500 to-green-600",
      features: ["Emergency Repairs", "Installations", "Maintenance"],
    },
    {
      icon: "ph:sparkle",
      title: "Beauty & Salon",
      description:
        "Salon and spa services at your doorstep including haircuts, facials, massages, and beauty treatments.",
      image: "/images/kartsquare_categories/blinkkaro_salon_category-min.jpg",
      color: "from-pink-500 to-pink-600",
      features: ["Hair Services", "Facial & Skincare", "Massage Therapy"],
    },
    {
      icon: "ph:toolbox",
      title: "Home Services",
      description:
        "Comprehensive home maintenance including electrical work, carpentry, painting, and appliance repairs.",
      image: "/images/kartsquare_categories/blinkkaro_homeservices-min.jpg",
      color: "from-orange-500 to-orange-600",
      features: ["Electrical Work", "Carpentry", "Painting"],
    },
    {
      icon: "ph:car",
      title: "Car Wash",
      description:
        "Professional car cleaning services including exterior wash, interior detailing, and premium car care.",
      image: "/images/kartsquare_categories/blinkkaro_home_services_1-min.jpg",
      color: "from-purple-500 to-purple-600",
      features: ["Exterior Wash", "Interior Detailing", "Premium Care"],
    },
    {
      icon: "ph:dumbbell",
      title: "Fitness & Wellness",
      description:
        "Personal trainers, yoga instructors, and wellness coaches available at your home or preferred location.",
      image: "/images/kartsquare_categories/blinkkaro_fitness_category-min.jpg",
      color: "from-indigo-500 to-indigo-600",
      features: ["Personal Training", "Yoga Classes", "Wellness Coaching"],
    },
    {
      icon: "ph:cake",
      title: "Catering Services",
      description:
        "Professional catering for events, parties, and gatherings with customizable menus and expert chefs.",
      image:
        "/images/kartsquare_categories/blinkkaro_catering_services-min.jpg",
      color: "from-red-500 to-red-600",
      features: ["Event Catering", "Custom Menus", "Expert Chefs"],
    },
    {
      icon: "ph:calendar",
      title: "Event Planning",
      description:
        "Complete event planning services for weddings, birthdays, corporate events, and special occasions.",
      image: "/images/kartsquare_categories/blinkkaro_events_category-min.jpg",
      color: "from-teal-500 to-teal-600",
      features: ["Wedding Planning", "Corporate Events", "Special Occasions"],
    },
  ];

  const bookingSteps = [
    {
      step: 1,
      icon: "ph:magnifying-glass",
      title: "Browse & Select Service",
      description:
        "Explore our wide range of verified services. Filter by category, location, and ratings to find the perfect service provider for your needs.",
      details:
        "Search through thousands of verified service providers, read reviews, and compare prices before making your selection.",
    },
    {
      step: 2,
      icon: "ph:calendar-check",
      title: "Book Your Appointment",
      description:
        "Choose your preferred date and time. Our flexible scheduling system allows you to book services that fit your schedule perfectly.",
      details:
        "Select from available time slots, add special instructions, and confirm your booking with just a few clicks.",
    },
    {
      step: 3,
      icon: "ph:user-check",
      title: "Service Provider Arrives",
      description:
        "Your verified service provider will arrive at the scheduled time. All providers are ID-verified and background-checked for your safety.",
      details:
        "Track your service provider's arrival in real-time, communicate directly through the app, and ensure everything meets your expectations.",
    },
    {
      step: 4,
      icon: "ph:credit-card",
      title: "Pay Securely After Service",
      description:
        "Review the completed work and pay securely through our platform. Payment is only processed after you confirm satisfaction with the service.",
      details:
        "Multiple payment options available including UPI, cards, and digital wallets. All transactions are secure and protected.",
    },
  ];

  const providerSteps = [
    {
      step: 1,
      icon: "ph:user-plus",
      title: "Create Your Account",
      description:
        "Sign up as a service provider with your basic information. The registration process is quick and straightforward.",
      details:
        "Provide your contact details, service area, and basic business information to get started.",
    },
    {
      step: 2,
      icon: "ph:identification-card",
      title: "Complete ID Verification",
      description:
        "Upload your government-issued ID and business documents. Our verification process ensures trust and safety for all users.",
      details:
        "Submit Aadhaar, PAN, or other valid ID proof along with any relevant business licenses or certifications.",
    },
    {
      step: 3,
      icon: "ph:shield-check",
      title: "Admin Review & Approval",
      description:
        "Our team reviews your documents and profile. Once approved, you'll receive access to the provider dashboard.",
      details:
        "Verification typically takes 24-48 hours. You'll be notified via email and SMS once your account is approved.",
    },
    {
      step: 4,
      icon: "ph:plus-circle",
      title: "Add Your Services",
      description:
        "Create detailed service listings with pricing, availability, and service descriptions. Add photos to showcase your work.",
      details:
        "Set your service rates, define service areas, upload portfolio images, and specify your availability schedule.",
    },
    {
      step: 5,
      icon: "ph:calendar-star",
      title: "Start Receiving Bookings",
      description:
        "Once your services are live, customers can book your services. Manage all bookings through your provider dashboard.",
      details:
        "Receive instant notifications for new bookings, manage your schedule, and build your reputation with customer reviews.",
    },
  ];

  const safetyFeatures = [
    {
      icon: "ph:shield-check",
      title: "ID-Verified Providers",
      description:
        "Every service provider on Kartsquare undergoes mandatory ID verification. We verify government-issued identification documents to ensure authenticity and build trust.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "ph:check-circle",
      title: "Admin-Approved Services",
      description:
        "All service listings are manually reviewed and approved by our admin team before going live. We ensure quality, legitimacy, and accurate pricing for every service.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "ph:headset",
      title: "24/7 Customer Support",
      description:
        "Our dedicated customer support team is available round the clock to assist with bookings, resolve issues, and answer any questions you may have.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "ph:lock",
      title: "Secure Payments",
      description:
        "All payments are processed through secure, encrypted channels. Your financial information is protected, and payments are only processed after service completion.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "ph:star",
      title: "Rating & Review System",
      description:
        "Transparent rating and review system helps you make informed decisions. Read authentic customer feedback before booking any service.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: "ph:handshake",
      title: "Dispute Resolution",
      description:
        "Our mediation team helps resolve any issues between customers and providers fairly and efficiently, ensuring satisfaction for all parties.",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <HeroSub
        title={"Connect with Verified Local Service Providers"}
        description={
          "Kartsquare makes it easy to find trusted professionals for all your service needs. Every provider is ID-verified and admin-approved for your safety and peace of mind."
        }
        badge={"Services"}
      />

      {/* What Kind of Services We Offer */}
      <section className="relative overflow-hidden py-16 bg-white dark:bg-gray-800">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center mb-4">
                <Icon icon="ph:lightning" className="text-2xl text-primary" />
                What We Offer
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
                What Kind of Services We Offer
              </h2>
              <p className="text-lg text-dark/60 dark:text-white/60 mb-6 leading-relaxed">
                Kartsquare connects you with verified local service providers
                across multiple categories. From home maintenance to personal
                care, beauty services to event planning, find the right
                professional for every need.
              </p>
              <p className="text-base text-dark/60 dark:text-white/60 mb-8 leading-relaxed">
                Our platform offers a comprehensive range of services, all
                backed by our rigorous verification process. Every provider is
                ID-verified, and every service is admin-approved to ensure
                quality and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      icon="ph:check-circle"
                      width={20}
                      height={20}
                      className="text-primary"
                    />
                  </div>
                  <span className="text-dark dark:text-white font-medium">
                    Verified Providers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      icon="ph:check-circle"
                      width={20}
                      height={20}
                      className="text-primary"
                    />
                  </div>
                  <span className="text-dark dark:text-white font-medium">
                    24/7 Availability
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      icon="ph:check-circle"
                      width={20}
                      height={20}
                      className="text-primary"
                    />
                  </div>
                  <span className="text-dark dark:text-white font-medium">
                    Transparent Pricing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      icon="ph:check-circle"
                      width={20}
                      height={20}
                      className="text-primary"
                    />
                  </div>
                  <span className="text-dark dark:text-white font-medium">
                    Secure Payments
                  </span>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/kartsquare_categories/Blinkkaro_hero.jpg"
                  alt="Kartsquare Services"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <div className="h-12 w-12 bg-green-400/20 rounded-full flex items-center justify-center animate-pulse">
                      <Icon
                        icon="ph:check-circle-fill"
                        width={20}
                        height={20}
                        className="text-green-500"
                      />
                    </div>
                    Your Trusted Service Marketplace
                  </h3>
                  <p className="text-white/90 ml-16">
                    Connect with verified professionals for all your service
                    needs
                  </p>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                <Icon
                  icon="ph:star-fill"
                  width={24}
                  height={24}
                  className="text-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories of Services */}
      <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
        <div className="absolute left-0 top-0">
          <Image
            src="/images/categories/Vector.svg"
            alt="vector"
            width={800}
            height={1050}
            className="dark:hidden opacity-30"
            unoptimized={true}
          />
          <Image
            src="/images/categories/Vector-dark.svg"
            alt="vector"
            width={800}
            height={1050}
            className="hidden dark:block opacity-30"
            unoptimized={true}
          />
        </div>
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon icon="ph:grid-four" className="text-2xl text-primary" />
              Service Categories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              Categories of Services
            </h2>
            <p className="text-dark/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of verified service categories.
              Each category features professional, ID-verified providers ready
              to serve you.
            </p>
          </div>
          <div className="lg:hidden">
            <Slider {...sliderSettings}>
              {serviceCategories.map((service, index) => (
                <div key={index} className="px-3">
                  <CategoriesCard service={service} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
            {serviceCategories.map((service, index) => (
              <CategoriesCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How Do I Book a Service */}
      <section className="relative overflow-hidden py-16 bg-white dark:bg-gray-800">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon
                icon="ph:calendar-check-fill"
                className="text-2xl text-primary"
              />
              Booking Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              How Do I Book a Service?
            </h2>
            <p className="text-dark/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
              Booking a service on Kartsquare is simple, fast, and secure.
              Follow these easy steps to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon
                      icon={step.icon}
                      width={32}
                      height={32}
                      className="text-white"
                    />
                  </div>
                  <div className="absolute -top-2 lg:-right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-dark/60 dark:text-white/60 mb-3">
                  {step.description}
                </p>
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
                  <p className="text-sm font-medium text-dark/70 dark:text-white/70 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Do I Join Kartsquare */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon icon="ph:rocket-launch" className="text-2xl text-primary" />
              Join as Provider
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              How Do I Join Kartsquare?
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
              Ready to grow your service business? Join our network of verified
              providers and start receiving bookings today. Our simple
              onboarding process gets you started in no time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {providerSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:scale-110">
                    <Icon icon={step.icon} width={24} height={24} />
                  </div>
                  <div className="absolute -top-2 lg:-right-2 right-2 bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className=" text-dark/60 dark:text-white/60 mb-2">
                  {step.description}
                </p>
                <div className="mt-3 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg text-left">
                  <p className="text-sm font-medium text-dark/70 dark:text-white/70 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300 shadow-lg">
              Start Your Provider Journey
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="text-center mb-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
              <Icon
                icon="ph:shield-check-fill"
                className="text-2xl text-primary"
              />
              Safety & Trust
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
              Trust & Safety
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              Your safety and security are our top priorities. We've built
              multiple layers of protection and verification to ensure a safe,
              reliable experience for everyone on our platform.
            </p>
          </div>

          <div className="lg:hidden">
            <Slider {...sliderSettings}>
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="px-3">
                  <SafetyFeaturesCard  feature={feature} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {safetyFeatures.map((feature, index) => (
              <SafetyFeaturesCard key={index} feature={feature} />
            ))}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 lg:py-16 py-6">
            <StatCard number="100%" label=" ID Verified Providers" />
            <StatCard number="24/7" label="24/7 Customer Support" />
            <StatCard number="100%" label="Secure Payments" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
