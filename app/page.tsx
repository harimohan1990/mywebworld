import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Cloud, Brain, Wrench, Users, Star, Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TechConsult Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-blue-600 block">Expert Software Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I help startups and growing businesses build scalable software, integrate AI, and optimize their tech stack. 
              From MVP to enterprise-grade solutions, get the expertise of a senior developer without the overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#case-studies" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to deployment, I provide end-to-end software development services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy & Planning</h3>
              <p className="text-gray-600 mb-4">
                Technical roadmaps, architecture design, and technology stack recommendations to align with your business goals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />MVP Planning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Tech Stack Selection</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Architecture Design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Stack Development</h3>
              <p className="text-gray-600 mb-4">
                Modern web applications using React, Next.js, Node.js, and Python/Django with best practices and clean code.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />React/Next.js Frontend</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Node.js/Python Backend</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Database Design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Integration</h3>
              <p className="text-gray-600 mb-4">
                Integrate AI capabilities into your existing systems or build new AI-powered features to automate and enhance your business.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />ChatGPT/OpenAI Integration</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom AI Models</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Process Automation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-4">
                AWS deployment, CI/CD pipelines, and infrastructure optimization for scalable, reliable applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />AWS Infrastructure</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />CI/CD Pipelines</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Performance Optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-4">
                Ongoing maintenance, bug fixes, feature updates, and technical support to keep your applications running smoothly.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 Monitoring</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Regular Updates</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Technical Support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Augmentation</h3>
              <p className="text-gray-600 mb-4">
                Scale your development team with senior-level expertise. Perfect for startups needing technical leadership.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Technical Leadership</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Code Reviews</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Senior Developer with 8+ Years of Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a full-stack developer who has helped dozens of startups and SMBs build scalable software solutions. 
                My expertise spans modern web technologies, cloud infrastructure, and AI integration.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">React & Next.js Expert</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Node.js & Python/Django</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AWS Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AI/ML Integration</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Why Choose Me Over Agencies?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Direct Communication:</strong> Work directly with the developer, no middlemen</li>
                  <li>• <strong>Cost Effective:</strong> Senior-level expertise at 50% less than agency rates</li>
                  <li>• <strong>Faster Delivery:</strong> No bureaucracy, quick decisions and implementations</li>
                  <li>• <strong>Personal Investment:</strong> Your success is my reputation</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">React/Next.js</span>
                    <span className="text-sm text-gray-500">Expert</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Node.js/Express</span>
                    <span className="text-sm text-gray-500">Expert</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Python/Django</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">AWS/Cloud</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">AI/ML Integration</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your needs. All packages include direct communication and high-quality deliverables.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600">Perfect for MVPs and small projects</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">MVP Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic Frontend + Backend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Database Setup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic Deployment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">2 Weeks Delivery</span>
                </li>
              </ul>
              <a href="#contact" className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors block text-center">
                Get Started
              </a>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                <p className="text-blue-100">For scaling businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-white">Full-Stack Application</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-white">Advanced Features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-white">AI Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-white">AWS Deployment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-white">4-6 Weeks Delivery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-white">3 Months Support</span>
                </li>
              </ul>
              <a href="#contact" className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors block text-center">
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">Complex systems and ongoing partnership</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Enterprise Architecture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Multiple Integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom AI Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced DevOps</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Ongoing Retainer</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Priority Support</span>
                </li>
              </ul>
              <a href="#contact" className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors block text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how I've helped businesses transform their operations with custom software solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">E-commerce Platform</h3>
                  <p className="text-gray-600">SaaS Startup</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Problem:</strong> Startup needed a scalable e-commerce platform to compete with established players.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Solution:</strong> Built a modern React/Node.js platform with AI-powered recommendations and AWS infrastructure.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Outcome:</strong> 300% increase in conversion rates, $2M ARR within 12 months, successful Series A funding.
              </p>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">Client Rating</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI Customer Service</h3>
                  <p className="text-gray-600">Manufacturing SMB</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Problem:</strong> High customer service costs and slow response times affecting customer satisfaction.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Solution:</strong> Integrated ChatGPT-powered chatbot with existing CRM, automated 80% of common inquiries.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Outcome:</strong> 60% reduction in support costs, 24/7 availability, 95% customer satisfaction score.
              </p>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">Client Rating</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Cloud className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Cloud Migration</h3>
                  <p className="text-gray-600">Healthcare Tech</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Problem:</strong> Legacy system couldn't scale, frequent downtime, high maintenance costs.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Solution:</strong> Migrated to AWS with microservices architecture, implemented CI/CD, and monitoring.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Outcome:</strong> 99.9% uptime, 50% cost reduction, 10x faster deployments, HIPAA compliance.
              </p>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure project success?</h3>
              <p className="text-gray-600">I follow a proven process: detailed requirements gathering, regular check-ins, iterative development, and thorough testing. You'll have full visibility into progress with weekly updates and demos.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's your typical project timeline?</h3>
              <p className="text-gray-600">MVPs typically take 2-4 weeks, full applications 4-8 weeks, and enterprise solutions 8-16 weeks. Timeline depends on complexity and scope, which we'll define clearly upfront.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes! All projects include initial support period. I also offer monthly retainer packages for ongoing maintenance, updates, and feature development.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you handle project changes?</h3>
              <p className="text-gray-600">Small changes are included in the scope. Larger changes are discussed and quoted separately. I believe in flexibility while maintaining project integrity and timeline.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What technologies do you specialize in?</h3>
              <p className="text-gray-600">I specialize in modern web technologies: React/Next.js for frontend, Node.js and Python/Django for backend, AWS for cloud infrastructure, and various AI/ML APIs for intelligent features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss your project and see how I can help you build the software solution your business needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-blue-100">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>harimohan.info@gmail.com</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+91 63666 53022</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Available for remote projects worldwide</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                <div className="space-y-3 text-blue-100">
                  <div className="flex items-center">
                    <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">1</div>
                    <span>Free 30-minute consultation call</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">2</div>
                    <span>Detailed project proposal and timeline</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">3</div>
                    <span>Start building your solution</span>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">TechConsult Pro</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 TechConsult Pro. All rights reserved.</p>
              <p className="mt-1">Transforming businesses through expert software solutions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}