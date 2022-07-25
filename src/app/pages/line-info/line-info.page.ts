import { Component, OnInit } from '@angular/core';
import { HttpBusService } from 'src/app/services/http-bus.service';

@Component({
  selector: 'app-line-info',
  templateUrl: './line-info.page.html',
  styleUrls: ['./line-info.page.scss'],
})
export class LineInfoPage implements OnInit {

  constructor(
    private httpBus: HttpBusService
  ) { }

  ngOnInit() {
  }

  makeRequest(){
    this.httpBus.getBusLine('32').subscribe((data)=>{
      console.log(data);
    });
  }

}
