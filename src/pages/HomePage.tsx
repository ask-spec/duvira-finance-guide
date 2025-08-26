import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Calculator, Users, BookOpen, Video } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import servicesImage from "@/assets/services-image.jpg";

const HomePage = () => {
  const services = [
    {
      icon: <Calculator className="h-8 w-8 text-accent" />,
      title: "Penzijní plánování",
      description: "Komplexní analýza a optimalizace vašeho penzijního zabezpečení"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-trust" />,
      title: "Investiční strategie",
      description: "Individuální investiční plány pro dosažení vašich finančních cílů"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Pojistné poradenství",
      description: "Ochrana vašich financí a majetku prostřednictvím správného pojištění"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Rodinné finance",
      description: "Plánování rozpočtu a finanční strategie pro celou rodinu"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-trust" />,
      title: "Daňové poradenství",
      description: "Optimalizace daňových povinností a využití dostupných úlev"
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Vzdělávací webináře",
      description: "Pravidelné vzdělávací semináře o aktuálních finančních tématech"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Bezplatná konzultace",
      description: "Seznámíme se s vaší finanční situací a potřebami"
    },
    {
      number: "02", 
      title: "Analýza a návrh",
      description: "Připravíme personalizovaný finanční plán"
    },
    {
      number: "03",
      title: "Implementace",
      description: "Společně realizujeme navržená opatření"
    },
    {
      number: "04",
      title: "Pravidelný monitoring",
      description: "Sledujeme pokrok a upravujeme strategii"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Vaše finanční budoucnost začíná dnes
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Odborné poradenství v oblasti penzí, investic a osobních financí. 
                Získejte kontrolu nad svou finanční budoucností s našimi experty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/konzultace">Bezplatná konzultace</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/o-nas">Více o nás</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={heroImage} 
                alt="Finanční poradenství" 
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Naše služby
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Poskytujeme komplexní finanční poradenství přizpůsobené vašim individuálním potřebám
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-secondary w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="consultation" size="lg" asChild>
            <Link to="/konzultace">Zjistit více o našich službách</Link>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Jak to funguje
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jednoduchý proces od první konzultace k dosažení vašich finančních cílů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Začněte svou cestu k finanční svobodě ještě dnes
            </h2>
            <p className="text-xl text-muted-foreground">
              Naše první konzultace je zcela zdarma. Během 60 minut společně 
              prozkoumáme vaši současnou finanční situaci a navrhneme konkrétní kroky.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span className="text-foreground">Bezplatná první konzultace</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span className="text-foreground">Individuální přístup</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-trust rounded-full"></div>
                <span className="text-foreground">Dlouholeté zkušenosti</span>
              </div>
            </div>
            <Button variant="premium" size="lg" asChild>
              <Link to="/konzultace">Objednat konzultaci</Link>
            </Button>
          </div>
          <div className="relative">
            <img 
              src={servicesImage} 
              alt="Finanční dokumenty a kalkulačka" 
              className="rounded-2xl shadow-medium w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nejnovější články
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zůstaňte informováni o aktuálních trendech ve financích a investicích
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Změny v penzijním systému 2024",
                excerpt: "Přehled novinek a doporučení pro optimalizaci penzijního spoření",
                date: "15. prosince 2024"
              },
              {
                title: "Investování pro začátečníky",
                excerpt: "Základní principy a strategie pro úspěšné dlouhodobé investování",
                date: "10. prosince 2024"
              },
              {
                title: "Daňové úlevy a jejich využití",
                excerpt: "Jak maximálně využít dostupné daňové úlevy v roce 2024",
                date: "5. prosince 2024"
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link to="/clanky">Číst více</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/clanky">Všechny články</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;