======= создати папку з струкрутою =======

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
│       ├── about
│       	├── assets/about-poster.jpg
│			├── img/sprite/about-poster.jpg
background-image: url("img/sprite/about-poster.jpg");
===========================================
[svg]
app/
├── blocks/
│   └── develop/         # Уровень develop
│       ├── about
│       	├── symbols/call.svg
 в HTML вказуєм
<svg class="">
	<use xlink:href="#(назва блоку,about)"__call"></use>		
</svg>
======= [@@include]() =======
==index.html
@@include( 'develop/header/header.html', {
"slogan": "Фільтр"
})
==header.html
<h1>@@slogan</h1>
