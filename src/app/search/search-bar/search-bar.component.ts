import { Component ,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
 @Output () resultado = new EventEmitter<string>()
  buscarEntradaPapa:string="";

  buscarHijo(bucarSalida:any){
    console.log(bucarSalida)
    bucarSalida = this.buscarEntradaPapa
    this.resultado.emit(bucarSalida)
   }

}
