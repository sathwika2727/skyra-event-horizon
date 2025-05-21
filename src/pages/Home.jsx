
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Crafting Unforgettable Events",
    subtitle: "From intimate gatherings to grand celebrations, we create experiences that last a lifetime.",
    cta: "Explore Services",
    ctaLink: "/services"
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    title: "Dream Weddings Made Real",
    subtitle: "Your perfect day deserves perfect planning. Let us handle every detail.",
    cta: "Plan Your Wedding",
    ctaLink: "/services/weddings"
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Elevate Your Corporate Events",
    subtitle: "Professional planning for conferences, meetings, and company celebrations.",
    cta: "Learn More",
    ctaLink: "/services/corporate"
  }
];

const serviceCategories = [
  {
    icon: "🎂",
    title: "Weddings",
    description: "Complete wedding planning services",
    link: "/services/weddings"
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    description: "Professional meetings and conferences",
    link: "/services/corporate"
  },
  {
    icon: "🎉",
    title: "Birthdays",
    description: "Special celebration planning",
    link: "/services/birthdays"
  },
  {
    icon: "🎓",
    title: "Conferences",
    description: "Professional event management",
    link: "/services/conferences"
  }
];

const serviceGallery = [
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Elegant wedding setup"
  },
  {
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    alt: "Corporate event venue"
  },
  {
    image: "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Birthday party decoration"
  },
  {
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    alt: "Conference hall"
  }
];

const testimonials = [
  {
    quote: "Skyra Events made our wedding day truly magical. From the beautiful floral arrangements to the seamless coordination, every detail was perfect.",
    author: "Sarah & James",
    event: "Wedding"
  },
  {
    quote: "The team at Skyra handled our annual conference with utmost professionalism. Their attention to detail allowed us to focus on our content while they managed the logistics.",
    author: "Michael Roberts",
    event: "Corporate Conference"
  },
  {
    quote: "My daughter's 16th birthday party was exactly what she dreamed of. Skyra took her ideas and transformed them into reality beyond our expectations.",
    author: "Jennifer Davis",
    event: "Birthday Party"
  }
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen">
        <Carousel images={carouselImages} />
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {serviceCategories.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-primary hover:underline font-medium"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceGallery.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title">Why Choose Skyra Events?</h2>
              <p className="mb-6 text-lg">
                At Skyra Events, we blend creative storytelling with meticulous execution to create events that are not just organized—they're unforgettable experiences.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold mb-1">Creative Storytelling</h4>
                    <p className="text-gray-600">Every event tells a story — we help you write yours with immersive themes and experiential designs.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold mb-1">Vendor Excellence</h4>
                    <p className="text-gray-600">Our trusted network ensures quality catering, décor, and entertainment for your event.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold mb-1">Tech-Savvy Execution</h4>
                    <p className="text-gray-600">From online RSVP systems to live streaming, we bring events into the digital age.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Event planning" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-white p-4 rounded-tl-lg shadow-lg transform translate-y-1/4 translate-x-1/4 hidden md:block">
                <p className="font-bold text-xl">10+ Years</p>
                <p className="text-gray-600">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="ml-0">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Ready to Create Your Perfect Event?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let us help you plan your next unforgettable experience. From concept to execution, we'll be with you every step of the way.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-medium transition-colors"
          >
            Book Your Event Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
