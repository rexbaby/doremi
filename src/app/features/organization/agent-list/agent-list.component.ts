import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { AgentDialogComponent } from '../agent-dialog/agent-dialog.component';
import { AgentDTO, DeptService } from '../dept.service';
import { AgentDialog, AngentsTableLayout, DIALOG_STATE } from '../organization.model';

@Component({
    selector: 'app-agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
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
            // this.deptId = +params['id'];
            this.deptId = 1; // 先給一個假id
            this.deptId ? this.getAgentList() : undefined;
        })
    }

    getAgentList(): void {
        this.deptService.getAgentList(this.deptId).subscribe((res) => {
            this.tableData = res;
            this.oriData = res;
        })
    }

    checkSubordinate(agentCode: string): void {
        this.router.navigate([`organization/agent-list/${this.deptId}/subordinate/${agentCode}`])
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
}
