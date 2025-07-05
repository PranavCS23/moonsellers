"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Strategic Direction",
      description:
        "Our experienced leadership team brings decades of combined expertise in real estate, land development, and sustainable investment practices.",
      image: "/images/project-green-paradise-1.jpg",
    },
    {
      name: "Legal & Compliance",
      role: "Regulatory Excellence",
      description:
        "Our dedicated legal team ensures complete transparency and compliance with all regulatory requirements.",
      image: "/images/project-green-paradise-2.jpg",
    },
    {
      name: "Project Development",
      role: "Technical Excellence",
      description:
        "Expert architects and land development specialists who transform raw land into premium investment opportunities.",
      image: "/images/project-green-paradise-3.jpg",
    },
  ];

  const achievements = [
    {
      number: "500+",
      label: "Happy Investors",
      description: "Trust us with their investments",
    },
    {
      number: "1000+",
      label: "Acres Developed",
      description: "Of prime land transformed",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "In land development",
    },
    {
      number: "100%",
      label: "RERA Compliance",
      description: "In all our projects",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <div className="space-y-2 max-w-2xl mx-auto">
            <Badge className="px-4 py-2" variant="secondary">
              About Moonsellers
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Building Tomorrow&apos;s Landscapes
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We transform promising land parcels into secure, high-potential
              investment opportunities for forward-thinking investors.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Commitment Cards */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
            <Card className="transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>
                  Shaping the future of land investment
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  At Moonsellers, we envision a future where land investment is
                  accessible, transparent, and rewarding. We carefully select
                  and develop properties in Bengaluru&apos;s most promising
                  growth corridors, creating opportunities for investors to
                  participate in the city&apos;s expansion.
                </p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Our Commitment</CardTitle>
                <CardDescription>Excellence in every acre</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>
                  We are committed to maintaining the highest standards of legal
                  compliance, environmental responsibility, and investor
                  satisfaction. Every project undergoes rigorous due diligence
                  and is developed with sustainable practices in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Achievements Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Images */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤝",
                title: "Trust",
                description:
                  "Building lasting relationships through transparency and integrity",
              },
              {
                icon: "💎",
                title: "Quality",
                description:
                  "Delivering excellence in every project we undertake",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description:
                  "Developing properties with environmental consciousness",
              },
              {
                icon: "⭐",
                title: "Innovation",
                description:
                  "Embracing new ideas to create better investment opportunities",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Ready to Invest?
          </h2>
          <p className="text-gray-600 mb-8 max-w-[600px] mx-auto">
            Explore our current projects and discover the perfect investment
            opportunity for your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
