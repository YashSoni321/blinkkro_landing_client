"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import ThankYouModel from "@/components/waitList/thankYouModel";

type Country = {
  code: string;
  name: string;
  callingCode: string;
  flag: string;
};

export default function JoinWaitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country_code: "+91",
    phone: "",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const countries: Country[] = getCountries().map((country) => ({
    code: country,
    name: en[country as keyof typeof en] || country,
    callingCode: `+${getCountryCallingCode(country)}`,
    flag: String.fromCodePoint(
      ...country.split("").map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
    ),
  }));

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.callingCode.includes(searchTerm)
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountrySelect = (callingCode: string) => {
    setFormData({ ...formData, country_code: callingCode });
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://72.60.201.14/api/v1/waitlist/join",
        formData
      );
      console.log("Response:", response);
      if (response && response?.data && response?.data?.status === "success") {
        console.log("toast egenrated successfully");
        toast.success("Successfully joined the waitlist!");
        setFormData({
          name: "",
          email: "",
          country_code: "+91",
          phone: "",
          message: "",
        });
        setIsThankYouOpen(true);
      }
    } catch (error: unknown) {
      toast.error("Failed to join waitlist. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = countries.find(
    (country) => country.callingCode === formData.country_code
  );

  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div className="mb-16">
        <div className="flex gap-2.5 items-center justify-center mb-3">
          <span>
            <Icon
              icon={"ph:hourglass-simple-bold"}
              width={20}
              height={20}
              className="text-primary"
            />
          </span>
          <p className="text-base font-semibold text-badge dark:text-white/90">
            Join the Waitlist
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
            Be the First to Experience BlinkKaro
          </h3>
          <p className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6">
            Exciting things are on the way! Sign up now to join our exclusive
            waitlist and be the first to try BlinkKaro when we launch. Early
            access, exclusive updates, and special perks await our first users.
          </p>
        </div>
      </div>

      {/* form */}
      <div className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="relative w-fit">
            <Image
              src={"/images/waitlist/waitlist.png"}
              alt="waitlist illustration"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full"
              unoptimized={true}
            />

            <div className="absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2">
              <h5 className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white">
                Early Access
              </h5>
              <p className="text-sm xs:text-base mobile:text-xm font-normal text-white/80">
                Reserve your spot and get exclusive early access to BlinkKaro’s
                upcoming app before anyone else.
              </p>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white">
              <div className="flex items-center gap-4">
                <Icon icon={"ph:gift"} width={32} height={32} />
                <p className="text-sm xs:text-base mobile:text-xm font-normal">
                  Special perks for early members
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Icon icon={"ph:bell-simple"} width={32} height={32} />
                <p className="text-sm xs:text-base mobile:text-xm font-normal">
                  Get notified at launch
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1/2">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="name"
                    placeholder="Name*"
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    placeholder="Email address*"
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full text-left flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        {selectedCountry && (
                          <>
                            <span>{selectedCountry.flag}</span>
                            <span>{selectedCountry.callingCode}</span>
                          </>
                        )}
                      </span>
                      <Icon
                        icon={isDropdownOpen ? "ph:caret-up" : "ph:caret-down"}
                        width={16}
                        height={16}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 rounded-2xl shadow-lg z-50 max-h-60 overflow-hidden">
                        <div className="p-3">
                          <input
                            type="text"
                            placeholder="Search country or code..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline text-sm"
                          />
                        </div>
                        <div className="max-h-40 overflow-y-auto">
                          {filteredCountries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() =>
                                handleCountrySelect(country.callingCode)
                              }
                              className="w-full px-6 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
                            >
                              <span>{country.flag}</span>
                              <span className="text-sm">{country.name}</span>
                              <span className="text-sm text-gray-500 ml-auto">
                                {country.callingCode}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    autoComplete="tel"
                    placeholder="Phone Number*"
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                  />
                </div>
                <textarea
                  rows={6}
                  cols={50}
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're excited to join BlinkKaro..."
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* thank you model */}
      {isThankYouOpen && (
        <ThankYouModel onclose={() => setIsThankYouOpen(false)} />
      )}
    </div>
  );
}
