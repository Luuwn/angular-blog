import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent{
  
  @Input()
  photoCover:string = "https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67"
  @Input()
  cardDate:string = "Janeiro 01, 2023"
  @Input()
  cardTitle:string = "Titulo Modelo: Modelos"
  @Input()
  cardDescription:string = "Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo, Descrição Modelo."  

}
