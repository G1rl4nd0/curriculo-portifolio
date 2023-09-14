import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-projeto';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-br');
  
  }

  switchLanguage(Language: string) {
    this.translate.use(Language);
  
  }


}
