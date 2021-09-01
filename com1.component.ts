import { Component, OnInit } from '@angular/core';
import { DataFile } from '../data-file';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.scss']
})
export class Com1Component implements OnInit {
  data!: DataFile[];
  searchValue = '';
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.service.gatData().subscribe(res => {
      this.data = res;
      console.log('this.Data: ', this.data);
    }

    );
  }
}
