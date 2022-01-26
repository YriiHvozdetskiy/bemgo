======= создати папку з струкрутою =======
==================================================
npm run add header[img/sprite,assets,.scss,.html]
==================================================
#npm run add "назва папки"[.scss,.html]
npm run add header[.scss,.html]
*создасть папку "назва папки", в середині будуть файли з такоюж назвою і розширенням яке вказано в "[]"

Также можно создавать папки внутри блока:
#npm run add "назва папки"[img/sprite,assets,symbols,scss,.js]
npm run add header[img/sprite,assets]

======= создати сторінку =======

#npm run add page "назва сторіки"
[npm run add page header]

======= структура папки  =======
======= [Js]()=======
Пишем в app/app.js і цей код підкл до всіх сторінок 

======= [img]() =======
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── about
│       	├── assets/about-poster.jpg
│
[картинки мають бути в папці assets]
вказуєм що тут є картинка
<img src="@about/about-poster.jpg" alt="">
<img src="@about/about-poster.jpg" alt="">
===========================================
[картинки через background-image мають бути в папці img/sprite]
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── zz
│       	  ├── [assets]/about-poster.jpg
│			  ├── [img]/[sprite]/about-poster.jpg
background-image: url("img/sprite/about-poster.jpg");
===========================================
======= [svg]() =======
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── zz
│       	  ├── [symbols]/call.svg
 в HTML вказуєм
<svg class="">
	<use xlink:href="#(назва блоку,zz)"__call"></use>		
</svg>
1.[видаляєм] весь fill з svg
2.колір задаєм через: [fill: green;]
======= [@@include]() =======
==index.html
@@include( 'develop/header/header.html', {
"slogan": "Фільтр"
})
==header.html
<h1>@@slogan</h1>

===========================================
1.розмітка і стилі на сторінці можна розбити по [section] див. zz/service-hero,zz/service-quantum
2.картинки до цієї секції мають бути в корневій папці [zz/assets/img.jpg, symbols]
3.якщо потрібні стилі з якоїсь папки[button,input] -- @import "service-quantum/service-quantum.scss";
4.шрифти дублюємо в app/blocks/develop/app/[static/fonts] -- щоб працювало в [npm run do]
5.з конопки можна робити силку, вибитати type="button"
