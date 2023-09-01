import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { MainComponent } from './Componentes/main/main.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuResponsivoComponent } from './componentes/menu-responsivo/menu-responsivo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SobreMimComponent,
    ProjetosComponent,
    MenuResponsivoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
