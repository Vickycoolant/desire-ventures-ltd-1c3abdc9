import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Phone, Mail, User } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
}

interface ContactDetailProps {
  contact: Contact;
  onClose: () => void;
}

const ContactDetail = ({ contact, onClose }: ContactDetailProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState("");
  const [subject, setSubject] = useState(`Re: ${
    contact.service === 'water-delivery' ? 'Water Delivery' : 
    contact.service === 'tank-cleaning' ? 'Tank/Reservoir Cleaning' : 
    contact.service === 'exhauster' ? 'Exhauster Services' : 
    'Your Inquiry'
  } Request`);
  const [emailBody, setEmailBody] = useState("");

  const templates = [
    {
      id: "thank-you",
      name: "Thank You",
      subject: "Thank You for Your Inquiry",
      body: `Dear ${contact.name},\n\nThank you for reaching out to Desire Ventures Limited. We appreciate your interest in our services.\n\nWe have reviewed your inquiry and would like to schedule a time to discuss your needs in more detail.\n\nPlease let us know when you might be available for a quick call.\n\nThank you,\nDesire Ventures Team`
    },
    {
      id: "followup",
      name: "Follow-up",
      subject: `Follow-up: Your ${
        contact.service === 'water-delivery' ? 'Water Delivery' : 
        contact.service === 'tank-cleaning' ? 'Tank/Reservoir Cleaning' : 
        contact.service === 'exhauster' ? 'Exhauster Services' : 
        'Service'
      } Request`,
      body: `Dear ${contact.name},\n\nI'm following up on your recent request for ${
        contact.service === 'water-delivery' ? 'water delivery' : 
        contact.service === 'tank-cleaning' ? 'tank/reservoir cleaning' : 
        contact.service === 'exhauster' ? 'exhauster services' : 
        'our services'
      }.\n\nWe'd like to provide you with more information and discuss how we can best meet your needs.\n\nWould you be available for a call tomorrow to discuss the details?\n\nBest regards,\nDesire Ventures Team`
    },
    {
      id: "quote",
      name: "Service Quote",
      subject: `Quote for ${
        contact.service === 'water-delivery' ? 'Water Delivery' : 
        contact.service === 'tank-cleaning' ? 'Tank/Reservoir Cleaning' : 
        contact.service === 'exhauster' ? 'Exhauster Services' : 
        'Services'
      }`,
      body: `Dear ${contact.name},\n\nThank you for your interest in our services. Based on your request, we are happy to provide you with an initial quote for ${
        contact.service === 'water-delivery' ? 'water delivery' : 
        contact.service === 'tank-cleaning' ? 'tank/reservoir cleaning' : 
        contact.service === 'exhauster' ? 'exhauster services' : 
        'our services'
      }.\n\nTo provide you with an accurate quote, we would need a few more details about your specific requirements.\n\nPlease let me know when would be a good time for a quick call to discuss further.\n\nRegards,\nDesire Ventures Team`
    }
  ];

  const handleTemplateChange = (templateId: string) => {
    setEmailTemplate(templateId);
    const selected = templates.find(t => t.id === templateId);
    if (selected) {
      setSubject(selected.subject);
      setEmailBody(selected.body);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatService = (service: string | null) => {
    if (!service) return "Other";
    if (service === "water-delivery") return "Water Delivery";
    if (service === "tank-cleaning") return "Tank Cleaning";
    if (service === "exhauster") return "Exhauster";
    return service;
  };

  const sendEmail = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in to send emails.",
      });
      return;
    }
    
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke('send-followup', {
        body: {
          contactId: contact.id,
          subject: subject,
          message: emailBody.replace(/\n/g, '<br>'),
          recipientEmail: contact.email,
          recipientName: contact.name,
          userId: user.id
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Email Sent",
        description: `Your response has been sent to ${contact.name}`,
        duration: 5000,
      });
      
      onClose();
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Email Error",
        description: error.message || "There was a problem sending the email. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-4 h-[calc(100vh-10rem)] overflow-y-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Customer Information</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                <User className="h-5 w-5 text-primary-700" />
              </div>
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">
                  Contacted on {formatDate(contact.created_at)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-gray-500" />
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                {contact.email}
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-gray-500" />
              <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                {contact.phone}
              </a>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {formatService(contact.service)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-medium text-lg mb-2">Customer Message</h3>
          <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
            {contact.message}
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-medium text-lg mb-4">Send Response</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Template
              </label>
              <Select value={emailTemplate} onValueChange={handleTemplateChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  {templates.map(template => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                rows={10}
                placeholder="Write your message here..."
                required
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={sendEmail} disabled={!emailBody.trim() || sending} className="gap-2">
                {sending ? (
                  <>
                    <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Email
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
