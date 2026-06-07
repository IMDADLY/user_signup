// src/pages/Success.tsx
import './style.css'
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import { Rocket,PartyPopper,CheckCircle2,LogOut, AlertTriangle, X } from 'lucide-react';
function Success() {
    const navigate = useNavigate()
    const { state } = useLocation();
    const firstName = state.firstName;
    const email = state.email;
    const [showLogoutModal, setShowLogoutModal] = useState(false);
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

                {/* Log out button */}
        <div className="flex items-center gap-4 ml-auto mr-20">
          <span className="font-light text-gray-500 text-sm">
            Hi, {firstName}
          </span>
          <button
            className="border border-gray-400 flex items-center gap-2 bg-white hover:bg-gray-200 text-gray-500 font-semibold px-5 py-2 rounded-xl transition-colors text-xs"
            onClick={() => setShowLogoutModal(true)}
          >
            <LogOut color="gray" />
            Logout
          </button>
          {showLogoutModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4">
                {/* Top section */}
                <div className="px-6 py-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-gray-900 mb-1">
                        Log out
                      </h2>
                      <p className="text-sm text-gray-500">
                        Are you sure you want to log out?
                      </p>
                    </div>
                    <button onClick={() => setShowLogoutModal(false)}>
                      <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="bg-gray-50 px-6 py-4 rounded-b-2xl flex justify-end gap-3">
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="px-6 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="px-6 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
                  >
                    Yes, Logout
                  </button>
                </div>
              </div>
            </div>
          )}
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