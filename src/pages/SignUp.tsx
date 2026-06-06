import './style.css'
import { Rocket} from 'lucide-react';
function SignUp() {
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

      </nav>
    </div>
  )
}
export default SignUp