import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Card } from "./componentes/card/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DrawLabMain');
}
