import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrganizationService, RegionDTO } from '../organization.service';
import { DialogStateName, DIALOG_STATE, RegionDialog } from '../organization.model';

@Component({
    selector: 'app-region-dialog',
    templateUrl: './region-dialog.component.html',
    styleUrls: ['./region-dialog.component.scss']
})
export class RegionDialogComponent implements OnInit {
    regionCtl = new FormControl('', Validators.required);
    id?: number;

    constructor(
        private organizationService: OrganizationService,
        private dialogRef: MatDialogRef<RegionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public regionData: RegionDialog,
    ) { }

    ngOnInit(): void {
        this.regionData.state === DIALOG_STATE.EDIT ? this.setInitValue() : null;
    }


    close(data: RegionDTO): void {
        // this.dialogRef.close(isRefresh: boolean); // 讓外面知道要不要重打取得清單列表api
        this.dialogRef.close(data)
    }

    save(): void {
        if (!this.checkAllFormValid()) {
            // this.showErrorMessage();
            return;
        }

        const doAction = this.regionData.region?.id ?
            this.organizationService.modifyRegion(this.regionData.region!.id, this.regionCtl.value!)
            : this.organizationService.addRegion(this.regionCtl.value!);

        doAction.subscribe((res) => {
            this.close(res);
            // this.isSaving = false;
        });
    }

    private checkAllFormValid(): boolean {
        return this.regionCtl.valid;
    }

    private setInitValue(): void {
        this.id = this.regionData.region?.id;
        this.regionCtl.patchValue(this.regionData.region!.region);
    }

    // showErrorMessage(): void {
    //     const errorMsg = `請確認 ${_.join(_.compact(errorComponents), '、')} 顯示的錯誤訊息`;

    //     this.dialogService.openMessageDialog(errorMsg);
    // }

    get dialogStateName(): typeof DialogStateName {
        return DialogStateName;
    }
}
