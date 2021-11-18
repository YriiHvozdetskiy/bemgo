*** підключення картинок ***

=== background-image ===

шоб можна  можна вставляти картинки через background-image: url("/static/img/картинка.розширення"); - шлях до картинок береться з папки dist
потрібно удалити з tasks/styles.js " .pipe( this.parseURLs() ) "

щоб працював спрайт, спрайту вказуєм _sprite (томущо шлях з картинки береться з папки dist/static/img/sprite_sprite.svg)
<svg>
	<use href="./static/img/sprite_sprite.svg#smartphone"></use>
</svg>

=== наслідує колір батька === 

потрібно удалити *** в спрайті щось
svg {
	fill: currentColor;
}


=== img ===

<img src="/static/img/картинка.розширення" alt=""/>

=== templates ===

<button class="button">@@title</button>

//це вставляєм в HTML де потрібна кнопка
@@include( 'templates/button/button.html', {
	"text": "це текст кнопки",
	"title": "це title"
})






<a href="#" @@data class="button @@mod">
	@@if(img != ""){
		<img src="@@img" alt="" class="button__icon">
}
	<span class="button__text">@@title</span>
</a>
