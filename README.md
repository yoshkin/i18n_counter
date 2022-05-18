# i18n_counter

В этом упражнении вам предстоит запрограммировать мультиязычный счётчик нажатий, состоящий из переключателя языка, кнопки с числом кликов и кнопки сброса счётчика. Начальное состояние:

```html
<div class="btn-group" role="group">
    <button type="button" class="btn btn-primary">English</button>
    <button type="button" class="btn btn-outline-primary">Русский</button>
</div>
<button type="button" class="btn btn-info">0 clicks</button>
<button type="button" class="btn btn-warning">Reset</button>
После двух нажатий по кнопке с классом btn-info и переключения на русский язык:

<div class="btn-group" role="group">
    <button type="button" class="btn btn-outline-primary">English</button>
    <button type="button" class="btn btn-primary">Русский</button>
</div>
<button type="button" class="btn btn-info">2 клика</button>
<button type="button" class="btn btn-warning">Сбросить</button>
```

src/application.js
Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику. Тексты должны подставляться через библиотеку i18next.

src/locales/en.js
Реализуйте тексты для англоязычной версии приложения.

src/locales/ru.js
Реализуйте тексты для русскоязычной версии приложения.

Подсказки
Для реализации переводов множественной формы вы можете написать свою функцию для получения нужного ключа по числу или воспользоваться возможностями библиотеки i18next
Каждый запуск приложения должен создавать свой собственный инстанс i18next.
Для изменения языка используется функция changeLanguage
