import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

import { doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ledstate: any; 
  constructor(private db:Firestore) {
  }

  async apagar() {
    console.log("Click");
     try {
       // Obtener la referencia al documento de la base de datos
       this.ledstate = doc(this.db, 'led', 'Led'); // RUTA DE TABLA EN LA BD

       // Cambiar el estado del LED en la base de datos
       await setDoc(this.ledstate, { Ensendido: false }); // CAMBIA EL ATRIBUTO DE LA TABLA
      
       console.log('LED apagado exitosamente');
     } catch (error) {
       console.error('Error al apagar el LED:', error);
     }
  }
  async encendido() {
    console.log("Click");
     try {
       // Obtener la referencia al documento de la base de datos
       this.ledstate = doc(this.db, 'led', 'Led'); // RUTA DE TABLA EN LA BD

       // Cambiar el estado del LED en la base de datos
       await setDoc(this.ledstate, { Ensendido: true }); // CAMBIA EL ATRIBUTO DE LA TABLA
      
       console.log('LED Encendido exitosamente');
     } catch (error) {
       console.error('Error al apagar el LED:', error);
     }
  }



}
