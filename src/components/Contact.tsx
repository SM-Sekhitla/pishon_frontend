import { useState, type FormEvent } from "react";
import { ArrowUpRight, BriefcaseBusiness, UserRound, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import boardroom from "@/assets/executive-boardroom.png";

type Audience = "client" | "candidate";
type Enquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  topic: string;
  reference: string;
  linkedin: string;
  message: string;
};
const emptyEnquiry = (topic: string): Enquiry => ({ name: "", email: "", phone: "", company: "", topic, reference: "", linkedin: "", message: "" });
const topics = {
  client: ["Executive search", "Leadership advisory", "Board appointments", "General client enquiry"],
  candidate: ["Vacancies", "Applications", "CV registration", "General candidate enquiry"],
};

const Contact = () => {
  const [audience, setAudience] = useState<Audience>("client");
  const [drafts, setDrafts] = useState({ client: emptyEnquiry("Executive search"), candidate: emptyEnquiry("Vacancies") });
  const [preparedFor, setPreparedFor] = useState<Audience | null>(null);

  const update = (route: Audience, field: keyof Enquiry, value: string) => {
    setDrafts(previous => ({ ...previous, [route]: { ...previous[route], [field]: value } }));
    setPreparedFor(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, route: Audience) => {
    event.preventDefault();
    const enquiry = drafts[route];
    const lines = [
      `${route === "client" ? "Client" : "Candidate"} enquiry: ${enquiry.topic}`,
      "",
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      ...(enquiry.phone ? [`Phone: ${enquiry.phone}`] : []),
      ...(route === "client" ? [`Company / Organisation: ${enquiry.company}`] : []),
      ...(route === "candidate" && enquiry.reference ? [`Vacancy / Application reference: ${enquiry.reference}`] : []),
      ...(route === "candidate" && enquiry.linkedin ? [`LinkedIn / Professional profile: ${enquiry.linkedin}`] : []),
      "",
      enquiry.message,
      ...(route === "candidate" && enquiry.topic === "CV registration" ? ["", "Please attach your CV to this email before sending."] : []),
    ];
    const subject = `Pishon | ${route === "client" ? "Client" : "Candidate"} enquiry | ${enquiry.topic}`;
    window.location.href = `mailto:info@pishon.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setPreparedFor(route);
  };

  return (
    <section id="contact" className="private-enquiry py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="enquiry-introduction">
          <div>
            <span className="section-eyebrow">Get In Touch</span>
            <h2 id="contact-heading">Let's Start a <span>Conversation</span></h2>
          </div>
          <p>Whether you're looking to hire exceptional talent or exploring new career opportunities, we'd love to hear from you.</p>
        </div>

        <div className="enquiry-layout">
          <aside className="enquiry-concierge" aria-label="Contact Pishon directly">
            <img src={boardroom} alt="" className="concierge-background" loading="lazy" decoding="async" />
            <div className="concierge-content">
              <span className="concierge-eyebrow">Pishon Executive Search</span>
              <h3>Exceptional leaders.<br /><em>Lasting impact.</em></h3>
              <div className="concierge-rule" />
              <p className="concierge-invitation">A direct conversation.<br />A considered next step.</p>
              <dl className="concierge-details">
                <div><dt><Mail size={16} /><span>Email Us</span></dt><dd><a href="mailto:info@pishon.co.za">info@pishon.co.za</a></dd></div>
                <div><dt><Phone size={16} /><span>Call Us</span></dt><dd><a href="tel:+27825617202">+27 82 561 7202</a></dd></div>
                <div><dt><MapPin size={16} /><span>Visit Us</span></dt><dd>Design Quarter, Leslie Rd<br />Fourways, 2191</dd></div>
                <div><dt><Clock size={16} /><span>Hours</span></dt><dd>Mon – Fri: 8AM – 5PM</dd></div>
              </dl>
              <span className="concierge-signature">Experience. Diversity. Inclusion.</span>
            </div>
          </aside>

          <Tabs value={audience} onValueChange={value => setAudience(value as Audience)} className="enquiry-panel">
            <TabsList className="enquiry-routes" aria-label="Choose your enquiry type">
              <TabsTrigger value="client" className="enquiry-route"><BriefcaseBusiness size={20} strokeWidth={1.25} /><span><strong>For Clients</strong><small>Leadership & business enquiries</small></span><ArrowUpRight size={16} /></TabsTrigger>
              <TabsTrigger value="candidate" className="enquiry-route"><UserRound size={20} strokeWidth={1.25} /><span><strong>For Candidates</strong><small>Vacancies, applications & CVs</small></span><ArrowUpRight size={16} /></TabsTrigger>
            </TabsList>
            {(["client", "candidate"] as const).map(route => {
              const data = drafts[route];
              const client = route === "client";
              return (
                <TabsContent key={route} value={route} className="enquiry-route-content">
                  <div className="enquiry-form-heading">
                    <span className="section-eyebrow">{client ? "Your next leadership appointment" : "Your next career chapter"}</span>
                    <h3>{client ? "Tell us about your ambition." : "Let's explore what's next."}</h3>
                    <p>{client ? "Share your leadership requirements or start a conversation about your organisation." : "Ask about a vacancy, follow up on an application, or enquire about registering your CV."}</p>
                  </div>
                  <form onSubmit={event => handleSubmit(event, route)}>
                    <fieldset>
                      <legend>Your details</legend>
                      <div className="enquiry-fields">
                        <div><label htmlFor={`${route}-name`}>Full Name <span>*</span></label><Input id={`${route}-name`} name="name" autoComplete="name" required maxLength={120} value={data.name} onChange={event => update(route, "name", event.target.value)} placeholder="Your full name" /></div>
                        <div><label htmlFor={`${route}-email`}>{client ? "Business Email" : "Email"} <span>*</span></label><Input id={`${route}-email`} name="email" type="email" autoComplete="email" required maxLength={180} value={data.email} onChange={event => update(route, "email", event.target.value)} placeholder={client ? "you@organisation.com" : "you@email.com"} /></div>
                        <div><label htmlFor={`${route}-phone`}>Phone <small>Optional</small></label><Input id={`${route}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} value={data.phone} onChange={event => update(route, "phone", event.target.value)} placeholder="+27" /></div>
                        {client ? (
                          <div><label htmlFor="client-company">Company / Organisation <span>*</span></label><Input id="client-company" name="company" autoComplete="organization" required maxLength={160} value={data.company} onChange={event => update(route, "company", event.target.value)} placeholder="Your organisation" /></div>
                        ) : (
                          <div><label htmlFor="candidate-linkedin">Professional Profile <small>Optional</small></label><Input id="candidate-linkedin" name="linkedin" type="url" maxLength={300} value={data.linkedin} onChange={event => update(route, "linkedin", event.target.value)} placeholder="https://www.linkedin.com/in/…" /></div>
                        )}
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend>Your enquiry</legend>
                      <div className="enquiry-fields">
                        <div className={client ? "enquiry-full-width" : ""}><label htmlFor={`${route}-topic`}>How can we help? <span>*</span></label><select id={`${route}-topic`} name="topic" required value={data.topic} onChange={event => update(route, "topic", event.target.value)}>{topics[route].map(topic => <option key={topic}>{topic}</option>)}</select></div>
                        {!client && <div><label htmlFor="candidate-reference">Vacancy / Application Reference <small>Optional</small></label><Input id="candidate-reference" name="reference" maxLength={160} value={data.reference} onChange={event => update(route, "reference", event.target.value)} placeholder="Position title or reference" /></div>}
                        <div className="enquiry-full-width"><label htmlFor={`${route}-message`}>{client ? "Your Requirements" : "Your Message"} <span>*</span></label><Textarea id={`${route}-message`} name="message" required maxLength={1500} rows={4} value={data.message} onChange={event => update(route, "message", event.target.value)} placeholder={client ? "Tell us about the appointment, the opportunity, and what success looks like." : "Tell us how we can help with your career enquiry."} /></div>
                      </div>
                    </fieldset>
                    {!client && data.topic === "CV registration" && <div className="cv-guidance"><Mail size={18} /><p>Ready to introduce yourself? Attach your CV to the email that opens next. Your CV will be sent when you send that email.</p></div>}
                    <div className="enquiry-submit-row">
                      <p>Your email app will open with your enquiry prepared. Review it{!client && data.topic === "CV registration" ? ", attach your CV," : ""} and send it to Pishon.</p>
                      <button type="submit" className="enquiry-submit">Continue by Email <ArrowRight size={17} /></button>
                    </div>
                    {preparedFor === route && <p className="enquiry-feedback" role="status">Your email draft has been requested. If your email app didn't open, contact <a href="mailto:info@pishon.co.za">info@pishon.co.za</a>. Your enquiry has not been sent by this website.</p>}
                    <div className="enquiry-fine-print"><span>Required fields are marked *</span></div>
                  </form>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Contact;
