import React from "react";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 sm:py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                        <span>Customer Success Stories</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real Stories, Real Impact</h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Featured Testimonial */}
                    <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 sm:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg className="w-32 h-32 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                        </div>
                        <div className="flex gap-1 text-yellow-400 mb-6">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                        </div>
                        <blockquote className="text-xl font-medium text-gray-900 leading-relaxed mb-8">
                            “The transparency at VZEEPAY is unmatched. I got my home loan approved in just 4 days with a rate lower than what my own bank offered. The process was completely digital and hassle-free.”
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                                <img src={`${import.meta.env.BASE_URL}images/tp.avif`} alt="Priya Sharma" className="absolute inset-0 h-full w-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Priya Sharma</div>
                                <div className="text-sm text-gray-600">Product Manager, Bangalore</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <TestimonialCard
                            name="Rahul Verma"
                            role="Tech Lead, Hyderabad"
                            image={`${import.meta.env.BASE_URL}images/tp.avif`}
                            text="I check my credit score monthly on VZEEPAY. Their personalized tips helped me improve my score from 720 to 815 in just 6 months."
                        />
                        <TestimonialCard
                            name="Anand Dora"
                            role="Business Owner, Pune"
                            image={`${import.meta.env.BASE_URL}images/tp.avif`}
                            text="Needed a business loan urgently for expansion. VZEEPAY matched me with the right lender and I got funds disbursed within 48 hours."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ name, role, text, image }: { name: string, role: string, text: string, image: string }) {
    return (
        <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <div className="flex gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
            </div>
            <p className="text-gray-600 mb-6">{text}</p>
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div>
                    <div className="text-sm font-bold text-gray-900">{name}</div>
                    <div className="text-xs text-gray-500">{role}</div>
                </div>
            </div>
        </div>
    )
}
