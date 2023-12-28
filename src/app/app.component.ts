import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StaffComponent } from './staff/staff.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SidenavbarComponent, StaffDetailsComponent, StaffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HtmlTemplate';
}
