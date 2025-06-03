import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { asset, assetClass } from '../../core/common/interface/asset.interface';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private dataUrl = 'assets/asset-details.json';

  constructor(private http: HttpClient) { }

 getAssetDetails(): Observable<asset[]> {
    return this.http.get<asset[]>(this.dataUrl).pipe(
      map((data) =>
        data.map((item) => ({
          ...item,
          assetClass: item.assetClass as assetClass
        }))
      )
    );
  }

}
