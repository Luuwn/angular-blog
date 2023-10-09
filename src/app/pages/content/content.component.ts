import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string = "https://img.freepik.com/vetores-gratis/fundo-azul-abstrato_1182-594.jpg"

  contentTitle:string = "Azuis, azuis e azuis: Nova Era do Azul"

  contentDescription:string = "No espectro solar, a cor que se situa entre o verde e o violeta: o azul do céu. O que possui essa cor: esteve no casamento vestido de azul. Poético: O espaço celeste em que os astros estão localizados; firmamento, céu."


  
}
