import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Mail, Phone, ArrowRight } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Success Icon */}
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-trust rounded-full flex items-center justify-center mb-6 animate-scale-in">
            <CheckCircle className="h-12 w-12 text-trust-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Děkujeme!
          </h1>
          <p className="text-xl text-muted-foreground">
            Vaše žádost byla úspěšně odeslána
          </p>
        </div>

        {/* Main Card */}
        <Card className="shadow-strong border-0 animate-fade-in">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl text-foreground">
              Co bude následovat?
            </CardTitle>
            <CardDescription className="text-lg">
              Zde je přehled dalších kroků v našem procesu
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Steps */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Potvrzení obdržení</h3>
                  <p className="text-muted-foreground">
                    Na váš e-mail jsme poslali potvrzení o přijetí vaší žádosti
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Příprava konzultace</h3>
                  <p className="text-muted-foreground">
                    Náš tým si připraví podklady na základě vašich informací
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-trust rounded-full flex items-center justify-center text-trust-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Kontakt do 24 hodin</h3>
                  <p className="text-muted-foreground">
                    Ozveme se vám pro potvrzení termínu konzultace nebo zodpovězení vašich otázek
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-secondary rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Časový rámec</span>
              </div>
              <div className="ml-8 space-y-2 text-sm text-muted-foreground">
                <p>• Odpověď na e-mail: do 2 hodin</p>
                <p>• Telefonní kontakt: do 24 hodin</p>
                <p>• Termín konzultace: obvykle do 3 pracovních dnů</p>
              </div>
            </div>

            {/* Contact Emergency */}
            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-foreground mb-3">
                Potřebujete nás kontaktovat rychleji?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" asChild className="flex-1">
                  <a href="tel:+420228885432">
                    <Phone className="h-4 w-4 mr-2" />
                    +420 228 885 432
                  </a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a href="mailto:info@duvira.xyz">
                    <Mail className="h-4 w-4 mr-2" />
                    info@duvira.xyz
                  </a>
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="premium" asChild className="flex-1">
                <Link to="/">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Zpět na hlavní stránku
                </Link>
              </Button>
              <Button variant="consultation" asChild className="flex-1">
                <Link to="/clanky">
                  Číst naše články
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Mezitím si můžete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <Link to="/clanky" className="block text-primary hover:underline">
                • Přečíst naše nejnovější články
              </Link>
              <Link to="/webinare" className="block text-primary hover:underline">
                • Prohlédnout si nabídku webinářů
              </Link>
              <Link to="/o-nas" className="block text-primary hover:underline">
                • Dozvědět se více o našem týmu
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Připravte si podklady</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Přehled příjmů a výdajů</p>
              <p>• Informace o stávajících investicích</p>
              <p>• Pojistné smlouvy</p>
              <p>• Vaše finanční cíle</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Máte problém s e-mailem nebo jste neobdrželi potvrzení? 
            <br />
            Zkontrolujte složku spam nebo nás kontaktujte přímo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;