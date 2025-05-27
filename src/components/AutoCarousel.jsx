
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AutoCarousel = ({ images, autoScrollInterval = 3000, className = "" }) => {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [api, autoScrollInterval]);

  return (
    <div className={`max-w-4xl mx-auto relative ${className}`}>
      <Carousel 
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((img, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <img 
                  src={img} 
                  alt={`Gallery image ${index + 1}`} 
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
  );
};

export default AutoCarousel;
