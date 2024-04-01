import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { GenderName } from 'src/app/shared/enum/gender.enum';
import { StatusName } from 'src/app/shared/enum/status.enum';
import { AgentDialogComponent } from '../agent-dialog/agent-dialog.component';
import { AgentDTO, OrganizationService } from '../organization.service';
import { AgentDialog, AngentsTableLayout, DIALOG_STATE } from '../organization.model';

@Component({
    selector: 'app-agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
    regionId!: number;
    deptId!: number;
    tableLayout: TableLayout[] = AngentsTableLayout;
    tableData: AgentDTO[] = [];
    oriData: AgentDTO[] = [];
    workUnit!: string; // 工作單位 - 地區、通訊處

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private organizationService: OrganizationService,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.workUnit = params['work-unit'];
            this.regionId = params['id']; // 沒有region id 代表是要查看轄下人員
            this.workUnit ? this.getAgentListByRegion() : undefined;

            if (params['id-sub']) {
                this.tableData = [];
                this.oriData = [];
                this.deptId = params['id-sub'];
                console.log('轄下ID',this.deptId)
                this.getSubordinateAgents();
            }
        })
    }

    getAgentListByRegion(): void {
        this.organizationService.getAgentList(this.regionId, 0).subscribe((res) => {
            this.tableData = res;
            this.oriData = res;
        })
    }

    getSubordinateAgents(): void {
        this.organizationService.getAgentList(0,this.deptId).subscribe((res) => {
            this.tableData = res;
            this.oriData = res;
        })
    }

    checkSubordinate(agentCode: string): void {
        this.router.navigate([`organization/agent-list/${this.workUnit}/subordinate/${agentCode}`])
    }

    add(): void {
        const dialogData: AgentDialog = {
            state: DIALOG_STATE.ADD,
            region: this.workUnit,
            agent: undefined
        }
        const dialogRef = this.dialog.open(AgentDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((newItem: AgentDTO | undefined) => {
            console.log('The dialog was closed');
            if (newItem) {
                this.tableData = this.tableData.concat(newItem)
            }
        });
    }

    edit(idx: number, item: AgentDTO): void {
        const dialogData: AgentDialog = {
            state: DIALOG_STATE.EDIT,
            region: this.workUnit,
            agent: item
        }
        const dialogRef = this.dialog.open(AgentDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((newItem: AgentDTO | undefined) => {
            console.log('The dialog was closed');
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
