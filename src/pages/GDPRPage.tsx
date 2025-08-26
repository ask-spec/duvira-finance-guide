import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Shield, Download, Eye, Edit, Trash2, AlertCircle } from "lucide-react";

const GDPRPage = () => {
  const { toast } = useToast();
  const [requestType, setRequestType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Žádost odeslána!",
      description: "Vaši žádost zpracujeme do 30 dnů v souladu s GDPR.",
    });
    // Reset form
    setFormData({ name: "", email: "", description: "" });
    setRequestType("");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const rights = [
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "Právo na přístup",
      description: "Máte právo vědět, jaké osobní údaje o vás zpracováváme a za jakým účelem.",
      details: "Můžete požádat o kopii všech osobních údajů, které o vás vedeme."
    },
    {
      icon: <Edit className="h-6 w-6 text-accent" />,
      title: "Právo na opravu",
      description: "Máte právo požádat o opravu nepřesných nebo neúplných osobních údajů.",
      details: "Nepřesné údaje opravíme bez zbytečného odkladu."
    },
    {
      icon: <Trash2 className="h-6 w-6 text-destructive" />,
      title: "Právo na výmaz",
      description: "Za určitých okolností máte právo požádat o smazání vašich osobních údajů.",
      details: "Také známé jako 'právo být zapomenut'."
    },
    {
      icon: <Shield className="h-6 w-6 text-trust" />,
      title: "Právo na omezení",
      description: "Můžete požádat o omezení zpracování vašich osobních údajů.",
      details: "V určitých případech můžeme zpracování dočasně pozastavit."
    },
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      title: "Právo na přenositelnost",
      description: "Máte právo získat vaše údaje ve strukturovaném, běžně používaném formátu.",
      details: "Můžete požádat o předání údajů jinému správci."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-accent" />,
      title: "Právo vznést námitku",
      description: "Můžete vznést námitku proti zpracování vašich osobních údajů.",
      details: "Zejména proti zpracování pro marketingové účely."
    }
  ];

  return (
    <div className="space-y-8 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            GDPR - Vaše práva
          </h1>
          <p className="text-xl text-muted-foreground">
            Informace o vašich právech podle GDPR a jak je můžete uplatnit
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>Co je GDPR</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Obecné nařízení o ochraně osobních údajů (GDPR) je právní předpis 
                Evropské unie, který vstoupil v platnost 25. května 2018. Stanovuje 
                pravidla pro zpracování osobních údajů fyzických osob v EU a poskytuje 
                jednotlivcům rozsáhlá práva ohledně jejich osobních údajů.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Jako společnost Duvira s.r.o. se zavazujeme plně dodržovat všechny 
                požadavky GDPR a zajistit maximální ochranu vašich osobních údajů.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vaše práva podle GDPR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-300">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="flex-shrink-0 p-2 bg-secondary rounded-lg">
                        {right.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{right.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {right.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground pl-11">
                      {right.details}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jak uplatnit svá práva</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pro uplatnění jakéhokoli z vašich práv podle GDPR použijte formulář níže 
                nebo nás kontaktujte přímo. Na vaši žádost odpovíme do 30 dnů od jejího obdržení.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="requestType">Typ žádosti *</Label>
                  <select
                    id="requestType"
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    required
                    className="w-full p-3 border border-input rounded-lg bg-background"
                  >
                    <option value="">Vyberte typ žádosti</option>
                    <option value="access">Právo na přístup k údajům</option>
                    <option value="rectification">Právo na opravu údajů</option>
                    <option value="erasure">Právo na výmaz údajů</option>
                    <option value="restriction">Právo na omezení zpracování</option>
                    <option value="portability">Právo na přenositelnost údajů</option>
                    <option value="objection">Právo vznést námitku</option>
                    <option value="withdraw">Odvolání souhlasu</option>
                    <option value="complaint">Stížnost</option>
                    <option value="other">Jiné</option>
                  </select>
                </div>

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
                  <Label htmlFor="description">Popis žádosti *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    required
                    placeholder="Detailně popište svou žádost..."
                    rows={4}
                  />
                </div>

                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Ověření identity:</strong> Pro zpracování vaší žádosti budeme potřebovat 
                    ověřit vaši identitu. Můžeme vás požádat o poskytnutí kopie průkazu totožnosti 
                    nebo jiných ověřovacích dokumentů.
                  </p>
                </div>

                <Button type="submit" variant="premium" size="lg" className="w-full">
                  Odeslat žádost
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Povinná pole. Vaše žádost zpracujeme do 30 dnů v souladu s GDPR.
                </p>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Časové lhůty a postupy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Standardní lhůty</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Odpověď na žádost: <strong>30 dnů</strong></li>
                    <li>• Složité případy: <strong>až 60 dnů</strong></li>
                    <li>• Oprava údajů: <strong>bez zbytečného odkladu</strong></li>
                    <li>• Výmaz údajů: <strong>bez zbytečného odkladu</strong></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Postup zpracování</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Přijetí a zaevidování žádosti</li>
                    <li>• Ověření identity žadatele</li>
                    <li>• Posouzení oprávněnosti žádosti</li>
                    <li>• Provedení požadovaných kroků</li>
                    <li>• Písemné vyrozumění o výsledku</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stížnosti a dozorový úřad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pokud se domníváte, že zpracováváme vaše osobní údaje v rozporu s GDPR, 
                máte právo podat stížnost u dozorového úřadu.
              </p>
              
              <div className="bg-secondary p-4 rounded-lg space-y-3">
                <h4 className="font-semibold text-foreground">Úřad pro ochranu osobních údajů</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Pplk. Sochora 27, 170 00 Praha 7</p>
                  <p>Telefon: +420 234 665 111</p>
                  <p>E-mail: posta@uoou.cz</p>
                  <p>Web: www.uoou.cz</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Doporučujeme však nejprve kontaktovat přímo nás, abychom se pokusili 
                vyřešit případné problémy nebo nejasnosti v rámci přímé komunikace.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kontaktní údaje pro GDPR</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pro všechny záležitosti týkající se ochrany osobních údajů a GDPR 
                nás můžete kontaktovat:
              </p>
              
              <div className="bg-gradient-secondary p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Správce údajů</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Duvira s.r.o.</p>
                      <p>Jungmannova 745/24</p>
                      <p>110 00 Praha 1</p>
                      <p>DIČ: CZ10845231</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>E-mail: privacy@duvira.xyz</p>
                      <p>Telefon: +420 228 885 432</p>
                      <p>Pracovní doba: Po-Pá 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="consultation" asChild className="flex-1">
                  <a href="mailto:privacy@duvira.xyz">
                    Kontaktovat e-mailem
                  </a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a href="/ochrana-soukromi">
                    Zásady ochrany soukromí
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;