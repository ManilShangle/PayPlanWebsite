import { Button } from "@/components/ui/button";
import { Chrome, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Take Control of Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  BNPL Payments
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                PayPlan automatically detects BNPL purchases and adds smart payment reminders to your calendar. Never miss a payment again.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="cta" size="lg" asChild>
                <a href="https://chrome.google.com/webstore/detail/payplan/your-extension-id" target="_blank" rel="noopener noreferrer">
                  <Chrome className="mr-2 h-5 w-5" />
                  Add to Chrome - It's Free
                </a>
              </Button>
              <Button variant="cta-outline" size="lg" asChild>
                <a href="#features">
                  See How It Works
                </a>
              </Button>
            </div>

            {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Trusted by Google</span>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-card">
              <img 
                src={heroImage} 
                alt="PayPlan Calendar Integration" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;