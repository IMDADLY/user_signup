// src/pages/Home.tsx
import "./style.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Rocket,
  ArrowRight,
  CircleCheck,
  LogOut,
  AlertTriangle,
  X,
} from "lucide-react";
function Dashboard() {
  const navigate = useNavigate();
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
            <Rocket color="white" />
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

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-36 pb-24">
        {/* Heading */}
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-gray-900">Build something</span>
          <br />
          <span className="text-blue-600">awesome</span>
          <span className="text-gray-900"> today.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg max-w-lg mb-10 leading-relaxed">
          Experience the future of web development with our state-of-the-art
          platform. Fast, secure, and incredibly user-friendly. Join thousands
          of happy users today.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/success", { state: { firstName, email } })}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors mb-12 shadow-lg shadow-blue-200"
        >
          Get started
          <ArrowRight strokeWidth={1.5} />
        </button>

        {/* Trust Badges */}
        <div className="flex items-center gap-8 text-gray-500 text-sm">
          {["Free Tier", "No Credit Card", "Open Source"].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <CircleCheck color="#3c82f6" />
              {badge}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Dashboard;
