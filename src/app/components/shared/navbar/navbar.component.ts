import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  buscarTexto: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ): void{
    // console.log(termino);
    this.route.navigate(['/buscar', termino]);
  }
}
