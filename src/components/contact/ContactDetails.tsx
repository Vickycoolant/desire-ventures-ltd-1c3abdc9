
import { Phone, Mail, MapPin, Linkedin, Clock } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';

const ContactDetails = () => {
  return (
    <div className="glass-card p-8 bg-primary-50">
      <h3 className="text-2xl font-bold text-primary-800 mb-6">Get in Touch</h3>
      
      <div className="space-y-6">
        <ContactInfoItem icon={Phone} title="Phone">
          <a href="tel:+254727023350" className="text-primary-600 hover:text-primary-800 transition-colors block">
            (+254) 0727023350
          </a>
          <a href="https://wa.me/254706274350" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 transition-colors flex items-center mt-1">
            <div className="bg-[#25D366] rounded-full p-1 mr-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.267-.465-2.4-1.475-.885-.795-1.48-1.77-1.653-2.07-.173-.3-.02-.465.13-.615.134-.135.3-.345.45-.523.149-.18.199-.301.3-.5.099-.2.05-.371-.025-.521-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.096 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.199-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            WhatsApp: (+254) 0706274350
          </a>
        </ContactInfoItem>
        
        <ContactInfoItem icon={Mail} title="Email">
          <a href="mailto:desireventuresltd@gmail.com" className="text-primary-600 hover:text-primary-800 transition-colors">
            desireventuresltd@gmail.com
          </a>
        </ContactInfoItem>
        
        <ContactInfoItem icon={Linkedin} title="LinkedIn">
          <a 
            href="https://www.linkedin.com/in/desire-ventures-ltd-986465354" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 transition-colors"
          >
            desire-ventures-ltd
          </a>
        </ContactInfoItem>
        
        <ContactInfoItem icon={MapPin} title="Location">
          <p className="text-gray-700">Lavington Green Mall, Off James Gichuru road, <br />Nairobi, Kenya</p>
          <p className="text-gray-700 mt-1">P.O Box. 756 - 00100 Nairobi</p>
        </ContactInfoItem>
        
        <ContactInfoItem icon={Clock} title="Business Hours">
          <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
          <p className="text-gray-700">24/7 Emergency Services Available</p>
        </ContactInfoItem>
      </div>
    </div>
  );
};

export default ContactDetails;
