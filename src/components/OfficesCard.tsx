import { MapPin, Phone, Mail, Building2, Globe } from "lucide-react";

const OfficesCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-gray-50 to-white">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-green-600">Global Offices</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to serve you across the globe. Feel free to visit any of our offices or contact us directly.
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* CALL CARD - Enhanced Design */}
      <div className="mb-16 flex justify-center">
        <div className="relative group">
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-700 text-white p-10 rounded-2xl shadow-2xl w-full md:w-[600px] text-center transform hover:scale-105 transition-all duration-300 hover:shadow-green-200/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative">
              <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3">24/7 Customer Support</h2>
              <p className="text-green-100 mb-6">We're here to help you anytime</p>
              <a
                href="tel:+919667866491"
                className="inline-block text-3xl font-bold tracking-wide hover:underline bg-white/10 px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/20"
              >
                +91 96678 66491
              </a>
              <p className="text-sm text-green-100 mt-4">Toll-free • Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* OFFICE CARDS - Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* India Head Office Delhi - Featured Card */}
        <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-400 to-green-600"></div>
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">India Head Office</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 ml-3 text-sm">M 93 Basement M Block, Saket, New Delhi 110017, India</p>
              </div>
              
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                <a href="tel:+919667866491" className="text-gray-700 ml-3 text-sm hover:text-green-600 transition-colors">
                  +91 9667866491
                </a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 ml-3 text-sm font-medium">Email Us:</span>
                </div>
                <div className="ml-8 space-y-1">
                  <a href="mailto:info@imfoodsindia.com" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                    info@imfoodsindia.com
                  </a>
                  <a href="mailto:contact@imfoodsindia.com" className="block text-sm text-gray-600 hover:text-green-600 transition-colors">
                    contact@imfoodsindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Office Tamil Nadu */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Tamil Nadu</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 ml-3 text-sm">Level 6, 10/11 Dr. Radhakrishnan Salai, Mylapore, Chennai - 600004</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 ml-3 text-sm font-medium">Contact:</span>
                </div>
                <div className="ml-8 space-y-1">
                  <a href="mailto:info@imfoodsindia.com" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    info@imfoodsindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Office Maharashtra */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Maharashtra</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 ml-3 text-sm">Regus Platinum, Level 13, Vashi, Navi Mumbai - 400705</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 ml-3 text-sm font-medium">Contact:</span>
                </div>
                <div className="ml-8 space-y-1">
                  <a href="mailto:info@imfoodsindia.com" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    info@imfoodsindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Office New Delhi */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">New Delhi</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 ml-3 text-sm">4th Floor Rectangle No.1, Saket, New Delhi - 110017</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 ml-3 text-sm font-medium">Contact:</span>
                </div>
                <div className="ml-8 space-y-1">
                  <a href="mailto:info@imfoodsindia.com" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                    info@imfoodsindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dubai Head Office - International */}
        <div className="group md:col-span-2 lg:col-span-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500/20 p-3 rounded-xl">
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white ml-4">Dubai - UAE</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-gray-200 ml-3 text-sm">No.3705, Citadel Tower, Business Bay, Dubai, UAE - 34988</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-200 ml-3 text-sm font-medium">Email:</span>
                </div>
                <div className="ml-8 space-y-1">
                  <a href="mailto:info@imfoodsindia.com" className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                    info@imfoodsindia.com
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        <p>📍 Visit any of our offices during business hours (9:00 AM - 6:00 PM)</p>
        <p className="mt-2">📞 For urgent queries, please use our 24/7 support line</p>
      </div>
    </div>
  );
};

export default OfficesCard;