import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/content";
import { Mail, MapPin, Instagram, Facebook, Linkedin, Send, ArrowRight } from "lucide-react";

const SUBJECTS = ["General Inquiry", "Live Project Collaboration", "Sponsorship", "Invicta", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all placeholder:text-foreground-secondary/40";

  return (
    <div>
      <PageHero title="Get In Touch" subtitle="Whether you want to collaborate, sponsor, or just say hello." badge="Contact" />

      <section className="section-padding relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORM */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text" required value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email" required value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className={inputClasses}
                  >
                    {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us what you have in mind..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} /> Send Message
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            </ScrollReveal>

            {/* INFO */}
            <div className="space-y-6">
              <ScrollReveal>
                <motion.div className="card-base p-6 flex items-start gap-4 group" whileHover={{ y: -3 }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Email</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground-secondary text-sm hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <motion.div className="card-base p-6 flex items-start gap-4 group" whileHover={{ y: -3 }}>
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 border border-accent-blue/20">
                    <Instagram className="text-accent-blue" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2">Follow Us</h3>
                    <div className="flex gap-2">
                      {[
                        { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: "Instagram" },
                        { href: SOCIAL_LINKS.facebook, Icon: Facebook, label: "Facebook" },
                        { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
                      ].map(s => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-foreground-secondary hover:bg-primary/20 hover:text-primary transition-all">
                          <s.Icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <motion.div className="card-base p-6 flex items-start gap-4 group" whileHover={{ y: -3 }}>
                  <div className="w-10 h-10 rounded-lg bg-accent-red/10 flex items-center justify-center flex-shrink-0 border border-accent-red/20">
                    <MapPin className="text-accent-red" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Visit Us</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="rounded-xl overflow-hidden border border-border/50 h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9!2d77.2089!3d28.6962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6f1b6c8f3d%3A0x7e8f9b7b0b3b0b0b!2sShaheed%20Sukhdev%20College%20of%20Business%20Studies!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    title="SSCBS Location"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
