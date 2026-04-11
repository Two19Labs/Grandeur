import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { PUBLICATIONS } from "@/data/content";
import { BookOpen } from "lucide-react";
import pubGaming from "@/assets/pub-gaming.jpg";
import pubMeta from "@/assets/pub-meta.jpg";
import pubHealthcare from "@/assets/pub-healthcare.jpg";

const PUB_IMAGES = [pubGaming, pubMeta, pubHealthcare];

const Publications = () => (
  <div>
    <PageHero title="Publications" subtitle="In-depth research and analysis across industries and companies" />

    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <p className="text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Grandeur has always believed in sharing knowledge in a comprehensive yet understandable form. Our publication series covers industry analysis, company deep-dives, and topical research Grandeur has always believed in sharing knowledge in a comprehensive yet understandable form. Our publication series covers industry analysis, company deep-dives, and topical research reports, written by our members and reviewed by peers and faculty. and reviewed by peers and faculty.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATIONS.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-6 h-full flex flex-col">
                <div className="h-40 rounded-lg overflow-hidden mb-4">
                  <img src={PUB_IMAGES[i]} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">{p.category}</span>
                <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{p.description}</p>
                <button className="mt-4 text-primary font-semibold text-sm hover:underline text-left">Read Report →</button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ONGOING SERIES */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <SectionHeader title="Ongoing Series" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Industry Analysis Series", desc: "Regular deep-dives into high-growth sectors" },
            { title: "Company Analysis Series", desc: "Breakdowns of major corporations' strategies and financials" },
            { title: "Newsletter & News Analysis", desc: "Timely commentary on business and market events" },
          ].map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-6 text-center">
                <BookOpen className="text-primary mx-auto mb-3" size={24} />
                <h3 className="font-heading font-bold mb-1">{s.title}</h3>
                <p className="text-foreground-secondary text-sm">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main text-center">
        <h2 className="font-heading text-2xl font-bold mb-4">Have a research topic you'd like us to explore?</h2>
        <Link to="/contact" className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Suggest a Topic</Link>
      </div>
    </section>
  </div>
);

export default Publications;
