import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  goToOrganization(): void {
    console.log(`%c 回到首頁`, 'background-color: rgba(178, 135, 200, 0.8); color: black; font-size: 24px')
    this.router.navigate(['/organization']);
  }

}
