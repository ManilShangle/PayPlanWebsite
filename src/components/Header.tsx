import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import logo from '../assets/icon.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          <span className="text-xl font-bold text-foreground">PayPlan</span>
        </div>
      

        <Button variant="cta" size="sm" asChild>
          <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
            <Chrome className="mr-2 h-4 w-4" />
            Add to Chrome
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;