import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: "React", level: 95, icon: "Code2" },
    { name: "TypeScript", level: 90, icon: "FileCode" },
    { name: "UI/UX Design", level: 85, icon: "Palette" },
    { name: "Node.js", level: 80, icon: "Server" },
    { name: "Tailwind CSS", level: 95, icon: "Paintbrush" },
    { name: "Git", level: 85, icon: "GitBranch" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Приложение для управления задачами с drag-and-drop и real-time обновлениями",
      tags: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "Современное портфолио с анимациями и адаптивным дизайном",
      tags: ["React", "Framer Motion", "CSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Интерактивная панель погоды с прогнозом и визуализацией данных",
      tags: ["React", "API", "Charts"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Портфолио
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О себе</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Навыки</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Проекты</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-primary hover:bg-primary/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-base px-6 py-2 bg-primary/10 text-primary border-primary/20">
              Доступен для проектов
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Превращаю идеи<br />в цифровые продукты
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Full-stack разработчик с опытом создания современных веб-приложений
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('projects')}
              >
                <Icon name="Briefcase" className="mr-2" />
                Посмотреть работы
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                <Icon name="Mail" className="mr-2" />
                Написать мне
              </Button>
            </div>

            <div className="flex gap-6 justify-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Привет! Я full-stack разработчик с более чем 5-летним опытом создания 
                  веб-приложений. Специализируюсь на React, TypeScript и современных фреймворках.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Люблю превращать сложные задачи в простые и элегантные решения. 
                  Постоянно учусь новым технологиям и практикам разработки.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge variant="secondary" className="px-4 py-2 text-base">💻 Full-stack</Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-base">🎨 UI/UX</Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-base">🚀 Performance</Badge>
                </div>
              </div>

              <Card className="border-2 hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Trophy" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-2xl">50+</div>
                        <div className="text-sm text-muted-foreground">Проектов завершено</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="Users" className="text-accent" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-2xl">30+</div>
                        <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                        <Icon name="Calendar" className="text-success" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-2xl">5+</div>
                        <div className="text-sm text-muted-foreground">Лет опыта</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-secondary/30" id="skills">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Навыки</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
              <p className="text-xl text-muted-foreground">Технологии, с которыми я работаю</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon name={skill.icon as any} className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-lg">{skill.name}</span>
                          <span className="text-sm font-medium text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
              <p className="text-xl text-muted-foreground">Избранные проекты</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-2 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button size="sm" className="bg-primary">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Посмотреть
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5" id="contact">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь со мной</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
              <p className="text-xl text-muted-foreground">
                Готов обсудить ваш проект или ответить на вопросы
              </p>
            </div>

            <Card className="border-2 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <a href="mailto:example@email.com" className="group">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name="Mail" className="text-primary" size={32} />
                    </div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      example@email.com
                    </div>
                  </a>

                  <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon name="Send" className="text-accent" size={32} />
                    </div>
                    <div className="font-semibold mb-1">Telegram</div>
                    <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                      @username
                    </div>
                  </a>

                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                      <Icon name="Github" className="text-success" size={32} />
                    </div>
                    <div className="font-semibold mb-1">GitHub</div>
                    <div className="text-sm text-muted-foreground group-hover:text-success transition-colors">
                      @username
                    </div>
                  </a>
                </div>

                <div className="mt-10 pt-8 border-t">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto text-lg px-12 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    <Icon name="MessageCircle" className="mr-2" />
                    Начать обсуждение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center text-muted-foreground">
            <p>© 2025 Портфолио. Создано с ❤️ на React</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
