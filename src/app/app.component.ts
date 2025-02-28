import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <header>
  <main>
    <img src = "/assets/logo.svg" alt = "home logo">

</main>
</header>
<section class="content">
<router-outlet></router-outlet>
</section>
  
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent,RouterModule],
})
export class AppComponent {

  title = 'homes';
}
