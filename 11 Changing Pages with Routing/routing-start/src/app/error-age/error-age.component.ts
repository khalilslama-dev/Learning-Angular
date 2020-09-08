import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error-age',
  templateUrl: './error-age.component.html',
  styleUrls: ['./error-age.component.css']
})
export class ErrorAgeComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}
