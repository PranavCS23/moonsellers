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
  return (
    <main className="bg-white text-gray-900 font-sans">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to Skyworks Properties Pvt. Ltd., the trusted name behind{" "}
            <a
              href="http://moonsellers.in"
              className="text-blue-600 hover:underline"
            >
              moonsellers.in
            </a>
            . I’m Sreenivasan Bharathan, founder of Skyworks Properties, and I
            bring over 10 years of experience in the buying and selling of land
            across North Bangalore.
          </p>
          <p className="text-gray-700 mb-4">
            At Skyworks, we specialize exclusively in land transactions — from
            10 cents to 25 acres. What sets us apart is our hands-on and
            transparent approach. We don’t just act as intermediaries; we work
            directly with landowners, enter into formal agreements, verify and
            clear all necessary documents, and only then offer the property to
            our buyers. This ensures that every deal we present is clear,
            secure, and ready for ownership.
          </p>
          <p className="text-gray-700 mb-4">
            Our goal is simple — to make land buying in North Bangalore
            trustworthy, hassle-free, and profitable for our clients. Over the
            years, we’ve built a strong reputation for honesty, reliability, and
            professionalism, helping both individual buyers and investors secure
            the right properties with confidence.
          </p>
          <p className="text-gray-700 mb-4">
            At Skyworks Properties, we value long-term relationships over
            short-term gains. Every transaction is handled with integrity,
            diligence, and complete transparency — because we understand that
            investing in land is not just a financial decision, but a personal
            one.
          </p>
          <p className="text-gray-700 mb-4">
            If you’re looking to buy verified, legally clear land in North
            Bangalore, you can trust Skyworks Properties Pvt. Ltd. and{" "}
            <a
              href="http://moonsellers.in"
              className="text-blue-600 hover:underline"
            >
              moonsellers.in
            </a>{" "}
            to guide you every step of the way.
          </p>
          <p className="text-gray-700 font-bold">
            Skyworks Properties Pvt. Ltd. — Reliable Land Solutions You Can
            Trust.
          </p>
        </div>
      </section>
    </main>
  );
}
