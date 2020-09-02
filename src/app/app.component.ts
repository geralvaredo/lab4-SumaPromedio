import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4-app01';
  edad1: number;
  edad2: number;
  two = 2;

  private obtenerEdades(): void {
    this.edad1 = parseInt((document.getElementById('num1') as HTMLInputElement).value, 10);
    this.edad2 = parseInt((document.getElementById('num2') as HTMLInputElement).value, 10);
  }

  btnCalculoSumaPromedio(): void {
    this.obtenerEdades();
    (document.getElementById('suma') as HTMLInputElement).value = (this.edad1 + this.edad2).toString();
    (document.getElementById('promedio') as HTMLInputElement).value = ((this.edad1 + this.edad2) / this.two).toString();
  }

  btnLimpiar(): void {
    (document.getElementById('num1') as HTMLInputElement).value = ' ';
    (document.getElementById('num2') as HTMLInputElement).value = ' ';
    (document.getElementById('suma') as HTMLInputElement).value = ' ';
    (document.getElementById('promedio') as HTMLInputElement).value = ' ';
  }


}
