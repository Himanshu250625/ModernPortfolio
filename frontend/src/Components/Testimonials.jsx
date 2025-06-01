import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Harsh Singh",
      role: "Software Engineer",
      company: "Oracle",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&h=400&fit=crop&auto=format",
      text: "An exceptional developer with a strong work ethic. Their technical expertise and problem-solving skills are truly impressive.",
      rating: 5
    },
    {
      id: 2,
      name: "Divyanshu Singh",
      role: "Software Developer",
      company: "TMRW",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format",
      text: "A talented developer who consistently delivers high-quality work. Their attention to detail and commitment to excellence is remarkable.",
      rating: 5
    },
    {
      id: 3,
      name: "Brijesh Singh",
      role: "Senior Engineer",
      company: "BEL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&auto=format",
      text: "A highly skilled professional with excellent technical knowledge. Their ability to handle complex projects and deliver results is outstanding.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content">What People Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            className="testimonial-carousel"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">{testimonial.name}</h3>
                        <p className="text-base-content/70">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <FaQuoteLeft className="text-4xl text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-base-content/90 text-lg italic relative z-10 pl-8">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`text-xl ${
                            index < testimonial.rating
                              ? 'text-yellow-400'
                              : 'text-base-content/20'
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