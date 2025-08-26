import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Důvěryhodnost",
      description: "Naše poradenství je založeno na transparentnosti a dlouhodobých vztazích s klienty"
    },
    {
      icon: <Award className="h-8 w-8 text-trust" />,
      title: "Odbornost",
      description: "Tým certifikovaných finančních poradců s mnohaletými zkušenostmi"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Individuální přístup",
      description: "Každý klient je jedinečný a zaslouží si personalizované řešení"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Dlouhodobé výsledky",
      description: "Zaměřujeme se na udržitelný růst a dosažení vašich finančních cílů"
    }
  ];

  const team = [
    {
      name: "Mgr. Pavel Novák",
      position: "Hlavní finanční poradce",
      experience: "15+ let zkušeností",
      specialization: "Penzijní plánování, investice"
    },
    {
      name: "Ing. Jana Svobodová",
      position: "Specialistka na pojištění",
      experience: "12+ let zkušeností", 
      specialization: "Pojistné poradenství, rizikové analýzy"
    },
    {
      name: "Bc. Tomáš Procházka",
      position: "Investiční poradce",
      experience: "8+ let zkušeností",
      specialization: "Investiční strategie, portfolia"
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            O společnosti Duvira
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Jsme tým odborníků specializujících se na komplexní finanční poradenství. 
            Naším cílem je pomoci klientům dosáhnout finanční svobody a zajistit jejich budoucnost.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Naše mise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Společnost Duvira s.r.o. byla založena s vizí demokratizovat přístup k profesionálnímu 
              finančnímu poradenství. Věříme, že každý má právo na kvalitní finanční vzdělání a 
              individuální přístup ke svým finančním cílům.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Naše služby kombinují tradiční poradenské přístupy s moderními technologiemi a 
              aktuálními poznatky z oblasti behavioral finance. Zaměřujeme se na dlouhodobé 
              budování vztahů s klienty a jejich postupné vzdělávání.
            </p>
            <Button variant="consultation" asChild>
              <Link to="/konzultace">Poznejte náš přístup</Link>
            </Button>
          </div>
          <div className="bg-gradient-secondary rounded-2xl p-8 shadow-medium">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Spokojených klientů</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-trust">15+</div>
                <div className="text-muted-foreground">Let zkušeností</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">50M+</div>
                <div className="text-muted-foreground">Kč spravovaných prostředků</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naše hodnoty
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hodnoty, které nás vedou při každém rozhodnutí a které jsou základem našeho přístupu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-background w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Náš tým
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Poznejte odborníky, kteří vám pomohou dosáhnout vašich finančních cílů
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.position}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">{member.experience}</p>
                <p className="text-sm">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Certifikace a členství
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-foreground">
                  Česká národní banka
                </div>
                <p className="text-sm text-muted-foreground">
                  Registrovaní poradci pro investiční služby
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-foreground">
                  APFCR
                </div>
                <p className="text-sm text-muted-foreground">
                  Asociace pro finanční poradenství ČR
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-foreground">
                  ISO 27001
                </div>
                <p className="text-sm text-muted-foreground">
                  Certifikace bezpečnosti informací
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Připraveni začít vaši finanční cestu?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Kontaktujte nás ještě dnes a domluvte si bezplatnou konzultaci s našimi odborníky
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/konzultace">Bezplatná konzultace</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;