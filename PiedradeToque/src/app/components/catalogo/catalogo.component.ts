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
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 700,
		autoplay:true,
    	autoplayTimeout:1000,
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
		{ id: 1, img: "https://dummyimage.com/350x150/423b42/fff" },
		{ id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff" },
		{ id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff" },
		{ id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff" },
		{ id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff" },
		{ id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff" },
		{ id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff" }
	];


  ngOnInit(): void {
  }

}