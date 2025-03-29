
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  service: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service }: ContactEmailRequest = await req.json();

    const formattedService = service === 'water-delivery' ? 'Water Delivery' :
                          service === 'tank-cleaning' ? 'Tank/Reservoir Cleaning' :
                          service === 'exhauster' ? 'Exhauster Services' : 
                          'Other Services';

    const emailResponse = await resend.emails.send({
      from: "Desire Ventures <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Desire Ventures Limited",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://storage.googleapis.com/lovable-dev/assets/2ab55cc8-3c4c-4e7a-9716-af191f2e6fad.png" alt="Desire Ventures Logo" style="max-width: 100px;">
          </div>
          <h1 style="color: #0c4da2; margin-bottom: 20px;">Thank You for Contacting Us</h1>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Desire Ventures Limited. We have received your request for ${formattedService}, and our team will get back to you shortly to confirm the details.</p>
          <p>We appreciate your interest in our services and look forward to serving you.</p>
          <p style="margin-top: 30px;">Best regards,<br>Desire Ventures Team</p>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center;">
            <p>Lavington Green Mall, Off James Gichuru road, Nairobi, Kenya</p>
            <p>Phone: (+254) 0727023350 | Email: desireventuresltd@gmail.com</p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
