import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    details: "In-depth web design services including wireframing, prototyping, and user experience design.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    details: "Expertise in HTML, CSS, JavaScript, and frameworks like React and Angular.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    details: "Specializing in Node.js, Express, and database management with MongoDB or SQL.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    details: "Proficient in both client-side and server-side development.",
  },
  
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleReadMore = (id) => {
    setSelectedService((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleReadMore(service.id); // Toggle service details
                }}
                className="mt-4 inline-block text-green-400 hover:text-blue-500 transition-colors duration-300"
              >
                {selectedService === service.id ? "Read Less" : "Read More"}
              </a>
              {selectedService === service.id && (
                <p className="mt-2 text-gray-200">{service.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
