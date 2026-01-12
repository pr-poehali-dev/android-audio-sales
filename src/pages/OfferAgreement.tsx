import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const OfferAgreement = () => {
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
        <h1 className="text-4xl font-bold mb-8 font-montserrat">Договор публичной оферты</h1>
        
        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4 text-muted-foreground">
            <p className="text-sm">Дата последнего обновления: 12 января 2026 года</p>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Термины и определения</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Продавец</strong> — ИП Ибрагимов Евгений Маратович, ИНН 7701234567, ОГРНИП 1187746123456</li>
                <li><strong>Покупатель</strong> — физическое или юридическое лицо, оформившее заказ на Сайте</li>
                <li><strong>Сайт</strong> — интернет-магазин A-B Car Audio</li>
                <li><strong>Товар</strong> — автомагнитолы на базе Android и сопутствующая продукция</li>
                <li><strong>Заказ</strong> — оформленная заявка Покупателя на приобретение Товара</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Общие положения</h2>
              <p>
                Настоящий документ является официальным предложением (публичной офертой) Продавца заключить договор 
                купли-продажи Товара дистанционным способом на условиях, изложенных ниже.
              </p>
              <p className="mt-4">
                В соответствии со статьей 437 Гражданского кодекса РФ данный документ является публичной офертой, 
                и в случае принятия изложенных ниже условий лицо, осуществившее акцепт этой оферты (оформление заказа), 
                становится Покупателем.
              </p>
              <p className="mt-4">
                <strong>Акцептом настоящей оферты считается:</strong> оформление заказа на Сайте и его оплата любым 
                доступным способом.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Предмет договора</h2>
              <p>
                Продавец обязуется передать в собственность Покупателя Товар, а Покупатель обязуется принять и оплатить 
                Товар на условиях настоящего договора.
              </p>
              <p className="mt-4">
                Договор считается заключенным с момента оформления заказа Покупателем и получения Продавцом оплаты Товара.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Оформление и обработка заказа</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.1. Оформление заказа</h3>
              <p>Покупатель оформляет заказ через Сайт, указывая:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Наименование и количество Товара</li>
                <li>Способ оплаты</li>
                <li>Способ доставки</li>
                <li>Адрес доставки (для курьерской доставки)</li>
                <li>Контактные данные (ФИО, телефон, e-mail)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.2. Обработка заказа</h3>
              <p>
                После оформления заказа Продавец направляет Покупателю подтверждение заказа на указанный e-mail или 
                по телефону в течение 24 часов.
              </p>
              <p className="mt-4">
                Продавец вправе отказать в обработке заказа при отсутствии Товара на складе или недостоверности 
                указанных Покупателем данных.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Цена товара и порядок оплаты</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.1. Цена товара</h3>
              <p>
                Цена Товара указана на Сайте в рублях РФ. Продавец вправе изменять цены на Товары в одностороннем порядке.
              </p>
              <p className="mt-4">
                Цена Товара фиксируется в момент оформления заказа и не может быть изменена Продавцом в одностороннем порядке.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.2. Способы оплаты</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Банковские карты (Visa, MasterCard, МИР)</li>
                <li>Электронные кошельки</li>
                <li>Безналичный расчет для юридических лиц (по счету)</li>
                <li>Наличными при самовывозе</li>
                <li>Наложенный платеж (для некоторых регионов)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">5.3. Момент оплаты</h3>
              <p>
                Оплата производится до отправки Товара Покупателю (за исключением наложенного платежа).
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Доставка товара</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.1. Способы доставки</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Курьерская доставка по Москве</strong> — 1-2 рабочих дня, стоимость от 500 ₽ (бесплатно от 50 000 ₽)</li>
                <li><strong>Транспортные компании (CDEK, Boxberry)</strong> — 3-7 рабочих дней, стоимость рассчитывается индивидуально</li>
                <li><strong>Самовывоз</strong> — бесплатно, по адресу: г. Москва, ул. Примерная, д. 1, офис 100</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.2. Сроки доставки</h3>
              <p>
                Сроки доставки зависят от выбранного способа и региона доставки. Точный срок сообщается Покупателю 
                при подтверждении заказа.
              </p>
              <p className="mt-4">
                Продавец не несет ответственности за задержки в доставке, вызванные действиями третьих лиц 
                (транспортных компаний, таможенных органов).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">6.3. Передача товара</h3>
              <p>
                Товар считается переданным Покупателю с момента получения Товара и подписания документов о получении 
                (накладной, акта приема-передачи).
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Права и обязанности сторон</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">7.1. Продавец обязуется:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Передать Покупателю Товар в соответствии с заказом</li>
                <li>Обеспечить качество Товара</li>
                <li>Предоставить документы, подтверждающие качество Товара</li>
                <li>Предоставить гарантию на Товар (24 месяца)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">7.2. Покупатель обязуется:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Оплатить заказ в установленный срок</li>
                <li>Предоставить достоверные данные при оформлении заказа</li>
                <li>Принять Товар в установленные сроки</li>
                <li>Проверить комплектность и качество Товара при получении</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Гарантии и возврат товара</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">8.1. Гарантия</h3>
              <p>
                На все Товары предоставляется гарантия производителя сроком 24 месяца с момента передачи Товара Покупателю.
              </p>
              <p className="mt-4">
                Гарантия не распространяется на дефекты, возникшие вследствие неправильной эксплуатации, механических 
                повреждений, попадания жидкости, самостоятельного ремонта.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">8.2. Возврат товара надлежащего качества</h3>
              <p>
                В соответствии со ст. 26.1 Закона РФ «О защите прав потребителей», Покупатель вправе отказаться от Товара 
                надлежащего качества в течение 7 дней с момента получения.
              </p>
              <p className="mt-4"><strong>Условия возврата:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Товар не был в употреблении</li>
                <li>Сохранена оригинальная упаковка, комплектация, документы</li>
                <li>Отсутствуют следы установки или подключения</li>
                <li>Покупатель оплачивает стоимость обратной доставки</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">8.3. Возврат товара ненадлежащего качества</h3>
              <p>
                При обнаружении недостатков Покупатель вправе по своему выбору:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Потребовать замены на товар аналогичной марки</li>
                <li>Потребовать соразмерного уменьшения цены</li>
                <li>Потребовать незамедлительного безвозмездного устранения недостатков</li>
                <li>Отказаться от товара и потребовать возврата денежных средств</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Ответственность сторон</h2>
              <p>
                Продавец не несет ответственности за ущерб, причиненный Покупателю вследствие ненадлежащего использования 
                Товара, приобретенного на Сайте.
              </p>
              <p className="mt-4">
                Покупатель несет ответственность за достоверность указанных при оформлении заказа данных.
              </p>
              <p className="mt-4">
                Стороны освобождаются от ответственности за неисполнение или ненадлежащее исполнение обязательств 
                по настоящему договору в случае действия обстоятельств непреодолимой силы (форс-мажор).
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Разрешение споров</h2>
              <p>
                Все споры и разногласия, возникающие при исполнении настоящего договора, решаются путем переговоров.
              </p>
              <p className="mt-4">
                При невозможности разрешения спора путем переговоров, споры подлежат рассмотрению в судебном порядке 
                по месту нахождения Продавца в соответствии с законодательством РФ.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Персональные данные</h2>
              <p>
                Продавец обязуется обрабатывать персональные данные Покупателя в соответствии с Федеральным законом 
                от 27.07.2006 №152-ФЗ «О персональных данных» и Политикой конфиденциальности Сайта.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Заключительные положения</h2>
              <p>
                Настоящий договор вступает в силу с момента акцепта оферты Покупателем и действует до полного исполнения 
                обязательств сторонами.
              </p>
              <p className="mt-4">
                Продавец оставляет за собой право вносить изменения в условия настоящего договора. Все изменения вступают 
                в силу с момента их публикации на Сайте.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Реквизиты продавца</h2>
              <p><strong>ИП Ибрагимов Евгений Маратович</strong></p>
              <p className="mt-2">ИНН: 7701234567</p>
              <p>ОГРНИП: 1187746123456</p>
              <p>Юридический адрес: г. Москва, ул. Примерная, д. 1, офис 100</p>
              <p className="mt-2">Банковские реквизиты:</p>
              <p>Р/с: 40802810000000000000</p>
              <p>Банк: ПАО Сбербанк</p>
              <p>К/с: 30101810400000000225</p>
              <p>БИК: 044525225</p>
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

export default OfferAgreement;
