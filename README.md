# Описание:

Аппарат должен:

1. Принимать деньги номиналом в 50, 100, 500 и 1000 рублей.
2. Выдавать сдачу номиналом в 1, 5, 10, 50, 100 и 500 рублей
   (количество каждого номинала можно задать как случайном образом,
   так и с помощью мока).
   2.1 Если сдачи нет, то выдать товар на сумму недостающей сдачи.
3. Иметь 8 разных видов товара (название и цена на ваше усмотрение).
   3.1 Если товара нет в наличии, визуально отобразить это.
4. Выдавать товар сразу после его выбора.
5. Выдавать сдачу по отдельной кнопке.
   <br/>

config.d.ts - позволяет открыть .jpg картинку . interface -> interfaces.d.ts - 2 переиспользуемых интерфейса. style.scss - общий файл со стилями (не стал делить на модули т.к проект не будет поддерживаться).
<br/>

### основная часть логики приложения в контейнерной компоненте App.tsx . 69(moneyIns) строка - объявляем доступную сдачу автомата , делаем кол-во монет рандомным . 98 - сумма , которой не хватило в аппарате для сдачи . 102 - функция . если нажать на кнопку добавления купюры , именно она попадет в moneyIns . 117-167(setChange) логика кнопки "Вернуть сдачу" . 125-133 разбивает деньги , которые вложил пользователь , на доступные для сдачи (ввод [50 , 100 , 50 , 1000] , вывод [500 , 500 , 100 , 100]) . 136-144 считает совпадения (ввод [500 , 500 , 100 , 100] , вывод [{count:2 ,item:500} , {count:2 , item:100}]).148-162 из доступной сдачи вычитаем прошлый вывод . если moneyIns[Х].count меньше 0 , то разница прибавляется в 98 строку , а сам узел обнуляется . 162-165 завершение функции .

<br/>
## components -> header -> Header.tsx . Проверка на валидность "Внутри", "В кармане" . Вызов функции setChange()
<br/>
## components -> cards -> Cards.tsx . Отрисовка карточки , валидация надписи "Внутри"(Header.tsx)  . если товар отсутствует , то вместо кнопки появится "Я закончился 😞"
<br/>
## components -> add -> Add.tsx . принимает из .map (App) купюру , которую можно вложить в автомат . + отвечает за валидацию надписи "В кармане"(Header.tsx) . 
<br/>
# ипользовал: TS, React , SCSS

![image](https://user-images.githubusercontent.com/97777490/214834235-b7ecde5a-30f2-4c23-a4e0-a6d5e044a484.png)

