// src/pages/Success.tsx
import './style.css'
import { useNavigate,useLocation } from 'react-router-dom'
import { Rocket,PartyPopper,CheckCircle2,LogOut } from 'lucide-react';
function Success() {
    const navigate = useNavigate()
    const { state } = useLocation();
    const firstName = state.firstName;
    const email = state.email;
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

        {/* Log out button*/}
        <div className="flex items-center gap-4 ml-auto mr-20">
            <span className="font-light text-gray-500 text-sm">
                Hi, {firstName}
            </span>
            <button className="border border-gray-400 flex items-center gap-2 bg-white hover:bg-gray-200 text-gray-500 font-semibold px-5 py-2 rounded-xl transition-colors text-xs">
                <LogOut color="gray" />
                Logout
            </button>
        </div>

      </nav>

            <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 px-10 py-12 text-center">
 
          {/* Party icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <PartyPopper className="w-9 h-9 text-green-600" />
          </div>
 
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-snug">
            Hello {state.firstName}, welcome to our website.
          </h1>
 
          {/* Success box */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-left mb-8">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-bold text-gray-900">Account created successfully</span>
            </div>
            <p className="text-sm text-gray-500 ml-7">
              A confirmation email has been sent to{' '}
              <span className="font-bold text-gray-700">{email}</span>.
            </p>
          </div>
 
          {/* CTA */}
          <button
            onClick={() => navigate('/dashboard', { state: { firstName, email } })}
            className="w-full h-12 rounded-xl border-2 border-blue-500 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            Go to Dashboard
          </button>
 
        </div>
      </main>
    </div>
  )
}
export default Success