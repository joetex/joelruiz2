// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { supabase } from '../lib/supabase';
import { Card } from './ui/card';
import { SectionHeading } from './SectionHeading';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';
// import { toast } from 'sonner';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

// const contactSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Please enter a valid email'),
//   message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
// });

// type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  // const [_, setIsSubmitting] = useState(false);
  // const {
  //   // register,
  //   // handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<ContactForm>({
  //   resolver: zodResolver(contactSchema),
  // });

  // const onSubmit = async (data: ContactForm) => {
  //   setIsSubmitting(true);
  //   try {
  //     const { error } = {error:false}//await supabase
  //   //     .from('contact_messages')
  //   //     .insert([
  //   //       {
  //   //         name: data.name,
  //   //         email: data.email,
  //   //         message: data.message,
  //   //       },
  //   //     ]);

  //     console.log(data);
  //     if (error) throw error;

  //     toast.success('Message sent successfully!');
  //     reset();
  //   } catch (err) {
  //     console.error('Error sending message:', err);
  //     toast.error('Failed to send message. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/joetex',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/joel-ruiz-ii/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:me@joelruiz2.com',
      label: 'Email',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div>
          <SectionHeading index="05" label="contact">
            Let us <span className="text-accent">talk!</span>
          </SectionHeading>
          {/* <div className="w-20 h-1 bg-accent rounded-full" /> */}
          {/* <p className="text-muted-foreground mt-4">
            I am looking for employment. I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div className="lg:col-span-2">
            <Card className="p-8 border-accent/10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register('name')}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    {...register('message')}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div> */}

            <Card className="p-6 bg-card border-border shadow-none">
              <h3 className="font-mono text-sm text-accent mb-5">contact info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:me@joelruiz2.com"
                    className="text-lg font-medium text-foreground hover:text-accent underline decoration-accent/40 underline-offset-4 transition-colors"
                  >
                    me@joelruiz2.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-medium">Austin, TX</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-none">
              <h3 className="font-mono text-sm text-accent mb-5">connect</h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent/60 hover:bg-accent/5 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="font-medium">{label}</span>
                    <ArrowUpRight className="ml-auto w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </Card>
        </div>
      </div>
    </section>
  );
}
