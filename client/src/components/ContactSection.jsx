import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Got A Project Or<br />
                A Partnership In Mind?
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                Holisticly leverage other's user friendly platforms with progressive products. 
                Proactively matrix exceptional content through B2C schemas. Seamlessly exploit 
                cutting-edge niche markets rather than premium results. Collaboratively restore 
                pandemic e-business and plug-and-play data. Conveniently target exceptional 
                platforms whereas standards compliant data.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone:</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">+99 (0)1047011888</p>
                  <p className="text-gray-600 text-sm">+99 (0)1310011444</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Email:</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">info@madsparrow.com</p>
                  <p className="text-gray-600 text-sm">contact@most.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 transform hover:scale-105"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;