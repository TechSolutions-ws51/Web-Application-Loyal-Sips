import {Component, OnInit} from '@angular/core';
import {BarService} from "../../../tp1/services/bar.service";

@Component({
  selector: 'app-bares',
  templateUrl: './bares.component.html',
  styleUrls: ['./bares.component.css']
})
export class BaresComponent implements OnInit {
  bars: any;

  constructor(private barService: BarService) {  }

  ngOnInit() {
    this.barService.getBars().subscribe(data=>{
      this.bars=data.bars;
    });
  }



}
