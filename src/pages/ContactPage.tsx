import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const ContactPage: React.FC = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  // Mock contact data
  const contactData = {
    address: "123 Luxury Lane, Hamptons, NY 11968",
    phone: "+1 (555) 123-4567",
    email: "info@hamptonsandsoles.com",
    hours: [
      { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
      { day: "Saturday", time: "11:00 AM - 6:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com/hamptonsandsoles" },
      { platform: "Facebook", url: "https://facebook.com/hamptonsandsoles" }
    ]
  };

  return (
    <div className="bg-secondary-bg">
      {/* Title Section */}
      <div className="flex items-center justify-center w-full pt-20 px-[30px] table:px-[100px]">
        <div className="grid grid-cols-1 gap-10 justify-center items-center w-full table:grid-cols-3">
          {!isMobile && <span className="block w-full h-[0.5px] bg-primary-cl"></span>}
          <h1 className="font-seasons font-normal text-[36px] table:text-[40px] leading-[100%] table:leading-[150%] text-center uppercase">
            Contact Us
          </h1>
          {!isMobile && <span className="block w-full h-[0.5px] bg-primary-cl"></span>}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col table:flex-row table:gap-10 px-[30px] py-[60px] table:px-[100px] table:py-[80px]">
        {/* Contact Info */}
        <div className="flex-1 mb-10 table:mb-0">
          <div className="border-[0.5px] border-primary-cl p-6">
            <h2 className="font-medium text-[18px] leading-[120%] uppercase mb-8">
              Contact Information
            </h2>
            
            <div className="flex flex-col gap-6 font-light text-[14px] leading-[160%]">
              <div>
                <p className="font-medium mb-1">Address:</p>
                <p>{contactData.address}</p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Phone:</p>
                <p>{contactData.phone}</p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Email:</p>
                <p>{contactData.email}</p>
              </div>
              
              <div>
                <p className="font-medium mb-3">Business Hours:</p>
                <ul className="flex flex-col gap-1">
                  {contactData.hours.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="font-medium mb-2">Social Media:</p>
                <ul className="flex gap-4">
                  {contactData.socialMedia.map((platform, index) => (
                    <li key={index}>
                      <a 
                        href={platform.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:opacity-70"
                      >
                        {platform.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form className="border-[0.5px] border-primary-cl p-6">
            <h2 className="font-medium text-[18px] leading-[120%] uppercase mb-8">
              Send Us a Message
            </h2>
            
            <div className="flex flex-col gap-6">
              <div>
                <label className="block font-medium text-[14px] mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-[0.5px] border-primary-cl p-3 font-light focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block font-medium text-[14px] mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-[0.5px] border-primary-cl p-3 font-light focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block font-medium text-[14px] mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-[0.5px] border-primary-cl p-3 font-light focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label className="block font-medium text-[14px] mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-transparent border-[0.5px] border-primary-cl p-3 font-light focus:outline-none resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="self-start mt-4 border-[0.5px] border-primary-cl px-6 py-3 font-light text-[14px] leading-[120%] uppercase hover:opacity-70"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Message sent! (Demo functionality)");
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-[30px] pb-[60px] table:px-[100px] table:pb-[80px]">
        <div className="border-[0.5px] border-primary-cl p-6">
          <h2 className="font-medium text-[18px] leading-[120%] uppercase mb-8">
            Find Us
          </h2>
          
          <div 
            className="w-full h-[300px] table:h-[400px] bg-primary-bg/50 flex items-center justify-center"
          >
            <p className="font-light text-[14px]">Map placeholder - Google Maps would be integrated here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 