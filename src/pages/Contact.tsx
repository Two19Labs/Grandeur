import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/content";
import { Mail, MapPin, Instagram, Facebook, Linkedin, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

const FORMSPREE_ID = "mrerzqep";
const SUBJECTS = ["General Inquiry", "Live Project Collaboration", "Sponsorship", "Invicta", "Other"];
type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: SUBJECTS[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHero title="Contact Us" subtitle="Whether you want to collaborate, sponsor, or just say hello." />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* FORM */}
            <ScrollReveal>
              {status === "success" ? (
                <div className="card-base p-10 text-center flex flex-col items-center justify-center h-full gap-4">
                  <CheckCircle className="text-green-500" size={52} />
                  <h3 className="font-heading text-xl font-bold">Message Sent!</h3>
                  <p className="text-foreground-secondary text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 px-6 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name</label>
                      <input
                        type="text" required value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email</label>
                      <input
                        type="email" required value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    >
                      {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle size={16} />
                      Something went wrong. Please email us directly at {CONTACT_INFO.email}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-60"
                  >
                    {status === "sending"
                      ? <><Loader size={16} className="animate-spin" /> Sending...</>
                      : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* INFO */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="card-base p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Email Us</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground-secondary text-sm hover:text-primary transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="card-base p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-accent-blue" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2">Follow Us</h3>
                    <div className="flex gap-3">
                      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors" title="Instagram"><Instagram size={16} /></a>
                      <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors" title="Facebook"><Facebook size={16} /></a>
                      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors" title="LinkedIn"><Linkedin size={16} /></a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="card-base p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent-red" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Visit Us</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="rounded-xl overflow-hidden border border-border h-64">
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
