import { Component, OnInit } from '@angular/core';
import { IpService } from '.././ip.service';


@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IpComponent implements OnInit {
  ip: string;


  constructor(private ipService: IpService) {


  }

  ngOnInit() {
    this.ipService.getIp().then(ip => this.ip = ip)
    .catch(err => console.log(err));

  }

}
