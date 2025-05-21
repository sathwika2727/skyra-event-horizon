
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Service data
const serviceDetails = {
  weddings: {
    title: "Wedding Planning Services",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Our wedding planning services are designed to make your special day truly memorable. We handle everything from venue selection to the final send-off, ensuring a stress-free experience for you and your loved ones.",
    features: [
      "Venue selection and coordination",
      "Full-service wedding planning or day-of coordination",
      "Vendor management and negotiations",
      "Custom decoration and theme design",
      "Guest management and RSVP tracking",
      "Budget planning and management",
      "Timeline creation and execution",
      "Rehearsal dinner planning"
    ],
    pricing: {
      basic: 2500,
      standard: 5000,
      premium: 8500
    },
    gallery: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  birthdays: {
    title: "Birthday Party Planning",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Make your birthday celebration unforgettable with our custom party planning services. From intimate gatherings to extravagant celebrations, we create memorable experiences for all ages.",
    features: [
      "Creative theme development and execution",
      "Venue selection and decoration",
      "Entertainment planning and coordination",
      "Custom cake and catering arrangements",
      "Party favors and gift coordination",
      "Photography and videography services",
      "Guest invitations and management",
      "Setup and cleanup services"
    ],
    pricing: {
      basic: 700,
      standard: 1500,
      premium: 3000
    },
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  corporate: {
    title: "Corporate Event Management",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    description: "Elevate your company events with our professional corporate event management services. From conferences and meetings to team building activities and company celebrations, we deliver polished, impactful events.",
    features: [
      "Strategic event planning and execution",
      "Venue selection and negotiation",
      "Registration and attendee management",
      "Audio-visual and technical support",
      "Speaker and VIP coordination",
      "Branded materials and signage",
      "Catering and accommodation arrangements",
      "Post-event reporting and analytics"
    ],
    pricing: {
      basic: 3000,
      standard: 7500,
      premium: 15000
    },
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  college: {
    title: "College Event Production",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Our college event production services bring your campus events to life. From cultural festivals and academic conferences to graduation ceremonies, we deliver exceptional experiences for students, faculty, and alumni.",
    features: [
      "Festival and event concept development",
      "Campus venue coordination",
      "Stage design and production",
      "Talent booking and management",
      "Security and crowd management",
      "Marketing and promotion support",
      "Technical production (sound, lighting, video)",
      "Event logistics and volunteer coordination"
    ],
    pricing: {
      basic: 4000,
      standard: 8000,
      premium: 15000
    },
    gallery: [
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  conferences: {
    title: "Conference Management",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    description: "Our comprehensive conference management services ensure your event runs smoothly from planning to execution. We handle all aspects of conference organization so you can focus on your content and attendees.",
    features: [
      "Venue selection and management",
      "Registration and attendee services",
      "Speaker coordination",
      "Audio-visual and technical production",
      "Exhibitor management",
      "Catering and accommodation",
      "Marketing and promotional materials",
      "On-site staff coordination"
    ],
    pricing: {
      basic: 3500,
      standard: 7000,
      premium: 15000
    },
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const [service, setService] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the service data based on the URL parameter
    if (serviceType && serviceDetails[serviceType]) {
      setService(serviceDetails[serviceType]);
    }
  }, [serviceType]);
  
  if (!service) {
    return (
      <div className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Service not found</h2>
        <p className="mb-8">The service you are looking for doesn't exist or has been removed.</p>
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light-purple py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">{service.title}</h1>
              <p className="text-xl max-w-2xl">
                {service.description}
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to="/contact" className="btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              <div className="mt-10">
                <h2 className="text-3xl font-bold mb-6 font-playfair">Image Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.gallery.map((img, index) => (
                    <img 
                      key={index} 
                      src={img} 
                      alt={`${service.title} ${index + 1}`} 
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">What We Offer</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 font-playfair">Pricing Packages</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Basic Package</h3>
                    <p className="text-2xl font-bold text-primary">${service.pricing.basic}</p>
                  </div>
                  <p className="text-gray-600">
                    Essential services to get your event off the ground. Ideal for those with a limited budget.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Standard Package</h3>
                    <p className="text-2xl font-bold text-primary">${service.pricing.standard}</p>
                  </div>
                  <p className="text-gray-600">
                    Our most popular option with a balance of quality services and value. Perfect for most events.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-primary/30">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Premium Package</h3>
                    <p className="text-2xl font-bold text-primary">${service.pricing.premium}</p>
                  </div>
                  <p className="text-gray-600">
                    The ultimate event experience with all premium services and dedicated support throughout.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get a Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Create Your Perfect {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life. Contact us today to start planning your unforgettable experience.
          </p>
          <Link 
            to="/contact"
            className="btn-primary"
          >
            Start Planning Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
