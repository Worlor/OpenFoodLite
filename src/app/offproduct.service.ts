import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './category.interface';
import { map } from 'rxjs/operators/map';
@Injectable()
export class OffproductService {

  private world_url = 'https://world.openfoodfacts.org';

  constructor(
    private http: HttpClient) { }

    public getCategories(): Observable<Category[]> {
      return this.http.get(this.world_url + '/categories.json')
        .pipe<Category[]>(
          map((response) => response.tags)
        );
    }

}
