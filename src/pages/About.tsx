import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users, TrendingUp, Clock } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      icon: TrendingUp,
      title: "100% Growth",
      description: "Consistent growth for 5 consecutive years"
    },
    {
      icon: Clock,
      title: "24x7 Support",
      description: "Industry's first round-the-clock support model"
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Serving clients worldwide from Bengaluru HQ"
    },
    {
      icon: Award,
      title: "IP Specialists",
      description: "Renowned for Verification IP expertise"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Elobchip
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
              Pioneering the future of semiconductor technology through innovation, expertise, and unwavering commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="tech-card">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Badge variant="secondary" className="bg-gradient-to-r from-accent to-secondary text-white mb-4">
                    Company Overview
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Leading VLSI Design Services
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                  <p>
                    Elobchip is a privately held company delivering Design and Verification services in VLSI with a strong leadership team. Founded in 2016 with headquarters in Bengaluru, we have established ourselves as a global design services company for the VLSI sector.
                  </p>
                  
                  <p>
                    Renowned for verification IP and SOC verification, we offer the industry's first 24/5 support model, setting new standards for customer service in the semiconductor industry. Our commitment to excellence has made us one of India's fastest-growing technology companies.
                  </p>
                  
                  <p>
                    With cutting-edge solutions including ASIC Design and SOC Verification, Elobchip delivers comprehensive services that span the entire semiconductor development lifecycle, from concept to silicon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="tech-card h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                  </div>
                  
                  <div className="space-y-4 text-foreground/90">
                    <p className="text-lg leading-relaxed">
                      To emerge as the foremost provider of semiconductor IP solutions, setting industry benchmarks for quality and innovation.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      To establish ourselves as the ultimate destination for design and verification needs, becoming the go-to partner for companies seeking excellence in VLSI services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mission */}
            <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="tech-card h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                  </div>
                  
                  <div className="space-y-4 text-foreground/90">
                    <p className="text-lg leading-relaxed">
                      To develop cutting-edge VIPs that set industry standards with superior functionality and ease of integration, empowering our clients to achieve their technological goals.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      To deliver expert consultancy services and design SoCs from concept to silicon with uncompromising focus on performance, power efficiency, and cost optimization.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones that showcase our commitment to excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1100 + index * 150}ms` }}
              >
                <Card className="tech-card text-center h-full">
                  <CardContent className="p-6">
                    <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2 text-primary">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
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

export default About;