
interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className = "" }: LocationMapProps) => {
  return (
    <div className={`glass-card p-4 overflow-hidden ${className}`}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817853046927!2d36.7724982!3d-1.2736646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7554e51%3A0xbe1f3eeeb54f3252!2sLavington%20Green%20Shopping%20Centre!5e0!3m2!1sen!2sus!4v1653894520012!5m2!1sen!2sus!4v1653894520012!5m2!1sen!2sus" 
        width="100%" 
        height="200" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Desire Ventures Location"
        className="rounded-lg"
      />
    </div>
  );
};

export default LocationMap;
