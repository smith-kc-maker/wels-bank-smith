import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CreditCard, Smartphone, Lock, TrendingUp, Users, CheckCircle, ArrowRight, Star, Award, Globe } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security & Protection',
      description: 'Your accounts are protected by advanced security measures and FDIC insurance up to $250,000.',
    },
    {
      icon: Smartphone,
      title: 'Mobile & Online Banking',
      description: 'Bank anytime, anywhere with our award-winning mobile app and online platform.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Get personalized insights and tools to help you reach your financial goals.',
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Access 24/7 customer service and visit over 4,700 locations nationwide.',
    },
  ];

  const products = [
    {
      title: 'Checking Accounts',
      description: 'Everyday banking made simple with no monthly fees and convenient access.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['No minimum balance', 'Free online banking', 'Mobile check deposit']
    },
    {
      title: 'Savings Accounts',
      description: 'Grow your money with competitive rates and flexible savings options.',
      image: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['High yield options', 'Automatic savings', 'Goal tracking tools']
    },
    {
      title: 'Credit Cards',
      description: 'Earn rewards and build credit with our range of credit card options.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Cash back rewards', 'No annual fee options', 'Credit monitoring']
    },
    {
      title: 'Home Loans',
      description: 'Make homeownership possible with competitive rates and expert guidance.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Low down payment', 'First-time buyer programs', 'Online pre-approval']
    }
  ];

  const stats = [
    { value: '70M+', label: 'Customers Served' },
    { value: '4,700+', label: 'Locations' },
    { value: '150+', label: 'Years of Service' },
    { value: '#1', label: 'Small Business Lender' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Wells Fargo Style */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Professional banking" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/80 to-red-600/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Banking that puts
                  <span className="block text-yellow-300">
                    customers first
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-red-100 leading-relaxed max-w-2xl">
                  For over 150 years, we've been helping customers achieve their financial goals. 
                  Experience banking built around your needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Open Account Today
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-700 transition-all duration-300 text-center"
                >
                  Sign On
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-300" />
                  <span className="text-sm font-medium">FDIC Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-yellow-300" />
                  <span className="text-sm font-medium">Bank-Grade Security</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">SecureBank</h3>
                        <p className="text-sm text-gray-600">Premium Account</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Available Balance</p>
                      <p className="text-2xl font-bold text-gray-900">$127,459.50</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Checking</div>
                      <div className="text-xl font-bold text-gray-900">$24,590.00</div>
                      <div className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +2.5% this month
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600">Savings</div>
                      <div className="text-xl font-bold text-gray-900">$102,869.50</div>
                      <div className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +1.8% APY
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Recent Activity</span>
                      <span className="text-xs text-green-600">All systems normal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-red-600">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Banking Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the right financial solutions for your personal and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SecureBank?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're committed to helping you succeed financially with innovative solutions, 
                personalized service, and the security you can trust.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Professional banking consultation" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Trusted by millions</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">4.8/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Banking background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Better Banking?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join millions of customers who trust SecureBank for their financial future. 
            Open your account in minutes and start banking with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Open Account Now
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-700 transition-all duration-300"
            >
              Existing Customer Sign On
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Globe className="h-8 w-8 mx-auto text-yellow-300" />
              <h4 className="font-semibold">Global Reach</h4>
              <p className="text-sm text-red-100">Banking services worldwide</p>
            </div>
            <div className="space-y-2">
              <Shield className="h-8 w-8 mx-auto text-yellow-300" />
              <h4 className="font-semibold">Secure & Protected</h4>
              <p className="text-sm text-red-100">FDIC insured up to $250,000</p>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 mx-auto text-yellow-300" />
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm text-red-100">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;