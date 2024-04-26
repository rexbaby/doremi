import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableLayout } from 'src/app/shared/element-ui/table/table.model';
import { AgentDialogComponent } from '../agent-dialog/agent-dialog.component';
import { AgentDialog, DIALOG_STATE, OutworkerTableLayout } from '../organization.model';
import { AgentDTO, OrganizationService } from '../organization.service';

@Component({
    selector: 'app-outworker',
    templateUrl: './outworker.component.html',
    styleUrls: ['./outworker.component.scss']
    })
    export class OutworkerComponent implements OnInit {
    tableLayout: TableLayout[] = OutworkerTableLayout;
    tableData: AgentDTO[] = [];
    oriData: AgentDTO[] = [];

    constructor(
        public dialog: MatDialog,
        private organizationService: OrganizationService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getAgentList();
    }

    getAgentList(): void {
        this.organizationService.getAgentList().subscribe((res) => {
            this.tableData = res;
            this.oriData = res;
        })
    }

    add(): void {
        const dialogData: AgentDialog = {
            state: DIALOG_STATE.ADD,
            region: undefined,
            agent: undefined
        }
        const dialogRef = this.dialog.open(AgentDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((newItem: AgentDTO | undefined) => {
            console.log('The dialog was closed');
            if (newItem) {
                this.tableData = this.tableData.concat(newItem)  // 要改為關閉dialog時打api取得所有列表
            }
        });
    }

    edit(idx: number, item: AgentDTO): void {
        const dialogData: AgentDialog = {
            state: DIALOG_STATE.EDIT,
            region: item.region,
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

    checkSubordinate(agentDetail: AgentDTO): void {
        this.router.navigate([`organization/agent-list/${agentDetail.region}/subordinate/${agentDetail.agentCode}`])
    }

}
