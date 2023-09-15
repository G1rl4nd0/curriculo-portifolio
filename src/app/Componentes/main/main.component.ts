import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-br');
  
  }

  ngOnInit(): void {
    console.log(this.translate.instant('PORTIFOLIO.APRESENTACAO.TITULO'))
  }

  switchLanguage(Language: string) {
    this.translate.use(Language);
    // console.log(this.translate.instant('PORTIFOLIO.APRESENTACAO.TITULO'))
  }

}
