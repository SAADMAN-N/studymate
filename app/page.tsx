import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Find Your Perfect Study Partner
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with motivated students worldwide, boost your productivity, and achieve your academic goals together. Real-time collaboration meets AI-powered learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
