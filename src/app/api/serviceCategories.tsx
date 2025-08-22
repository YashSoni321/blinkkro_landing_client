import { ServiceCategory } from '@/types/serviceCategory'

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Home Services',
    icon: 'ph:house',
    description: 'Cleaning, repairs, maintenance',
    serviceCount: 45
  },
  {
    name: 'Event Planning',
    icon: 'ph:calendar-check',
    description: 'Weddings, parties, corporate events',
    serviceCount: 28
  },
  {
    name: 'Health & Fitness',
    icon: 'ph:heart',
    description: 'Personal training, wellness',
    serviceCount: 32
  },
  {
    name: 'Professional Services',
    icon: 'ph:briefcase',
    description: 'Consulting, legal, accounting',
    serviceCount: 19
  },
  {
    name: 'Beauty & Wellness',
    icon: 'ph:sparkle',
    description: 'Spa, salon, massage therapy',
    serviceCount: 38
  },
  {
    name: 'Tech Support',
    icon: 'ph:laptop',
    description: 'IT support, device repair',
    serviceCount: 24
  }
]