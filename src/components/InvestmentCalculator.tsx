import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(61800000);
  const [years, setYears] = useState(10);
  
  const depositRate = 0.18;
  const gabMonthlyIncome = 550000;
  const gabAnnualIndexation = 0.06;
  
  const calculateDeposit = () => {
    const totalAmount = investmentAmount * Math.pow(1 + depositRate, years);
    const profit = totalAmount - investmentAmount;
    return { total: totalAmount, profit };
  };
  
  const calculateGAB = () => {
    let totalIncome = 0;
    let currentMonthlyIncome = gabMonthlyIncome;
    
    for (let year = 1; year <= years; year++) {
      totalIncome += currentMonthlyIncome * 12;
      currentMonthlyIncome *= (1 + gabAnnualIndexation);
    }
    
    const totalWithProperty = totalIncome + investmentAmount;
    const profit = totalIncome;
    
    return { total: totalWithProperty, income: totalIncome, profit };
  };
  
  const deposit = calculateDeposit();
  const gab = calculateGAB();
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(num);
  };
  
  const gabAdvantage = gab.total - deposit.total;
  const gabAdvantagePercent = ((gabAdvantage / deposit.total) * 100).toFixed(1);

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="bg-gradient-to-br from-secondary/50 to-background border-2">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
            Калькулятор инвестиций
          </CardTitle>
          <p className="text-muted-foreground text-lg">
            Сравните доходность депозита и готового арендного бизнеса
          </p>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-medium">Сумма инвестиций</label>
                <span className="text-2xl font-bold text-primary">
                  {formatNumber(investmentAmount)}
                </span>
              </div>
              <Slider
                value={[investmentAmount]}
                onValueChange={(value) => setInvestmentAmount(value[0])}
                min={10000000}
                max={100000000}
                step={1000000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>10 млн ₽</span>
                <span>100 млн ₽</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-medium">Срок инвестиций</label>
                <span className="text-2xl font-bold text-primary">
                  {years} {years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}
                </span>
              </div>
              <Slider
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                min={1}
                max={20}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>1 год</span>
                <span>20 лет</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Icon name="TrendingDown" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Банковский депозит</h3>
                    <p className="text-sm text-muted-foreground">18% годовых</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Итоговая сумма</div>
                    <div className="text-2xl font-bold text-orange-600">
                      {formatNumber(deposit.total)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Прибыль за {years} лет</div>
                    <div className="text-xl font-semibold">
                      {formatNumber(deposit.profit)}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="AlertCircle" size={16} />
                      <span>Только проценты, без актива</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:shadow-2xl transition-all bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Готовый арендный бизнес</h3>
                    <p className="text-sm text-muted-foreground">Пятёрочка + объект</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Итоговая сумма</div>
                    <div className="text-2xl font-bold text-accent">
                      {formatNumber(gab.total)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Доход за {years} лет</div>
                    <div className="text-xl font-semibold">
                      {formatNumber(gab.income)}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                      <Icon name="CheckCircle2" size={16} />
                      <span>+ Недвижимость в собственности</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border-accent/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Преимущество ГАБ
                    </div>
                    <div className="text-3xl font-bold text-accent">
                      {formatNumber(gabAdvantage)}
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-sm text-muted-foreground mb-1">
                    Дополнительная выгода
                  </div>
                  <div className="text-2xl font-bold text-accent">
                    +{gabAdvantagePercent}%
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    по сравнению с депозитом
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <Icon name="Shield" size={20} className="text-primary mt-1" />
              <div>
                <div className="font-semibold mb-1">Федеральный арендатор</div>
                <div className="text-sm text-muted-foreground">
                  Гарантия стабильных выплат от Пятёрочки
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <Icon name="LineChart" size={20} className="text-primary mt-1" />
              <div>
                <div className="font-semibold mb-1">Ежегодная индексация</div>
                <div className="text-sm text-muted-foreground">
                  Доход растёт на 6% каждый год
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <Icon name="Home" size={20} className="text-primary mt-1" />
              <div>
                <div className="font-semibold mb-1">Актив в собственности</div>
                <div className="text-sm text-muted-foreground">
                  Недвижимость остаётся вашей
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentCalculator;
