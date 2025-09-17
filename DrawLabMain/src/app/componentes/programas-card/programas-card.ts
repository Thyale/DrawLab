import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-programas-card',
  imports: [],
  templateUrl: './programas-card.html',
  styleUrl: './programas-card.scss'
})
export class ProgramasCard {
  @Input() titulo!: string;
  @Input() texto!: string;
  @Input() identif!: string;
}
