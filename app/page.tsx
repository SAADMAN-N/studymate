import Image from "next/image";
import CursorFollower from "../components/ui/CursorFollower";
import ProcessFlow from "../components/ui/ProcessFlow";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen" suppressHydrationWarning>
      <CursorFollower />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="pt-32 pb-12 md:pt-40 md:pb-20" suppressHydrationWarning>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" suppressHydrationWarning>
            {/* Text Content - Left Side */}
            <div className="text-left space-y-6 md:pl-0 pl-4" suppressHydrationWarning>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in subpixel-antialiased">
                Find Your Perfect Study Partner
              </h1>
              <p className="max-w-md text-base text-gray-300 sm:text-lg md:text-2xl animate-slide-up subpixel-antialiased">
                Connect with motivated students worldwide, boost your productivity, and achieve your academic goals together. Real-time collaboration meets AI-powered learning.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="hidden md:block relative h-[400px] animate-fade-in" suppressHydrationWarning>
              <Image
                src="/images/home.svg"
                alt="Study Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Features Section */}
        <div className="py-20" suppressHydrationWarning>
          <h2 className="text-3xl font-bold text-white mb-12 animate-fade-in">Main Features</h2>
          <div className="grid md:grid-cols-2 gap-12" suppressHydrationWarning>
            {/* Smart Matching */}
            <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm animate-slide-up" suppressHydrationWarning>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Matching</h3>
              <p className="text-blue-300">Find study partners who share your subjects, goals, and study style. Our AI matching ensures productive collaboration.</p>
            </div>

            {/* Focus Tools */}
            <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm animate-slide-up [animation-delay:200ms]" suppressHydrationWarning>
              <h3 className="text-xl font-semibold text-white mb-4">Focus Tools</h3>
              <p className="text-gray-300">Stay on track with our built-in Pomodoro timer, focus tracking, and study streaks. Turn study time into success.</p>
            </div>

            {/* Perfect Study Environment */}
            <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm animate-slide-up [animation-delay:400ms]" suppressHydrationWarning>
              <h3 className="text-xl font-semibold text-white mb-4">Perfect Study Environment</h3>
              <p className="text-gray-300">Create your ideal study space with integrated Spotify controls, curated study playlists, and ambient sound mixing.</p>
            </div>

            {/* AI Study Assistant */}
            <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm animate-slide-up [animation-delay:600ms]" suppressHydrationWarning>
              <h3 className="text-xl font-semibold text-white mb-4">AI Study Assistant</h3>
              <p className="text-gray-300">Stuck on a problem? Our AI tutor helps break down complex topics, answers questions, and keeps your study sessions productive.</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a 
              href="/study-room"
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Enter Study Room
            </a>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-20" suppressHydrationWarning>
          <h2 className="text-3xl font-bold text-white mb-12 animate-fade-in">How It Works</h2>
          <ProcessFlow />
        </div>
      </div>
    </div>
  );
}
