import { ServiceCategory } from "@/types/serviceCategory";
import { useTranslations } from "next-intl";

export const useServiceCategories = (): ServiceCategory[] => {
  const t = useTranslations("serviceCategoriesData");

  const serviceCategories: ServiceCategory[] = [
    {
      name: t("homeServices.name"),
      icon: "ph:house",
      description: t("homeServices.description"),
      serviceCount: +t("homeServices.serviceCount"),
    },
    {
      name: t("eventPlanning.name"),
      icon: "ph:calendar-check",
      description: t("eventPlanning.description"),
      serviceCount: +t("eventPlanning.serviceCount"),
    },
    {
      name: t("healthFitness.name"),
      icon: "ph:heart",
      description: t("healthFitness.description"),
      serviceCount: +t("healthFitness.serviceCount"),
    },
    {
      name: t("professionalServices.name"),
      icon: "ph:briefcase",
      description: t("professionalServices.description"),
      serviceCount: +t("professionalServices.serviceCount"),
    },
    {
      name: t("beautyWellness.name"),
      icon: "ph:sparkle",
      description: t("beautyWellness.description"),
      serviceCount: +t("beautyWellness.serviceCount"),
    },
    {
      name: t("techSupport.name"),
      icon: "ph:laptop",
      description: t("techSupport.description"),
      serviceCount: +t("techSupport.serviceCount"),
    },
  ];

  return serviceCategories;
};
