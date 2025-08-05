import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Cpu, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Elobchip | Semiconductor Solutions</title>
        <meta
          name="description"
          content="Elobchip is India's fastest-growing VLSI design services company. Discover innovation, support, and growth."
        />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div
          className={`relative z-10 container mx-auto px-4 text-center text-white transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Engineering the Future:
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Semiconductor Solutions
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4">
              at the Heart of Innovation
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto">
            We Believe in Igniting Innovation, Illuminating Progress
          </p>

          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Excellence in developing and licensing semiconductor IP cores,
            libraries, and design blocks. Propelled by nearly a decade of
            engineering triumphs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services">
              <Button
                size="lg"
                className="btn-hero group focus:outline-none focus:ring-0 active:opacity-100"
              >
                Explore Our Services
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border border-white text-primary hover:bg-white hover:text-primary transition"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              THE FASTEST-GROWING INTEGRATED CIRCUIT
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                DESIGN SERVICES COMPANY
              </span>
            </h2>
          </div>

          <div
            className={`max-w-6xl mx-auto transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="tech-card relative overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  Recognized as one of India's fastest-growing technology
                  companies, Elobchip is a global design services company for
                  the VLSI sector. Founded in 2016 with headquarters in
                  Bengaluru, Elobchip delivers cutting-edge solutions including
                  ASIC Design and SOC Verification. With 100% growth in revenue
                  and people for five consecutive years, we are the Verification
                  IP specialists offering 24x5 support, VIP customization, and
                  SOC Verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Why Choose Elobchip?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the semiconductor industry with innovation, expertise, and
              unmatched support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "VLSI Expertise",
                description:
                  "Deep expertise in AMBA, MIPI, PCI, USB protocols with cutting-edge solutions",
              },
              {
                icon: Zap,
                title: "24x7 Support",
                description:
                  "Industry's first 24x7 support model ensuring continuous assistance",
              },
              {
                icon: Target,
                title: "100% Growth",
                description:
                  "Consistent 100% growth in revenue and team for five consecutive years",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${900 + index * 200}ms` }}
              >
                <Card className="tech-card relative h-full">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
