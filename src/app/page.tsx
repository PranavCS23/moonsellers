"use client"; // Enables client-side rendering for this page

import Image from "next/image"; // Next.js optimized image component
import Link from "next/link"; // Next.js client-side navigation
import { Button } from "@/components/ui/button"; // Custom Button component
import Navbar from "@/components/ui/Navbar"; // Custom Navbar component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Carousel UI components

// Hardcoded data for your single pilot project
const pilotProject = {
  slug: "green-paradise",
  name: "Green Paradise Estates - Your Gateway to Bengaluru's Blooming Future",
  location: "Devanahalli, Bangalore North (approx. 55km from City Center)",
  tagline: "Secure Your Future in Bangalore's Rapidly Growing Outskirts",
  heroImage: "/images/moonsellers-hero.jpg",
  description:
    "At Moonsellers, we curate exclusive land opportunities in Bengaluru's most promising suburban growth corridors. We acquire substantial plots – typically ranging from 5 to 10 acres – and thoughtfully transform them into meticulously planned layouts, offering 10,000 sq ft parcels designed for discerning investors. Green Paradise Estates is our premier offering.",
  images: [
    "/images/project-green-paradise-1.jpg",
    "/images/project-green-paradise-2.jpg",
    "/images/project-green-paradise-3.jpg",
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
    "Visionary investors from across India and beyond, eager to capitalize on Bengaluru's rapid suburban development.",
  ],
  legalInfo: {
    rera: "RERA Registered: PRM/KA/RERA/1250/303/PR/230101/00XXXX (Example - Replace with actual, if applicable)",
    clearTitle:
      "All parcels come with clear and marketable titles, ensuring a secure investment.",
    companyReg:
      "Moonsellers is a registered entity, committed to transparency and compliance.",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                  <span className="block">
                    {pilotProject.name.split("-")[0].trim()}
                  </span>
                  <span className="block text-blue-400 mt-2">
                    {pilotProject.name.split("-")[1].trim()}
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-200 font-light leading-relaxed">
                  {pilotProject.tagline}
                </p>
                <p className="max-w-3xl mx-auto text-lg text-gray-300 font-light">
                  {pilotProject.location}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
                <a
                  href="#inquire"
                  className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg"
                >
                  Invest Today
                </a>
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all transform hover:scale-105 border border-white/30 text-lg"
                >
                  About Us
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/25 text-lg"
                >
                  Our Projects
                </Link>
              </div>

              <div className="flex gap-6 mt-12">
                <div className="flex items-center space-x-2 text-white/80">
                  <svg
                    className="w-6 h-6"
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
                  <span>RERA Approved</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Secure Investment</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span>High ROI Potential</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <a
              href="#overview"
              className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
            >
              <span className="text-sm mb-2">Discover More</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Project Overview / About Section */}
        <section
          id="overview"
          className="py-24 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vision & Opportunity
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {pilotProject.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Prime Location</h3>
                <p className="text-gray-600">{pilotProject.location}</p>
              </div>

              <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all">
                <div className="text-green-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Growth Potential
                </h3>
                <p className="text-gray-600">
                  Strategic investment opportunity in Bangalore&apos;s rapidly
                  developing outskirts
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all">
                <div className="text-purple-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Secure Investment
                </h3>
                <p className="text-gray-600">
                  RERA approved with clear and marketable titles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore the Property
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="max-w-6xl mx-auto relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {pilotProject.images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={img}
                          alt={`Property view ${idx + 1}`}
                          fill
                          className="object-cover transform hover:scale-105 transition-all duration-500"
                          priority={idx === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Experience excellence in land investment with our comprehensive
                approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Plantation Initiative",
                  description:
                    "When you invest with Moonsellers, you&apos;re not just buying land; you&apos;re securing a meticulously managed asset with our unique plantation program that adds value and security.",
                  icon: "🌿",
                  color: "from-green-50 to-green-100/50",
                  borderColor: "border-green-200",
                  learnMoreLink: "#plantation",
                },
                {
                  title: "Flexible Payment Options",
                  description:
                    "Book Now, Pay Later - Secure your chosen parcel with initial agreement. Hassle-Free EMI available with convenient monthly installment plans.",
                  icon: "💳",
                  color: "from-blue-50 to-blue-100/50",
                  borderColor: "border-blue-200",
                  learnMoreLink: "#payment",
                },
                {
                  title: "Legal Compliance",
                  description:
                    "All parcels come with clear and marketable titles, ensuring a secure investment backed by complete legal documentation.",
                  icon: "⚖️",
                  color: "from-purple-50 to-purple-100/50",
                  borderColor: "border-purple-200",
                  learnMoreLink: "#legal",
                },
                {
                  title: "Prime Location",
                  description:
                    "Strategically located in Bangalore's rapidly growing corridors with excellent connectivity and future development potential.",
                  icon: "📍",
                  color: "from-red-50 to-red-100/50",
                  borderColor: "border-red-200",
                  learnMoreLink: "#location",
                },
                {
                  title: "Investment Security",
                  description:
                    "RERA registered projects with clear titles, ensuring your investment is protected by the highest regulatory standards.",
                  icon: "🛡️",
                  color: "from-amber-50 to-amber-100/50",
                  borderColor: "border-amber-200",
                  learnMoreLink: "#security",
                },
                {
                  title: "Future Growth",
                  description:
                    "Located in rapidly developing areas with high appreciation potential, backed by infrastructure development plans.",
                  icon: "📈",
                  color: "from-indigo-50 to-indigo-100/50",
                  borderColor: "border-indigo-200",
                  learnMoreLink: "#growth",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl border ${feature.borderColor} bg-gradient-to-b ${feature.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm ${feature.borderColor}`}
                      >
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <Button
                      variant="link"
                      asChild
                      className="p-0 text-blue-600 hover:text-blue-700 font-medium hover:no-underline"
                    >
                      <a
                        href={feature.learnMoreLink}
                        className="inline-flex items-center"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section with Contact Form */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900">
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
                    />
                  )}
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Location Highlights
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-600"
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
                        className="w-5 h-5 text-green-600"
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
                        className="w-5 h-5 text-green-600"
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

              <div className="bg-white rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Interested? Let&apos;s Talk
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      placeholder="Tell us about your investment interests"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">About Moonsellers</h3>
                <p className="text-gray-400 leading-relaxed">
                  Transforming land investment opportunities in Bangalore&apos;s
                  most promising suburban growth corridors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#overview"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#inquire"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+91 (123) 456-7890</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>contact@moonsellers.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Bangalore, Karnataka, India</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Legal</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      RERA Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Moonsellers. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
