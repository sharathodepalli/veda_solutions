import React from 'react';

const clients = [
  {
    name: "HealthFirst Medical Group",
    logo: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    name: "Metro Family Practice",
    logo: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    name: "Sunrise Medical Center",
    logo: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    name: "Valley Health Associates",
    logo: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    name: "Coastal Medical Group",
    logo: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  },
  {
    name: "Premier Healthcare Partners",
    logo: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  }
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-neutral-700 mb-2">
            Trusted by Healthcare Practices Nationwide
          </h2>
          <p className="text-neutral-500">
            Join hundreds of medical practices that rely on our expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-200 opacity-60 hover:opacity-100"
            >
              <div className="relative">
                <div className="w-32 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-neutral-600 text-center px-2">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-500">
            And many more practices across the country trust our services
          </p>
        </div>
      </div>
    </section>
  );
};