import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css']
})
export class MenuResponsivoComponent implements OnInit {


  constructor(private translate: TranslateService) {
   
  }

  ngOnInit(): void {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('idioma', language)
  }


}
