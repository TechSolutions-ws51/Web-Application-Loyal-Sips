import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Drink} from "../model/drink";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DrinksService extends BaseService<Drink>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/drinks';
  }
}
