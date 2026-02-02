import React from "react";
import { Link } from "react-router-dom";

interface PageHeroProps {
    title: string;
    subtitle: string;
    description?: string;
    badge?: string;
    ctaText?: string;
    ctaLink?: string;
    onCtaClick?: () => void;
    imageSrc?: string;
}

export default function PageHero({
    title,
    subtitle,
    description,
    badge,
    ctaText = "Apply Now",
    ctaLink = "/contact",
    onCtaClick,
    imageSrc,
}: PageHeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-16 sm:pb-24">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

            <div className="container-custom relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    {badge && (
                        <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            {badge}
                        </div>
                    )}
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                        {title} <span className="text-primary">{subtitle}</span>
                    </h1>
                    {description && (
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            {description}
                        </p>
                    )}
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {onCtaClick ? (
                            <button
                                onClick={onCtaClick}
                                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
                            >
                                {ctaText}
                            </button>
                        ) : (
                            <Link
                                to={ctaLink}
                                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
                            >
                                {ctaText}
                            </Link>
                        )}
                        <Link
                            to="#features"
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
