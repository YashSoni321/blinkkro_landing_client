import React from 'react';
import { providers } from '@/data/providers';
import ProviderCard from '@/components/Providers/ProviderCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Top Service Providers | Blinkkro',
    description: 'Find the best service providers for electronics, education, and ecommerce in your area.',
};

const ProvidersPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Best Service Providers</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Connect with top-rated businesses in your city. From electronics to education, we have got you covered.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-12">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="md:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {providers.map((provider) => (
                        <ProviderCard key={provider.id} provider={provider} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProvidersPage;
