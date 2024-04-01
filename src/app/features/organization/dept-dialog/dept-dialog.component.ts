import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { ViewOptionDTO } from 'src/app/shared/model/view-option.model';
import { DeptDialog, DialogStateName, DIALOG_STATE } from '../organization.model';

@Component({
  selector: 'app-dept-dialog',
  templateUrl: './dept-dialog.component.html',
  styleUrls: ['./dept-dialog.component.scss']
})
export class DeptDialogComponent implements OnInit {
  deptForm: FormGroup = this._fb.group({
    id: [''],
    region: [''],
    deptName: ['', Validators.required],
    deptCode: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    status: ['', Validators.required],
  });
  deptOptions: string[] = ['10010', '10011', '10012', '10013', '999999'];
  genderOptions: ViewOptionDTO[] = [{ code: 'MALE', name: '男' }, { code: 'FEMALE', name: '女' }];
  statusOptions: ViewOptionDTO[] = [{ code: 'FAIL', name: '失效' }, { code: 'AVAILABLE', name: '有效' }];


  constructor(
    private _fb: FormBuilder,
    private dialogRef: MatDialogRef<DeptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public deptData: DeptDialog,
  ) {

  }

  ngOnInit() {
    if (this.deptData.state === DIALOG_STATE.EDIT && this.deptData.dept) {
      this.deptForm.patchValue(this.deptData.dept);
    }
    this.deptForm.get('region')?.patchValue(this.deptData.region);
  }

  save(): void {
    console.log(this.deptForm.value)
    if (this.deptForm.valid) {
      // 打新增、編輯API
      this.cancel();
    }
  }

  cancel(): void {
    this.dialogRef.close(this.deptForm.value);
  }

  get dialogStateName(): typeof DialogStateName {
    return DialogStateName;
  }
}
