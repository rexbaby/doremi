import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { RegionDTO } from './dept.service';
import { DIALOG_STATE, ELEMENT_DATA, OrgTableLayout, RegionDialog, RegionTableVM } from './organization.model';
import { RegionDialogComponent } from './region-dialog/region-dialog.component';

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
    tableLayout: TableLayout[] = OrgTableLayout;
    tableData: RegionTableVM[] = ELEMENT_DATA;
    oriData: RegionTableVM[] = ELEMENT_DATA;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {
    }

    add(): void {
        const dialogData: RegionDialog = {
            state: DIALOG_STATE.ADD,
            region: undefined
        }
        const dialogRef = this.dialog.open(RegionDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((res: RegionDTO | undefined) => {
            console.log('The dialog was closed');
            if (res) {
                const newItem: RegionTableVM = {
                    ...res,
                    action: ''
                }
                this.tableData = this.tableData.concat(newItem)
            }
        });
    }

    edit(idx: number, item: RegionTableVM): void {
        const dialogData: RegionDialog = {
            state: DIALOG_STATE.EDIT,
            region: item
        }
        const dialogRef = this.dialog.open(RegionDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((res: RegionDTO | undefined) => {
            console.log('The dialog was closed');
            if (res) {
                const newItem: RegionTableVM = {
                    ...res,
                    action: ''
                }
                this.oriData.splice(idx, 1, newItem);
                this.tableData = this.oriData;
                console.log(this.tableData)
            }
        });
    }
}
