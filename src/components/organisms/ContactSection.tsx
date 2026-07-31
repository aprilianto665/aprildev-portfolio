import Card from '../molecules/Card';
import Icon from '../atoms/Icon';

export default function ContactSection() {
  const contacts = [
    {
      icon: "email" as const,
      title: "Email",
      description: "Feel free to reach out for any inquiries",
      link: "mailto:aprilianto665@gmail.com",
      linkText: "aprilianto665@gmail.com"
    },
    {
      icon: "linkedin" as const,
      title: "LinkedIn", 
      description: "Connect with me professionally",
      link: "https://www.linkedin.com/in/muhammad-aprilianto/",
      linkText: "linkedin.com/in/muhammad-aprilianto"
    },
    {
      icon: "github" as const,
      title: "GitHub",
      description: "Check out my code and projects", 
      link: "https://github.com/aprilianto665",
      linkText: "github.com/aprilianto665"
    }
  ];

  return (
    <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 scroll-mt-20">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
          Get In <span className="text-orange-600">Touch</span>
        </h2>
        <p className="text-gray-800 font-bold text-base sm:text-lg max-w-2xl mx-auto">
          Let&apos;s connect and discuss opportunities or collaborations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <Card key={contact.title}>
            <Icon name={contact.icon} className="w-8 h-8 mb-4 text-orange-600" />
            <h3 className="text-xl font-extrabold text-black mb-3">
              {contact.title}
            </h3>
            <p className="text-gray-700 font-medium mb-4 text-sm">
              {contact.description}
            </p>
            <a
              href={contact.link}
              target={contact.icon !== "email" ? "_blank" : undefined}
              rel={contact.icon !== "email" ? "noopener noreferrer" : undefined}
              className="text-orange-600 hover:text-orange-700 font-extrabold break-all transition-colors"
            >
              {contact.linkText}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}