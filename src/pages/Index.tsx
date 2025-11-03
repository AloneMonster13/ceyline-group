import { 
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Youtube,
  Music,
  MapPin,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SocialIcon from "@/components/SocialIcon";
import heroBackground from "@/assets/hero-ocean-bg.jpg";
import ceylineLogo from "@/assets/ceyline-logo.png";
import ceylineLogoWhite from "@/assets/ceyline-logo-white.png";
import constructionBanner from "@/assets/construction-banner.jpeg";
import sectorsDiagram from "@/assets/sectors-diagram.png";
import { SiTiktok } from "react-icons/si";
import Ceyline from "@/assets/Ceyline.jpg";
import { assert } from "console";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95" />
        <div className="absolute inset-0 animate-wave opacity-20" 
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <img 
            src={ceylineLogoWhite} 
            alt="Ceyline Group" 
            className="w-48 md:w-64 h-auto mx-auto mb-6 md:mb-8 animate-float"
          />
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in">
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Most Diversified 
            </span>
            <br />
            <span className="inline-block animate-slide-up bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
              Maritime Group in Sri Lanka
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8 font-light">
            Sri lanka’s gateway for global maritime & logistics.
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Ceyline Group
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ceyline Group stands at the forefront of the maritime industry, delivering unparalleled excellence in shipping operations, maritime education, and crew management. Logistics and supply chain capabilities, shaping the future of global maritime.A growing presence in healthcare and leisure. With decades of expertise and a commitment to innovation, we shape the future of global maritime and related services through cutting-edge technology and sustainable practices.
            </p>
          </div>

 <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4 sm:mt-6 md:mt-8 text-center px-3 leading-relaxed bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
  Inspiring leadership in everyone we touch, to build a sustainable and equitable future for all.
</h3>




          
          <Card className="max-w-4xl mx-auto mt-8 md:mt-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
            <CardContent className="p-4 md:p-8">
              <img 
                src={Ceyline} 
                alt="Ceyline Group Business Sectors - Marine, Logistic, Education, Leisure, and Healthcare"
                className="w-full h-auto rounded-lg object-contain"
              />
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Connect With Us Section */}
<section className="py-12 md:py-20 px-4 bg-background">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Connect With Us
    </h2>

    {/* Contact Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        onClick={() => window.location.href = 'mailto:corporate@ceyline-group.lk'}
      >
        <Mail className="w-5 h-5 mr-2" />
        Email Us
      </Button>
      <Button 
        size="lg"
        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        onClick={() => window.open('https://www.ceyline-group.lk/', '_blank')}
      >
        <Globe className="w-5 h-5 mr-2" />
        Visit Website
      </Button>
    </div>

    {/* Social Icons */}
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <SocialIcon 
          icon={Facebook} 
          href="https://www.facebook.com/people/Ceyline-Group/61560848647512/" 
          label="Facebook"
          platform="facebook"
        />
        <SocialIcon 
          icon={Instagram} 
          href="https://www.instagram.com/ceyline_group/" 
          label="Instagram"
          platform="instagram"
        />
        <SocialIcon 
          icon={Linkedin} 
          href="https://www.linkedin.com/company/ceyline-group/posts/?feedView=all" 
          label="LinkedIn"
          platform="linkedin"
        />
        <SocialIcon 
          icon={Youtube} 
          href="https://www.youtube.com/channel/UCZ1DztnEU98GccGKHdo4kJg" 
          label="YouTube"
          platform="youtube"
        />
      </div>

      {/* TikTok Centered */}
      <div className="col-span-2 flex justify-center mt-6">
        <div className="w-1/2 flex justify-center">
          <SocialIcon 
            icon={SiTiktok} 
            href="https://www.tiktok.com/@ceyline_group" 
            label="TikTok"
            platform="tiktok"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <p className="text-base md:text-lg">
                  Alfred House Avenue, Colombo 03, Sri Lanka
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                <p className="text-base md:text-lg">
                  +94 11 4511000
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 mt-4"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Alfred+House+Avenue,+Colombo+03,+Sri+Lanka', '_blank')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                View on Google Maps
              </Button>
            </div>
            <p className="text-white/80 text-center">
              © 2025 Ceyline Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
