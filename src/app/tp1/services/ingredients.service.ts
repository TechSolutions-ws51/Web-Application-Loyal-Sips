import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Ingredient} from "../model/ingredient";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService extends BaseService<Ingredient> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/ingredientes';
  }
}
