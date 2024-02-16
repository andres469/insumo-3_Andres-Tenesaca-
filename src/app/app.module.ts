import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment'; // Importa el entorno
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => 
    initializeApp({"projectId":"ngbytes-fireauth-48eec","appId":"1:173860413803:web:e82532a103eb86481f6c2e","storageBucket":"ngbytes-fireauth-48eec.appspot.com","apiKey":"AIzaSyD5WCGQacrFnlA0cQoQisz3HliRCgCSeaI","authDomain":"ngbytes-fireauth-48eec.firebaseapp.com","messagingSenderId":"173860413803"}))],
  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
