import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import JobApplicationForm from "@/components/shared/JobApplicationForm";

// Metadata needs to be exported from a separate server component or removed in client component
// For now, simpler to remove direct export in client component, but can leave if this was accidental.
// Since we are switching to "use client", we can't export metadata. 
// Ideally we should separate this, but for this task I will remove the metadata export to avoid errors, 
// or I can keep the file as server component and make the list client.
// To keep it simple and robust, I'll make the whole page client for now.

export default function CareersPage() {
    const [applicationState, setApplicationState] = useState({ isOpen: false, jobTitle: "" });

    const openApplication = (title: string) => {
        setApplicationState({ isOpen: true, jobTitle: title });
    };

    const closeApplication = () => {
        setApplicationState((prev) => ({ ...prev, isOpen: false }));
    };

    return (
        <>
            <main className="bg-white">
                <PageHero
                    title="Shape the Future of"
                    subtitle="Finance"
                    badge="Join Our Team"
                    description="We are looking for passionate individuals to build the next generation of financial products. If you love innovation and want to make an impact, we want to hear from you."
                    ctaText="View Openings"
                    ctaLink="#openings"
                />

                {/* Why Join Us */}
                <section className="py-20 bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Join VZEEPAY?</h2>
                            <p className="text-lg text-gray-600">
                                We offer more than just a job; we offer a career where you can grow, learn, and make a difference.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <BenefitCard
                                icon="🚀"
                                title="Fast-Paced Growth"
                                description="Work in a dynamic environment where your contributions directly impact the company's success."
                            />
                            <BenefitCard
                                icon="💡"
                                title="Innovation First"
                                description="We encourage new ideas and experimentation. We leverage the latest tech to solve real problems."
                            />
                            <BenefitCard
                                icon="⚖️"
                                title="Work-Life Balance"
                                description="We believe in working hard and playing hard. Enjoy flexible policies that respect your time."
                            />
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section id="openings" className="py-24">
                    <div className="container-custom max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Current Openings</h2>
                            <p className="mt-4 text-lg text-gray-600">Find the role that fits your skills and passion.</p>
                        </div>

                        <div className="space-y-6">
                            <JobCard
                                title="Accountant"
                                department="Finance"
                                location="Hyderabad"
                                type="Full-time"
                                onApply={() => openApplication("Accountant")}
                            />
                            <JobCard
                                title="Financial Analyst"
                                department="Finance"
                                location="Hyderabad"
                                type="Full-time"
                                onApply={() => openApplication("Financial Analyst")}
                            />
                            <JobCard
                                title="Loan Officer"
                                department="Lending"
                                location="Hyderabad"
                                type="Full-time"
                                onApply={() => openApplication("Loan Officer")}
                            />
                        </div>

                        <div className="mt-16 text-center bg-primary/5 rounded-3xl p-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see a perfect fit?</h3>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                We are always on the lookout for great talent. Send us your resume and tell us how you can contribute.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-primaryLight transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            {/* Job Application Form Modal */}
            <JobApplicationForm
                isOpen={applicationState.isOpen}
                onClose={closeApplication}
                jobTitle={applicationState.jobTitle}
            />
        </>
    );
}

function BenefitCard({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function JobCard({ title, department, location, type, onApply }: { title: string, department: string, location: string, type: string, onApply: () => void }) {
    return (
        <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all duration-200">
            <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {department}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {type}
                    </span>
                </div>
            </div>
            <button
                onClick={onApply}
                className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-2 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
            >
                Apply Now
            </button>
        </div>
    );
}
