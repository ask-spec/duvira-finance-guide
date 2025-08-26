import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPage = () => {
  return (
    <div className="space-y-8 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Zásady ochrany osobních údajů
          </h1>
          <p className="text-xl text-muted-foreground">
            Platné od 1. prosince 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Úvodní ustanovení</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Společnost Duvira s.r.o., DIČ: CZ10845231, se sídlem Jungmannova 745/24, 110 00 Praha 1 
                (dále jen "správce") respektuje vaše soukromí a zavazuje se chránit vaše osobní údaje v souladu 
                s Nařízením Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti 
                se zpracováním osobních údajů (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Jaké osobní údaje zpracováváme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Zpracováváme následující kategorie osobních údajů:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Identifikační údaje (jméno, příjmení, datum narození)</li>
                <li>Kontaktní údaje (e-mail, telefon, adresa)</li>
                <li>Finanční informace (příjmy, výdaje, investiční zkušenosti)</li>
                <li>Údaje o využívání našich služeb</li>
                <li>Komunikační záznamy (e-maily, záznamy hovorů)</li>
                <li>Cookies a technické údaje o používání webových stránek</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Účely zpracování osobních údajů</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Vaše osobní údaje zpracováváme za následujícími účely:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Poskytování finančního poradenství a souvisejících služeb</li>
                <li>Komunikace s klienty a zpracování dotazů</li>
                <li>Plnění zákonných povinností (archivace, reporting)</li>
                <li>Marketing a nabídka našich služeb (s vaším souhlasem)</li>
                <li>Zlepšování kvality našich služeb</li>
                <li>Zajištění bezpečnosti a prevence podvodů</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Právní základ zpracování</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Osobní údaje zpracováváme na základě:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Smlouvy o poskytování služeb (čl. 6 odst. 1 písm. b) GDPR)</li>
                <li>Oprávněného zájmu správce (čl. 6 odst. 1 písm. f) GDPR)</li>
                <li>Plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR)</li>
                <li>Souhlasu subjektu údajů (čl. 6 odst. 1 písm. a) GDPR)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Doba uchování údajů</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Osobní údaje uchováváme po dobu nezbytnou k naplnění účelů zpracování:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Údaje klientů: po dobu trvání smluvního vztahu + 10 let po ukončení</li>
                <li>Marketingové souhlasy: do odvolání souhlasu</li>
                <li>Cookies: podle typu cookies (od ukončení relace do 2 let)</li>
                <li>Zákonná archivace: v souladu s právními předpisy</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Předávání údajů třetím stranám</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Vaše osobní údaje můžeme předat:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Finančním institucím pro zajištění investičních služeb</li>
                <li>IT poskytovatelům pro zajištění provozu systémů</li>
                <li>Účetním a právním poradcům</li>
                <li>Státním orgánům v rozsahu stanoveném zákony</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Všichni zpracovatelé jsou vázáni smlouvami o zpracování osobních údajů 
                a zajišťují odpovídající úroveň ochrany.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Vaše práva</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                V souvislosti se zpracováním vašich osobních údajů máte následující práva:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Právo na přístup k osobním údajům</li>
                <li>Právo na opravu nepřesných údajů</li>
                <li>Právo na výmaz údajů ("právo být zapomenut")</li>
                <li>Právo na omezení zpracování</li>
                <li>Právo na přenositelnost údajů</li>
                <li>Právo vznést námitku proti zpracování</li>
                <li>Právo odvolat souhlas</li>
                <li>Právo podat stížnost u dozorového úřadu</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cookies a sledovací technologie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Naše webové stránky používají cookies pro:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Zajištění správného fungování webu (nezbytné cookies)</li>
                <li>Analýzu návštěvnosti a chování uživatelů</li>
                <li>Personalizaci obsahu a reklam</li>
                <li>Zlepšení uživatelského zážitku</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Více informací o našem používání cookies najdete v našich 
                <a href="/cookies" className="text-primary hover:underline ml-1">zásadách cookies</a>.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Bezpečnost údajů</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Implementujeme odpovídající technická a organizační opatření pro ochranu 
                vašich osobních údajů proti neoprávněnému přístupu, ztrátě, zničení nebo 
                neoprávněnému zpracování. Používáme šifrování, zabezpečené servery a 
                pravidelně aktualizujeme naše bezpečnostní procedury.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Kontaktní údaje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pro jakékoli dotazy ohledně zpracování osobních údajů nás můžete kontaktovat:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="font-semibold text-foreground">Duvira s.r.o.</p>
                <p className="text-muted-foreground">Jungmannova 745/24, 110 00 Praha 1</p>
                <p className="text-muted-foreground">E-mail: privacy@duvira.xyz</p>
                <p className="text-muted-foreground">Telefon: +420 228 885 432</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Změny zásad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Tyto zásady ochrany osobních údajů můžeme aktualizovat. O významných 
                změnách vás budeme informovat prostřednictvím našich webových stránek 
                nebo e-mailem. Doporučujeme pravidelně kontrolovat aktuální verzi těchto zásad.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;