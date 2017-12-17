import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-lawinfo',
  templateUrl: './lawinfo.component.html',
  styleUrls: ['./lawinfo.component.css']
})
export class LawinfoComponent implements OnInit {

  @Input() law: object;


  constructor() {
   }

  ngOnInit() {
  }

}
