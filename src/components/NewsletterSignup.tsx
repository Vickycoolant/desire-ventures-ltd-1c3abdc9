
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please provide an email address.",
      });
      return;
    }
    
    setSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { email, name: name || null }
      });
      
      if (error) throw error;
      
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 5000,
      });
      
      setEmail('');
      setName('');
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      toast({
        variant: "destructive",
        title: "Subscription Error",
        description: error.message || "There was an error subscribing. Please try again.",
        duration: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="glass-card p-3 sm:p-4 rounded-xl shadow-lg w-[90%]">
      <h3 className="text-base sm:text-lg font-bold text-primary-800 mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-xs text-gray-600 mb-2 max-w-[90%]">Stay updated with our latest promotions and services.</p>
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name (Optional)</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email Address*</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full text-sm"
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary-600 hover:bg-primary-700 text-xs py-1"
          disabled={submitting}
        >
          {submitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </div>
          ) : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
