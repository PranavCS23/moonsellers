"use client"; // Enables client-side rendering for this page

import Image from "next/image"; // Next.js optimized image component
import Link from "next/link"; // Next.js client-side navigation
// (Removed carousel imports since the gallery was replaced by grids)
import { useEffect } from "react";
import { Playfair_Display } from "next/font/google";

// Hardcoded data for your single pilot project
const pilotProject = {
  slug: "north-bengaluru-invest",
  name: "North Bengaluru — Devanahalli & Aerotropolis Investment Opportunity",
  location:
    "Devanahalli, North Bengaluru (near Kempegowda International Airport)",
  tagline:
    "Prime NRI-focused land investment in Bengaluru&apos;s fastest-growing corridor",
  heroImage: "/images/moonsellers-hero.jpg",
  description:
    "North Bengaluru is poised to become India’s next major economic hub driven by large-scale infrastructure, IT & aerospace investment, and proximity to the international airport. This is a targeted opportunity for NRIs seeking capital appreciation, rental demand, and long-term returns.",
  investmentSnapshot: {
    priceRange: "₹9,000–13,000 per sq. ft. (2025)",
    appreciation: "10–15% annual potential",
    rentalYield: "4–6% (higher near airport & IT hubs)",
    metroOperational: "Blue Line Phase 2B (2026)",
  },
  images: [
    "/images/placeholder-1.svg",
    "/images/placeholder-2.svg",
    "/images/placeholder-3.svg",
  ],
  videoUrl: "https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID", // Example URL, replace with actual
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9946450630666!2d77.67292217498762!3d13.26524318712166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae071d24c7f077%3A0xc3e75a6c38b25f82!2sDevanahalli%2C%20Karnataka%20562110!5e0!3m2!1sen!2sin!4v1719076865261!5m2!1sen!2sin", // Example URL, replace with actual
  plantationDetails:
    "When you invest with Moonsellers, you're not just buying land; you're securing a meticulously managed asset. To ensure the safety and appreciation of your investment, we enhance each parcel with a plantation initiative. This not only adds immediate value and aesthetic appeal but also provides an inherent layer of security. Initially, a nominal maintenance charge will cover the upkeep of these plantations and the overall development. However, our long-term vision is to transition towards a self-sustaining model, ultimately reducing your maintenance burden to near zero.",
  paymentOptions: [
    '"Book Now, Pay Later": Secure your chosen parcel with an initial agreement, giving you the flexibility to complete your payment at a later, pre-defined stage.',
    "Hassle-Free EMI: Spread your investment comfortably over time with our convenient Equated Monthly Installment (EMI) payment plans.",
  ],
  clientele: [
    "Non-Resident Indian (NRI) Malayalis seeking secure and appreciating assets back home.",
    "Bengaluru residents looking for strategic long-term investments outside the immediate urban sprawl.",
    "Visionary investors from across India and beyond, eager to capitalize on Bengaluru&apos;s rapid suburban development.",
  ],
  legalInfo: {
    rera: "RERA Registered: PRM/KA/RERA/1250/303/PR/230101/00XXXX (Example - Replace with actual, if applicable)",
    clearTitle:
      "All parcels come with clear and marketable titles, ensuring a secure investment.",
    companyReg:
      "Moonsellers is a registered entity, committed to transparency and compliance.",
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function DevTroubleshoot() {
  useEffect(() => {
    console.info(
      "DevTroubleshoot: ensure your dev server is running (npm run dev / pnpm dev). Check terminal for build errors and browser console for runtime errors."
    );
  }, []);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-yellow-50 border border-yellow-300 text-yellow-900 rounded-lg p-4 shadow-lg">
      <strong className="block mb-2">Dev Troubleshooting</strong>
      <ul className="text-sm list-disc list-inside space-y-1">
        <li>
          Start the dev server: <code>npm run dev</code> or{" "}
          <code>pnpm dev</code>.
        </li>
        <li>
          Check terminal for build errors (missing assets can block Next.js).
        </li>
        <li>
          If port 3000 is occupied, stop that process or run on another port.
        </li>
        <li>Open the browser console and terminal logs for runtime errors.</li>
      </ul>
    </div>
  );
}

export default function HomePage() {
  const heroBg = pilotProject.heroImage || "/images/placeholder-1.svg";
  const projects = [
    {
      title: "Aerospace Greens",
      location: "Devanahalli",
      price: "₹75L+",
      status: "Ongoing",
      img: "/images/placeholder-1.svg",
    },
    {
      title: "Blue Line Enclave",
      location: "Jakkur",
      price: "₹90L+",
      status: "Ready to Move",
      img: "/images/placeholder-2.svg",
    },
    {
      title: "Aerotropolis Vista",
      location: "Yelahanka",
      price: "₹1.2Cr+",
      status: "Completed",
      img: "/images/placeholder-3.svg",
    },
  ];
  return (
    <>
      <DevTroubleshoot />
      <main className="bg-white text-gray-900 font-sans">
        {/* Hero Section - clean, cover image with overlay and search */}
        <section className="relative h-[55vh] md:h-[70vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 md:pb-14">
            <h1
              className={`${playfair.className} text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-3`}
            >
              Find Your Ideal Property in North Bengaluru
            </h1>
            <p
              id="hero-subheading"
              className="text-[#09294C] mb-5 text-center max-w-2xl px-4"
            >
              Curated land with amazing growth opportunities.
            </p>
            <div className="w-full max-w-5xl px-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 bg-white rounded-lg p-3 shadow-xl">
                <select className="px-3 py-2 rounded border border-gray-300 text-gray-800">
                  <option>Property Type</option>
                  <option>Land</option>
                  <option>Farm Plot</option>
                </select>
                <select className="px-3 py-2 rounded border border-gray-300 text-gray-800">
                  <option>Location</option>
                  <option>Devanahalli</option>
                  <option>Jakkur</option>
                  <option>Yelahanka</option>
                </select>
                <select className="px-3 py-2 rounded border border-gray-300 text-gray-800">
                  <option>Min Price</option>
                  <option>₹25L</option>
                  <option>₹50L</option>
                  <option>₹1Cr</option>
                </select>
                <select className="px-3 py-2 rounded border border-gray-300 text-gray-800">
                  <option>Max Price</option>
                  <option>₹50L</option>
                  <option>₹1Cr</option>
                  <option>₹2Cr+</option>
                </select>
                <button className="col-span-2 md:col-span-1 bg-[#09294C] hover:bg-[#0B3E70] text-[#CE9E23] font-semibold rounded px-4">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Tabs (Ongoing / Completed / Ready to Move) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <h2
                className={`${playfair.className} text-2xl md:text-3xl font-bold`}
              >
                About Moonsellers
              </h2>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900"
              ></Link>
            </div>
            <div className="mb-8">
              <p className="text-gray-700 max-w-3xl">
                At Moonsellers, we help NRIs unlock the immense potential of
                North Bengaluru — India’s fastest-growing investment hub. With
                mega projects like Devanahalli Business Park, Aerospace SEZ, and
                the Metro Blue Line reshaping the region, our curated property
                portfolio ensures you invest where growth, connectivity, and
                returns converge. Backed by trusted developers and data-driven
                insights, Moonsellers makes your investment journey seamless,
                transparent, and future-ready — so you don’t just buy property,
                you own a stake in Bengaluru’s next economic epicenter.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold`}>About Moonsellers</h2>
            </div>
            <div className="mb-8">
              <p className="text-gray-700 max-w-3xl">
                Welcome to Skyworks Properties Pvt. Ltd., the trusted name behind <a href="http://moonsellers.in" className="text-blue-600 hover:underline">moonsellers.in</a>. At Skyworks, we specialize exclusively in land transactions — from 10 cents to 25 acres. What sets us apart is our hands-on and transparent approach.
              </p>
              <a href="/about" className="text-blue-600 hover:underline font-medium">Learn More</a>
            </div>
          </div>
        </section>
        {/* Projects + Location (replaces Stats + Why) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-5 gap-10 items-start lg:justify-items-end">
            <div className="lg:col-span-2 w-full max-w-md lg:justify-self-end">
              <h3
                className={`${playfair.className} text-2xl md:text-3xl font-bold mb-6`}
              >
                Projects
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className="group relative rounded-xl overflow-hidden shadow border border-gray-200"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                        {p.status}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4
                        className={`${playfair.className} font-semibold text-lg`}
                      >
                        {p.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {p.location} • {p.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 w-full lg:justify-self-end lg:ml-auto">
              <h3
                className={`${playfair.className} text-2xl md:text-3xl font-bold mb-6`}
              >
                Location
              </h3>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow border border-gray-200">
                {pilotProject.mapEmbedUrl && (
                  <iframe
                    src={pilotProject.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Project Location Map"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Map Section with Contact Form */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2
                  className={`${playfair.className} text-4xl font-bold text-white`}
                >
                  Location & Contact
                </h2>
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                  {pilotProject.mapEmbedUrl && (
                    <iframe
                      src={pilotProject.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Map of Devanahalli, Karnataka"
                    />
                  )}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3
                    className={`${playfair.className} text-xl font-semibold mb-4`}
                  >
                    Location Highlights
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Close to upcoming business district
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Easy access to major highways
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Developing infrastructure
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl shadow-xl p-8">
                <h3 className={`${playfair.className} text-2xl font-bold mb-6`}>
                  Interested? Let&apos;s Talk
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      rows={4}
                      placeholder="Tell us about your investment interests"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#09294C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0B3E70] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer removed - using layout footer */}
      </main>
    </>
  );
}
