import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { handleHover, handleUnhover } = useCursor();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create form data to send with the fetch request
      const formData = new FormData();
      formData.append('form-name', 'contact');
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Submit the form to Netlify
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const social = [
    { icon: 'ri-linkedin-fill', link: '#' },
    { icon: 'ri-twitter-fill', link: '#' },
    { icon: 'ri-dribbble-fill', link: '#' },
    { icon: 'ri-medium-fill', link: '#' },
    { icon: 'ri-behance-fill', link: '#' }
  ];

  // Testimonial data
  const testimonials = [
    {
      quote: "Working with Tanjina was an absolute pleasure. Her attention to detail and creative approach resulted in a website that perfectly captures our brand.",
      author: "Sarah Johnson",
      position: "CEO, Design Studio",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "Tanjina's expertise in UI/UX design transformed our product. Her work significantly improved user engagement and satisfaction.",
      author: "Michael Brown",
      position: "Product Manager, Tech Innovations",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "A true professional who delivers exceptional results. Tanjina's portfolio work speaks for itself, but her collaborative approach makes the process even better.",
      author: "Emily Chen",
      position: "Marketing Director, Creative Agency",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is your design process?",
      answer: "My design process involves understanding requirements, research, wireframing, creating prototypes, gathering feedback, and iterative refinement until we reach the perfect solution."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A basic website might take 2-3 weeks, while more complex projects can take 1-3 months. I'll provide a detailed timeline after our initial consultation."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, I offer support packages for all completed projects. This can include maintenance, updates, and additional feature implementation as your needs evolve."
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative bg-white dark:bg-[#171727] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#1e1e2e] dark:bg-[#171727] -z-10"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block font-playfair text-3xl md:text-4xl font-bold mb-4 relative">
            Get In Touch
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-coral to-lavender"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div 
            className="glass rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className={`w-full px-4 py-3 bg-white dark:bg-card border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple/50`}
                  placeholder="Your name"
                  {...register('name')}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className={`w-full px-4 py-3 bg-white dark:bg-card border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple/50`}
                  placeholder="your.email@example.com"
                  {...register('email')}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className={`w-full px-4 py-3 bg-white dark:bg-card border ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple/50`}
                  placeholder="What is this regarding?"
                  {...register('subject')}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 bg-white dark:bg-card border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple/50`}
                  placeholder="Tell me about your project or inquiry..."
                  {...register('message')}
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>
              
              <motion.button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple to-blush text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
          
          <div>
            <motion.div 
              className="glass rounded-2xl p-8 shadow-lg mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-playfair text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center mr-4 shrink-0">
                    <i className="ri-mail-line text-purple text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <a href="mailto:contact@tanjinaakter.com" className="text-purple hover:underline">contact@tanjinaakter.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center mr-4 shrink-0">
                    <i className="ri-map-pin-line text-purple text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">by Jubied Emon</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center mr-4 shrink-0">
                    <i className="ri-calendar-line text-purple text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300">Open for projects starting January 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-playfair text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="flex flex-wrap gap-4">
                {social.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.link}
                    className="w-12 h-12 rounded-full bg-white dark:bg-card shadow-md flex items-center justify-center hover:bg-purple hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-purple dark:text-purple"
                    whileHover={{ scale: 1.1, y: -5 }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnhover}
                  >
                    <i className={`${item.icon} text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Testimonials Section - Fill the empty space */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="inline-block font-playfair text-3xl md:text-4xl font-bold mb-4 relative">
              Client Testimonials
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-coral to-lavender"></div>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's what some of my clients have to say about working with me.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-6">
                  <i className="ri-double-quotes-l text-4xl text-purple/30"></i>
                </div>
                <p className="italic text-gray-600 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* FAQ Section - Additional content for the empty space */}
        <motion.div 
          className="mt-24 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="inline-block font-playfair text-3xl md:text-4xl font-bold mb-4 relative">
              Frequently Asked Questions
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-coral to-lavender"></div>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Common questions about my services and process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl overflow-hidden mb-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-playfair font-medium text-lg">
                    {faq.question}
                    <span className="transition group-open:rotate-180">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
