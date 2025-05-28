import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Lead",
      company: "Growth Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop&auto=format",
      text: "Outstanding work! The attention to detail and creative solutions provided were exactly what we needed.",
      rating: 5
    },
    {
      id: 2,
      name: "David Kim",
      role: "Product Manager",
      company: "Innovate Labs",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&h=400&fit=crop&auto=format",
      text: "Highly recommend! Easy to work with and delivered results beyond expectations.",
      rating: 4
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Design First",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&auto=format",
      text: "A true professional. Excellent communication and the quality of work was superb.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-900" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">What People Say</h2>
        <div className="max-w-4xl mx-auto">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            className="testimonial-carousel"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-300 p-2 rounded-full hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-300 p-2 rounded-full hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )
            }
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 py-8 flex justify-center">
                <div className="bg-gray-800 rounded-lg shadow-xl text-center max-w-lg overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-8">
                    <FaQuoteLeft className="text-3xl text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-300 text-lg mb-4">{testimonial.text}</p>
                    <h4 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h4>
                    <p className="text-gray-400 mb-4">{testimonial.role} at {testimonial.company}</p>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-yellow-400 ${
                            i < testimonial.rating ? '' : 'opacity-25'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;