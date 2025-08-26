import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User } from "lucide-react";

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("všechny");

  const categories = [
    "všechny",
    "penze",
    "investice", 
    "pojištění",
    "daně",
    "rodinné finance",
    "novinky"
  ];

  const articles = [
    {
      id: 1,
      title: "Změny v penzijním systému 2024: Co potřebujete vědět",
      excerpt: "Komplexní přehled všech novinek v penzijním systému pro rok 2024, včetně změn v příspěvcích a možnostech čerpání.",
      category: "penze",
      date: "15. prosince 2024",
      author: "Mgr. Pavel Novák",
      readTime: "8 min čtení",
      featured: true
    },
    {
      id: 2,
      title: "Investování pro začátečníky: Základní principy a strategie",
      excerpt: "Naučte se základy investování, od diverzifikace portfolia po výběr vhodných investičních nástrojů pro začátečníky.",
      category: "investice",
      date: "10. prosince 2024", 
      author: "Bc. Tomáš Procházka",
      readTime: "12 min čtení",
      featured: false
    },
    {
      id: 3,
      title: "Daňové úlevy 2024: Maximalizace vašich úspor",
      excerpt: "Detailní průvodce všemi dostupnými daňovými úlevami a způsoby, jak je efektivně využít ke snížení daňové povinnosti.",
      category: "daně",
      date: "5. prosince 2024",
      author: "Ing. Jana Svobodová", 
      readTime: "10 min čtení",
      featured: true
    },
    {
      id: 4,
      title: "Pojištění domácnosti: Co skutečně potřebujete",
      excerpt: "Praktický návod pro výběr optimálního pojištění domácnosti včetně tipů na úsporu na pojistném.",
      category: "pojištění",
      date: "28. listopadu 2024",
      author: "Ing. Jana Svobodová",
      readTime: "6 min čtení",
      featured: false
    },
    {
      id: 5,
      title: "Rodinný rozpočet: Efektivní plánování a spoření",
      excerpt: "Osvedčené metody pro sestavení a dodržování rodinného rozpočtu s praktickými tipy pro zvýšení úspor.",
      category: "rodinné finance",
      date: "20. listopadu 2024",
      author: "Mgr. Pavel Novák",
      readTime: "9 min čtení",
      featured: false
    },
    {
      id: 6,
      title: "ETF vs. Podílové fondy: Která volba je pro vás lepší?",
      excerpt: "Srovnání výhod a nevýhod ETF a podílových fondů s doporučeními pro různé typy investorů.",
      category: "investice",
      date: "15. listopadu 2024",
      author: "Bc. Tomáš Procházka",
      readTime: "11 min čtení",
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "všechny" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Články a analýzy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zůstaňte informováni o nejnovějších trendech ve financích, investicích a penzijním plánování
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">Doporučené články</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Číst více
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container mx-auto px-4">
        <div className="bg-secondary rounded-lg p-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Hledat v článcích..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Všechny články ({filteredArticles.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="capitalize">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="line-clamp-3">
                  {article.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Číst
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Žádné články neodpovídají vašemu vyhledávání.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("všechny");
              }}
            >
              Resetovat filtry
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">
              Nezmeškejte nejnovější články
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Přihlaste se k odběru našeho newsletteru a získejte nejnovější informace o financích přímo do své e-mailové schránky
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Váš e-mail" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="hero" className="bg-white text-primary hover:bg-white/90">
                Přihlásit se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;