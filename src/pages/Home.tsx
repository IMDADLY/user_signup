// src/pages/Home.tsx
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Rocket,ArrowRight,CircleCheck, UserRound } from 'lucide-react';
function Home() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-2 border-b border-gray-100">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <Rocket color="white"/>
          </div>
          <span className="font-bold text-gray-900 text-lg">Awesome App</span>
        </div>

        {/* Sign Up Button */}
        <button onClick={() => navigate('/signup')} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl transition-colors text-xs mr-20">
          <UserRound />
          Sign Up
        </button>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-36 pb-24">

        {/* Heading */}
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-gray-900">Build something</span><br />
          <span className="text-blue-600">awesome</span>
          <span className="text-gray-900"> today.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg max-w-lg mb-10 leading-relaxed">
          Experience the future of web development with our state-of-the-art platform.
          Fast, secure, and incredibly user-friendly. Join thousands of happy users today.
        </p>

        {/* CTA Button */}
        <button onClick={() => navigate('/signup')} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors mb-12 shadow-lg shadow-blue-200">
          Get started
          <ArrowRight strokeWidth={1.5} />
        </button>

        {/* Trust Badges */}
        <div className="flex items-center gap-8 text-gray-500 text-sm">
          {['Free Tier', 'No Credit Card', 'Open Source'].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <CircleCheck color="#3c82f6"/>
              {badge}
            </div>
          ))}
        </div>

      </section>

    </div>
  )
}
export default Home