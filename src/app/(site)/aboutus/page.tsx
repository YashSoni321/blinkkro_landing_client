import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Story - How 3 Friends Built India&apos;s Most Loved Service Platform | KartSquare",
  description:
    "From a midnight plumbing crisis to building KartSquare - discover the inspiring journey of 3 friends who solved India&apos;s biggest service booking problem. Join 50K+ happy customers today!",
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
      "Our Story - How 3 Friends Built India&apos;s Most Loved Service Platform",
    description:
      "From a midnight crisis to serving 50K+ customers - the inspiring KartSquare story. Meet the founders who revolutionized how India books services.",
    url: "https://kartsquare.com/aboutus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The KartSquare Story - 3 Friends, 1 Mission",
    description:
      "How a midnight plumbing crisis led to India&apos;s most trusted service platform.",
  },
  alternates: {
    canonical: "https://kartsquare.com/aboutus",
  },
};

export default function AboutUs() {
  return (
    <>
      <HeroSub
        title="The Story Behind Your Favorite Service App"
        description="What started as a midnight crisis became India's most trusted service platform. This is the story of 3 friends who refused to accept that finding reliable help should be this hard."
        badge="Our Story"
      />

      {/* The Origin Story */}
      <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl opacity-20">
                💡
              </div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">
                It Started with a Crisis
              </h3>
              <p className="text-dark/70 dark:text-white/70 leading-relaxed">
                <strong>2 AM, Bangalore.</strong> Yash&apos;s apartment was
                flooding. The pipe had burst, water everywhere, and he
                desperately needed a plumber. After 47 phone calls, 3 hours of
                waiting, and ₹2000 later, he realized something was
                fundamentally broken.
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
                The Midnight Revelation
              </p>
            </div>

            <h2 className="text-4xl sm:text-52 font-bold text-dark dark:text-white mb-6">
              &ldquo;Why Is Finding Help So{" "}
              <span className="text-primary">Damn Hard</span>?&rdquo;
            </h2>

            <p className="text-lg text-dark/70 dark:text-white/70 mb-6 leading-relaxed">
              That night, Yash called his college buddies Ankit and Gaurang.
              They&apos;d all faced the same frustration - unreliable contacts,
              hidden charges, no-shows, and zero accountability.
            </p>

            <p className="text-lg text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
              <strong>
                &ldquo;What if we could fix this for everyone?&rdquo;
              </strong>{" "}
              That question changed everything.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-dark dark:text-white font-medium italic">
                &ldquo;We weren&apos;t trying to build a unicorn. We just wanted
                to solve a problem that affected millions of Indians every
                single day.&rdquo;
              </p>
              <p className="text-sm text-dark/60 dark:text-white/60 mt-2">
                - Yash, Co-Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark dark:text-white mb-4">
              From Idea to <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
              Here&apos;s how three friends with zero funding built something
              that now serves thousands of families across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <JourneyCard
              icon="ph:rocket-launch"
              title="The Garage Days"
              description="6 months of coding in Yash's garage. Living on Maggi and dreams. First prototype ready with 10 local service providers."
              stat="₹0 funding"
            />
            <JourneyCard
              icon="ph:users-three"
              title="First 100 Customers"
              description="Word spread fast. Neighbors became customers, customers became advocates. We were solving a real problem."
              stat="4.9★ rating"
            />
            <JourneyCard
              icon="ph:chart-line-up"
              title="Growing Impact"
              description="Today, we've helped 50,000+ customers find reliable services. From plumbers to party planners, we've got India covered."
              stat="50K+ happy customers"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark dark:text-white mb-4">
            Our <span className="text-primary">Mission</span> & Values
          </h2>
          <p className="text-lg text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
            Everything we do is guided by these core beliefs that keep us
            grounded and focused on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon="ph:heart"
            title="Customer First"
            description="Every decision we make starts with 'How does this help our customers?'"
          />
          <ValueCard
            icon="ph:handshake"
            title="Trust & Transparency"
            description="No hidden fees, no fake reviews, no empty promises. Just honest service."
          />
          <ValueCard
            icon="ph:lightning"
            title="Speed & Simplicity"
            description="Life's complicated enough. We make getting help as simple as ordering food."
          />
          <ValueCard
            icon="ph:users"
            title="Empowering Providers"
            description="We don't just serve customers - we help service providers build better businesses."
          />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark dark:text-white mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-dark/60 dark:text-white/60 max-w-3xl mx-auto">
              From founders to engineers to marketing - the passionate team
              building India&apos;s most trusted service platform.
            </p>
          </div>

          {/* Founders Row */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-dark dark:text-white mb-8">
              <span className="text-primary">Founders</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FounderCard
                nickName="The Visionary"
                img="/images/team/yash_dp.jpeg"
                name="Yash Soni"
                role="Co-Founder & CEO"
                story="The guy whose flooded apartment started it all. Now he's obsessed with making sure no one else has to go through 47 phone calls to find help."
                superpower="Turning problems into opportunities"
                socials={["ph:linkedin-logo-bold", "ph:instagram-logo-bold"]}
              />
              <FounderCard
                nickName="The Builder"
                img="/images/team/gaurang_dp.jpeg"
                name="Gaurang Tyagi"
                role="Co-Founder & CTO"
                story="The tech wizard who built our rock-solid platform. When others see problems, Gaurang sees elegant solutions waiting to be coded."
                superpower="Building scalable tech magic"
                socials={["ph:linkedin-logo-bold", "ph:github-logo-bold"]}
              />
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-primary/30"></div>
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-64 h-px bg-primary/30"></div>
          </div>
          <div className="flex justify-center gap-20 mb-8">
            <div className="w-px h-12 bg-primary/30"></div>
            <div className="w-px h-12 bg-primary/30"></div>
            <div className="w-px h-12 bg-primary/30"></div>
          </div>

          {/* Team Members Row */}
          <div>
            <h3 className="text-2xl font-bold text-center text-dark dark:text-white mb-8">
              <span className="text-primary">Core Team</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <TeamCard
                img="/images/team/ankit_dp.jpeg"
                name="Rahul Chanchalni"
                role="Software Engineer"
                bio="Rahul is a frontend and mobile engineer who loves building intuitive, high-performance apps with a user-first approach."
                specialty="Frontend & Mobile"
                socials={["ph:linkedin-logo-bold", "ph:github-logo-bold"]}
              />

              <TeamCard
                img="/images/team/ankit_dp.jpeg"
                name="Bhinar Jagdish"
                role="Software Engineer"
                bio="Bhinar is a backend and DevOps specialist focused on scalable systems, automation, and reliable infrastructure."
                specialty="Backend & DevOps"
                socials={["ph:linkedin-logo-bold", "ph:github-logo-bold"]}
              />

              <TeamCard
                img="/images/team/ankit_dp.jpeg"
                name="Pratham Mittal"
                role="Head of Marketing"
                bio="Pratham drives growth and brand strategy, blending creativity with data-driven insights to scale impact and engagement."
                specialty="Growth & Brand"
                socials={["ph:linkedin-logo-bold", "ph:twitter-logo-bold"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark dark:text-white mb-4">
            The <span className="text-primary">Impact</span> We&apos;re Making
          </h2>
          <p className="text-lg text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
            Numbers tell a story, but behind each number is a real person whose
            life we&apos;ve made a little bit easier.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="50K+" label="Happy Customers" />
          <StatCard number="2K+" label="Trusted Providers" />
          <StatCard number="15+" label="Cities Covered" />
          <StatCard number="4.8★" label="Average Rating" />
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-dark py-16">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Be Part of Our <span className="text-primary">Story</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a customer looking for reliable services or a
            professional wanting to grow your business, there&apos;s a place for
            you in the KartSquare family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition-colors"
            >
              Join as a Customer
            </Link>
            <Link
              href="/contactus"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-dark transition-all"
            >
              Become a Provider
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
    <p className="text-dark/70 dark:text-white/70 mb-4 leading-relaxed">
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
    <p className="text-dark/70 dark:text-white/70 leading-relaxed">
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
  socials,
}: {
  img: string;
  name: string;
  nickName: string;
  role: string;
  story: string;
  superpower: string;
  socials: string[];
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative mb-6">
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20">
        <Image
          src={img}
          alt={name}
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
        {nickName}
      </span>
    </div>

    <div className="text-center mb-4">
      <h3 className="text-xl font-bold text-dark dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-primary font-medium">{role}</p>
    </div>

    <p className="text-sm text-dark/70 dark:text-white/70 mb-4 leading-relaxed">
      {story}
    </p>

    <div className="bg-primary/5 rounded-lg p-3 mb-4">
      <p className="text-xs font-medium text-primary mb-1">Superpower:</p>
      <p className="text-sm text-dark dark:text-white">{superpower}</p>
    </div>

    <div className="flex justify-center gap-3">
      {socials.map((icon, i) => (
        <Icon
          key={i}
          icon={icon}
          width={20}
          height={20}
          className="text-dark/60 dark:text-white/60 hover:text-primary cursor-pointer transition-colors"
        />
      ))}
    </div>
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
    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-primary/20 mb-4">
      <Image
        src={img}
        alt={name}
        width={80}
        height={80}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-center">
      <h4 className="text-lg font-bold text-dark dark:text-white mb-1">
        {name}
      </h4>
      <p className="text-primary font-medium text-sm mb-1">{role}</p>
      <p className="text-xs text-dark/60 dark:text-white/60 mb-3">
        {specialty}
      </p>
      <p className="text-xs text-dark/60 dark:text-white/60 mb-3">{bio}</p>
      <div className="flex justify-center gap-2">
        {socials.map((icon, i) => (
          <Icon
            key={i}
            icon={icon}
            width={16}
            height={16}
            className="text-dark/60 dark:text-white/60 hover:text-primary cursor-pointer transition-colors"
          />
        ))}
      </div>
    </div>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
    <div className="text-4xl font-bold text-primary mb-2">{number}</div>
    <div className="text-dark/70 dark:text-white/70 font-medium">{label}</div>
  </div>
);
