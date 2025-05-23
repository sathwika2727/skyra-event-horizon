
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card h-full flex flex-col">
      <div className="p-8 flex flex-col items-center text-center flex-grow">
        {service.image && (
          <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-6">
          {service.features && service.features.length > 0 ? service.features[0] : 'Event planning services'}
        </p>
        <Link 
          to={`/services/${service.slug}`} 
          className="text-primary hover:underline mt-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
