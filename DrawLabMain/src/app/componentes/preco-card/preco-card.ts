import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preco-card',
  imports: [],
  templateUrl: './preco-card.html',
  styleUrl: './preco-card.scss'
})
export class PrecoCard {
  @Input() identif!: string;
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() p1!: string;
  @Input() p2!: string;
  @Input() p3!: string;
  @Input() p4!: string;
  @Input() valor!: string;
}
