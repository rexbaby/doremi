import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { OrganizationService, RegionDTO } from '../organization.service';
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
        private organizationService: OrganizationService,
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

    gotoCheckRegion(region: string, regionId: number): void {
        this.router.navigate([`/organization/depts/${region}/${regionId}`]);
    }

    gotoAgentList(region: string, regionId: number): void {
        this.router.navigate([`/organization/agent-list/${region}/${regionId}`]);
    }

    private getRegionList(): void {
        this.organizationService.getRegionList().subscribe((res) => {
            this.tableData = res;
            this.oriData = this.tableData;
        })
    }
}
