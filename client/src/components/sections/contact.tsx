import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("dseKnFFM1GvwvJtm_");

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Nirakar",
      };

      const response = await emailjs.send(
        'service_sttlvsk', // Your service ID
        'template_9md8fkh', // Your template ID
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">Email</h4>
                      <a href="mailto:nirakarjena249@gmail.com" className="text-primary hover:underline">
                        nirakarjena249@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/nirakar-jena-ab12b518b/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        linkedin.com/in/nirakar-jena
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">GitHub</h4>
                      <a href="https://github.com/nirakar24" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        github.com/nirakar24
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">Location</h4>
                      <p>Navi Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/nirakar24" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                    >
                      <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/nirakar-jena-ab12b518b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a 
                      href="mailto:nirakarjena249@gmail.com"
                      className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium mb-1">Name</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium mb-1">Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</Label>
                    <Input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-1">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      placeholder="Your message..." 
                      required 
                      className="resize-none"
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
