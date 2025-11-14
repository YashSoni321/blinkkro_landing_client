import React, { FC } from "react";
import { Icon } from "@iconify/react/dist/iconify.js"

interface HeroSubProps {
    title: string;
    description: string;
    badge: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, description, badge }) => {

    return (
        <>
            <section className="text-center bg-cover lg:!pt-40 !pt-20 pb-20 relative overflow-x-hidden" >
                <div className='flex gap-2.5 mb-5 items-center justify-center'>
                    <span>
                        <Icon
                            icon={'ph:house-simple-fill'}
                            width={20}
                            height={20}
                            className='text-primary'
                        />
                    </span>
                    <p className='text-base font-semibold text-gray-600 dark:text-gray-300'>
                        {badge}
                    </p>
                </div>
                <h2 className="text-dark text-3xl md:text-4xl lg:text-5xl relative font-bold dark:text-white " >{title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-normal w-full mx-auto mt-3">
                    {description}
                </p>
            </section>
        </>
    );
};

export default HeroSub;