import { Component } from '@angular/core';
import { OffproductService } from './offproduct.service';
import { Category } from './category.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = this.offproduct.getCategories();

  constructor(private offproduct: OffproductService) {}

}
