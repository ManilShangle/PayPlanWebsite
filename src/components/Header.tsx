import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-white">P</span>
          </div>
          <span className="text-xl font-bold text-foreground">PayPlan</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Support
          </a>
        </nav>

        <Button variant="cta" size="sm" asChild>
          <a href="https://chrome.google.com/webstore/detail/payplan/your-extension-id" target="_blank" rel="noopener noreferrer">
            <Chrome className="mr-2 h-4 w-4" />
            Add to Chrome
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;