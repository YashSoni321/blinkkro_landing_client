import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Provider } from '@/data/providers';
import { MapPin, Phone, Star } from 'lucide-react';

interface ProviderCardProps {
    provider: Provider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
    return (
        <Link href={`/providers/${provider.slug}`} className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={provider.images[0]}
                        alt={provider.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-800 shadow-sm">
                        {provider.category}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {provider.name}
                    </h3>

                    <div className="flex items-center mb-4">
                        <div className="flex items-center bg-green-100 px-2 py-0.5 rounded text-green-800 font-bold text-sm mr-2">
                            <span>{provider.rating}</span>
                            <Star className="w-3 h-3 ml-1 fill-current" />
                        </div>
                        <span className="text-gray-500 text-sm">({provider.reviews} Ratings)</span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm flex-grow">
                        {provider.description}
                    </p>

                    <div className="space-y-2 mt-auto">
                        <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                            <span className="truncate">{provider.address}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                            <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                            <span>{provider.contact}</span>
                        </div>
                    </div>

                    <button className="mt-5 w-full bg-gray-50 hover:bg-blue-50 text-blue-600 font-medium py-2.5 rounded-lg transition-colors border border-blue-100 hover:border-blue-200">
                        View Details
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProviderCard;
