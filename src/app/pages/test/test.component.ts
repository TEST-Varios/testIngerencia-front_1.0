import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  respuesta:any;

  constructor(
    public testService:TestService
  ) { }

  async ngOnInit() {
    this.respuesta = await this.testService.test().toPromise();
    console.log(this.respuesta);
  }

}
