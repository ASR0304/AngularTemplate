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
    if (this.toggle) {
      this.renderer.addClass(body, 'body-pd');
      this.toggle = !this.toggle;
    } else {
      this.renderer.removeClass(body, 'body-pd');
      this.toggle = !this.toggle;
    }

  }

}
