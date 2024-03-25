import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DeptService {
    mock_region_data: RegionDTO[] = [
        { id: 1, region: '北部區域', createDate: new Date() },
        { id: 2, region: '中部區域', createDate: new Date() },
        { id: 3, region: '南部區域', createDate: new Date() },
        { id: 4, region: '東部區域', createDate: new Date() },
    ];

    mock_Agent_List_By_Region: AgentDTO[] = [
        {
            region: '北部地區',
            agentCode: 'A001',
            name: 'aaa',
            deptCode: '10010',
            gender: 'male',
            phone: '09111222333',
            title: '業務員',
            boardingDate: new Date(),
            status: '有效',
        },
        {
            region: '北部地區',
            agentCode: 'B001',
            name: 'bbb',
            deptCode: '99999',
            gender: 'female',
            phone: '09111222333',
            title: '區經理',
            boardingDate: new Date(),
            status: '有效',
        },
        {
            region: '北部地區',
            agentCode: 'C001',
            name: 'ccc',
            deptCode: '10010',
            gender: 'male',
            phone: '09111222333',
            title: '區經理',
            boardingDate: new Date(),
            status: '有效',
        },
        {
            region: '北部地區',
            agentCode: 'D001',
            name: 'ddd',
            deptCode: '10010',
            gender: 'male',
            phone: '09111222333',
            title: '業務員',
            boardingDate: new Date(),
            status: '有效',
        },
    ]

    constructor(
        // private http: HttpClient
    ) { }

    /**
     * 取得區域清單
     * @returns 
     */
    getRegionList(): Observable<RegionDTO[]> {
        return of(this.mock_region_data);
    }

    /**
     * 新增區域
     * @param regionName 
     * @returns 
     */
    addRegion(regionName: string): Observable<RegionDTO> {
        const fakeResult: RegionDTO = { id: 10, region: regionName, createDate: new Date() }
        return of(fakeResult);
    }

    /**
     * 編輯區域
     * @param id 
     * @param regionName 
     * @returns 
     */
    modifyRegion(id: number, regionName: string): Observable<RegionDTO> {
        const fakeResult: RegionDTO = { id: id, region: regionName, createDate: new Date() }
        return of(fakeResult);
    }

    getAgentList(deptId: number): Observable<AgentDTO[]> {
        return of(this.mock_Agent_List_By_Region);
    }
}

export interface RegionDTO {
    id: number;
    region: string;
    createDate: Date;
}

export interface AgentDTO {
    region: string; // 用在新增/編輯人員DIALOG顯示
    agentCode: string;
    name: string;
    deptCode: string;
    gender: string;
    phone: string;
    title: string;
    boardingDate: Date;
    status: string;
}