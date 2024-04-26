import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { ViewOptionDTO } from 'src/app/shared/model/view-option.model';
import { AgentDialog, DialogStateName, DIALOG_STATE } from '../organization.model';

@Component({
    selector: 'app-agent-dialog',
    templateUrl: './agent-dialog.component.html',
    styleUrls: ['./agent-dialog.component.scss']
})
export class AgentDialogComponent implements OnInit {
    // 職稱不可編輯，新增預設職稱皆為業務員
    // 編輯可改 姓名、性別、處代號(deptCode)、狀態、電話
    agentForm: FormGroup = this._fb.group({
        region: ['', Validators.required],
        deptCode: ['', Validators.required],
        name: ['', Validators.required],
        agentCode: [''],
        gender: ['', Validators.required],
        phone: ['', Validators.required],
        boardingDate: ['', Validators.required],
        status: ['', Validators.required],
        title: ['', Validators.required],
    });
    regionOptions: string[] = ['北部區域', '南部區域', '中部區域', '東部區域']; // 打api
    deptOptions: string[] = ['10010', '10011', '10012', '10013', '999999']; // 打api
    genderOptions: ViewOptionDTO[] = [{code: 'MALE', name: '男'}, {code: 'FEMALE', name: '女'}];
    statusOptions: ViewOptionDTO[] = [{code: 'FAIL', name: '失效'}, {code: 'AVAILABLE', name: '有效'}];


    constructor(
        private _fb: FormBuilder,
        private dialogRef: MatDialogRef<AgentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public agentData: AgentDialog,
    ) { 
        
    }

    ngOnInit() {
        if (this.agentData.state === DIALOG_STATE.EDIT && this.agentData.agent) {
            this.agentForm.patchValue(this.agentData.agent);
            const date = moment(this.agentForm.get('boardingDate')?.value).format('YYYY-MM-DD'); // 調整在Input顯示的值
            this.agentForm.get('boardingDate')?.patchValue(date);
        } else if (this.agentData.state === DIALOG_STATE.ADD && !this.agentData.region) { // 新增外勤人員可編輯區域&通訊處
            this.agentForm.get('title')?.patchValue('業務員')
        } else {
            this.agentForm.get('region')?.patchValue(this.agentData.region);
            this.agentForm.get('title')?.patchValue('業務員')
        }
    }

    save(): void {
        console.log(this.agentForm.value)
        if (this.agentForm.valid) {
            this.cancel()
        }
    }

    cancel(): void {
        this.dialogRef.close(this.agentForm.value);
    }

    get dialogStateName(): typeof DialogStateName {
        return DialogStateName;
    }
}
