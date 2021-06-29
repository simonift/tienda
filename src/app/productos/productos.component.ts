import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TotalService } from '../total.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  template: `
    <app-pago [childMessage]="parentMessage"></app-pago>
  `,
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  totalDinero = 0;
  totalCarrito = 0;
  subTotal = 0;
  IVA = 0.19;
  conIVA = 1.19;
  clave = new FormControl('');
  cantidad = new FormControl();
  productosCarrito: any[] = []; // Array para el carrito
  productosCantidad = [{ codigo: 0, cant: 0 }];
  productos: any[] = [];

  productosActual1 = [   // Array para items en stock
    {
      codigo: 250, nombre: 'PROSTAR WHEY ULTIMATE NUTRITION 5 LBS', precio: 45990,
      descripcion: 'Posee: 80 SERVICIOS', img: '../../assets/tarjetas/prostar.png',
      tags : "proteina, whey, prostar, ultimate nutrition, 5 lbs"
    },
    {
      codigo: 251, nombre: 'NITROTECH WHEY GOLD MUSCLETECH 5 LBS', precio: 49990,
      descripcion: 'Posee: 76 SERVICIOS', img: '../../assets/tarjetas/nitrotech.png',
      tags : "proteina, whey, nitrotech, muscletech, 5 lbs"
    },
    {
      codigo: 252, nombre: 'GOLD STANDARD 100% WHEY OPTIMUM NUTRITION 5 LBS', precio: 49990,
      descripcion: 'Posee: 74 SERVICIOS', img: '../../assets/tarjetas/goldstandard.png',
      tags : "proteina, whey, gold standard, optimum nutrition, 5 lbs"
    },
    {
      codigo: 253, nombre: 'CREATINA 400 G MUSCLETECH', precio: 19990,
      descripcion: 'Posee: 80 SERVICIOS', img: '../../assets/tarjetas/creatinamuscletech.png',
      tags : "creatina, musclletech"
    },
    {
      codigo: 254, nombre: 'CREATINA 300 G ULTIMATE NUTRITION', precio: 16990,
      descripcion: 'Posee: 60 SERVICIOS', img: '../../assets/tarjetas/creatinaultimatenutrition.png',
      tags : "creatina, ultimate nutrition"
    },
    {
      codigo: 255, nombre: 'CREATINA 1000 G UNIVERSAL', precio: 29990,
      descripcion: 'Posee: 200 SERVICIOS', img: '../../assets/tarjetas/creatinauniversal.png',
      tags : "creatina, universal"
    },
    {
      codigo: 256, nombre: 'LIPO X PERFORMANCE KIFFER LABS', precio: 32990,
      descripcion: 'Posee: 90 CÁPSULAS', img: '../../assets/tarjetas/lipoxkiffer.png',
      tags : "quemador, lipo x, kiffer"
    },
    {
      codigo: 257, nombre: 'LIPO 6 BLACK UC NUTREX', precio: 29990,
      descripcion: 'Posee: 60 CÁPSULAS', img: '../../assets/tarjetas/lipo6blacknutrex.png',
      tags : "quemador, lipo 6, lipo 6 black, nutrex"
    },
    {
      codigo: 258, nombre: 'SUPER HD CELLUCOR', precio: 27990,
      descripcion: 'Posee: 60 CÁPSULAS', img: '../../assets/tarjetas/superhdcellucor.png',
      tags : "quemador, super hd, cellucor"
    },
    {
      codigo: 259, nombre: 'MR HYDE NITRO X PROSUPPS', precio: 32990,
      descripcion: 'Posee: 30 SERVICIOS', img: '../../assets/tarjetas/mrhydenitrox.png',
      tags : "pre entrenamiento, mr hyde, prosupps"
    },
    {
      codigo: 260, nombre: 'C4 ORIGINAL CELLUCOR', precio: 24990,
      descripcion: 'Posee: 30 SERVICIOS', img: '../../assets/tarjetas/c4cellucor.png',
      tags : "pre entrenamiento, c4 original, cellucor"
    },
    {
      codigo: 261, nombre: 'STIMUL 8 FINAFLEX', precio: 28990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/stimul8finaflex.png',
      tags : "pre entrenamiento, stimul 8, finaflex"
    }
  ];

  productosActual = [   // Array para items en stock
    {
      codigo: 350, nombre: 'PROSTAR WHEY ULTIMATE NUTRITION 5 LBS', precio: 45990,
      descripcion: 'Posee: 80 SERVICIOS', img: '../../assets/tarjetas/prostar.png',
      tags : "proteina, whey, prostar, ultimate nutrition, 5 lbs"
    },
    {
      codigo: 351, nombre: 'NITROTECH WHEY GOLD MUSCLETECH 5 LBS', precio: 49990,
      descripcion: 'Posee: 76 SERVICIOS', img: '../../assets/tarjetas/nitrotech.png',
      tags : "proteina, whey, nitrotech, muscletech, 5 lbs"
    },
    {
      codigo: 352, nombre: 'GOLD STANDARD 100% WHEY OPTIMUM NUTRITION 5 LBS', precio: 49990,
      descripcion: 'Posee: 74 SERVICIOS', img: '../../assets/tarjetas/goldstandard.png',
      tags : "proteina, whey, gold standard, optimum nutrition, 5 lbs"
    },
    {
      codigo: 353, nombre: 'CREATINA 400 G MUSCLETECH', precio: 19990,
      descripcion: 'Posee: 80 SERVICIOS', img: '../../assets/tarjetas/creatinamuscletech.png',
      tags : "creatina, musclletech"
    },
    {
      codigo: 354, nombre: 'CREATINA 300 G ULTIMATE NUTRITION', precio: 16990,
      descripcion: 'Posee: 60 SERVICIOS', img: '../../assets/tarjetas/creatinaultimatenutrition.png',
      tags : "creatina, ultimate nutrition"
    },
    {
      codigo: 355, nombre: 'CREATINA 1000 G UNIVERSAL', precio: 29990,
      descripcion: 'Posee: 200 SERVICIOS', img: '../../assets/tarjetas/creatinauniversal.png',
      tags : "creatina, universal"
    },
    {
      codigo: 356, nombre: 'LIPO X PERFORMANCE KIFFER LABS', precio: 32990,
      descripcion: 'Posee: 90 CÁPSULAS', img: '../../assets/tarjetas/lipoxkiffer.png',
      tags : "quemador, lipo x, kiffer"
    },
    {
      codigo: 357, nombre: 'LIPO 6 BLACK UC NUTREX', precio: 29990,
      descripcion: 'Posee: 60 CÁPSULAS', img: '../../assets/tarjetas/lipo6blacknutrex.png',
      tags : "quemador, lipo 6, lipo 6 black, nutrex"
    },
    {
      codigo: 358, nombre: 'SUPER HD CELLUCOR', precio: 26990,
      descripcion: 'Posee: 60 CÁPSULAS', img: '../../assets/tarjetas/superhdcellucor.png',
      tags : "quemador, super hd, cellucor"
    },
    {
      codigo: 359, nombre: 'MR HYDE NITRO X PROSUPPS', precio: 32990,
      descripcion: 'Posee: 30 SERVICIOS', img: '../../assets/tarjetas/mrhydenitrox.png',
      tags : "pre entrenamiento, mr hyde, prosupps"
    },
    {
      codigo: 360, nombre: 'C4 ORIGINAL CELLUCOR', precio: 24990,
      descripcion: 'Posee: 30 SERVICIOS', img: '../../assets/tarjetas/c4cellucor.png',
      tags : "pre entrenamiento, c4 original, cellucor"
    },
    {
      codigo: 361, nombre: 'STIMUL 8 FINAFLEX', precio: 28990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/stimul8finaflex.png',
      tags : "pre entrenamiento, stimul 8, finaflex"
    }
  ];

  productosCarritoActual: any;

  constructor(){

  }
  ngOnInit(){
  }

  agregarProducto(i: any){
    if(this.productosCarrito.includes(this.productosActual[i])){
      console.log("Ya tiene el producto")
      for(let j = 0;j<this.productosCantidad.length;j++){
        if(this.productosActual[i].codigo == this.productosCantidad[j].codigo){
          this.productosCantidad[j].cant+=1;
        }
      }
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero));
      localStorage.setItem("subTotal",JSON.stringify(this.totalDinero*this.IVA))
      localStorage.setItem("subTotal",JSON.stringify(this.totalDinero*this.conIVA))
    }
    else{
      console.log("No tiene el producto");
      this.productosCarrito.push(this.productosActual[i]);
      this.productosCantidad.push({codigo: this.productosActual[i].codigo, cant: 1});
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero))
      localStorage.setItem("subTotal",JSON.stringify(this.totalDinero*this.IVA))
      localStorage.setItem("totalCompra",JSON.stringify(this.totalDinero*this.conIVA))
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
    localStorage.setItem("subTotal",JSON.stringify(this.totalDinero*this.IVA));
    localStorage.setItem("totalCompra",JSON.stringify(this.totalDinero*this.conIVA))
  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
        localStorage.setItem("subTotal",JSON.stringify(this.totalDinero*this.IVA))
        localStorage.setItem("totalCompra",JSON.stringify(this.totalDinero*this.conIVA))
        this.productosCarrito.splice(i,1);
        this.productosCantidad.splice(i+1,1);
      }
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
    localStorage.setItem("subTotal",JSON.stringify(this.totalDinero*this.IVA));
    localStorage.setItem("totalCompra",JSON.stringify(this.totalDinero*this.conIVA))
  }

  actualizarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCantidad[i+1].cant = this.cantidad.value;
        this.totalDinero+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
        localStorage.setItem("subTotal",JSON.stringify(this.totalDinero*this.IVA))
        localStorage.setItem("totalCompra",JSON.stringify(this.totalDinero*this.conIVA))
      }
    }
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  busquedaClave(){
    let pos = [];
    for(let i=0;i<this.productosActual.length;i++){
      if(this.productosActual[i].tags.search(this.clave.value) == -1){
        pos.push(this.productosActual[i].codigo);
      }
      else{
        console.log('Encontrado');
      }
    }
    for(let j=0;j<pos.length;j++){
      for(let i=0;i<this.productosActual.length;i++){
        if(pos[j]==this.productosActual[i].codigo){
          this.productosActual.splice(i,1);
        }
      }
    }

  }

  quitarBusqueda(){
    this.productosActual = [];
    for(let i=0; i<this.productosActual1.length;i++){
      this.productosActual.push({codigo: this.productosActual1[i].codigo,
        nombre: this.productosActual1[i].nombre,
        precio: this.productosActual1[i].precio,
        descripcion: this.productosActual1[i].descripcion,
        img: this.productosActual1[i].img,
        tags: this.productosActual1[i].tags
      });
    }
    this.productosActual = this.productosActual1;
  }

}
