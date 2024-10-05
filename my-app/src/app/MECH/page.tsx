"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Rocket, ChevronDown, Cog, Truck, Thermometer, Waves, Wind, Zap, Hammer, Microscope } from "lucide-react"

const subdomains = [
  { 
    name: "Thermodynamics", 
    icon: Thermometer, 
    description: "Study of heat and temperature and their relation to energy and work." 
  },
  { 
    name: "Fluid Mechanics", 
    icon: Waves, 
    description: "Study of fluids and the forces on them." 
  },
  { 
    name: "Robotics", 
    icon: Cog, 
    description: "Design, construction, operation, and use of robots." 
  },
  { 
    name: "Automotive Engineering", 
    icon: Truck, 
    description: "Design, manufacture, and operation of automobiles." 
  },
  { 
    name: "Aerodynamics", 
    icon: Wind, 
    description: "Study of the motion of air and its interaction with solid objects." 
  },
  { 
    name: "Energy Systems", 
    icon: Zap, 
    description: "Study and design of energy-related systems and their components." 
  },
  { 
    name: "Manufacturing", 
    icon: Hammer, 
    description: "Converting raw materials into finished products on a large scale." 
  },
  { 
    name: "Nanotechnology", 
    icon: Microscope, 
    description: "Manipulation of matter on an atomic, molecular, and supramolecular scale." 
  },
]

export default function MechanicalEngineeringPage() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Rocket className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-lg font-bold">Pro-Fetch</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={() => router.push("/")}>
            Home
          </button>
          <button className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={() => router.push("/courses")}>
            Courses
          </button>
          <button className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={() => router.push("/about")}>
            About
          </button>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <Cog className="h-16 w-16 text-blue-600" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Mechanical Engineering
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore the diverse subdomains of mechanical engineering and kickstart your learning journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdomains.map((subdomain, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <div className="flex items-center space-x-2 mb-4">
                  <subdomain.icon className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-semibold">{subdomain.name}</h2>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{subdomain.description}</p>
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => router.push(`/courses/mechanical/${subdomain.name.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  Explore Courses
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-2">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-md">
              <h2 className="text-lg font-semibold">Why study Mechanical Engineering?</h2>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-700"
                aria-expanded={isOpen}
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
                <span className="sr-only">Toggle</span>
              </button>
            </div>
            {isOpen && (
              <div className="px-4 py-2 space-y-2">
                <p>Mechanical Engineering offers:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Diverse career opportunities</li>
                  <li>Chance to innovate and solve real-world problems</li>
                  <li>High demand in various industries</li>
                  <li>Opportunity to work on cutting-edge technologies</li>
                  <li>Strong foundation for entrepreneurship</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Pro-Fetch. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}