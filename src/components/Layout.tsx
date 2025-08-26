import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Domů", href: "/" },
    { name: "O nás", href: "/o-nas" },
    { name: "Články", href: "/clanky" },
    { name: "Konzultace", href: "/konzultace" },
    { name: "Webináře", href: "/webinare" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar with contact info */}
          <div className="hidden md:flex justify-end items-center py-2 text-sm text-muted-foreground border-b border-border/50">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+420 228 885 432</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>info@duvira.xyz</span>
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">Duvira</div>
              <div className="text-sm text-muted-foreground">Finanční poradenství</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="consultation" asChild>
                <Link to="/konzultace">Bezplatná konzultace</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="consultation" asChild className="w-full">
                  <Link to="/konzultace">Bezplatná konzultace</Link>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-xl font-bold text-primary">Duvira s.r.o.</div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Jungmannova 745/24</p>
                <p>110 00 Praha 1</p>
                <p>Česká republika</p>
                <p>DIČ: CZ10845231</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Služby</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/konzultace" className="block hover:text-primary transition-colors">
                  Finanční konzultace
                </Link>
                <Link to="/webinare" className="block hover:text-primary transition-colors">
                  Webináře
                </Link>
                <Link to="/clanky" className="block hover:text-primary transition-colors">
                  Analýzy a články
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Zdroje</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/clanky" className="block hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link to="/o-nas" className="block hover:text-primary transition-colors">
                  O společnosti
                </Link>
                <Link to="/kontakt" className="block hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Právní</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/ochrana-soukromi" className="block hover:text-primary transition-colors">
                  Ochrana soukromí
                </Link>
                <Link to="/podminky-uzivani" className="block hover:text-primary transition-colors">
                  Podmínky užívání
                </Link>
                <Link to="/cookies" className="block hover:text-primary transition-colors">
                  Cookies
                </Link>
                <Link to="/gdpr" className="block hover:text-primary transition-colors">
                  GDPR
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-border mt-8 pt-6">
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-foreground mb-3 text-sm">DŮLEŽITÉ UPOZORNĚNÍ:</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tyto webové stránky mají výhradně informativní charakter a neslouží jako finanční nástroj nebo investiční poradenství. 
                Všechny zde uvedené informace jsou určeny pouze pro vzdělávací účely a nepředstavují doporučení k nákupu, prodeji 
                nebo držbě jakýchkoli finančních produktů. Neposkytujeme finanční poradenství ani investiční služby prostřednictvím 
                tohoto webu. Před jakýmkoli finančním rozhodnutím se vždy poraďte s kvalifikovaným finančním poradcem nebo právníkem. 
                Provozovatel webu nenese odpovědnost za jakékoli ztráty nebo škody vzniklé v důsledku použití informací z těchto stránek. 
                Všechny investice jsou spojeny s rizikem a minulé výsledky nezaručují budoucí výsledky. Veškeré finanční služby 
                poskytujeme výhradně na základě individuálních konzultací a písemných smluv v souladu s českými právními předpisy.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Duvira s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;