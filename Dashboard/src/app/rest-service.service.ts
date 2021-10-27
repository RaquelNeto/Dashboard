import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {
  getSaleDetails(idTemp: any) {
    return this.http.get<any>(endpoint + 'sales/' + idTemp);
  }
  getSupplierDetails(idTemp: any) {
    return this.http.get<any>(endpoint + 'supplier/' + idTemp);
  }

  getSalesInfo() {
    return this.http.get(endpoint + 'sales');
  }
  constructor(private http: HttpClient) {}

  getCompanyInfo() {
    return this.http.get(endpoint + 'information');
  }

  getClientsInfo() {
    return this.http.get(endpoint + 'clients');
  }

  getPurchasesInfo() {
    return this.http.get(endpoint + 'purchases');
  }

  getSuppliersInfo() {
    return this.http.get(endpoint + 'suppliers');
  }

  getProductsInfo() {
    return this.http.get(endpoint + 'products');
  }

  getClientDetails(id: String): Observable<any> {
    return this.http.get<any>(endpoint + 'client/' + id);
  }

  getProductDetails(id: String): Observable<any> {
    return this.http.get<any>(endpoint + 'product/' + id);
  }
}
