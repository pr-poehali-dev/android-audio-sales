import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const TermsOfService = () => {
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
        <h1 className="text-4xl font-bold mb-8 font-montserrat">Пользовательское соглашение</h1>
        
        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4 text-muted-foreground">
            <p className="text-sm">Дата последнего обновления: 12 января 2026 года</p>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
              <p>
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между 
                Индивидуальным предпринимателем Ибрагимовым Евгением Маратовичем (далее — Администрация) 
                и пользователями сайта A-B Car Audio (далее — Сайт, Пользователь).
              </p>
              <p className="mt-4">
                Использование Сайта означает полное и безоговорочное принятие Пользователем настоящего Соглашения. 
                Если Пользователь не согласен с условиями Соглашения, он обязан немедленно прекратить использование Сайта.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Предмет соглашения</h2>
              <p>
                Администрация предоставляет Пользователю доступ к информации о товарах (автомагнитолы на базе Android), 
                их характеристиках, ценах и возможности оформления заказов через Сайт.
              </p>
              <p className="mt-4">
                Администрация оставляет за собой право изменять, добавлять или удалять разделы Сайта, а также изменять 
                настоящее Соглашение без предварительного уведомления Пользователей.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Регистрация и учетная запись</h2>
              <p>
                Для получения доступа к оптовым ценам и расширенным функциям Сайта Пользователь может пройти регистрацию, 
                создав личный кабинет.
              </p>
              <p className="mt-4">При регистрации Пользователь обязуется:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Предоставить достоверную и актуальную информацию</li>
                <li>Обновлять регистрационные данные при их изменении</li>
                <li>Не передавать свои учетные данные третьим лицам</li>
                <li>Немедленно уведомить Администрацию о несанкционированном доступе к учетной записи</li>
              </ul>
              <p className="mt-4">
                Пользователь несет ответственность за все действия, совершенные под его учетной записью.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Права и обязанности Пользователя</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.1. Пользователь имеет право:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Использовать Сайт в соответствии с его функциональным назначением</li>
                <li>Получать консультации по представленным товарам</li>
                <li>Оформлять заказы на товары</li>
                <li>Получать информацию о статусе своего заказа</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.2. Пользователь обязуется:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Не использовать Сайт в противоправных целях</li>
                <li>Не нарушать работоспособность Сайта</li>
                <li>Не размещать вредоносный код или программы</li>
                <li>Не копировать и не распространять контент Сайта без согласия Администрации</li>
                <li>Соблюдать законодательство РФ при использовании Сайта</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Права и обязанности Администрации</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.1. Администрация имеет право:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Изменять содержание Сайта и его функциональность</li>
                <li>Ограничивать или прекращать доступ к Сайту без объяснения причин</li>
                <li>Удалять учетные записи Пользователей, нарушающих Соглашение</li>
                <li>Изменять цены на товары без предварительного уведомления</li>
                <li>Отказать в обработке заказа без объяснения причин</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.2. Администрация обязуется:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Поддерживать работоспособность Сайта</li>
                <li>Обеспечивать безопасность персональных данных</li>
                <li>Своевременно обрабатывать заказы</li>
                <li>Предоставлять достоверную информацию о товарах</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Использование контента Сайта</h2>
              <p>
                Все содержимое Сайта (тексты, изображения, логотипы, товарные знаки) является интеллектуальной собственностью 
                Администрации или третьих лиц и охраняется законодательством РФ.
              </p>
              <p className="mt-4">
                Использование контента Сайта без письменного разрешения Администрации запрещено и может повлечь за собой 
                ответственность в соответствии с законодательством РФ.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Ограничение ответственности</h2>
              <p>
                Администрация не несет ответственности за:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Временную недоступность Сайта по техническим причинам</li>
                <li>Несоответствие Сайта ожиданиям Пользователя</li>
                <li>Любые убытки, возникшие в результате использования или невозможности использования Сайта</li>
                <li>Действия третьих лиц в отношении информации, размещенной на Сайте</li>
              </ul>
              <p className="mt-4">
                Сайт предоставляется «как есть». Администрация не гарантирует отсутствие ошибок и бесперебойную работу.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Персональные данные</h2>
              <p>
                Обработка персональных данных Пользователя осуществляется в соответствии с Федеральным законом от 27.07.2006 
                №152-ФЗ «О персональных данных» и Политикой конфиденциальности Сайта.
              </p>
              <p className="mt-4">
                Используя Сайт, Пользователь дает согласие на обработку своих персональных данных в порядке, 
                определенном Политикой конфиденциальности.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Разрешение споров</h2>
              <p>
                В случае возникновения споров между Администрацией и Пользователем стороны будут стремиться к их разрешению 
                путем переговоров.
              </p>
              <p className="mt-4">
                Если спор не будет урегулирован путем переговоров, он подлежит рассмотрению в судебном порядке по месту 
                нахождения Администрации в соответствии с законодательством РФ.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Применимое законодательство</h2>
              <p>
                Настоящее Соглашение регулируется и толкуется в соответствии с законодательством Российской Федерации.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Заключительные положения</h2>
              <p>
                Настоящее Соглашение вступает в силу с момента начала использования Сайта Пользователем и действует 
                в течение неопределенного срока.
              </p>
              <p className="mt-4">
                Признание судом какого-либо положения Соглашения недействительным не влечет недействительности прочих положений.
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

export default TermsOfService;
