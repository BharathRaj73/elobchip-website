import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@elobchip.com",
      link: "mailto:contact@elobchip.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 6360039416",
      link: "tel:+916360039416",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content:
        "7th Main Road, Railway Layout, Dasarhalli, Bangalore, Karnataka 560056",
      link: "https://maps.google.com/?q=7th+Main+Road+Railway+Layout+Dasarhalli+Bangalore+Karnataka+560056",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24x5 Customer Support (Monday to Friday, 24 hours)",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div
            className={`text-center text-white transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
              Get in touch with our team of experts. We're here to help you with
              your semiconductor design and verification needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="tech-card text-center h-full">
                <CardContent className="p-6">
                  <info.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      {info.content}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
