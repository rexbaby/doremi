import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { StatusName } from 'src/app/shared/enum/status.enum';
import { DeptDialogComponent } from '../dept-dialog/dept-dialog.component';
import { DeptDialog, DeptTableLayout, DIALOG_STATE } from '../organization.model';
import { DeptDTO, OrganizationService } from '../organization.service';

@Component({
    selector: 'app-region-dept',
    templateUrl: './region-dept.component.html',
    styleUrls: ['./region-dept.component.scss']
})
export class RegionDeptComponent implements OnInit {
    regionName!: string;
    regionId!: number;
    tableLayout: TableLayout[] = DeptTableLayout;
    tableData: DeptDTO[] = [];
    oriData: DeptDTO[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private organizationService: OrganizationService,
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.regionName = params['region'];
            this.regionId = params['id'];
            this.regionId ? this.getDeptList() : undefined;
        })
    }

    getDeptList(): void {
        this.organizationService.getDeptList(this.regionId).subscribe((res) => {
            this.tableData = res;
            this.oriData = res;
        })
    }

    gotoAgentList(deptId: number): void {
        this.router.navigate([`/organization/depts/${this.regionName}/${deptId}`]);
    }

    add(): void {
        const dialogData: DeptDialog = {
            state: DIALOG_STATE.ADD,
            region: this.regionName,
            dept: undefined
        }
        const dialogRef = this.dialog.open(DeptDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((newItem: DeptDTO | undefined) => {
            if (newItem) {
                this.tableData = this.tableData.concat(newItem)
            }
        });
    }

    edit(idx: number, item: DeptDTO): void {
        const dialogData: DeptDialog = {
            state: DIALOG_STATE.EDIT,
            region: this.regionName,
            dept: item
        }
        const dialogRef = this.dialog.open(DeptDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((newItem: DeptDTO | undefined) => {
            if (newItem) {
                this.oriData.splice(idx, 1, newItem);
                this.tableData = this.oriData;
                console.log(this.tableData)
            }
        });
    }

    get StatusName(): typeof StatusName {
        return StatusName
    }
}
