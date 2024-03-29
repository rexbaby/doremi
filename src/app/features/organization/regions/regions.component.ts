import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { DeptService, RegionDTO } from '../dept.service';
import { DIALOG_STATE, OrgTableLayout, RegionDialog } from '../organization.model';
import { RegionDialogComponent } from '../region-dialog/region-dialog.component';

@Component({
    selector: 'app-regions',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
    tableLayout: TableLayout[] = OrgTableLayout;
    tableData: RegionDTO[] = [];
    oriData: RegionDTO[] = [];

    constructor(
        public dialog: MatDialog,
        private deptService: DeptService,
        private router: Router
    ) {
        this.getRegionList();
    }

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

        dialogRef.afterClosed().subscribe((newItem: RegionDTO | undefined) => {
            console.log('The dialog was closed');
            if (newItem) {
                this.tableData = this.tableData.concat(newItem)
            }
        });
    }

    edit(idx: number, item: RegionDTO): void {
        const dialogData: RegionDialog = {
            state: DIALOG_STATE.EDIT,
            region: item
        }
        const dialogRef = this.dialog.open(RegionDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((newItem: RegionDTO | undefined) => {
            console.log('The dialog was closed');
            if (newItem) {
                this.oriData.splice(idx, 1, newItem);
                this.tableData = this.oriData;
                console.log(this.tableData)
            }
        });
    }

    gotoAgentList(region: string, id: number): void {
        this.router.navigate([`/organization/agent-list/${region}/${id}`]);
    }

    private getRegionList(): void {
        this.deptService.getRegionList().subscribe((res) => {
            this.tableData = res;
            this.oriData = this.tableData;
        })
    }
}
