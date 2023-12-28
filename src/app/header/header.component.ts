import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  toggle = true;
  constructor(private renderer: Renderer2) { }
  toggleBodyClass() {
    const body = document.body;
    const header = document.getElementById("header");
    const sideNav = document.getElementById("side-nav-bar");
    const icon = document.getElementById("toggle-icon")

    if (this.toggle) {
      this.renderer.addClass(body, 'body-pd');
      this.renderer.addClass(header, 'body-pd');
      this.renderer.addClass(sideNav, 'open');
      this.renderer.addClass(icon, 'bi-x');
      this.renderer.removeClass(icon, 'bi-list');
      this.toggle = !this.toggle;
    } else {
      this.renderer.removeClass(body, 'body-pd');
      this.renderer.removeClass(header, 'body-pd');
      this.renderer.removeClass(sideNav, 'open');
      this.renderer.removeClass(icon, 'bi-x');
      this.renderer.addClass(icon, 'bi-list');
      this.toggle = !this.toggle;
    }

  }

}
