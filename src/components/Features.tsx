import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import featureDetection from "@/assets/feature-detection.jpg";
import featureCalendar from "@/assets/popup-calendar.png";
import featureSync from "@/assets/popup-sync.png";


const features = [
  {
    title: "Automatic Detection",
    description: "Identifies BNPL confirmation screens from sites like Klarna, Afterpay, and Affirm.",
    image: featureDetection,
    highlight: "AI-Powered"
  },
  {
    title: "Calendar Visualization",
    description: "See all your upcoming BNPL payments in a drag-and-drop calendar interface.",
    image: featureCalendar,
    highlight: "Visual Overview"
  },
  {
    title: "Google Calendar Sync",
    description: "Instantly adds or updates payment reminders in your personal calendar.",
    image: featureSync,
    highlight: "Seamless Sync"
  },

];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
            Everything you need to manage BNPL payments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PayPlan makes it effortless to track, organize, and never miss your Buy Now Pay Later installments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center rounded-full bg-primary px-2 py-1 text-xs font-medium text-white">
                  {feature.highlight}
                </span>
              </div>
              <CardHeader className="pb-4">
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;