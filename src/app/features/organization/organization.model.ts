import { TableLayout } from "src/app/shared/element-ui/table/table.model";
import { AgentDTO, DeptDTO, RegionDTO } from "./organization.service";

export const OrgTableLayout: TableLayout[] = [
    { label: '區域', colKey: 'region', cusCssClass: 'w-20' },
    { label: '創建時間', colKey: 'createDate', cusCssClass: 'w-30' },
    { label: '動作', colKey: 'action', cusCssClass: 'w-50' },
];

export const AngentsTableLayout: TableLayout[] = [
    { label: '姓名', colKey: 'name', cusCssClass: 'w-8' },
    { label: '代號', colKey: 'agentCode', cusCssClass: 'w-8' },
    { label: '處代號', colKey: 'deptCode', cusCssClass: 'w-8' },
    { label: '性別', colKey: 'gender', cusCssClass: 'w-8' },
    { label: '電話', colKey: 'phone', cusCssClass: 'w-10' },
    { label: '職稱', colKey: 'title', cusCssClass: 'w-8' },
    { label: '入職日期', colKey: 'boardingDate', cusCssClass: 'w-10' },
    { label: '狀態', colKey: 'status', cusCssClass: 'w-7' },
    { label: '動作', colKey: 'action', cusCssClass: 'w-15' },
];

export const DeptTableLayout: TableLayout[] = [
    { label: '處名稱', colKey: 'deptName', cusCssClass: 'w-10' },
    { label: '處代號', colKey: 'deptCode', cusCssClass: 'w-10' },
    { label: '地址', colKey: 'address', cusCssClass: 'w-25' },
    { label: '電話', colKey: 'phone', cusCssClass: 'w-15' },
    { label: '狀態', colKey: 'status', cusCssClass: 'w-8' },
    { label: '創建時間', colKey: 'createDate', cusCssClass: 'w-12' },
    { label: '動作', colKey: 'action', cusCssClass: 'w-20' },
];

export interface RegionDialog {
    state: string;
    region: RegionDTO | undefined;
}

export interface AgentDialog {
    state: string;
    region: string;
    agent: AgentDTO | undefined;
} 

export interface DeptDialog {
    state: string;
    region: string;
    dept: DeptDTO | undefined;
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