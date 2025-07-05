import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="py-20 bg-gradient-to-br from-stone-100 to-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-stone-800">
            Our Projects
          </h1>
          <p className="text-lg text-stone-600 mb-8">
            Discover our curated selection of land investment opportunities,
            each designed for long-term growth and security. Explore details,
            locations, and unique features of every project.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-2">
                Green Paradise Estates
              </h2>
              <p>
                Our flagship project in Devanahalli, Bangalore North. Secure,
                sustainable, and high-growth land parcels for visionary
                investors.
              </p>
              <Link
                href="/projects/green-paradise"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
              >
                View Project
              </Link>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-2">
                Future Project (Dummy)
              </h2>
              <p>
                Exciting new opportunities coming soon! Stay tuned for our next
                premium land development in Bangalore’s growth corridors.
              </p>
              <Link
                href="/projects/future-project"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
              >
                View Project
              </Link>
            </div>
          </div>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
