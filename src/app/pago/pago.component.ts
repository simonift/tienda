import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  productosCarrito: any[] = [];
  productosCantidad = [{ codigo: 0, cant: 0 }];
  productos: any[] = [];

  datos: any = []

  formularioPago = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    pais: new FormControl(''),
    region: new FormControl(''),
    direccion: new FormControl(''),
    ciudad: new FormControl(''),
    titular: new FormControl(''),
    numTarjeta: new FormControl('')
  })

  constructor() {}

  enviar(){
    this.datos = {
      codigo:this.formularioPago.value.nombre,
      apellido:this.formularioPago.value.apellido,
      pais:this.formularioPago.value.pais,
      region:this.formularioPago.value.region,
      direccion:this.formularioPago.value.direccion,
      ciudad:this.formularioPago.value.ciudad,
      codigoPostal:this.formularioPago.value.codigoPostal
    }
  }

  // productosCarrito = JSON.parse( localStorage.getItem('carrito') );
  totalDinero = localStorage.getItem('total');
  subTotal = localStorage.getItem('subTotal');
  totalCompra = localStorage.getItem('totalCompra');

}
