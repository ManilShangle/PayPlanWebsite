import { Button } from "@/components/ui/button";
import { Chrome, Shield, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to take control of your BNPL payments?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who never miss a payment. Install PayPlan and start managing your Buy Now Pay Later purchases like a pro.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
                <Chrome className="mr-2 h-5 w-5" />
                Add to Chrome - It's Free
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">100% Secure</h3>
              <p className="text-sm text-muted-foreground text-center">Your data stays on your device</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Beginner-friendly</h3>
              <p className="text-sm text-muted-foreground text-center">Trusted by the community</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Chrome className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Easy Setup</h3>
              <p className="text-sm text-muted-foreground text-center">Install in one click</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;