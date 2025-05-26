import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Service data with updated Indian wedding images
const serviceDetails = {
  weddings: {
    title: "Wedding Planning Services",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
      basic: { price: 2500, name: "Basic Package", description: "Essential services to get your event off the ground. Ideal for those with a limited budget." },
      standard: { price: 5000, name: "Standard Package", description: "Our most popular option with a balance of quality services and value. Perfect for most events." },
      premium: { price: 8500, name: "Premium Package", description: "The ultimate event experience with all premium services and dedicated support throughout." }
    },
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  birthdays: {
    title: "Birthday Party Planning",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
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
      basic: { price: 700, name: "Basic Package", description: "Essential services to get your event off the ground. Ideal for those with a limited budget." },
      standard: { price: 1500, name: "Standard Package", description: "Our most popular option with a balance of quality services and value. Perfect for most events." },
      premium: { price: 3000, name: "Premium Package", description: "The ultimate event experience with all premium services and dedicated support throughout." }
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
    backgroundImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
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
      basic: { price: 3000, name: "Basic Package", description: "Essential services to get your event off the ground. Ideal for those with a limited budget." },
      standard: { price: 7500, name: "Standard Package", description: "Our most popular option with a balance of quality services and value. Perfect for most events." },
      premium: { price: 15000, name: "Premium Package", description: "The ultimate event experience with all premium services and dedicated support throughout." }
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
    backgroundImage: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
      basic: { price: 4000, name: "Basic Package", description: "Essential services to get your event off the ground. Ideal for those with a limited budget." },
      standard: { price: 8000, name: "Standard Package", description: "Our most popular option with a balance of quality services and value. Perfect for most events." },
      premium: { price: 15000, name: "Premium Package", description: "The ultimate event experience with all premium services and dedicated support throughout." }
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
    backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
      basic: { price: 3500, name: "Basic Package", description: "Essential services to get your event off the ground. Ideal for those with a limited budget." },
      standard: { price: 7000, name: "Standard Package", description: "Our most popular option with a balance of quality services and value. Perfect for most events." },
      premium: { price: 15000, name: "Premium Package", description: "The ultimate event experience with all premium services and dedicated support throughout." }
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
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.backgroundImage})`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">{service.title}</h1>
              <p className="text-xl max-w-2xl">
                {service.description}
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded hover:bg-purple-600 transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - What's Offered */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">What's Offered</h2>
              <ul className="space-y-4 mb-10">
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
            </div>

            {/* Right Column - Main Image */}
            <div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Portfolio/Gallery Section with Functional Carousel */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Portfolio</h2>
            <div className="max-w-4xl mx-auto relative">
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {service.gallery.map((img, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <img 
                          src={img} 
                          alt={`${service.title} ${index + 1}`} 
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>

          {/* Packages Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Object.entries(service.pricing).map(([key, pkg]) => (
                <div key={key} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
                  <h3 className="text-2xl font-bold mb-4 font-playfair">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-4">₹{pkg.price.toLocaleString()}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <Link 
                    to="/contact" 
                    className="w-full block py-3 px-6 rounded transition-colors border border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Choose Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-white">Ready to Create Your Perfect {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Let's bring your vision to life. Contact us today to start planning your unforgettable experience.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-medium transition-colors inline-block"
          >
            Start Planning Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
