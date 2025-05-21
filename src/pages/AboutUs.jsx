
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light-purple py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Crafting unforgettable experiences with heart, vision, and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story – Why Skyra Events Was Born</h2>
              <p className="mb-6">
                Skyra Events was born from a deep realization — that most events focus only on logistics,
                not emotions. Our founder attended a lavish wedding that looked great on the outside but
                lacked soul, connection, and flow. That experience sparked the idea to build an event
                company where emotion meets execution.
              </p>
              <p className="mb-6">
                We didn't want to just organize events — we wanted to curate unforgettable experiences.
                Skyra was built to blend creative storytelling, intentional design, and meticulous planning
                into one powerful formula. From surprise birthday parties to high-stakes corporate galas, we
                approach each event with heart, vision, and precision.
              </p>
              <p className="font-medium">
                What sets us apart is our belief that every event is a story — and we help you tell yours with
                beauty, meaning, and impact.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Event celebration" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Our Mission</h3>
              <p className="mb-4">
                At Skyra Events, our mission is to craft meaningful, memorable experiences through thoughtful
                event design and seamless execution. We aim to understand the unique needs of every client and
                transform their vision into reality with creativity, care, and precision.
              </p>
              <p className="mb-4">
                Whether it's a grand wedding or an intimate birthday party, we strive to create moments that 
                evoke emotion and joy. Our team works tirelessly to ensure every event is not just successful 
                but unforgettable.
              </p>
              <p>
                We believe in building lasting relationships through trust, transparency, and excellence in 
                service. Every celebration deserves a personal touch — and that's what we deliver.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Our Vision</h3>
              <p className="mb-4">
                Skyra Events envisions becoming India's most trusted and admired event management brand,
                known for innovation, professionalism, and heartfelt storytelling. We aspire to set new 
                standards in event planning by combining creativity with cutting-edge technology and 
                exceptional customer experience.
              </p>
              <p className="mb-4">
                Our goal is to expand across cities while maintaining our personalized approach, ensuring
                that every Skyra event feels custom-made and impactful.
              </p>
              <p>
                We see a future where every life milestone is made magical — with Skyra at the heart of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Skyra Event Management */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">About Skyra Event Management</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Skyra Events is a full-service event management company offering bespoke event planning
            for a wide range of occasions, ensuring every detail is perfectly executed.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Wedding" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weddings & Pre-wedding</h3>
                <p className="text-gray-600">
                  From engagement parties to the big day, we handle every aspect of your wedding celebrations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                alt="Corporate Event" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
                <p className="text-gray-600">
                  Professional planning for conferences, meetings, team buildings, and company celebrations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Birthday Party" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Birthday & Surprise Parties</h3>
                <p className="text-gray-600">
                  Create memorable celebrations for any age with custom themes and entertainment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Let's Create Something Amazing Together</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your event vision to life? Contact us today and let's start planning your perfect occasion.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded font-medium transition-colors"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
