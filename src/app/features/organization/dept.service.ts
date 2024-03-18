import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

constructor(
  // private http: HttpClient
) { }

  /**
   * 新增區域
   * @param regionName 
   * @returns 
   */
  addDept(regionName: string): Observable<RegionDTO> {
    const fakeResult: RegionDTO = { id: 10, region: regionName, createDate: new Date()}
    return of(fakeResult);
  }


  modifyDept(id: number, regionName: string): Observable<RegionDTO> {
    const fakeResult: RegionDTO = { id: id, region: regionName, createDate: new Date()}
    return of(fakeResult);
  }
}

export interface RegionDTO {
  id: number;
  region: string;
  createDate: Date;
}