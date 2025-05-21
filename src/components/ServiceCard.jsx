
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img 
        src={service.image} 
        alt={service.title} 
        className="service-card-img"
      />
      <div className="service-card-body">
        <h3 className="text-2xl font-bold mb-3 font-playfair">{service.title}</h3>
        <ul className="mb-4 space-y-2">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mb-4">Starting from ${service.startingPrice}</p>
        <Link 
          to={`/services/${service.slug}`}
          className="btn-outline block text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
