import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  destacarSecao(event: Event, secaoId: string) {
  event.preventDefault();
  const el = document.getElementById(secaoId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

}
