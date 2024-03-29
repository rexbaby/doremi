import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { GenderName } from 'src/app/shared/enum/gender.enum';
import { StatusName } from 'src/app/shared/enum/status.enum';
import { AgentDialogComponent } from '../agent-dialog/agent-dialog.component';
import { AgentDTO, DeptService } from '../dept.service';
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
    region!: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private deptService: DeptService,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.region = params['region'];
            this.regionId = params['id']; // 沒有region id 代表是要查看轄下人員
            this.region ? this.getAgentListByRegion() : undefined;

            console.log(this.deptId)
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
        this.deptService.getAgentList(this.regionId).subscribe((res) => {
            this.tableData = res;
            this.oriData = res;
        })
    }

    getSubordinateAgents(): void {
        this.deptService.getAgentList(this.deptId).subscribe((res) => {
            this.tableData = res;
            this.oriData = res;
        })
    }

    checkSubordinate(agentCode: string): void {
        this.router.navigate([`organization/agent-list/${this.region}/subordinate/${agentCode}`])
    }

    add(): void {
        const dialogData: AgentDialog = {
            state: DIALOG_STATE.ADD,
            region: this.region,
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
            region: this.region,
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
