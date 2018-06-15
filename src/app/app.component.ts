import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;
  title: string = 'Barcode component Obajá';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl('/barcode');
  }

}
