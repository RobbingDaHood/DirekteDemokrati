import { Component } from '@angular/core';

import { 
  LawinfoComponent 
} from './lawinfo/lawinfo.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TESTING';  
  
  data = {
    "odata.metadata":"http://oda.ft.dk/api/%24metadata#Sag/@Element","id":66,"typeid":3,"kategoriid":13,"statusid":11,"titel":"Forslag til lov om till\u00e6gsbevilling for finans\u00e5ret 2013.","titelkort":"Om till\u00e6gsbevillingsloven for finans\u00e5ret 2013.","offentlighedskode":"O","nummer":"L 105","nummerprefix":"L","nummernumerisk":"105","nummerpostfix":"","resume":"Loven formaliserer de bevillings\u00e6ndringer, som i finans\u00e5rets l\u00f8b er foretaget p\u00e5 forventet efterbevilling. Forslaget til till\u00e6gsbevilling har dermed en bevillingsretlig og ikke en statsfinansiel funktion.","afstemningskonklusion":"Vedtaget\n\n106 stemmer for forslaget (V, S, DF, RV, SF, EL, LA, KF, UFG)\n\n0 stemmer imod forslaget\n\n0 stemmer hverken for eller imod forslaget\n\n","periodeid":32,"afg\u00f8relsesresultatkode":null,"baggrundsmateriale":null,"opdateringsdato":"2017-12-05T19:44:26.163","statsbudgetsag":true,"begrundelse":null,"paragrafnummer":null,"paragraf":null,"afg\u00f8relsesdato":null,"afg\u00f8relse":null,"r\u00e5dsm\u00f8dedato":null,"lovnummer":"1","lovnummerdato":"2014-03-18T00:00:00","retsinformationsurl":null,"fremsatundersagid":null,"deltundersagid":null
  }
}
