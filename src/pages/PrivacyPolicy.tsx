import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-montserrat text-primary">A-B Car Audio</h1>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 font-montserrat">Политика конфиденциальности</h1>
        
        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4 text-muted-foreground">
            <p className="text-sm">Дата последнего обновления: 12 января 2026 года</p>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, 
                которую Индивидуальный предприниматель Ибрагимов Евгений Маратович (далее — Оператор, ИП) может получить о 
                Пользователе во время использования сайта A-B Car Audio.
              </p>
              <p className="mt-4">
                Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней 
                условиями обработки его персональной информации.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Термины и определения</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу</li>
                <li><strong>Оператор</strong> — ИП Ибрагимов Евгений Маратович</li>
                <li><strong>Пользователь</strong> — лицо, имеющее доступ к сайту посредством сети Интернет</li>
                <li><strong>Обработка персональных данных</strong> — любое действие с персональными данными (сбор, запись, систематизация, хранение, использование, передача, удаление)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Собираемые персональные данные</h2>
              <p>Оператор собирает и обрабатывает следующие персональные данные:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Фамилия, имя, отчество</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты (e-mail)</li>
                <li>Адрес доставки товара</li>
                <li>Данные об IP-адресе</li>
                <li>Информация из cookies</li>
                <li>Информация о браузере и устройстве</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Цели сбора персональных данных</h2>
              <p>Персональные данные собираются для следующих целей:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Обработка заказов и доставка товаров</li>
                <li>Связь с клиентом (информирование о заказе, консультации)</li>
                <li>Предоставление доступа к личному кабинету (для оптовых покупателей)</li>
                <li>Улучшение качества обслуживания</li>
                <li>Проведение статистических исследований</li>
                <li>Информирование о новых товарах и акциях (при согласии пользователя)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Правовые основания обработки</h2>
              <p>Обработка персональных данных осуществляется на основании:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных»</li>
                <li>Согласия субъекта персональных данных</li>
                <li>Договора оферты между Оператором и Пользователем</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Порядок и условия обработки</h2>
              <p>
                Обработка персональных данных осуществляется с использованием средств автоматизации и без использования таких средств. 
                Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от 
                неправомерного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения.
              </p>
              <p className="mt-4">
                Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не менее срока, 
                установленного законодательством РФ.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Передача персональных данных третьим лицам</h2>
              <p>Персональные данные могут быть переданы третьим лицам только в следующих случаях:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Пользователь дал согласие на такие действия</li>
                <li>Передача необходима для оказания услуги (например, курьерской службе для доставки)</li>
                <li>Передача предусмотрена законодательством РФ</li>
              </ul>
              <p className="mt-4">
                Оператор взаимодействует с транспортными компаниями (CDEK, Boxberry) и платежными системами, 
                которые получают необходимый минимум данных для выполнения своих обязательств.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Использование cookies</h2>
              <p>
                Сайт использует технологию cookies для улучшения работы сервиса, анализа посещаемости и персонализации контента. 
                Cookies — это небольшие текстовые файлы, размещаемые на устройстве пользователя.
              </p>
              <p className="mt-4">
                Пользователь может настроить свой браузер для отказа от cookies, однако это может ограничить функциональность сайта.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Права субъекта персональных данных</h2>
              <p>Пользователь имеет право:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия Оператора в уполномоченный орган (Роскомнадзор) или в судебном порядке</li>
              </ul>
              <p className="mt-4">
                Для реализации своих прав Пользователь может направить письменное обращение на адрес электронной почты: 
                <strong> info@autosound-elite.ru</strong>
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Безопасность персональных данных</h2>
              <p>Оператор применяет следующие меры безопасности:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Использование SSL-сертификата для шифрования данных</li>
                <li>Ограничение доступа к персональным данным</li>
                <li>Регулярное обновление программного обеспечения</li>
                <li>Резервное копирование данных</li>
                <li>Обучение сотрудников правилам обработки персональных данных</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Изменение Политики конфиденциальности</h2>
              <p>
                Оператор имеет право вносить изменения в настоящую Политику конфиденциальности. Новая редакция вступает в силу 
                с момента ее размещения на сайте. Продолжение использования сайта после внесения изменений означает согласие 
                Пользователя с новой редакцией Политики.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Контактная информация</h2>
              <p><strong>ИП Ибрагимов Евгений Маратович</strong></p>
              <p className="mt-2">ИНН: 7701234567</p>
              <p>ОГРНИП: 1187746123456</p>
              <p>Юридический адрес: г. Москва, ул. Примерная, д. 1, офис 100</p>
              <p className="mt-2">Телефон: +7 (495) 123-45-67</p>
              <p>Email: info@autosound-elite.ru</p>
            </div>
          </CardContent>
        </Card>

        <Button onClick={() => navigate('/')} className="w-full md:w-auto">
          <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
