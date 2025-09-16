import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 destacarSecao(event: Event, secaoId: string) {
  event.preventDefault();
  const el = document.getElementById(secaoId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

}
