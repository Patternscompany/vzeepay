import React from "react";

export default function Partners() {
    const banks = [
        { name: "HDFC Bank", src: "/images/hdfc-40px.webp", width: 134 },
        { name: "ICICI Bank", src: "/images/icici-40px.webp", width: 202 },
        { name: "SBI", src: "/images/sbi-40px.webp", width: 115 },
        { name: "Axis Bank", src: "/images/axis-40px.webp", width: 168 },
        { name: "Kotak", src: "/images/kotak-mahindra-bank-40px.webp", width: 152 },
        { name: "Yes Bank", src: "/images/yes-bank-40px.webp", width: 110 },
        { name: "Aditya Birla", src: "/images/aditya-birla-group-40px.webp", width: 73 },
        { name: "AU Small Finance", src: "/images/au-small-finance-bank-limited-40px.webp", width: 77 },
        { name: "Bajaj Finserv", src: "/images/bajaj-finserv-40px.webp", width: 151 },
        { name: "Bank of Baroda", src: "/images/bank-of-baroda-40px.webp", width: 126 },
        { name: "Canara Bank", src: "/images/canara-bank-40px.webp", width: 158 },
        { name: "Central Bank", src: "/images/central-bank-of-india-40px.webp", width: 127 },
        { name: "IDFC First", src: "/images/idfc-first-bank-40px.webp", width: 173 },
    ];

    return (
        <section className="py-24 bg-gray-50 border-b border-gray-100 overflow-hidden">
            <div className="container-custom text-center relative z-10">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-12">Powering Your Loans Through India's Top Lenders</p>

                <div className="relative h-[200px] w-full max-w-5xl mx-auto overflow-hidden">
                    <ArchCarousel items={banks} />
                </div>
            </div>
        </section>
    );
}

function ArchCarousel({ items }: { items: { name: string, src: string, width: number }[] }) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [offset, setOffset] = React.useState(180);
    const [radii, setRadii] = React.useState({ x: 500, y: 250 });
    const [spacing, setSpacing] = React.useState(25);
    const requestRef = React.useRef<number | null>(null);

    // Animation Speed
    const speed = 0.15;

    const animate = () => {
        setOffset(prev => (prev - speed + 360) % 360);
        requestRef.current = requestAnimationFrame(animate);
    };

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setRadii({ x: 160, y: 120 }); // Tight arch for mobile
                setSpacing(55); // Spacing of 55 degrees avoids harmonic overlaps for 13 items and ensures clarity
            } else if (width < 1024) {
                setRadii({ x: 350, y: 200 }); // Medium arch for tablet
                setSpacing(40);
            } else {
                setRadii({ x: 500, y: 250 }); // Full arch for desktop
                setSpacing(25);
            }
        };

        handleResize(); // Initial set
        window.addEventListener('resize', handleResize);

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-x-0 bottom-0 h-[300px] flex items-end justify-center pointer-events-none">
            {items.map((item, i) => {
                const itemAngle = (offset + (i * spacing)) % 360;

                // Convert to radians
                const rad = (itemAngle * Math.PI) / 180;

                const x = radii.x * Math.cos(rad);
                const y = radii.y * Math.sin(rad);

                const isVisible = itemAngle >= 180 && itemAngle <= 360;

                // Smooth fade
                let opacity = 0;
                if (isVisible) {
                    // Ensure negative sin values (due to precision) don't cause NaN in sqrt
                    opacity = Math.max(0, -Math.sin(rad));
                    opacity = Math.pow(opacity, 0.5);
                }

                return (
                    <div
                        key={i}
                        className="absolute bottom-0 left-1/2 will-change-transform flex items-center justify-center"
                        style={{
                            transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, 50%)`,
                            opacity: opacity,
                            zIndex: Math.round(opacity * 10),
                            visibility: opacity < 0.01 ? 'hidden' : 'visible'
                        }}
                    >
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-2 sm:p-3 flex items-center justify-center transition-all hover:scale-110">
                            <img
                                src={`${import.meta.env.BASE_URL}${item.src.startsWith('/') ? item.src.slice(1) : item.src}`}
                                alt={item.name}
                                width={item.width}
                                height={40}
                                className="h-5 sm:h-6 w-auto object-contain"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
