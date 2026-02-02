import React, { useState } from "react";

interface GetQuoteFormProps {
    isOpen: boolean;
    onClose: () => void;
    initialSubject?: string;
}

export default function GetQuoteForm({ isOpen, onClose, initialSubject = "" }: GetQuoteFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: initialSubject,
        message: "",
    });

    React.useEffect(() => {
        if (isOpen && initialSubject) {
            setFormData(prev => ({ ...prev, subject: initialSubject }));
        }
    }, [isOpen, initialSubject]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        setIsLoading(false);
        onClose();
        alert("Quote request submitted successfully!");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-200 transition-all animate-in fade-in zoom-in duration-300">
                <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Get A Quote</h2>
                            <p className="text-sm text-gray-500 mt-1">Fill in the details below and we'll get back to you.</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

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
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                placeholder="What are you looking for?"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm resize-none"
                                placeholder="Tell us more about your requirements..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primaryLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mt-2"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                "Get Free Quote"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
