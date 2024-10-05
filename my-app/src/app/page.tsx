"use client"
import { Rocket, BookOpen, Code, Users, Cog, Cpu, Database, Truck, Atom, Building, Plane, Wifi, Droplet, Leaf } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()

  const handleButtonClick = (route:string) => {
    router.push(route)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-lg font-bold">Pro-Fetch</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button
            onClick={() => handleButtonClick("/second-page")}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Branches
          </button>
          <button
              onClick={() => handleButtonClick("/second-page")}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button
              onClick={() => handleButtonClick("/second-page")}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black">
                  Personalized Learning for Engineers
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost your engineering skills with tailored courses, real-world projects, and adaptive learning paths.
                </p>
              </div>
              <div className="space-x-4">
                <button
                    onClick={() => handleButtonClick("/second-page")}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4"
                >
                  Get Started
                </button>
                <button
                    onClick={() => handleButtonClick("/second-page")}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 border border-input h-10 py-2 px-4"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg shadow-sm">
                <BookOpen className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Adaptive Learning Paths</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Courses tailored to your skill level and learning pace.
                </p>
                <button
                    onClick={() => handleButtonClick("/second-page")}
                  className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4"
                >
                  Learn More
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg shadow-sm">
                <Code className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Hands-on Projects</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Apply your knowledge with real-world engineering projects.
                </p>
                <button
                    onClick={() => handleButtonClick("/second-page")}
                  className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4"
                >
                  Explore Projects
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Expert Mentorship</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get guidance from experienced engineers in your field.
                </p>
                <button
                    onClick={() => handleButtonClick("/second-page")}
                  className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4"
                >
                  Meet Mentors
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
              Engineering Disciplines
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-800">
              {[
                { icon: Cog, label: "Mechanical",route:"/MECH"},
                { icon: Cpu, label: "Electrical",route:"/EE" },
                { icon: Code, label: "Computer Science",route:"/CS" },
                { icon: Truck, label: "Civil",route:"/CV" },
                { icon: Atom, label: "Quantum",route:"/QT" },
                { icon: Plane, label: "Aerospace",route:"/AS" },
                { icon: Wifi, label: "Telecommunications",route:"/TE" },
                { icon: Droplet, label: "Environmental",route:"/EV" },
                { icon: Leaf, label: "Bio-technology",route:"/BT" },
              ].map(({ icon: Icon, label,route }, index) => (
                <button
                  key={index}
                    onClick={() => handleButtonClick(route)}
                  className="flex flex-col items-center space-y-2 border p-4 rounded-lg bg-white hover:shadow-md transition-shadow"
                >
                  <Icon className="h-12 w-12 text-blue-600" />
                  <h3 className="text-lg font-semibold text-center">{label}</h3>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Ready to Accelerate Your Engineering Career?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-800">
                  Join thousands of engineers who are leveling up their skills with personalized learning paths.
                </p>
              </div>
              <button
                  onClick={() => handleButtonClick("/second-page")}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">Pro-Fetch</p>
        <button
            onClick={() => handleButtonClick("/second-page")}
          className="sm:ml-auto text-xs text-gray-500 dark:text-gray-400 hover:underline"
        >
          Terms of Service
        </button>
        <button
            onClick={() => handleButtonClick("/second-page")}
          className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
        >
          Privacy Policy
        </button>
      </footer>
    </div>
  )
}