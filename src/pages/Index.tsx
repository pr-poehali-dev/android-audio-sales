import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number}>>([]);

  const products = [
    {
      id: 1,
      name: 'Premium Android 13 Ultra',
      brand: 'Tesla Style',
      screen: '12.3"',
      retailPrice: 45900,
      wholesalePrice: 38900,
      features: ['4K Display', 'Wireless CarPlay', '8-core CPU', '6GB RAM'],
      image: '📱'
    },
    {
      id: 2,
      name: 'Smart Android 12 Pro',
      brand: 'Universal',
      screen: '10.1"',
      retailPrice: 32900,
      wholesalePrice: 27500,
      features: ['Full HD', 'Android Auto', 'GPS', '4GB RAM'],
      image: '📱'
    },
    {
      id: 3,
      name: 'Elite Android 13 Max',
      brand: 'BMW Style',
      screen: '10.25"',
      retailPrice: 52900,
      wholesalePrice: 44900,
      features: ['AMOLED', '5G', 'DSP Audio', '8GB RAM'],
      image: '📱'
    },
    {
      id: 4,
      name: 'Classic Android 11',
      brand: 'Budget',
      screen: '9"',
      retailPrice: 18900,
      wholesalePrice: 15900,
      features: ['HD Ready', 'Bluetooth', 'USB', '2GB RAM'],
      image: '📱'
    }
  ];

  const addToCart = (product: typeof products[0]) => {
    setCart([...cart, { id: product.id, name: product.name, price: isLoggedIn ? product.wholesalePrice : product.retailPrice }]);
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border">
      <CardHeader className="pb-3">
        <div className="text-6xl text-center mb-4">{product.image}</div>
        <CardTitle className="text-xl font-montserrat">{product.name}</CardTitle>
        <CardDescription>{product.brand} • {product.screen}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((feature, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">{feature}</Badge>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Розница:</span>
            <span className="text-xl font-semibold text-primary">{product.retailPrice.toLocaleString()} ₽</span>
          </div>
          {isLoggedIn && (
            <div className="flex justify-between items-center p-2 bg-accent/20 rounded">
              <span className="text-sm font-medium">Опт:</span>
              <span className="text-xl font-bold text-accent">{product.wholesalePrice.toLocaleString()} ₽</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => addToCart(product)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const NavBar = () => (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold font-montserrat text-primary">A-B Car Audio</h1>
            <div className="hidden md:flex space-x-6">
              {['home', 'catalog', 'about', 'delivery', 'warranty', 'returns', 'faq', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О компании'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'warranty' && 'Гарантия'}
                  {section === 'returns' && 'Возврат'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="User" className="mr-2 h-4 w-4" />
                    Вход
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход для оптовых покупателей</DialogTitle>
                    <DialogDescription>
                      Войдите для доступа к оптовым ценам
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button onClick={() => setIsLoggedIn(true)} className="w-full">
                      Войти
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                <Icon name="LogOut" className="mr-2 h-4 w-4" />
                Выход
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <Icon name="ShoppingCart" className="h-4 w-4" />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                  <SheetDescription>
                    {cart.length === 0 ? 'Корзина пуста' : `Товаров: ${cart.length}`}
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-secondary rounded">
                      <span className="text-sm">{item.name}</span>
                      <span className="font-semibold">{item.price.toLocaleString()} ₽</span>
                    </div>
                  ))}
                  {cart.length > 0 && (
                    <>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Итого:</span>
                        <span className="text-primary">{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()} ₽</span>
                      </div>
                      <Button className="w-full">Оформить заказ</Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <section id="home" className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 animate-fade-in text-foreground">
            Премиум автомагнитолы <span className="text-primary">Android</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Элегантное решение для вашего автомобиля. Качество, технологии, стиль.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="bg-primary hover:bg-primary/90">
              <Icon name="Sparkles" className="mr-2 h-5 w-5" />
              Смотреть каталог
            </Button>
            {!isLoggedIn && (
              <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')}>
                Оптовым клиентам
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Преимущества</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: 'Shield', title: 'Гарантия качества', desc: '2 года официальной гарантии' },
                  { icon: 'Truck', title: 'Быстрая доставка', desc: 'По всей России от 1 дня' },
                  { icon: 'HeadphonesIcon', title: 'Поддержка 24/7', desc: 'Всегда на связи' },
                  { icon: 'Award', title: 'Сертификаты', desc: 'Все документы в наличии' }
                ].map((item, idx) => (
                  <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <Icon name={item.icon as any} className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-montserrat">Каталог</h2>
              {isLoggedIn && (
                <Badge variant="default" className="bg-accent text-accent-foreground">
                  <Icon name="CheckCircle" className="mr-1 h-3 w-3" />
                  Оптовые цены активны
                </Badge>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">О компании</h2>
          <Card>
            <CardContent className="pt-6 space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">A-B Car Audio</strong> — официальный поставщик премиум автомагнитол Android в России.
              </p>
              <p>
                Мы работаем с 2018 года и зарекомендовали себя как надежный партнер для автосалонов, 
                установочных центров и розничных покупателей.
              </p>
              <Separator />
              <div>
                <p className="font-semibold text-foreground mb-2">Юридическая информация:</p>
                <p>ООО "А-Б Кар Аудио"</p>
                <p>ИНН: 7701234567</p>
                <p>ОГРН: 1187746123456</p>
                <p>Юридический адрес: г. Москва, ул. Примерная, д. 1, офис 100</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="delivery" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Доставка</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" className="mr-2 h-5 w-5 text-primary" />
                    По Москве
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Курьерская доставка 1-2 дня — от 500 ₽ (бесплатно от 50 000 ₽)
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Plane" className="mr-2 h-5 w-5 text-primary" />
                    По России
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  CDEK, Boxberry — 3-7 дней. Стоимость рассчитывается индивидуально.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Package" className="mr-2 h-5 w-5 text-primary" />
                    Самовывоз
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Бесплатно из нашего офиса в Москве (предварительная договоренность обязательна)
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      <section id="warranty" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Гарантия</h2>
            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <p className="text-lg font-semibold text-foreground">На все устройства предоставляется официальная гарантия 24 месяца.</p>
                <p>Гарантия распространяется на:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Заводской брак</li>
                  <li>Неисправности, возникшие при нормальной эксплуатации</li>
                  <li>Программные сбои</li>
                </ul>
                <Separator />
                <p className="font-semibold text-foreground">Гарантия НЕ распространяется на:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Механические повреждения</li>
                  <li>Повреждения от воды и других жидкостей</li>
                  <li>Нарушение правил эксплуатации</li>
                  <li>Самостоятельный ремонт или вскрытие устройства</li>
                </ul>
              </CardContent>
          </Card>
        </div>
      </section>

      <section id="returns" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Возврат и обмен</h2>
            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <p>
                  В соответствии с законом "О защите прав потребителей" (ст. 25 и 26.1), вы имеете право 
                  вернуть товар надлежащего качества в течение <strong className="text-foreground">7 дней</strong> с момента получения.
                </p>
                <Separator />
                <p className="font-semibold text-foreground">Условия возврата:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Товар не был в употреблении</li>
                  <li>Сохранена оригинальная упаковка</li>
                  <li>Сохранены все комплектующие и документы</li>
                  <li>Отсутствуют следы установки или подключения</li>
                </ul>
                <Separator />
                <p>
                  Возврат денежных средств осуществляется в течение 10 рабочих дней после получения 
                  товара на наш склад. Стоимость обратной доставки оплачивается покупателем.
                </p>
              </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger>Как стать оптовым покупателем?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для получения доступа к оптовым ценам необходимо зарегистрироваться на сайте и предоставить 
                  копии документов (ИНН, ОГРН). После проверки вам будет открыт доступ к оптовому кабинету.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger>Какие способы оплаты доступны?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы принимаем: банковские карты, безналичный расчет для юридических лиц, электронные кошельки, 
                  наличные при самовывозе.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger>Предоставляете ли вы услуги установки?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы можем порекомендовать проверенные установочные центры в вашем городе. Прямые услуги 
                  установки предоставляются только в Москве (за дополнительную плату).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger>Можно ли обновить прошивку?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, все устройства поддерживают обновление прошивки. Инструкции и файлы обновлений 
                  предоставляются бесплатно. Также мы можем выполнить обновление за вас (платная услуга).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger>Есть ли в наличии все модели?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Большинство моделей есть на складе в Москве. Актуальную информацию о наличии уточняйте 
                  у менеджера по телефону или через форму обратной связи.
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Phone" className="mr-2 h-5 w-5 text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground text-sm">Ежедневно 9:00 - 21:00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Mail" className="mr-2 h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">info@autosound-elite.ru</p>
                  <p className="text-muted-foreground text-sm">Ответим в течение часа</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" className="mr-2 h-5 w-5 text-primary" />
                    Адрес офиса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-2">г. Москва, ул. Примерная, д. 1, офис 100</p>
                  <p className="text-muted-foreground text-sm">Пн-Пт: 10:00-19:00, Сб-Вс: по записи</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold mb-3 font-montserrat">A-B Car Audio</h3>
              <p className="text-sm text-muted-foreground">
                Премиум автомагнитолы Android для вашего автомобиля
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('about')}>О компании</li>
                <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('delivery')}>Доставка</li>
                <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('warranty')}>Гарантия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('faq')}>FAQ</li>
                <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('returns')}>Возврат</li>
                <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('contacts')}>Контакты</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-6" />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 A-B Car Audio. Все права защищены.</p>
            <p className="mt-2">ООО "А-Б Кар Аудио" • ИНН 7701234567 • ОГРН 1187746123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;