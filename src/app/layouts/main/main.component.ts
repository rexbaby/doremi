import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });
  
  isSidebarOpen: boolean = false;


  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


}
