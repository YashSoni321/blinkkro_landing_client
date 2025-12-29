"use client";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
    getCountries,
    getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import ThankYouModel from "@/components/waitList/thankYouModel";
import { useTranslations } from "next-intl";

type Country = {
    code: string;
    name: string;
    callingCode: string;
    flag: string;
};

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: "waitlist" | "provider";
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({
    isOpen,
    onClose,
    mode,
}) => {
    const t = useTranslations("waitlistPage"); // Using waitlistPage translations
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

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: "",
                email: "",
                country_code: "+91",
                phone: "",
                message: "",
            });
            setIsThankYouOpen(false);
        }
    }, [isOpen]);

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
            // NOTE: Using the same API endpoint for both modes for now as requested
            const response = await axios.post(
                "https://api.kartsquare.com/api/v1/waitlist/join",
                formData
            );
            if (response && response?.data && response?.data?.status === "success") {
                toast.success(t("notifications.success"));
                setIsThankYouOpen(true);
            }
        } catch (error: unknown) {
            toast.error(t("notifications.error"));
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const selectedCountry = countries.find(
        (country) => country.callingCode === formData.country_code
    );

    if (!isOpen) return null;

    const modalTitle =
        mode === "provider"
            ? "Join as a Provider" // You might want to add a translation key for this later
            : t("hero.title");

    const modalDescription =
        mode === "provider"
            ? "Start earning with KartSquare."
            : t("hero.description");


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity duration-300">
            <div
                className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
                >
                    <Icon icon="ph:x" width={24} height={24} />
                </button>

                {isThankYouOpen ? (
                    <div className="p-8">
                        <ThankYouModel onclose={onClose} />
                    </div>
                ) : (
                    <div className="p-6 md:p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {modalTitle}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                {modalDescription}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={t("form.fields.name.placeholder")}
                                    required
                                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent dark:text-white"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={t("form.fields.email.placeholder")}
                                    required
                                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent dark:text-white"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative w-full md:w-1/3">
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full text-left flex items-center justify-between bg-transparent dark:text-white"
                                    >
                                        <span className="flex items-center gap-2">
                                            {selectedCountry ? (
                                                <>
                                                    <span>{selectedCountry.flag}</span>
                                                    <span>{selectedCountry.callingCode}</span>
                                                </>
                                            ) : (
                                                <span>Select</span>
                                            )}
                                        </span>
                                        <Icon
                                            icon={isDropdownOpen ? "ph:caret-up" : "ph:caret-down"}
                                            width={16}
                                            height={16}
                                        />
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 rounded-xl shadow-lg z-50 max-h-60 overflow-hidden">
                                            <div className="p-2">
                                                <input
                                                    type="text"
                                                    placeholder={t("form.countrySelect.searchPlaceholder")}
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline text-sm bg-transparent dark:text-white"
                                                />
                                            </div>
                                            <div className="max-h-40 overflow-y-auto">
                                                {filteredCountries.length > 0 ? (
                                                    filteredCountries.map((country) => (
                                                        <button
                                                            key={country.code}
                                                            type="button"
                                                            onClick={() => handleCountrySelect(country.callingCode)}
                                                            className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 dark:text-white"
                                                        >
                                                            <span>{country.flag}</span>
                                                            <span className="text-sm">{country.name}</span>
                                                            <span className="text-sm text-gray-500 ml-auto">{country.callingCode}</span>
                                                        </button>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-2 text-sm text-gray-500 text-center">
                                                        {t("form.countrySelect.noResults")}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={t("form.fields.phone.placeholder")}
                                    required
                                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full md:w-2/3 bg-transparent dark:text-white"
                                />
                            </div>

                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={t("form.fields.message.placeholder")}
                                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline w-full bg-transparent dark:text-white"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full hover:bg-dark duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting
                                    ? t("form.submit.loading")
                                    : t("form.submit.default")}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
