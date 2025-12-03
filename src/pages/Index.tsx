import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-secondary/95 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-base px-6 py-2 bg-accent hover:bg-accent/90">
              Старт декабрь 2025 🚀
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Готовый Арендный<br />Бизнес в Дзержинске
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Пассивный доход <span className="text-accent font-bold">550 000 ₽/мес</span> от федерального арендатора
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">538.4 м²</div>
                <div className="text-white/80">Площадь объекта</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">61.8 млн ₽</div>
                <div className="text-white/80">Цена под ключ</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">10 лет</div>
                <div className="text-white/80">Окупаемость</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90"
                onClick={() => scrollToSection('contact')}
              >
                <Icon name="MessageCircle" className="mr-2" />
                Получить презентацию
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                onClick={() => scrollToSection('calculations')}
              >
                <Icon name="Calculator" className="mr-2" />
                Расчёт доходности
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Object Info */}
      <section className="py-20 bg-background" id="object">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Характеристики объекта</h2>
            <p className="text-xl text-muted-foreground">г. Дзержинск, ул. Красная линия</p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-16">
            <img 
              src="https://cdn.poehali.dev/projects/fcbfdc89-6082-4df9-acd7-369783d50ba6/files/fc34dc18-c1be-4b91-9121-500fbfb94a2d.jpg" 
              alt="Коммерческий объект - Пятёрочка в Дзержинске" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Арендатор</h3>
                <p className="text-muted-foreground">Федеральная сеть «Пятёрочка»</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Договор аренды</h3>
                <p className="text-muted-foreground">10 лет + ежегодная индексация</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Coins" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Коммунальные</h3>
                <p className="text-muted-foreground">Полностью несёт арендатор</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="FileCheck" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Документы</h3>
                <p className="text-muted-foreground">Полный пакет готов к сделке</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-muted/30" id="advantages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему это выгодно?</h2>
            <p className="text-xl text-muted-foreground">Надёжность и стабильность инвестиции</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="ShieldCheck" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Федеральный арендатор</h3>
              <p className="text-muted-foreground leading-relaxed">
                «Пятёрочка» — крупнейшая розничная сеть России. Гарантия стабильных выплат без задержек.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Защита от инфляции</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ежегодная индексация арендной платы в одностороннем порядке в вашу пользу.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-success/70 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="DollarSign" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Без дополнительных расходов</h3>
              <p className="text-muted-foreground leading-relaxed">
                Все коммунальные платежи, налоги на имущество — на стороне арендатора.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Пассивный доход</h3>
              <p className="text-muted-foreground leading-relaxed">
                Получайте 550 000 ₽ каждый месяц без вашего участия в управлении объектом.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="FileText" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Без НДС</h3>
              <p className="text-muted-foreground leading-relaxed">
                Продажа от юридического лица — максимально выгодная налоговая структура.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-success/70 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Быстрый старт</h3>
              <p className="text-muted-foreground leading-relaxed">
                Доход начинается в декабре 2025. Документы готовы — выходите на сделку сразу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculations */}
      <section className="py-20 bg-background" id="calculations">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Финансовые показатели</h2>
            <p className="text-xl text-muted-foreground">Прозрачный расчёт доходности</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-2">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  <div className="flex justify-between items-center pb-6 border-b-2">
                    <span className="text-xl font-semibold">Стоимость объекта</span>
                    <span className="text-2xl font-bold">61 850 000 ₽</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-6 border-b-2">
                    <span className="text-xl font-semibold">Ежемесячный доход</span>
                    <span className="text-2xl font-bold text-success">+ 550 000 ₽</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-6 border-b-2">
                    <span className="text-xl font-semibold">Годовой доход</span>
                    <span className="text-2xl font-bold text-success">+ 6 600 000 ₽</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-6 border-b-2">
                    <span className="text-xl font-semibold">Годовая доходность</span>
                    <span className="text-2xl font-bold text-primary">10.67%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Окупаемость</span>
                    <span className="text-2xl font-bold text-accent">10 лет</span>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 mt-8">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" className="text-primary mt-1" size={24} />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        С учётом ежегодной индексации аренды фактическая окупаемость будет меньше. 
                        Коммунальные расходы полностью несёт арендатор. Налоговая оптимизация доступна — 
                        подробности предоставим по запросу.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-primary/5 rounded-xl p-6 text-center border-2 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">10 лет</div>
                <div className="text-sm text-muted-foreground">Долгосрочный договор</div>
              </div>
              
              <div className="bg-success/5 rounded-xl p-6 text-center border-2 border-success/20">
                <div className="text-3xl font-bold text-success mb-2">0 ₽</div>
                <div className="text-sm text-muted-foreground">Расходы на ком. услуги</div>
              </div>
              
              <div className="bg-accent/5 rounded-xl p-6 text-center border-2 border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Готовность к сделке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-muted/30" id="documents">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Документы готовы</h2>
            <p className="text-xl text-muted-foreground">Полный юридический пакет для быстрой сделки</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    'Договор аренды с «Пятёрочкой»',
                    'Выписка из ЕГРН',
                    'Технический паспорт',
                    'Акты ввода в эксплуатацию',
                    'Расчёты доходности',
                    'Схема налоговой оптимизации'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                      <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle2" className="text-success" size={20} />
                      </div>
                      <span className="text-lg font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border-2 border-primary/20">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-lg mb-2">Быстрая отправка документов</p>
                      <p className="text-muted-foreground">
                        Напишите в WhatsApp или Telegram — вышлем полный пакет в течение 15 минут
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Получите полную информацию
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Свяжитесь с нами удобным способом — ответим на все вопросы и вышлем документы
            </p>
            
            <Card className="shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4 pb-6 border-b">
                    <Icon name="Phone" className="text-primary" size={32} />
                    <a href="tel:+79109848685" className="text-3xl font-bold hover:text-primary transition-colors">
                      +7 (910) 984-86-85
                    </a>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <Button 
                      size="lg" 
                      className="text-lg py-6 bg-[#25D366] hover:bg-[#20BA5A]"
                      onClick={() => window.open('https://wa.me/79109848685', '_blank')}
                    >
                      <Icon name="MessageCircle" className="mr-2" size={24} />
                      WhatsApp
                    </Button>
                    
                    <Button 
                      size="lg" 
                      className="text-lg py-6 bg-[#0088cc] hover:bg-[#006BA3]"
                      onClick={() => window.open('https://t.me/+79109848685', '_blank')}
                    >
                      <Icon name="Send" className="mr-2" size={24} />
                      Telegram
                    </Button>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 mt-6">
                    <h3 className="font-semibold text-lg mb-3">Мы пришлём вам:</h3>
                    <ul className="space-y-2 text-left">
                      {[
                        'Полный пакет документов',
                        'Детальный расчёт доходности',
                        'Схему налоговой оптимизации',
                        'Фото и планировку объекта'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Icon name="Check" className="text-success" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-12 text-white/80 text-sm">
              <p>📍 г. Дзержинск, ул. Красная линия</p>
              <p className="mt-2">Просмотры строго по предварительной договорённости</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 text-white/60 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© 2025 Готовый Арендный Бизнес. Инвестируйте в надёжное.</p>
          <p className="mt-2">Количество объектов ограничено. Не упустите возможность!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;