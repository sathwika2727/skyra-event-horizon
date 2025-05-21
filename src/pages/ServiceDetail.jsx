
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Service data
const servicesData = {
  weddings: {
    title: "Weddings",
    subtitle: "Making Your Special Day Unforgettable",
    heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "We understand that your wedding day is one of the most important days of your life. Our team of experienced wedding planners will work closely with you to create a personalized and unforgettable experience that reflects your unique style and vision.",
    features: [
      {
        icon: "📝",
        title: "Ceremony Planning",
        description: "Complete planning and coordination of your wedding ceremony."
      },
      {
        icon: "🏠",
        title: "Venue Booking",
        description: "Selection and booking of the perfect venue for your special day."
      },
      {
        icon: "🍽️",
        title: "Catering & Menu Customization",
        description: "Tailored menu options to suit your taste and preferences."
      },
      {
        icon: "🌸",
        title: "Decor & Floral Arrangements",
        description: "Beautiful decorations and floral designs to enhance your venue."
      },
      {
        icon: "📸",
        title: "Photography & Videography",
        description: "Professional photographers and videographers to capture every moment."
      },
      {
        icon: "🚗",
        title: "Transportation for Guests",
        description: "Coordinated transportation services for your wedding party and guests."
      }
    ],
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Elegant indoor wedding setup"
      },
      {
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        description: "Garden wedding with floral arrangements"
      },
      {
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Luxury venue with elegant decor"
      }
    ],
    packages: [
      {
        title: "Basic Bliss",
        price: 45000,
        features: [
          "Decor",
          "Floral arrangements",
          "Basic coordination",
          "Venue selection assistance"
        ]
      },
      {
        title: "Premium Charm",
        price: 99000,
        features: [
          "Premium decor",
          "Live DJ",
          "Full planning service",
          "Photography & videography"
        ]
      },
      {
        title: "Royal Affair",
        price: 159000,
        features: [
          "Luxury venue",
          "Celebrity artist",
          "Complete planning",
          "Premium catering & bar service"
        ]
      }
    ],
    testimonial: {
      quote: "Skyra Events made our wedding day truly magical. From the beautiful floral arrangements to the seamless coordination, every detail was perfect.",
      author: "Sarah & James",
      event: "Wedding, May 2023"
    }
  },
  corporate: {
    title: "Corporate Events",
    subtitle: "Professional Planning for Impactful Experiences",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    description: "From conferences and meetings to team-building events and corporate parties, we provide comprehensive planning and execution services to ensure your corporate event achieves its objectives and leaves a lasting impression on your attendees.",
    features: [
      {
        icon: "🏢",
        title: "Venue Booking",
        description: "Selection and booking of appropriate venues based on your requirements."
      },
      {
        icon: "🔊",
        title: "AV Setup",
        description: "Complete audio-visual setup for presentations and speeches."
      },
      {
        icon: "🍽️",
        title: "Catering",
        description: "Professional catering services with customized menu options."
      },
      {
        icon: "📝",
        title: "Registration Management",
        description: "Streamlined registration process for attendees."
      },
      {
        icon: "👥",
        title: "On-Site Support",
        description: "Dedicated team to handle any issues during the event."
      },
      {
        icon: "📊",
        title: "Documentation",
        description: "Comprehensive documentation of the event for future reference."
      }
    ],
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        description: "Annual corporate conference"
      },
      {
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        description: "Executive team-building retreat"
      },
      {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        description: "Corporate awards ceremony"
      },
      {
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        description: "Product launch event"
      }
    ],
    packages: [
      {
        title: "Basic",
        price: 2000,
        features: [
          "Consultant Coordination",
          "AV support Limited",
          "Basic venue arrangement",
          "Standard catering options"
        ]
      },
      {
        title: "Executive",
        price: 3500,
        features: [
          "Venue pre-selection",
          "AV setup, full service",
          "Premium catering options",
          "Registration management"
        ]
      },
      {
        title: "Premium",
        price: 5000,
        features: [
          "Comprehensive management",
          "Premium catering",
          "Full technical support",
          "Post-event analysis"
        ]
      }
    ],
    testimonial: {
      quote: "The team at Skyra handled our annual conference with utmost professionalism. Their attention to detail allowed us to focus on our content while they managed the logistics.",
      author: "Michael Roberts",
      event: "Tech Conference, November 2023"
    }
  },
  birthdays: {
    title: "Birthday Parties",
    subtitle: "Creating Memorable Celebrations for All Ages",
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Whether it's a child's themed party, a milestone birthday, or a surprise celebration, our team will create a personalized experience that reflects the personality and interests of the birthday person.",
    features: [
      {
        icon: "🎨",
        title: "Theme Selection",
        description: "Creative themes tailored to the birthday person's interests."
      },
      {
        icon: "🏠",
        title: "Venue Arrangement",
        description: "Finding and decorating the perfect venue for your celebration."
      },
      {
        icon: "🎁",
        title: "Party Supplies",
        description: "All the decorations, favors, and supplies needed for a great party."
      },
      {
        icon: "🎮",
        title: "Games and Activities",
        description: "Fun and engaging activities to keep guests entertained."
      },
      {
        icon: "🎂",
        title: "Cake and Catering",
        description: "Custom cakes and delicious food options for your guests."
      },
      {
        icon: "📸",
        title: "Photography",
        description: "Professional photography to capture the special moments."
      }
    ],
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Colorful children's birthday party"
      },
      {
        image: "https://images.unsplash.com/photo-1532117182044-9a50433e4bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Elegant 30th birthday celebration"
      },
      {
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
        description: "Surprise 50th birthday party"
      }
    ],
    packages: [
      {
        title: "Fun Package",
        price: 700,
        features: [
          "Basic decorations",
          "Birthday cake",
          "Party favors",
          "2-hour event coordination"
        ]
      },
      {
        title: "Deluxe Party",
        price: 1500,
        features: [
          "Custom theme decorations",
          "Catering for up to 20 guests",
          "Professional photographer",
          "Entertainment options"
        ]
      },
      {
        title: "Ultimate Celebration",
        price: 3000,
        features: [
          "Premium venue",
          "Full catering service",
          "Live entertainment",
          "Custom decorations & photography"
        ]
      }
    ],
    testimonial: {
      quote: "My daughter's 16th birthday party was exactly what she dreamed of. Skyra took her ideas and transformed them into reality beyond our expectations.",
      author: "Jennifer Davis",
      event: "Sweet 16 Birthday Party, August 2023"
    }
  },
  conferences: {
    title: "Conferences",
    subtitle: "Professional Management for Successful Events",
    heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    description: "From small business seminars to large industry conferences, we handle all aspects of conference planning and execution to ensure a smooth and successful event that meets your objectives.",
    features: [
      {
        icon: "🏢",
        title: "Venue Selection",
        description: "Finding the perfect venue with appropriate facilities for your conference."
      },
      {
        icon: "📝",
        title: "Registration Management",
        description: "Complete registration system for attendees, including online registration."
      },
      {
        icon: "🎤",
        title: "Speaker Coordination",
        description: "Handling speaker arrangements, schedules, and requirements."
      },
      {
        icon: "🔊",
        title: "Audio-Visual Equipment",
        description: "Professional AV setup for presentations and panels."
      },
      {
        icon: "🍽️",
        title: "Catering Services",
        description: "Meals, refreshments, and coffee breaks for attendees."
      },
      {
        icon: "📊",
        title: "Event Materials",
        description: "Preparation of badges, programs, and conference materials."
      }
    ],
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        description: "International business conference"
      },
      {
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        description: "Technology summit"
      },
      {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        description: "Medical conference"
      },
      {
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Education symposium"
      }
    ],
    packages: [
      {
        title: "Basic Conference",
        price: 5000,
        features: [
          "Venue coordination",
          "Basic AV setup",
          "Registration management",
          "Standard catering options"
        ]
      },
      {
        title: "Standard Conference",
        price: 10000,
        features: [
          "Full venue management",
          "Complete AV solutions",
          "Online registration system",
          "Premium catering packages"
        ]
      },
      {
        title: "Premium Conference",
        price: 20000,
        features: [
          "Luxury venue arrangements",
          "Advanced technology integration",
          "VIP speaker management",
          "Comprehensive event services"
        ]
      }
    ],
    testimonial: {
      quote: "Skyra Events managed our medical conference flawlessly. From registration to the closing ceremony, every detail was handled professionally and efficiently.",
      author: "Dr. Rebecca Chen",
      event: "International Medical Conference, October 2023"
    }
  },
  college: {
    title: "College Fests",
    subtitle: "Creating Vibrant and Memorable Campus Events",
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "We specialize in organizing dynamic and engaging college festivals, cultural events, and campus celebrations that create lasting memories for students and faculty alike.",
    features: [
      {
        icon: "🎭",
        title: "Festival Program Planning",
        description: "Comprehensive planning and scheduling of all festival activities and events."
      },
      {
        icon: "🎵",
        title: "Stage and Lighting Setup",
        description: "Professional stage design, lighting, and sound systems for performances."
      },
      {
        icon: "🎤",
        title: "Artist Booking",
        description: "Booking and coordination of performers, bands, and speakers."
      },
      {
        icon: "🛡️",
        title: "Security Services",
        description: "Crowd management and security arrangements for safe events."
      },
      {
        icon: "🏆",
        title: "Competition Management",
        description: "Organization and coordination of various competitions and contests."
      },
      {
        icon: "📣",
        title: "Marketing and Promotion",
        description: "Promotional strategies to increase attendance and engagement."
      }
    ],
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Annual cultural festival"
      },
      {
        image: "https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        description: "Technical symposium"
      },
      {
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "College music festival"
      }
    ],
    packages: [
      {
        title: "Basic Fest",
        price: 2000,
        features: [
          "Event coordination",
          "Basic stage setup",
          "Sound system",
          "Security arrangements"
        ]
      },
      {
        title: "Standard Fest",
        price: 4000,
        features: [
          "Full event management",
          "Professional stage & lighting",
          "Artist coordination",
          "Marketing support"
        ]
      },
      {
        title: "Premium Fest",
        price: 8000,
        features: [
          "Comprehensive festival planning",
          "Premium production quality",
          "Celebrity artist bookings",
          "Complete logistics management"
        ]
      }
    ],
    testimonial: {
      quote: "Skyra Events transformed our annual college festival into an unforgettable experience. Their team handled everything from artist management to security, allowing us to focus on enjoying the event.",
      author: "Student Council, ABC University",
      event: "Cultural Fest, February 2023"
    }
  }
};

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (serviceType && servicesData[serviceType]) {
      setService(servicesData[serviceType]);
    }
  }, [serviceType]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair">{service.title}</h1>
            <p className="text-xl text-white mb-8">{service.subtitle}</p>
            <Link 
              to="/contact"
              className="btn-primary"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      
      <div className="bg-light-purple">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="text-gray-600 hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">What's Included</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            {service.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-light-purple">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.portfolio.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={item.image} 
                  alt={item.description} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 font-playfair">{pkg.title}</h3>
                  <div className="text-3xl font-bold mb-6">₹ {pkg.price.toLocaleString()}</div>
                  
                  <ul className="mb-8 space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-light-purple p-4 rounded-lg text-center font-bold">
                    ₹ {pkg.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="h-12 w-12 text-white/60 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl text-white mb-8">
              {service.testimonial.quote}
            </p>
            <div className="text-white">
              <p className="font-bold text-lg">{service.testimonial.author}</p>
              <p className="text-white/80">{service.testimonial.event}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Plan Your {service.title}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and let us create an unforgettable experience for you.
          </p>
          <Link 
            to="/contact"
            className="btn-primary"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
