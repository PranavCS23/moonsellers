"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Mock data for projects
const projects = [
  {
    id: 1,
    name: "Green Paradise Estates",
    location: "Devanahalli, Bangalore North",
    description:
      "Premium plotted development with extensive plantation initiative, located in Bangalore's rapidly growing northern corridor.",
    status: "Ongoing",
    area: "10 acres",
    price: "Starting from ₹45L",
    image: "/images/project-green-paradise-1.jpg",
    features: [
      "RERA Approved",
      "Clear Titles",
      "Gated Community",
      "Plantation Initiative",
    ],
    completion: "80%",
  },
  {
    id: 2,
    name: "Serene Valley Plots",
    location: "Yelahanka, Bangalore",
    description:
      "Exclusive residential plots in a serene environment, perfect for your dream home or investment.",
    status: "Upcoming",
    area: "15 acres",
    price: "Price on Request",
    image: "/images/project-green-paradise-2.jpg",
    features: [
      "Premium Location",
      "Pre-Launch Offers",
      "Investment Potential",
      "Natural Surroundings",
    ],
    completion: "Planning Stage",
  },
  {
    id: 3,
    name: "Urban Heights",
    location: "Electronic City, Bangalore",
    description:
      "Modern urban development with excellent connectivity and amenities, ideal for tech professionals.",
    status: "Completed",
    area: "8 acres",
    price: "Sold Out",
    image: "/images/project-green-paradise-3.jpg",
    features: [
      "RERA Approved",
      "100% Sold",
      "Developed Area",
      "Close to Tech Parks",
    ],
    completion: "100%",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge className="px-4 py-2" variant="secondary">
              Our Projects
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Premium Land Investment <br />
              <span className="text-blue-600">Opportunities</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover our carefully curated selection of prime land development
              projects in Bangalore&apos;s most promising growth corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <HoverCard key={project.id}>
                <HoverCardTrigger asChild>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="aspect-video w-full relative">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="outline"
                            className="text-white border-white hover:bg-white/20"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant={
                            project.status === "Ongoing"
                              ? "default"
                              : project.status === "Upcoming"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.location}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{project.area}</span>
                        <span>{project.price}</span>
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">{project.name}</h4>
                    <p className="text-sm text-gray-500">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Status</p>
                        <p className="font-medium">{project.status}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Completion</p>
                        <p className="font-medium">{project.completion}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-gray-600 md:text-lg">
              Connect with our team to learn more about our current and upcoming
              projects. We&apos;re here to help you make informed investment
              decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact">Schedule a Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
