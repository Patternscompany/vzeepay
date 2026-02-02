import { Routes, Route } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/shared/FloatingActions";
import ScrollToTop from "@/components/ScrollToTop";

// Page imports
import Home from "@/app/page";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Blog from "@/app/blog/page";
import Careers from "@/app/careers/page";
import Charted from "@/app/charter-values/page";
import Legal from "@/app/legal-services/page";
import Apply from "@/app/apply/page";
import CreditCards from "@/app/credit-cards/page";
import CreditScore from "@/app/credit-score/page";
import DigitalGold from "@/app/digital-gold/page";
import CompareCards from "@/app/compare-cards/page";
import LoanMatchEngine from "@/app/loan-match-engine/page";
import VzeeOpportunityIndex from "@/app/vzee-opportunity-index/page";
import PrivacyPolicy from "@/app/privacy-policy/page";
import TermsAndConditions from "@/app/terms-and-conditions/page";
import HomeEmiCalculator from "@/app/calculators/home-loan-emi-calculator/page";
import InvestGold from "@/app/invest/gold/page";

// Loan pages
import HomeLoan from "@/app/loans/home-loan/page";
import PersonalLoan from "@/app/loans/personal-loan/page";
import BusinessLoan from "@/app/loans/business-loan/page";
import VehicleLoan from "@/app/loans/vehicle-loan/page";
import LoanAgainstProperty from "@/app/loans/loan-against-property/page";
import BalanceTransfer from "@/app/loans/balance-transfer/page";
import TopUpLoan from "@/app/loans/top-up-loan/page";
import NriHomeLoan from "@/app/loans/nri-home-loan/page";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white text-gray-900 transition-colors duration-200">
            <Header />
            <main className="min-h-screen pt-16">
                {children}
            </main>
            <FloatingActions />
            <Footer />
        </div>
    );
}

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* Home */}
                <Route path="/" element={<Layout><Home /></Layout>} />

                {/* Top-level pages */}
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/blog" element={<Layout><Blog /></Layout>} />
                <Route path="/careers" element={<Layout><Careers /></Layout>} />
                <Route path="/charter-values" element={<Layout><Charted /></Layout>} />
                <Route path="/legal-services" element={<Layout><Legal /></Layout>} />
                <Route path="/apply" element={<Layout><Apply /></Layout>} />

                {/* Credit & Investment pages */}
                <Route path="/credit-cards" element={<Layout><CreditCards /></Layout>} />
                <Route path="/credit-score" element={<Layout><CreditScore /></Layout>} />
                <Route path="/digital-gold" element={<Layout><DigitalGold /></Layout>} />
                <Route path="/compare-cards" element={<Layout><CompareCards /></Layout>} />
                <Route path="/invest/gold" element={<Layout><InvestGold /></Layout>} />

                {/* Tools & Calculators */}
                <Route path="/calculators/home-loan-emi-calculator" element={<Layout><HomeEmiCalculator /></Layout>} />
                <Route path="/loan-match-engine" element={<Layout><LoanMatchEngine /></Layout>} />
                <Route path="/vzee-opportunity-index" element={<Layout><VzeeOpportunityIndex /></Layout>} />

                {/* Legal pages */}
                <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
                <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />

                {/* Loan pages */}
                <Route path="/loans/home-loan" element={<Layout><HomeLoan /></Layout>} />
                <Route path="/loans/personal-loan" element={<Layout><PersonalLoan /></Layout>} />
                <Route path="/loans/business-loan" element={<Layout><BusinessLoan /></Layout>} />
                <Route path="/loans/vehicle-loan" element={<Layout><VehicleLoan /></Layout>} />
                <Route path="/loans/loan-against-property" element={<Layout><LoanAgainstProperty /></Layout>} />
                <Route path="/loans/balance-transfer" element={<Layout><BalanceTransfer /></Layout>} />
                <Route path="/loans/top-up-loan" element={<Layout><TopUpLoan /></Layout>} />
                <Route path="/loans/nri-home-loan" element={<Layout><NriHomeLoan /></Layout>} />
            </Routes>
        </>
    );
}

export default App;
