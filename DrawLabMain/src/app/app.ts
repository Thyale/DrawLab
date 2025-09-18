import { Component, signal } from '@angular/core';
import { Header } from './componentes/header/header';
import { Card } from "./componentes/card/card";
import { Programas } from './componentes/programas/programas';
import { Sobre } from './componentes/sobre/sobre';
import { Depoimentos } from "./componentes/depoimentos/depoimentos";
import { Preco } from "./componentes/preco/preco";

@Component({
  selector: 'app-root',
  imports: [Header, Card, Programas, Sobre, Depoimentos, Preco],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DrawLabMain');
}
