# Тестовое задание на позицию frontend разработчика

Напишите SPA для конвертирования валют, состоящиее из двух страниц.

## Описание страниц
### Главная страница

- Показывает список валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 70.00 RUB, а 1 EUR = 80.00.
- По-умолчанию у пользователя должна определяться «базовая» валюта, которую он может настроить. 
- Курсы валют должны автомотически обновляться каждую минуту.
- Должна быть кнопка принудительного обновления всех курсов валют
 
### Страница с конвертером из одной валюты в другую 


- На этой странице должна быть поля, куда можно ввести текст в виде 15.13, выбрать валюту "из" и валюту "в". 
- Должна быть возможность быстрой смены мест валюты валюты "из" и валюты "в". Пример: конвертировали из usd в rub, а нужно то же значение конвертировать из rub в usd 


## Технические требования

- Приложение разработано с использованием React и Redux(при необходимости)
- Для получения текущих курсов найдите и используйте любое отрытое API.
- Роутинг выполнен с использованием [React Router v5](https://github.com/ReactTraining/react-router/releases/tag/v5.0.0)
- Фреймворк UI любой на ваше усмотрение (как пример [Ant Design](https://ant.design/) или [Semantic UI](https://react.semantic-ui.com/)). 
    - Можно и на чистом css, главное, чтобы было красиво
- Пакетный менеджер `yarn`
- Приложение должно запускаться по адресу `localhost:3000` командой `yarn watch`
- При переходах по ссылкам страница не перезагружается
- Исходный код решения должен быть выложен с вашего аккаунта на [Github](http://github.com/) с Readme файлом с инструкцией по запуску
- Использование TypeScript

## Опциональные задания
- Покрытие кода тестами
