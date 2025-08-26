import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <div className="space-y-8 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Obchodní podmínky
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
                Tyto obchodní podmínky (dále jen "podmínky") upravují vzájemná práva a povinnosti 
                mezi společností Duvira s.r.o., DIČ: CZ10845231, se sídlem Jungmannova 745/24, 
                110 00 Praha 1, zapsanou v obchodním rejstříku vedeném Městským soudem v Praze 
                (dále jen "poskytovatel") a fyzickými či právnickými osobami (dále jen "klient") 
                při poskytování finančního poradenství a souvisejících služeb.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Předmět podnikání a služby</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Poskytovatel nabízí následující služby:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Finanční poradenství a konzultace</li>
                <li>Penzijní plánování</li>
                <li>Investiční poradenství</li>
                <li>Pojistné poradenství</li>
                <li>Daňové poradenství</li>
                <li>Vzdělávací webináře a semináře</li>
                <li>Prodej informačních materiálů a nástrojů</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Uzavření smlouvy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Smlouva o poskytování služeb vzniká:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Odesláním a potvrzením objednávky služby prostřednictvím webových stránek</li>
                <li>Podpisem písemné smlouvy o poskytování služeb</li>
                <li>Ústní dohodou s následným písemným potvrzením</li>
                <li>Zahájením poskytování služby s výslovným souhlasem klienta</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Poskytovatel si vyhrazuje právo objednávku odmítnout, zejména v případech, 
                kdy by poskytnutí služby bylo v rozporu s právními předpisy nebo obchodními zásadami.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Ceny a platební podmínky</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">4.1 Ceny služeb</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>První konzultace (60 minut): Zdarma</li>
                <li>Standardní balíček (4 konzultace): 4 999 Kč</li>
                <li>Premium balíček (neomezeno): 12 999 Kč</li>
                <li>Webináře: od 199 Kč do 399 Kč</li>
                <li>Informační materiály: od 99 Kč do 299 Kč</li>
              </ul>
              
              <h4 className="font-semibold text-foreground mt-6">4.2 Platební podmínky</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Platby jsou splatné do 14 dnů od vystavení faktury</li>
                <li>Akceptujeme platby bankovním převodem, kartou nebo online platebními systémy</li>
                <li>Při platbách kartou nebo online systémy je úhrada okamžitá</li>
                <li>Všechny ceny jsou uvedeny včetně DPH</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Poskytování služeb</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">5.1 Způsob poskytování</h4>
              <p className="text-muted-foreground leading-relaxed">
                Služby mohou být poskytovány:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Osobně v sídle poskytovatele</li>
                <li>Online prostřednictvím videokonferencí</li>
                <li>Telefonicky</li>
                <li>Písemně prostřednictvím e-mailu</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-6">5.2 Povinnosti klienta</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Poskytovat pravdivé a úplné informace o své finanční situaci</li>
                <li>Včas hradit dohodnuté platby</li>
                <li>Informovat o změnách relevantních pro poskytování služeb</li>
                <li>Dodržovat domluvené termíny konzultací</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Práva a povinnosti stran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">6.1 Povinnosti poskytovatele</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Poskytovat služby odborně a v souladu s právními předpisy</li>
                <li>Zachovávat mlčenlivost o všech získaných informacích</li>
                <li>Informovat klienta o rizicích spojených s doporučeními</li>
                <li>Jednat v nejlepším zájmu klienta</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-6">6.2 Práva poskytovatele</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Požadovat úhradu za poskytnuté služby</li>
                <li>Odmítnout poskytnutí služby v případě porušení podmínek</li>
                <li>Změnit termín konzultace při včasném upozornění</li>
                <li>Ukončit smluvní vztah při porušení podmínek klientem</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Zrušení a vrácení plateb</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">7.1 Zrušení ze strany klienta</h4>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Konzultace lze zrušit bez poplatku do 24 hodin před termínem</li>
                <li>Při zrušení později než 24 hodin se účtuje 50% ceny</li>
                <li>Webináře lze zrušit do 48 hodin před začátkem</li>
                <li>Digitální produkty nelze po stažení vrátit</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-6">7.2 Vrácení plateb</h4>
              <p className="text-muted-foreground leading-relaxed">
                Vrácení plateb je možné do 14 dnů od uzavření smlouvy v souladu 
                se zákonem o ochraně spotřebitatele, s výjimkou služeb, které 
                již byly poskytnuty, nebo digitálních produktů.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Odpovědnost a omezení</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">8.1 Omezení odpovědnosti</h4>
              <p className="text-muted-foreground leading-relaxed">
                Poskytovatel nenese odpovědnost za:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Investiční ztráty vzniklé následováním doporučení</li>
                <li>Škody způsobené nesprávnými údaji poskytnutými klientem</li>
                <li>Změny tržních podmínek nebo právních předpisů</li>
                <li>Technické problémy třetích stran</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-6">8.2 Pojištění odpovědnosti</h4>
              <p className="text-muted-foreground leading-relaxed">
                Poskytovatel má uzavřeno pojištění profesní odpovědnosti 
                s minimální pojistnou částkou 5 000 000 Kč.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Ochrana osobních údajů</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Zpracování osobních údajů se řídí naším 
                <a href="/ochrana-soukromi" className="text-primary hover:underline ml-1">
                  prohlášením o ochraně osobních údajů
                </a>
                , které je nedílnou součástí těchto podmínek. Poskytovatel se zavazuje 
                dodržovat všechny požadavky GDPR a souvisejících právních předpisů.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Řešení sporů</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">10.1 Mimosoudní řešení</h4>
              <p className="text-muted-foreground leading-relaxed">
                Strany se zavazují řešit vzniklé spory především jednáním a dohodou. 
                V případě spotřebitelského sporu je možné obrátit se na Českou 
                obchodní inspekci nebo využít systém ADR.
              </p>

              <h4 className="font-semibold text-foreground mt-6">10.2 Soudní řešení</h4>
              <p className="text-muted-foreground leading-relaxed">
                Případné spory, které se nepodaří vyřešit dohodou, budou řešeny 
                příslušnými soudy České republiky podle českého práva.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Závěrečná ustanovení</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground">11.1 Změny podmínek</h4>
              <p className="text-muted-foreground leading-relaxed">
                Poskytovatel si vyhrazuje právo tyto podmínky změnit. O změnách 
                bude klienty informovat e-mailem nebo prostřednictvím webových 
                stránek s předstihem minimálně 30 dnů.
              </p>

              <h4 className="font-semibold text-foreground mt-6">11.2 Platnost podmínek</h4>
              <p className="text-muted-foreground leading-relaxed">
                Tyto podmínky nabývají účinnosti dnem 1. prosince 2024 a nahrazují 
                všechny předchozí verze. V případě rozporů mezi českou a anglickou 
                verzí má přednost česká verze.
              </p>

              <h4 className="font-semibold text-foreground mt-6">11.3 Kontaktní údaje</h4>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="font-semibold text-foreground">Duvira s.r.o.</p>
                <p className="text-muted-foreground">Jungmannova 745/24, 110 00 Praha 1</p>
                <p className="text-muted-foreground">DIČ: CZ10845231</p>
                <p className="text-muted-foreground">E-mail: info@duvira.xyz</p>
                <p className="text-muted-foreground">Telefon: +420 228 885 432</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;