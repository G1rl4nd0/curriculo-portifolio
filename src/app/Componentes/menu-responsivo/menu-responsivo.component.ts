import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css']
})
export class MenuResponsivoComponent implements OnInit {


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-br');
  }

  ngOnInit(): void {
  }

  switchLanguage(Language: string) {
    this.translate.use(Language);
  
  }


}
