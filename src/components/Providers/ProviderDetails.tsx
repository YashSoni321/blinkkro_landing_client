import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Provider } from '@/data/providers';
import { MapPin, Phone, Star, ArrowLeft, CheckCircle, Share2, Heart } from 'lucide-react';

interface ProviderDetailsProps {
    provider: Provider;
}

const ProviderDetails: React.FC<ProviderDetailsProps> = ({ provider }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
                href="/providers"
                className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Listings
            </Link>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
                <div className="relative h-64 md:h-80 w-full">
                    <Image
                        src={provider.images[0]}
                        alt={provider.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6 md:p-8 text-white w-full">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
                                        {provider.category}
                                    </span>
                                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{provider.name}</h1>
                                    <div className="flex items-center text-white/90">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>{provider.address}</span>
                                    </div>
                                </div>
                                <div className="hidden md:flex gap-3">
                                    <button className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-colors">
                                        <Share2 className="w-6 h-6 text-white" />
                                    </button>
                                    <button className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-colors">
                                        <Heart className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {provider.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Products & Services
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {provider.products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors flex flex-col bg-gray-50/50"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg text-gray-900">
                                                {product.name}
                                            </h3>
                                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                                {product.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3 flex-grow">
                                            {product.description}
                                        </p>
                                        <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 self-start">
                                            Enquire Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Phone className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Phone</p>
                                        <p className="text-gray-900 font-medium">{provider.contact}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Address</p>
                                        <p className="text-gray-900 font-medium">{provider.address}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 mt-6 rounded-lg transition-colors shadow-lg shadow-blue-600/20">
                                Call Now
                            </button>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-900 text-lg">Rating</h3>
                                <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-lg font-bold">
                                    {provider.rating} <Star className="w-4 h-4 ml-1 fill-current" />
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                                Based on {provider.reviews} verified reviews
                            </p>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div key={star} className="flex items-center text-sm">
                                        <span className="w-3 text-gray-400 font-medium">{star}</span>
                                        <Star className="w-3 h-3 text-gray-300 mx-1" />
                                        <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-yellow-400"
                                                style={{ width: `${star === 5 ? '70%' : star === 4 ? '20%' : '5%'}` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-blue-900 text-sm">Verified Vendor</h4>
                                    <p className="text-blue-700 text-xs mt-1">
                                        The details of this business have been verified by our team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProviderDetails;
