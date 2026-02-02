import React from "react";

interface Feature {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface FeatureGridProps {
    title: string;
    subtitle?: string;
    features: Feature[];
    id?: string;
}

export default function FeatureGrid({ title, subtitle, features, id = "features" }: FeatureGridProps) {
    return (
        <section id={id} className="py-20 sm:py-24 bg-gray-50">
            <div className="container-custom">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-4 text-lg text-gray-600">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.title} className="relative pl-16 group">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                                    {feature.icon ? (
                                        <span className="text-primary group-hover:text-white transition-colors duration-300">{feature.icon}</span>
                                    ) : (
                                        <svg className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    )}
                                </div>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    {feature.title}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
