import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.setActiveMenus();
  }

  private setActiveMenus(): void {
    // const menus = document.querySelectorAll(
    //   'nav#sidebarMenu li.nav-item a.nav-link'
    // );
    // menus.forEach((menu) => {
    //   menu.addEventListener('click', () => {
    //     const page = window.location.pathname.slice(1);
    //     const span = menu.querySelector(`span#${page}`);
    //     console.log(span);
    //     if (span) {
    //       menu.classList.add('active');
    //     } else {
    //       menu.classList.remove('active');
    //     }
    //   });
    // });
  }

  logout(): void {
    this.authService.clearCache();
    this.router.navigateByUrl('/login');
  }
}
