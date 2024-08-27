import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { QuestionsComponent } from "./questions/questions.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, QuestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  data = [1, 2, 3, 4, 5];
}
