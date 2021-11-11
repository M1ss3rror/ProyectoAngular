import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
selector: 'app-catalogo',
templateUrl: './catalogo.component.html',
styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

title = 'libros';

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 700,
		autoplay:true,
    	autoplayTimeout:3000,
    	autoplayHoverPause:false,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			740: {
				items: 3
			},
			940: {
				items: 4
			}
		},
		nav: true
	}

	slides = [
		{ id: 1, img: "assets/img/carcel.jpg" },
		{ id: 2, img: "assets/img/habitar.jpg" },
		{ id: 3, img: "assets/img/prolongacion.jpg" },
		{ id: 4, img: "assets/img/azul.jpg" },
		{ id: 5, img: "assets/img/erato.jpg" },
		{ id: 6, img: "assets/img/flores.jpg" },
		{ id: 7, img: "assets/img/retablo.jpg" },
		{ id: 8, img: "assets/img/sobres.jpg" },
		{ id: 9, img: "assets/img/zalamera.jpg" }
	];


ngOnInit(): void {

}

}