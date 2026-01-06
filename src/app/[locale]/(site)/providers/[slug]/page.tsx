import React from 'react';
import { providers } from '@/data/providers';
import ProviderDetails from '@/components/Providers/ProviderDetails';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        slug: string;
        locale: string;
    }>;
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const provider = providers.find((p) => p.slug === slug);

    if (!provider) {
        return {
            title: 'Provider Not Found',
        };
    }

    return {
        title: `${provider.name} | Blinkkro`,
        description: provider.description,
    };
}

const ProviderDetailsPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const provider = providers.find((p) => p.slug === slug);

    if (!provider) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <ProviderDetails provider={provider} />
        </div>
    );
};

export default ProviderDetailsPage;
