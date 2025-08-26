import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CookiesPage = () => {
  return (
    <div className="space-y-8 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Zásady používání cookies
          </h1>
          <p className="text-xl text-muted-foreground">
            Platné od 1. prosince 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Co jsou cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče 
                nebo zařízení při návštěvě našich webových stránek. Cookies nám umožňují 
                rozpoznat váš prohlížeč nebo zařízení a zapamatovat si určité informace 
                o vašich preferencích nebo minulých akcích.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Jak používáme cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Cookies používáme k následujícím účelům:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Zajištění správného fungování webových stránek</li>
                <li>Zapamatování vašich preferencí a nastavení</li>
                <li>Analýza návštěvnosti a chování uživatelů</li>
                <li>Zlepšení uživatelského zážitku</li>
                <li>Personalizace obsahu a reklam</li>
                <li>Zajištění bezpečnosti</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Typy cookies, které používáme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">3.1 Nezbytné cookies</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Tyto cookies jsou nezbytné pro základní fungování webu a nelze je vypnout.
                </p>
                <div className="bg-secondary p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Název</th>
                        <th className="text-left py-2 text-foreground">Účel</th>
                        <th className="text-left py-2 text-foreground">Doba platnosti</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="py-2">PHPSESSID</td>
                        <td className="py-2">Identifikace uživatelské relace</td>
                        <td className="py-2">Konec relace</td>
                      </tr>
                      <tr>
                        <td className="py-2">csrf_token</td>
                        <td className="py-2">Ochrana proti CSRF útokům</td>
                        <td className="py-2">24 hodin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">3.2 Analytické cookies</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Pomáhají nám pochopit, jak návštěvníci používají naše webové stránky.
                </p>
                <div className="bg-secondary p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Název</th>
                        <th className="text-left py-2 text-foreground">Účel</th>
                        <th className="text-left py-2 text-foreground">Doba platnosti</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="py-2">_ga</td>
                        <td className="py-2">Google Analytics - rozlišení uživatelů</td>
                        <td className="py-2">2 roky</td>
                      </tr>
                      <tr>
                        <td className="py-2">_ga_*</td>
                        <td className="py-2">Google Analytics - stav relace</td>
                        <td className="py-2">2 roky</td>
                      </tr>
                      <tr>
                        <td className="py-2">_gid</td>
                        <td className="py-2">Google Analytics - rozlišení uživatelů</td>
                        <td className="py-2">24 hodin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">3.3 Funkční cookies</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Umožňují zapamatovat si vaše volby a poskytovat personalizované funkce.
                </p>
                <div className="bg-secondary p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Název</th>
                        <th className="text-left py-2 text-foreground">Účel</th>
                        <th className="text-left py-2 text-foreground">Doba platnosti</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="py-2">language</td>
                        <td className="py-2">Zapamatování jazykové preference</td>
                        <td className="py-2">1 rok</td>
                      </tr>
                      <tr>
                        <td className="py-2">theme</td>
                        <td className="py-2">Zapamatování tématu (světlé/tmavé)</td>
                        <td className="py-2">1 rok</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">3.4 Marketingové cookies</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Používají se pro cílení reklam a měření efektivity reklamních kampaní.
                </p>
                <div className="bg-secondary p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Název</th>
                        <th className="text-left py-2 text-foreground">Účel</th>
                        <th className="text-left py-2 text-foreground">Doba platnosti</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="py-2">_fbp</td>
                        <td className="py-2">Facebook Pixel - sledování konverzí</td>
                        <td className="py-2">3 měsíce</td>
                      </tr>
                      <tr>
                        <td className="py-2">fr</td>
                        <td className="py-2">Facebook - cílení reklam</td>
                        <td className="py-2">3 měsíce</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Cookies třetích stran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Některé cookies pocházejí od třetích stran. Používáme následující služby:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google Analytics:</strong> Analýza návštěvnosti a chování uživatelů</li>
                <li><strong>Google Ads:</strong> Cílená reklama a remarketing</li>
                <li><strong>Facebook Pixel:</strong> Sledování konverzí a retargeting</li>
                <li><strong>YouTube:</strong> Vložená videa a související cookies</li>
                <li><strong>Stripe:</strong> Zpracování plateb</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Tyto služby mají vlastní zásady ochrany soukromí a cookies. Doporučujeme 
                se s nimi seznámit na jejich webových stránkách.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Správa cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">5.1 Nastavení preferencí</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Své preference ohledně cookies můžete upravit kdykoli pomocí našeho 
                nástroje pro správu cookies nebo v nastavení vašeho prohlížeče.
              </p>
              
              <div className="bg-secondary p-4 rounded-lg">
                <Button variant="consultation" className="w-full sm:w-auto">
                  Spravovat cookies
                </Button>
              </div>

              <h4 className="font-semibold text-foreground mt-6">5.2 Nastavení prohlížeče</h4>
              <p className="text-muted-foreground leading-relaxed">
                Cookies můžete také spravovat přímo v nastavení vašeho prohlížeče:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Chrome:</strong> Nastavení → Pokročilé → Soukromí a zabezpečení → Soubory cookie</li>
                <li><strong>Firefox:</strong> Předvolby → Soukromí a zabezpečení → Soubory cookie</li>
                <li><strong>Safari:</strong> Předvolby → Soukromí → Soubory cookie</li>
                <li><strong>Edge:</strong> Nastavení → Soubory cookie a oprávnění webu</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Důsledky odmítnutí cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pokud odmítnete některé typy cookies, může to ovlivnit funkčnost našich 
                webových stránek:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Nezbytné cookies: Web nemusí fungovat správně</li>
                <li>Funkční cookies: Ztráta personalizace a uložených preferencí</li>
                <li>Analytické cookies: Nemožnost zlepšovat náš web na základě dat</li>
                <li>Marketingové cookies: Méně relevantní reklama</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Aktualizace zásad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Tyto zásady používání cookies můžeme aktualizovat, abychom reflektovali 
                změny v našich praktikách nebo z jiných provozních, právních nebo 
                regulatorních důvodů. O významných změnách vás budeme informovat 
                prostřednictvím našeho webu nebo e-mailem.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Kontaktní informace</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pokud máte jakékoli otázky ohledně našeho používání cookies, 
                můžete nás kontaktovat:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="font-semibold text-foreground">Duvira s.r.o.</p>
                <p className="text-muted-foreground">Jungmannova 745/24, 110 00 Praha 1</p>
                <p className="text-muted-foreground">E-mail: privacy@duvira.xyz</p>
                <p className="text-muted-foreground">Telefon: +420 228 885 432</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;