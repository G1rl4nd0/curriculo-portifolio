import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { MainComponent } from './Componentes/main/main.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SobreMimComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
