import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-depoimentos-card',
  imports: [],
  templateUrl: './depoimentos-card.html',
  styleUrl: './depoimentos-card.scss'
})
export class DepoimentosCard {
  @Input() nome!: string;
  @Input() comentario!: string;
  @Input() identif!: string;
}
