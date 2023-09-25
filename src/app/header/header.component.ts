import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  buscarEntrada:string="";




  constructor(){
    
  }
  obtenerResultado(bucarSalida:any){
    
    
    this.buscarEntrada=bucarSalida
    console.log(this.buscarEntrada)
   
  }
}
