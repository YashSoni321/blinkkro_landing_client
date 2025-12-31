import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import StatCard from "@/app/common/StatCard";

export const metadata: Metadata = {
  title:
    "KartSquare About Us Page - How 3 Friends Built India's Most Loved Service Platform | Our Story",
  description:
    "From a midnight plumbing crisis to building KartSquare - discover the inspiring journey of 3 friends who solved India's biggest service booking problem. Join 50K+ happy customers today!",
  keywords: [
    "KartSquare founders story",
    "startup journey India",
    "service booking revolution",
    "trusted home services",
    "Indian startup success",
    "service platform founders",
    "KartSquare mission vision",
  ],
  openGraph: {
    title:
      "KartSquare About Us Page - How 3 Friends Built India's Most Loved Service Platform",
    description:
      "From a midnight crisis to serving 50K+ customers - the inspiring KartSquare story. Meet the founders who revolutionized how India books services.",
    url: "https://kartsquare.com/aboutus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The KartSquare Story - 3 Friends, 1 Mission",
    description:
      "How a midnight plumbing crisis led to India's most trusted service platform.",
  },
  alternates: {
    canonical: "https://kartsquare.com/aboutus",
  },
};

export default async function AboutUs() {
  const t = await getTranslations("aboutPage");

  return (
    <>
      <HeroSub
        title={t("hero.title")}
        description={t("hero.description")}
        badge={t("hero.badge")}
      />

      {/* The Origin Story */}
      <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl opacity-20">
                💡
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">
                {t("originStory.title")}
              </h2>
              <p className=" font-semibold text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("originStory.crisisText")}
              </p>
            </div>
          </div>

          <div>
            <div className="flex gap-2.5 items-center mb-6">
              <Icon
                icon="ph:lightbulb"
                width={24}
                height={24}
                className="text-primary"
              />
              <p className="text-base font-semibold text-primary">
                {t("originStory.revelation")}
              </p>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-6">
              &ldquo;{t("originStory.mainQuote")}&rdquo;
            </h3>

            <p className="text-lg ttext-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t("originStory.storyPart1")}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              <strong>&ldquo;{t("originStory.storyPart2")}&rdquo;</strong>
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-dark dark:text-white font-medium italic">
                &ldquo;{t("originStory.founderQuote")}&rdquo;
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {t("originStory.founderName")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-4">
              {t("journey.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("journey.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <JourneyCard
              icon="ph:rocket-launch"
              title={t("journey.cards.garageDays.title")}
              description={t("journey.cards.garageDays.description")}
              stat={t("journey.cards.garageDays.stat")}
            />
            <JourneyCard
              icon="ph:users-three"
              title={t("journey.cards.firstCustomers.title")}
              description={t("journey.cards.firstCustomers.description")}
              stat={t("journey.cards.firstCustomers.stat")}
            />
            <JourneyCard
              icon="ph:chart-line-up"
              title={t("journey.cards.growingImpact.title")}
              description={t("journey.cards.growingImpact.description")}
              stat={t("journey.cards.growingImpact.stat")}
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-4">
            {t("mission.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("mission.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-16">
          <ValueCard
            icon="ph:heart"
            title={t("mission.values.customerFirst.title")}
            description={t("mission.values.customerFirst.description")}
          />
          <ValueCard
            icon="ph:handshake"
            title={t("mission.values.trust.title")}
            description={t("mission.values.trust.description")}
          />
          <ValueCard
            icon="ph:lightning"
            title={t("mission.values.speed.title")}
            description={t("mission.values.speed.description")}
          />
          <ValueCard
            icon="ph:users"
            title={t("mission.values.empowering.title")}
            description={t("mission.values.empowering.description")}
          />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-4">
              {t("team.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("team.subtitle")}
            </p>
          </div>

          {/* Founders Row */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-dark dark:text-white mb-8">
              <span className="text-primary">{t("team.founders")}</span>
            </h3>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FounderCard
                nickName={t("team.members.yash.nickname")}
                img="/images/team/yashimg.jpg"
                name={t("team.members.yash.name")}
                role={t("team.members.yash.role")}
                story={t("team.members.yash.story")}
                superpower={t("team.members.yash.superpower")}
                socials={["ph:linkedin-logo-bold", "ph:instagram-logo-bold"]}
              />
              <FounderCard
                img="/images/team/gaurang_dp.jpeg"
                nickName={t("team.members.gaurang.nickname")}
                name={t("team.members.gaurang.name")}
                role={t("team.members.gaurang.role")}
                story={t("team.members.gaurang.story")}
                superpower={t("team.members.gaurang.superpower")}
                socials={["ph:linkedin-logo-bold", "ph:github-logo-bold"]}
              />
              <FounderCard
                img="/images/team/pratham_dp.png"
                nickName={t("team.members.pratham.nickname")}
                name={t("team.members.pratham.name")}
                role={t("team.members.pratham.role")}
                story={t("team.members.pratham.story")}
                superpower={t("team.members.pratham.superpower")}
              />
            </div>
          </div>

          {/* Connecting Lines */}

          {/* Team Members Row */}
          <div>
            <h3 className="text-2xl font-bold text-center text-dark dark:text-white mb-8">
              <span className="text-primary">{t("team.coreTeam")}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <TeamCard
                img="/images/team/rahul_dp.png"
                name={t("team.members.rahul.name")}
                role={t("team.members.rahul.role")}
                bio={t("team.members.rahul.bio")}
                specialty={t("team.members.rahul.specialty")}
                socials={["ph:linkedin-logo-bold", "ph:github-logo-bold"]}
              />

              <TeamCard
                img="/images/team/bhinsar_dp.jpeg"
                name={t("team.members.bhinsar.name")}
                role={t("team.members.bhinsar.role")}
                bio={t("team.members.bhinsar.bio")}
                specialty={t("team.members.bhinsar.specialty")}
                socials={["ph:linkedin-logo-bold", "ph:github-logo-bold"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Group Section */}
      <section className="bg-white dark:bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative h-96 w-full lg:h-[32rem]">
            <Image
              loading="lazy"
              src="/images/team/team.JPG"
              alt={t("groupSection.imageAlt")}
              fill
              className="rounded-2xl bg-gray-50 object-cover shadow-xl"
            />
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t.rich("groupSection.title", {
                span: (chunks) => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </h2>
            {/* CHANGED: Hardcoded description */}
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t("groupSection.description1")}
            </p>
            {/* CHANGED: Hardcoded description */}
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t("groupSection.description2")}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-white mb-4">
            {t("impact.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("impact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard
            number={t("impact.stats.customers")}
            label={t("impact.stats.customersLabel")}
          />
          <StatCard
            number={t("impact.stats.providers")}
            label={t("impact.stats.providersLabel")}
          />
          <StatCard
            number={t("impact.stats.cities")}
            label={t("impact.stats.citiesLabel")}
          />
          <StatCard
            number={t("impact.stats.rating")}
            label={t("impact.stats.ratingLabel")}
          />
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-dark py-16">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="md:text-xl sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition-colors"
            >
              {t("cta.customerButton")}
            </Link>
            <Link
              href="/contactus"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-dark transition-all"
            >
              {t("cta.providerButton")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------- Reusable Components ----------------- */
const JourneyCard = ({
  icon,
  title,
  description,
  stat,
}: {
  icon: string;
  title: string;
  description: string;
  stat: string;
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      <Icon icon={icon} className="text-2xl text-primary" />
    </div>
    <h3 className="text-xl font-bold text-dark dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
      {description}
    </p>
    <div className="text-2xl font-bold text-primary">{stat}</div>
  </div>
);

const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="text-center p-6">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon icon={icon} className="text-3xl text-primary" />
    </div>
    <h3 className="text-xl font-bold text-dark dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

const FounderCard = ({
  img,
  name,
  nickName,
  role,
  story,
  superpower,
}: {
  img: string;
  name: string;
  nickName: string;
  role: string;
  story: string;
  superpower: string;
  socials?: string[];
}) => (
  <div className="group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-gray-200 dark:border-gray-700">
    {/* Floating Badge */}
    {nickName && (
      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
        {nickName}
      </div>
    )}

    {/* Profile Image with Glow Effect */}
    <div className="relative mb-6">
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl group-hover:ring-primary/60 transition-all duration-300">
        <Image
          loading="lazy"
          src={img}
          alt={name}
          width={160}
          height={160}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Name & Role */}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
        {name}
      </h3>
      <p className="text-primary font-semibold text-lg">{role}</p>
    </div>

    {/* Story */}
    {story && (
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
        {story}
      </p>
    )}

    {/* Superpower Box */}
    {superpower && (
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-4 mb-6 border-l-4 border-primary">
        <p className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
          <Icon icon="mdi:lightning-bolt" className="w-4 h-4" />
          Superpower
        </p>
        <p className="text-sm text-dark dark:text-white font-medium">
          {superpower}
        </p>
      </div>
    )}

    {/* Social Links */}
    {/* <div className="flex justify-center gap-4">
      {socials &&
        socials.map((icon, i) => (
          <div
            key={i}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group/social"
          >
            <Icon
              icon={icon}
              className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/social:text-white transition-colors"
            />
          </div>
        ))}
    </div> */}
  </div>
);

const TeamCard = ({
  img,
  name,
  role,
  specialty,
  socials,
  bio,
}: {
  img: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  socials: string[];
}) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20">
      <Image
        loading="lazy"
        src={img}
        alt={name}
        width={128}
        height={128}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-center">
      <h4 className="text-lg font-bold text-dark dark:text-white mb-1">
        {name}
      </h4>
      <p className="text-primary font-medium text-sm mb-1">{role}</p>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
        {specialty}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{bio}</p>
      <div className="flex justify-center gap-2">
        {socials.map((icon, i) => (
          <Icon
            key={i}
            icon={icon}
            width={16}
            height={16}
            className="text-gray-600 dark:text-gray-300 hover:text-primary cursor-pointer transition-colors"
          />
        ))}
      </div>
    </div>
  </div>
);
