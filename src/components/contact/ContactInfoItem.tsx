
import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

const ContactInfoItem = ({ icon: Icon, title, children }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
        <Icon className="h-5 w-5 text-primary-600" />
      </div>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        {children}
      </div>
    </div>
  );
};

export default ContactInfoItem;
