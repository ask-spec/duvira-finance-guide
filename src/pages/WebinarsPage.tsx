import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video, Download, Star } from "lucide-react";

const WebinarsPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "Penzijní reforma 2024: Dopady na vaše spoření",
      description: "Detailní rozbor připravovaných změn v penzijním systému a jejich praktické dopady na různé věkové skupiny.",
      date: "28. prosince 2024",
      time: "19:00 - 20:30",
      presenter: "Mgr. Pavel Novák",
      price: "299 Kč",
      participants: 15,
      maxParticipants: 50,
      featured: true
    },
    {
      id: 2,
      title: "Investování v turbulentních časech",
      description: "Strategie pro investování během ekonomické nejistoty a praktické tipy pro ochranu portfolia.",
      date: "5. ledna 2025",
      time: "18:00 - 19:30",
      presenter: "Bc. Tomáš Procházka",
      price: "399 Kč",
      participants: 8,
      maxParticipants: 30,
      featured: false
    },
    {
      id: 3,
      title: "Daňové optimalizace pro rok 2025",
      description: "Kompletní průvodce všemi možnostmi daňových úlev a úspor na daních pro nadcházející rok.",
      date: "12. ledna 2025",
      time: "19:00 - 20:00",
      presenter: "Ing. Jana Svobodová",
      price: "199 Kč",
      participants: 22,
      maxParticipants: 40,
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Základy investování pro začátečníky",
      description: "Kompletní úvod do světa investic včetně praktických příkladů a case studies.",
      date: "15. prosince 2024",
      presenter: "Bc. Tomáš Procházka",
      price: "249 Kč",
      rating: 4.8,
      reviews: 45,
      available: true
    },
    {
      id: 5,
      title: "Hypotéky v roce 2024: Co se změnilo",
      description: "Přehled aktuálních změn v hypotečním trhu a doporučení pro žadatele o hypotéku.",
      date: "8. prosince 2024",
      presenter: "Mgr. Pavel Novák",
      price: "199 Kč",
      rating: 4.9,
      reviews: 32,
      available: true
    },
    {
      id: 6,
      title: "Pojištění rodiny: Kompletní průvodce",
      description: "Jak správně pojistit sebe a svou rodinu a ušetřit při tom na pojistném.",
      date: "1. prosince 2024",
      presenter: "Ing. Jana Svobodová",
      price: "299 Kč",
      rating: 4.7,
      reviews: 28,
      available: true
    }
  ];

  const materials = [
    {
      title: "Checklist: Příprava na penzi",
      description: "Kompletní kontrolní seznam kroků pro zajištění důstojné penze.",
      price: "99 Kč",
      pages: 12,
      downloads: 1250
    },
    {
      title: "Kalkulátor investičního portfolia",
      description: "Excel šablona pro výpočet optimálního rozložení investic podle věku a rizikového profilu.",
      price: "149 Kč",
      pages: "Excel soubor",
      downloads: 890
    },
    {
      title: "Průvodce daňovým přiznáním",
      description: "Krok za krokem návod jak správně vyplnit daňové přiznání a maximalizovat úlevy.",
      price: "199 Kč",
      pages: 28,
      downloads: 670
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Webináře a materiály
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vzdělávejte se v oblasti financí pohodlně z domova. Naše webináře a materiály 
            vám pomohou rozšířit znalosti a lépe spravovat své finance.
          </p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nadcházející webináře
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zaregistrujte se na naše živé webináře a získejte nejnovější informace
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {upcomingWebinars.map((webinar) => (
            <Card 
              key={webinar.id} 
              className={`hover:shadow-medium transition-all duration-300 ${
                webinar.featured ? 'border-primary shadow-soft' : ''
              }`}
            >
              {webinar.featured && (
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                  Doporučeno
                </Badge>
              )}
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-accent/10 text-accent">
                    Živě
                  </Badge>
                  <div className="text-lg font-bold text-primary">{webinar.price}</div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {webinar.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {webinar.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <span>{webinar.presenter}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{webinar.participants}/{webinar.maxParticipants} účastníků</span>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(webinar.participants / webinar.maxParticipants) * 100}%` }}
                  ></div>
                </div>
                <Button 
                  variant={webinar.featured ? "premium" : "default"} 
                  className="w-full"
                >
                  Registrovat se
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Webinars */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Záznamy webinářů
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Propásli jste živý webinář? Zakupte si záznam a sledujte kdykoli
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pastWebinars.map((webinar) => (
              <Card key={webinar.id} className="hover:shadow-medium transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Záznam</Badge>
                    <div className="text-lg font-bold text-primary">{webinar.price}</div>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {webinar.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {webinar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span>{webinar.presenter}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{webinar.rating}/5.0 ({webinar.reviews} hodnocení)</span>
                    </div>
                  </div>
                  <Button variant="consultation" className="w-full">
                    Koupit záznam
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Praktické materiály
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stáhněte si naše exkluzivní checklisty a nástroje pro lepší správu financí
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-trust/10 text-trust">
                    <Download className="h-3 w-3 mr-1" />
                    Ke stažení
                  </Badge>
                  <div className="text-lg font-bold text-primary">{material.price}</div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {material.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {material.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{material.pages}</span>
                  <span>{material.downloads} stažení</span>
                </div>
                <Button variant="trust" className="w-full">
                  Zakoupit a stáhnout
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Proč se vzdělávat s námi?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Video className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Interaktivní formát</h3>
                <p className="text-primary-foreground/90">
                  Možnost klást otázky v reálném čase a získat okamžité odpovědi
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Praktické příklady</h3>
                <p className="text-primary-foreground/90">
                  Reálné case studies a situace z praxe našich klientů
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Bonusové materiály</h3>
                <p className="text-primary-foreground/90">
                  Každý účastník získá dodatečné materiály a nástroje zdarma
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                Zobrazit všechny webináře
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Často kladené otázky
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {[
            {
              q: "Jak probíhá registrace na webinář?",
              a: "Po zaplacení obdržíte e-mail s odkazem pro připojení. Webináře probíhají přes moderní platformu s možností interakce."
            },
            {
              q: "Co když si nemohu webinář pustit v naplánovaný čas?",
              a: "Všichni registrovaní účastníci automaticky získají záznam webináře, který si mohou pustit kdykoli."
            },
            {
              q: "Jsou materiály ke stažení dostupné navždy?",
              a: "Ano, po zakoupení si můžete materiály stáhnout a používat bez časového omezení."
            },
            {
              q: "Nabízíte firemní webináře?",
              a: "Ano, připravujeme i webináře na míru pro firmy a jejich zaměstnance. Kontaktujte nás pro více informací."
            }
          ].map((faq, index) => (
            <Card key={index} className="hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;