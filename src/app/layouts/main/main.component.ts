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
  showParent1: boolean = true;
  showParent2: boolean = false;
  showParent3: boolean = false;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.router.navigate(['']); // 預設首頁顯示通訊處畫面
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleParent1() {
    this.showParent1 = !this.showParent1;
  }

  toggleParent2() {
    this.showParent2 = !this.showParent2;
  }

  toggleParent3() {
    this.showParent3 = !this.showParent3;
  }

  goToOrganization(): void {
    console.log(`%c 回到首頁`, 'background-color: rgba(178, 135, 200, 0.8); color: black; font-size: 24px')
    this.router.navigate(['/organization']);
  }

}
