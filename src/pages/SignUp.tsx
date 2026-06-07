import './style.css'
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

type DataUsage = '0-50mb' | '50-250mb' | '250mb-1gb' | '1gb+' | null;

const inputClass = 'w-full h-11 px-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

function SignUp() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dataUsage, setDataUsage] = useState<DataUsage>(null);
  const [promoCode, setPromoCode] = useState('');
  const [receiveOffers, setReceiveOffers] = useState(false);

  const dataOptions: { id: DataUsage; label: string }[] = [
    { id: '0-50mb',    label: '0-50 MB'      },
    { id: '50-250mb',  label: '50-250 MB'    },
    { id: '250mb-1gb', label: '250 MB-1 GB'  },
    { id: '1gb+',      label: '1 GB+'        },
  ];

  const toggleOffers = () => setReceiveOffers((prev) => !prev);

  const handleSubmit = () => {
    navigate('/dashboard', {
      state: { firstName, lastName, email, dataUsage, promoCode }
    });
};
  const handleCancel = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setDataUsage(null);
    setPromoCode('');
    setReceiveOffers(false);
    navigate('/')
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ── Navbar ── */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center gap-3 " onClick={() => navigate('/')}>
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-gray-900 font-semibold text-lg tracking-tight ">
            Awesome App
          </span>
        </div>
      </nav>

      {/* ── Page body ── */}
      <main className="px-4 py-10">

        <h1 className="text-center text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Customer Signup
        </h1>

        {/* Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 text-left font-semibold">

          {/* ── Personal Information ── */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Personal Information</h2>
            <hr className="border-gray-200 mb-6" />

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className={labelClass}>
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
          </section>

          {/* ── Service Configuration ── */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Service Configuration</h2>
            <hr className="border-gray-200 mb-6" />

            {/* Data Usage */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-3">
                Estimated Data Usage
              </label>
              <div className="grid grid-cols-2 gap-3">
                {dataOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setDataUsage(option.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm transition-all ${
                      dataUsage === option.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      dataUsage === option.id ? 'border-blue-500' : 'border-gray-400'
                    }`}>
                      {dataUsage === option.id && (
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <label className={labelClass}>
                Promo Code <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Offers Checkbox */}
            <div className="flex items-start gap-3">
              <button
                type="button"
                role="checkbox"
                aria-checked={receiveOffers}
                onClick={toggleOffers}
                className={`mt-0.5 w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
                  receiveOffers
                    ? 'bg-white border-blue-500'
                    : 'bg-white border-gray-300 hover:border-gray-400'
                }`}
              >
                {receiveOffers && (
                  <svg className="w-2.5 h-2.5 text-blue-600" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <div>
                <label htmlFor="offers" className="text-sm text-gray-800 cursor-pointer select-none">
                  Send me occasional (annoying) offers
                </label>
                <p className="text-sm text-blue-500 mt-0.5 font-medium">We promise to spam you too much.</p>
              </div>
            </div>
          </section>

          {/* ── Actions ── */}
          <hr className="border-gray-200 mb-6" />
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 h-12 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm hover:bg-gray-50 active:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-[2] h-12 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 active:bg-blue-800 shadow-sm transition"
            >
              Create Account
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
export default SignUp;