"use client";

import React, { useState, useRef } from "react";

interface JobApplicationFormProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function JobApplicationForm({ isOpen, onClose, jobTitle }: JobApplicationFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        resume: null as File | null,
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (!isOpen) {
            // Reset form when closed
            setFormData({ name: "", phone: "", email: "", resume: null });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Application submitted:", { ...formData, position: jobTitle });
        setIsLoading(false);
        onClose();
        alert(`Application for ${jobTitle} submitted successfully!`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-200 transition-all animate-in fade-in zoom-in duration-300">
                <div className="bg-gradient-to-r from-primary to-secondary px-8 py-6 text-white">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Apply Now</h2>
                        <button
                            onClick={onClose}
                            className="rounded-full p-1 hover:bg-white/20 transition-colors"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="mt-2 text-white/90 text-sm">You are applying for:</p>
                    <p className="text-xl font-bold">{jobTitle}</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                    placeholder="98765 43210"
                                />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email ID</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="resume" className="text-sm font-medium text-gray-700">Resume / CV</label>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-300"
                                >
                                    Choose File
                                </button>
                                <span className="text-sm text-gray-500 truncate max-w-[200px]">
                                    {formData.resume ? formData.resume.name : "No file chosen"}
                                </span>
                            </div>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                required
                            />
                            <p className="text-xs text-gray-500 mt-1">Accepted formats: .pdf, .doc, .docx (Max 5MB)</p>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primaryLight hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mt-4"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting Application...
                                </span>
                            ) : (
                                "Submit Application"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
