import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, GraduationCap, Cpu, CheckCircle } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Settings,
      title: "Verification IP Customization",
      description: "Our core competency. Deep expertise in protocols like AMBA, MIPI, PCI, USB.",
      features: [
        "AMBA AHB/AXI Protocol Verification",
        "MIPI CSI/DSI Implementation",
        "PCI Express Protocol Support",
        "USB 2.0/3.0 Verification",
        "Custom VIP Development",
        "24x5 Technical Support"
      ],
      highlight: "Core Competency"
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Tailored training to boost your engineers' productivity quickly.",
      features: [
        "SystemVerilog & UVM Training",
        "VLSI Design Fundamentals",
        "Verification Methodologies",
        "Protocol-specific Training",
        "Hands-on Lab Sessions",
        "Certification Programs"
      ],
      highlight: "Skill Development"
    },
    {
      icon: Cpu,
      title: "Front-End Design & Verification",
      description: "From architecture design, RTL, testbench creation, assertions (SVA), functional coverage to OVM/UVM using Verilog/VHDL/SystemVerilog.",
      features: [
        "RTL Design & Architecture",
        "Testbench Development",
        "SystemVerilog Assertions (SVA)",
        "Functional Coverage Analysis",
        "OVM/UVM Methodology",
        "Synthesis & Timing Analysis"
      ],
      highlight: "End-to-End Solution"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
              Comprehensive VLSI design and verification services tailored to accelerate your semiconductor projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <Card className="tech-card relative h-full hover:shadow-elevated">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="h-12 w-12 text-primary" />
                      <Badge variant="secondary" className="bg-gradient-to-r from-accent to-secondary text-white">
                        {service.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready to Accelerate Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with Elobchip for cutting-edge VLSI solutions and experience the difference of working with industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold">
                Start Your Project
              </a>
              <a 
                href="mailto:contact@elobchip.com" 
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                Discuss Requirements
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;