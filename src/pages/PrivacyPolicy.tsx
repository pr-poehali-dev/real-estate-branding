export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-montserrat" style={{ background: "var(--gold-100)" }}>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:opacity-70 transition-opacity" style={{ color: "#daa520" }}>
          ← Вернуться на главную
        </a>
        <h1 className="font-cormorant text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1a1209" }}>
          Политика конфиденциальности
        </h1>
        <p className="text-sm mb-8" style={{ color: "rgba(0,0,0,0.4)" }}>Последнее обновление: 03 мая 2026 г.</p>

        <div className="prose prose-stone max-w-none space-y-6 text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.75)" }}>
          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных физических лиц (далее — «Пользователи»), которые используют сайт индивидуального предпринимателя Смирнова Сергея (далее — «Оператор»).</p>
            <p>Оператор обрабатывает персональные данные в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>2. Состав обрабатываемых данных</h2>
            <p>Оператор может обрабатывать следующие персональные данные:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Фамилия, имя, отчество;</li>
              <li>Номер телефона;</li>
              <li>Адрес электронной почты;</li>
              <li>Данные, автоматически передаваемые браузером (IP-адрес, тип браузера, cookie).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>3. Цели обработки персональных данных</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Обратная связь с Пользователем по его запросу;</li>
              <li>Оказание риелторских услуг и консультирование;</li>
              <li>Направление информационных и рекламных сообщений (при наличии согласия);</li>
              <li>Улучшение качества работы сайта.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>4. Основания обработки</h2>
            <p>Персональные данные обрабатываются на основании согласия Пользователя, выраженного при заполнении формы на сайте, а также в рамках исполнения договора на оказание услуг.</p>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>5. Передача данных третьим лицам</h2>
            <p>Персональные данные не передаются третьим лицам без согласия Пользователя, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>6. Защита данных</h2>
            <p>Оператор принимает организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>7. Права субъекта персональных данных</h2>
            <p>Пользователь вправе:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Получить информацию об обработке своих данных;</li>
              <li>Потребовать уточнения, блокирования или уничтожения данных;</li>
              <li>Отозвать согласие на обработку персональных данных.</li>
            </ul>
            <p>Для реализации прав обращайтесь по телефону: <a href="tel:+79000000000" style={{ color: "#daa520" }}>+7 (900) 000-00-00</a></p>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>8. Использование файлов Cookie</h2>
            <p>Сайт использует cookie-файлы для улучшения работы. Вы можете отключить их в настройках браузера, однако это может повлиять на функциональность сайта.</p>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>9. Изменения политики</h2>
            <p>Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия размещается на данной странице.</p>
          </section>

          <section>
            <h2 className="font-cormorant text-xl font-bold mb-2" style={{ color: "#1a1209" }}>10. Контактные данные</h2>
            <p>ИП Смирнов Сергей<br />г. Екатеринбург<br />Телефон: <a href="tel:+79000000000" style={{ color: "#daa520" }}>+7 (900) 000-00-00</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
