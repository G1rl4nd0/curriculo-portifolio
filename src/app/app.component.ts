import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const IDIOMA_PADRAO = "pt-br"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-projeto';

  constructor(private translate: TranslateService) {
    let idioma = localStorage.getItem('idioma');
    if (!idioma) {
      idioma = IDIOMA_PADRAO;
    }
    this.translate.setDefaultLang(IDIOMA_PADRAO);
    this.translate.use(idioma);
    
  }

  

}
