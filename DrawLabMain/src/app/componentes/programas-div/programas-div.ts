import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-programas-div',
  imports: [],
  templateUrl: './programas-div.html',
  styleUrls: ['./programas-div.scss']
})
export class ProgramasDiv {

  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagem: string = '';
  
}