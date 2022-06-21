//importação
//track : olhando se a variavel mudou (bindar)
import {LightningElement, track } from "lwc"

//exporto
// app > Nome do nosso lwc (classe que controla o lwc)
//extends > extendendo as funcionalidades com coisas do lightning elemente

export default class App extends LightningElement{
	@track num1;
	@track num2;
  resultado;

  mudouN1(event){
    this.num1=Number(event.target.value);
  }
  mudouN2(event){
    this.num2=Number(event.target.value);
  }

	//this
	soma(){
		
		 this.resultado = this.num1 + this.num2;
	}
	sub(){
		
		 this.resultado = this.num1 - this.num2;
	}
	div(){
		
		 this.resultado = this.num1 / this.num2;
	}
	mult(){
		
		 this.resultado = this.num1 * this.num2;
	}

}
