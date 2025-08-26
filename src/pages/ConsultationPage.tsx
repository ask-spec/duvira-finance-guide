import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Check, Clock, Users, Star, Calendar, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultationPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Žádost odeslána!",
      description: "Brzy vás budeme kontaktovat pro potvrzení termínu.",
    });
    // Redirect to thank you page would happen here
    window.location.href = "/dekuji";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const packages = [
    {
      name: "Základní",
      price: "Zdarma",
      duration: "60 minut",
      description: "Ideální pro první seznámení",
      features: [
        "Analýza současné finanční situace",
        "Základní doporučení",
        "Odpovědi na vaše otázky",
        "Návrh dalších kroků"
      ],
      highlighted: false,
      available: true
    },
    {
      name: "Standard",
      price: "4 999 Kč",
      duration: "4 konzultace",
      description: "Kompletní finanční plánování",
      features: [
        "Vše ze základního balíčku",
        "Detailní finanční analýza",
        "Personalizovaný investiční plán",
        "Optimalizace daní a pojištění",
        "Písemné doporučení",
        "3 měsíce e-mailové podpory"
      ],
      highlighted: true,
      available: true
    },
    {
      name: "Premium",
      price: "12 999 Kč",
      duration: "Neomezeno",
      description: "Celoroční finanční partnerství",
      features: [
        "Vše ze standardního balíčku",
        "Neomezený počet konzultací",
        "Pravidelné portfolio reviews",
        "Prioritní podpora",
        "Přístup k exkluzivním webinářům",
        "Roční finanční zdravotní prohlídka"
      ],
      highlighted: false,
      available: true
    }
  ];

  const testimonials = [
    {
      name: "Anna Nováková",
      text: "Díky konzultaci s Duvira jsem optimalizovala své penzijní spoření a ušetřila na daních více než 15 000 Kč ročně.",
      rating: 5
    },
    {
      name: "Martin Svoboda", 
      text: "Profesionální přístup a srozumitelné vysvětlení složitých finančních produktů. Doporučuji všem!",
      rating: 5
    },
    {
      name: "Eva Procházková",
      text: "Skvělé poradenství pro mladé rodiny. Pomohli nám naplánovat finance na hypotéku i vzdělání dětí.",
      rating: 5
    }
  ];

  const consultationTypes = [
    "Penzijní plánování",
    "Investiční strategie", 
    "Pojistné poradenství",
    "Daňová optimalizace",
    "Rodinné finance",
    "Hypotéky a úvěry",
    "Obecné finanční poradenství"
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Finanční konzultace
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Začněte svou cestu k finanční svobodě s naší <strong>bezplatnou první konzultací</strong>. 
            Naši odborníci vám pomohou najít nejlepší řešení pro vaši finanční situaci.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <a href="#booking">Objednat konzultaci</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#packages">Zobrazit balíčky</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Proč zvolit naše konzultace?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Individuální přístup</h3>
              <p className="text-muted-foreground">
                Každá konzultace je přizpůsobena vašim specifickým potřebám a finančním cílům
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-trust rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-trust-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Odborné know-how</h3>
              <p className="text-muted-foreground">
                Tým certifikovaných poradců s mnohaletými zkušenostmi v oboru
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Flexibilní termíny</h3>
              <p className="text-muted-foreground">
                Online i offline konzultace v čase, který vám vyhovuje
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Konzultační balíčky
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vyberte si balíček, který nejlépe odpovídá vašim potřebám
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-strong transition-all duration-300 ${
                pkg.highlighted ? 'border-primary shadow-medium scale-105' : ''
              }`}
            >
              {pkg.highlighted && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Nejpopulárnější
                </Badge>
              )}
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                </div>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-trust mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.highlighted ? "premium" : "outline"} 
                  className="w-full" 
                  asChild
                >
                  <a href="#booking">
                    {index === 0 ? "Objednat zdarma" : "Vybrat balíček"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                Objednejte si konzultaci
              </h2>
              <p className="text-lg text-muted-foreground">
                Vyplňte formulář níže a my vás budeme kontaktovat pro potvrzení termínu
              </p>
            </div>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Rezervace konzultace</CardTitle>
                <CardDescription>
                  Všechna pole označená * jsou povinná
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Jméno a příjmení *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Jan Novák"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      placeholder="+420 123 456 789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consultationType">Typ konzultace *</Label>
                    <select
                      id="consultationType"
                      value={formData.consultationType}
                      onChange={(e) => handleInputChange("consultationType", e.target.value)}
                      required
                      className="w-full p-3 border border-input rounded-lg bg-background"
                    >
                      <option value="">Vyberte typ konzultace</option>
                      {consultationTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferovaný datum</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferovaný čas</Label>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                        className="w-full p-3 border border-input rounded-lg bg-background"
                      >
                        <option value="">Vyberte čas</option>
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Popište stručně svou finanční situaci nebo konkrétní otázky..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    Odeslat žádost o konzultaci
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Odesláním souhlasíte s našimi{" "}
                    <Link to="/podminky-uzivani" className="text-primary hover:underline">
                      podmínkami užívání
                    </Link>{" "}
                    a{" "}
                    <Link to="/ochrana-soukromi" className="text-primary hover:underline">
                      zásadami ochrany soukromí
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-secondary rounded-2xl p-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Potřebujete rychlou odpověď?
            </h3>
            <p className="text-lg text-muted-foreground">
              Kontaktujte nás přímo a my vám rádi odpovíme na vaše otázky
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground">+420 228 885 432</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground">info@duvira.xyz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Co říkají naši klienti
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;