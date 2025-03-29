
import ContactDetails from './ContactDetails';
import LocationMap from './LocationMap';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 h-full">
      <ContactDetails />
      <LocationMap />
    </div>
  );
};

export default ContactInfo;
