import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Elobchip
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Engineering the future with cutting-edge semiconductor solutions and VLSI design services.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:contact@elobchip.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  contact@elobchip.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href="tel:+916360039416" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +91 6360039416
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Corporate Headquarters</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-accent mt-1" />
              <address className="text-primary-foreground/80 not-italic">
                7th Main Road, Railway Layout,<br />
                Dasarhalli, Bangalore,<br />
                Karnataka 560056
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Elobchip. All rights reserved. | Engineering the Future of Semiconductors
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;