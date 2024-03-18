import { TableLayout } from "src/app/shared/element-ui/table/table.model";
import { RegionDTO } from "./dept.service";

export const OrgTableLayout: TableLayout[] = [
    { label: '區域', colKey: 'region', cusCssClass: 'w-20' },
    { label: '創建時間', colKey: 'createDate', cusCssClass: 'w-30' },
    { label: '動作', colKey: 'action', cusCssClass: 'w-50' },
];

export interface RegionTableVM extends RegionDTO {
    action: string;
}

export const ELEMENT_DATA: RegionTableVM[] = [
    { id: 1, region: '北部區域', createDate: new Date(), action: '' },
    { id: 2, region: '中部區域', createDate: new Date(), action: '' },
    { id: 3, region: '南部區域', createDate: new Date(), action: '' },
    { id: 4, region: '東部區域', createDate: new Date(), action: '' },
];

export interface RegionDialog {
    state: string;
    region: RegionDTO | undefined;
}

export enum DIALOG_STATE {
    EDIT = 'edit',
    ADD = 'add'
}

export const DialogStateName: {
    [key: string]: string
} = {
    [DIALOG_STATE.EDIT]: '編輯',
    [DIALOG_STATE.ADD]: '新增'
}