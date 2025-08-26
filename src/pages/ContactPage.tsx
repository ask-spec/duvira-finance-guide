import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";


const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Zpráva odeslána!",
      description: "Děkujeme za váš zájem. Odpovíme vám do 24 hodin.",
    });
    // Redirect to thank you page
    window.location.href = "/dekuji";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Adresa",
      details: [
        "Jungmannova 745/24",
        "110 00 Praha 1",
        "Česká republika"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefon",
      details: ["+420 228 885 432"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-mail",
      details: ["info@duvira.xyz"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Pracovní doba",
      details: [
        "Po-Pá: 9:00 - 18:00",
        "So: 9:00 - 14:00",
        "Ne: Zavřeno"
      ]
    }
  ];

  const officeHours = [
    { day: "Pondělí", hours: "9:00 - 18:00" },
    { day: "Úterý", hours: "9:00 - 18:00" },
    { day: "Středa", hours: "9:00 - 18:00" },
    { day: "Čtvrtek", hours: "9:00 - 18:00" },
    { day: "Pátek", hours: "9:00 - 18:00" },
    { day: "Sobota", hours: "9:00 - 14:00" },
    { day: "Neděle", hours: "Zavřeno" }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Kontaktujte nás
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Máte otázky ohledně vašich financí? Rádi vám pomůžeme najít 
            nejlepší řešení pro vaši situaci. Kontaktujte nás kdykoli.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Napište nám</CardTitle>
                <CardDescription>
                  Vyplňte formulář níže a my vám odpovíme do 24 hodin
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
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+420 123 456 789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Předmět *</Label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="w-full p-3 border border-input rounded-lg bg-background"
                    >
                      <option value="">Vyberte předmět</option>
                      <option value="consultation">Finanční konzultace</option>
                      <option value="pension">Penzijní plánování</option>
                      <option value="investment">Investiční poradenství</option>
                      <option value="insurance">Pojistné poradenství</option>
                      <option value="tax">Daňové poradenství</option>
                      <option value="webinar">Webináře a školení</option>
                      <option value="partnership">Obchodní spolupráce</option>
                      <option value="other">Ostatní</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Popište nám svou situaci nebo konkrétní otázky..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Odeslat zprávu
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Povinná pole. Vaše údaje jsou chráněny v souladu s GDPR.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Kontaktní informace
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-secondary rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Pracovní doba</CardTitle>
                <CardDescription>
                  Kdy nás můžete zastihnout v kanceláři
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground">{schedule.day}</span>
                      <span className={`text-sm ${
                        schedule.hours === "Zavřeno" 
                          ? "text-muted-foreground" 
                          : "text-trust font-medium"
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-secondary">
              <CardHeader>
                <CardTitle>Potřebujete rychlou pomoc?</CardTitle>
                <CardDescription>
                  Objednejte si bezplatnou konzultaci nebo nám zavolejte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="consultation" className="w-full" asChild>
                  <a href="/konzultace">Bezplatná konzultace</a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+420228885432">
                    <Phone className="h-4 w-4 mr-2" />
                    Zavolat nyní
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Kde nás najdete
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Naše kancelář se nachází v centru Prahy, snadno dostupná MHD
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Doprava</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Metro</h4>
                  <p className="text-muted-foreground">
                    Linka A - stanice Můstek (5 min chůze)<br />
                    Linka B - stanice Národní třída (3 min chůze)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tramvaj</h4>
                  <p className="text-muted-foreground">
                    Linky 2, 8, 9, 14, 18, 22 - zastávka Národní divadlo
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Parkování</h4>
                  <p className="text-muted-foreground">
                    Placené parkovací zóny v okolí, doporučujeme MHD
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bezbariérový přístup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Naše kancelář je vybavena výtahem a přizpůsobena 
                  pro osoby s omezenou pohyblivostí.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adresa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jungmannova 745/24<br />
                  110 00 Praha 1<br />
                  Česká republika
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="container mx-auto px-4">
        <Card className="bg-gradient-hero text-primary-foreground">
          <CardContent className="py-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Obchodní údaje</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <h3 className="font-semibold">Společnost</h3>
                  <p className="text-primary-foreground/90">Duvira s.r.o.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">DIČ</h3>
                  <p className="text-primary-foreground/90">CZ10845231</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Sídlo</h3>
                  <p className="text-primary-foreground/90">
                    Jungmannova 745/24<br />
                    110 00 Praha 1
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Registrace</h3>
                  <p className="text-primary-foreground/90">
                    Obchodní rejstřík vedený<br />
                    Městským soudem v Praze
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ContactPage;