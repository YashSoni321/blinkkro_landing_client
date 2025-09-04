"use client";
import { Icon } from "@iconify/react";
import { services } from "@/app/api/services";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedServices() {
  const featuredServices = services.slice(2, 5);

  return (
    <section className="bg-gray-50 dark:bg-gray-900/50">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="text-center mb-16">
          <div className="flex gap-2.5 items-center justify-center mb-3">
            <Icon
              icon={"ph:crown"}
              width={20}
              height={20}
              className="text-primary"
            />
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              Featured Services
            </p>
          </div>
          <h2 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3">
            Premium Service Providers
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50">
            Hand-picked professionals delivering exceptional quality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.images[0]?.src || "/images/placeholder.jpg"}
                    alt={service.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 px-3 py-1 rounded-full">
                    <span className="text-lg font-bold text-primary">
                      ${service.price}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon={
                            i < Math.floor(service.rating)
                              ? "ph:star-fill"
                              : "ph:star"
                          }
                          width={16}
                          height={16}
                          className="text-yellow-400"
                        />
                      ))}
                      <span className="text-sm font-medium text-dark dark:text-white ml-2">
                        {service.rating} ({service.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
                    {service.name}
                  </h3>

                  <p className="text-base text-primary font-semibold mb-3">
                    {service.provider}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-dark/70 dark:text-white/70">
                    <div className="flex items-center gap-1">
                      <Icon icon={"ph:clock"} width={16} height={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon={"ph:tag"} width={16} height={16} />
                      <span>{service.category}</span>
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full bg-primary text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-dark transition-colors duration-300 block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/featured-services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Featured Services
            <Icon icon={"ph:arrow-right"} width={20} height={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
