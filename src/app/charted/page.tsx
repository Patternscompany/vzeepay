import { Link } from "react-router-dom";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="container-custom py-20">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-darker">Charter Values</h1>
          <p className="mt-4 text-lg text-gray-600">Our charter values guide everything we build at <strong>VZEE PAY</strong> — ensuring fairness, inclusion, and innovation in every customer interaction.</p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          <article className="bg-orange-50 border border-orange-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Customer First</h3>
            <p className="text-gray-600">Every decision, product and feature is crafted to deliver clear value and a great experience for our customers.</p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Integrity & Trust</h3>
            <p className="text-gray-600">We operate transparently with strong governance and a commitment to ethical practices.</p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Innovation with Purpose</h3>
            <p className="text-gray-600">We use technology to simplify financial decisions and make services more accessible.</p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Financial Inclusion</h3>
            <p className="text-gray-600">Designing products that reach underserved segments and enable healthier financial lives.</p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Excellence in Service</h3>
            <p className="text-gray-600">Fast, responsive support with clear processes — from application to disbursal.</p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Empowerment Through Knowledge</h3>
            <p className="text-gray-600">We help customers make confident choices with clear explanations and tools.</p>
          </article>
        </div>

        {/* How We Work */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-gradient-to-br from-primary/10 via-primaryLight/6 to-white rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Research</h4>
            <p className="text-gray-600">We study user needs and regulatory context to build responsible products.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold text-primary mb-2">Design</h4>
            <p className="text-gray-600">Human-centered design that prioritizes clarity and trust.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold text-primary mb-2">Deliver</h4>
            <p className="text-gray-600">Reliable delivery with transparent pricing and great support.</p>
          </div>
        </div>

        {/* Impact / Stats */}
        <div className="mt-12 bg-[#fff7ed] border border-[#ffedd5] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-darker">Our Impact</h3>
            <p className="text-gray-600 mt-2">Millions supported with tools and products that make financial decisions simpler and fairer.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center w-full md:w-auto">
            <div>
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-sm text-gray-600">Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">250+</div>
              <div className="text-sm text-gray-600">Bank partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primaryLight">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
