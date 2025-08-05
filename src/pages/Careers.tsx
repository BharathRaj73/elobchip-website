import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, TrendingUp, Heart } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";
import facility from "@/assets/facility.jpg";
import workspace from "@/assets/workspace.jpg";

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We foster creativity and encourage breakthrough thinking in everything we do.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Teamwork and knowledge sharing are at the heart of our success.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "We invest in our people's professional development and career advancement.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We're passionate about semiconductor technology and making a difference.",
    },
  ];

  const galleryImages = [
    {
      src: teamWork,
      alt: "Team collaboration in modern workspace",
      title: "Collaborative Environment",
    },
    {
      src: facility,
      alt: "State-of-the-art semiconductor facility",
      title: "Advanced Facilities",
    },
    {
      src: workspace,
      alt: "Engineering workspace with multiple monitors",
      title: "Modern Workspaces",
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
              Be part of India's fastest-growing semiconductor company and shape
              the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Why Join Elobchip?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience exponential growth, cutting-edge technology, and a
              culture that values innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
              >
                <Card className="tech-card text-center h-full">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Story */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="tech-card">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-accent to-secondary text-white mb-4"
                  >
                    Our Growth Story
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    100% Growth for 5 Consecutive Years
                  </h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                  <p>
                    At Elobchip, growth isn't just about numbers—it's about
                    creating opportunities for our team members to excel,
                    innovate, and build remarkable careers in the semiconductor
                    industry.
                  </p>

                  <p>
                    Our consistent 100% growth in both revenue and team size for
                    five consecutive years reflects our commitment to creating a
                    sustainable, thriving workplace where every individual can
                    contribute to cutting-edge technology development.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        2016
                      </div>
                      <div className="text-muted-foreground">
                        Founded in Bengaluru
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        100%
                      </div>
                      <div className="text-muted-foreground">
                        Annual Growth Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        24x7
                      </div>
                      <div className="text-muted-foreground">
                        Industry-First Support
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Workplace
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a glimpse into our modern, collaborative work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${1400 + index * 200}ms` }}
              >
                <Card className="tech-card overflow-hidden">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary">
        <div className="container mx-auto px-4">
          <div
            className={`text-center text-white transition-all duration-700 delay-1800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Join our team of innovators and be part of the semiconductor
              revolution. We're always looking for talented individuals who
              share our passion for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-hero inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold"
              >
                Get in Touch
              </a>
              <a
                href="mailto:contact@elobchip.com"
                className="border border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
