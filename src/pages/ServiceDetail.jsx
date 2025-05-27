
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AutoCarousel from '../components/AutoCarousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';

// Service data with Skyra packages
const serviceDetails = {
  weddings: {
    title: "Wedding Planning Services",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Our wedding planning services are designed to make your special day truly memorable. We handle everything from photography to the final send-off, ensuring a stress-free experience for you and your loved ones.",
    features: [
      "Complete photography and videography coverage",
      "Custom theme décor and staging",
      "Catering services for all dietary preferences",
      "Professional event coordination",
      "Guest management and RSVP tracking",
      "Budget planning and vendor management",
      "Timeline creation and execution",
      "Pre-wedding and post-wedding shoots"
    ],
    pricing: {
      bliss: { 
        price: 129999, 
        name: "Bliss Package", 
        description: "Ideal for couples wanting elegant yet essential coverage. Includes regular photography, basic theme décor, and veg buffet for up to 100 guests." 
      },
      premium: { 
        price: 229999, 
        name: "Premium Charm Package", 
        description: "Cinematic storytelling & ambiance with pre-wedding shoots, themed décor, and buffet for 200 guests including LED screen." 
      },
      luxury: { 
        price: 359999, 
        name: "Luxury Legacy Package", 
        description: "Grand all-inclusive experience with drone coverage, multi-cam, luxury themes, and buffet for 300 guests with complete project management." 
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
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
      "Decoration and setup",
      "Entertainment planning and coordination", 
      "Custom cake and catering arrangements",
      "Party favors and gift coordination",
      "Photography and videography services",
      "Guest invitations and management",
      "Setup and cleanup services"
    ],
    pricing: {
      fun: { 
        price: 14999, 
        name: "Regular Fun Package", 
        description: "For at-home parties. Includes basic décor, background music, 2-hour photography, and snacks or cake." 
      },
      premium: { 
        price: 24999, 
        name: "Premium Party Package", 
        description: "For stylish themed parties. Full planning, theme decor, games, DJ/music, 4-hour photo, snacks & drinks." 
      },
      luxury: { 
        price: 44999, 
        name: "Luxury Bash Package", 
        description: "For milestone birthdays. Designer decor, photo booth, DJ, magician, catering, photo/video, guest handling." 
      }
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
      "Registration and attendee management",
      "Audio-visual and technical support",
      "Speaker and VIP coordination",
      "Branded materials and signage",
      "Catering and accommodation arrangements",
      "Post-event reporting and analytics"
    ],
    pricing: {
      essential: { 
        price: 69999, 
        name: "Essential Meet Package", 
        description: "For small meetings. Includes AV setup, tea/snacks, and on-site coordinator." 
      },
      pro: { 
        price: 149999, 
        name: "Pro Launch Package", 
        description: "For product launches & press events. Full planning, branded decor, AV + demo, media coordination, photo/video, catering." 
      },
      executive: { 
        price: 229999, 
        name: "Executive Gala Package", 
        description: "For gala dinners and awards. Luxury decor, sit-down dinner, live acts, red carpet, media coverage." 
      }
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
      "Campus coordination",
      "Stage design and production",
      "Talent booking and management",
      "Security and crowd management",
      "Marketing and promotion support",
      "Technical production (sound, lighting, video)",
      "Event logistics and volunteer coordination"
    ],
    pricing: {
      spark: { 
        price: 149999, 
        name: "Campus Spark Package", 
        description: "For 1-day cultural/tech fests. Includes stage setup, AV, anchor, snacks, 4-hour photo, social media design." 
      },
      pulse: { 
        price: 249999, 
        name: "Talent Pulse Package", 
        description: "For 1–2 day inter-college fests. Decor, lights, DJ, snacks + lunch for 150 students, photo/video, social media." 
      },
      royale: { 
        price: 349999, 
        name: "Festival Royale Package", 
        description: "For celeb/DJ nights. Grand setup, artist booking, buffet, ID passes, drone coverage, teaser, sponsorship deck." 
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  anniversaries: {
    title: "Anniversary Celebrations",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    description: "Celebrate your love story with our anniversary celebration services. From intimate gatherings to grand milestone celebrations, we create memorable experiences that honor your journey together.",
    features: [
      "Custom anniversary theme development",
      "Decoration and setup",
      "Photography and videography services",
      "Catering and dining arrangements",
      "Entertainment coordination",
      "Guest management and invitations",
      "Memory displays and photo galleries",
      "Special surprise arrangements"
    ],
    pricing: {
      classic: { 
        price: 19999, 
        name: "Classic Love Package", 
        description: "For intimate celebrations. Includes basic décor, 2-hour photography, veg snacks, and cake table." 
      },
      eternal: { 
        price: 29999, 
        name: "Eternal Bond Package", 
        description: "For medium-scale anniversaries. Custom décor, couple zone, DJ/music, buffet dinner, 4-hour photo." 
      },
      legacy: { 
        price: 49999, 
        name: "Grand Legacy Package", 
        description: "For luxury milestone events. Designer decor, stage, dance floor, live band/DJ, full dinner, return gifts." 
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  babyshowers: {
    title: "Baby Shower Celebrations",
    image: "https://images.unsplash.com/photo-1576649547700-ee7163d580cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1576649547700-ee7163d580cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Welcome the new arrival with our beautiful baby shower celebration services. We create sweet and memorable experiences that celebrate this special milestone in your family's journey.",
    features: [
      "Themed decoration and setup",
      "Baby shower games and activities",
      "Photography and memory capturing",
      "Catering and refreshment services",
      "Gift coordination and display",
      "Guest management and invitations",
      "Memory book and guest tribute setup",
      "Custom baby shower favors"
    ],
    pricing: {
      blossom: { 
        price: 14999, 
        name: "Blossom Package", 
        description: "For simple, sweet celebrations. Includes basic pastel decor, baby props, 2-hour photo, snacks, and games." 
      },
      radiance: { 
        price: 24999, 
        name: "Radiance Package", 
        description: "For balanced events. Full planning, balloon arch, game host, snacks + light lunch, 4-hour photo, memory board." 
      },
      grace: { 
        price: 39999, 
        name: "Glow & Grace Package", 
        description: "For premium themed experience. Designer decor, host, buffet (veg/non-veg), cinematic photo/video, return gifts." 
      }
    },
    gallery: [
      "https://images.unsplash.com/photo-1576649547700-ee7163d580cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  }
};

const PackageBookingModal = ({ packageData, serviceName }) => {
  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      eventType: serviceName,
      selectedPackage: packageData.name,
      eventDate: undefined
    }
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      eventDate: data.eventDate ? format(data.eventDate, 'PPP') : 'Not specified'
    };
    console.log('Form submitted:', formattedData);
    alert(`Thank you ${data.name}! We'll contact you soon about your ${data.selectedPackage} for ${data.eventType}.`);
  };

  return (
    <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-50 to-pink-50">
      <DialogHeader className="border-b border-purple-100 pb-4">
        <DialogTitle className="text-2xl font-bold text-primary bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Book {packageData.name}
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6 pt-4">
        {/* Package Summary Card */}
        <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">{packageData.name}</h3>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full">
              <span className="text-lg font-bold">₹{packageData.price.toLocaleString()}</span>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">{packageData.description}</p>
        </div>

        {/* Booking Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 5a1 1 0 112 0v3a1 1 0 11-2 0V5zM9 13a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                </svg>
                Your Details
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          required 
                          className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your phone number" 
                          {...field} 
                          required 
                          className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Event Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Event Type</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          readOnly 
                          className="bg-purple-50 border-purple-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="selectedPackage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Selected Package</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          readOnly 
                          className="bg-purple-50 border-purple-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-gray-700 font-medium">Preferred Event Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal border-purple-200 hover:border-purple-400",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick your event date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Submit Booking Request
            </Button>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const [service, setService] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
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

          {/* Portfolio/Gallery Section with Auto-moving Carousel */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Portfolio</h2>
            <AutoCarousel images={service.gallery} autoScrollInterval={2000} />
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        Choose Package
                      </Button>
                    </DialogTrigger>
                    <PackageBookingModal packageData={pkg} serviceName={service.title} />
                  </Dialog>
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
