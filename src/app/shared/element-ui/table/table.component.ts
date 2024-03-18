import { AfterViewInit, Component, ContentChild, Input, OnChanges, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableLayout } from './table.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnChanges, AfterViewInit {
    @ContentChild('action') action!: TemplateRef<any>;
    @ViewChild('paginator') paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @Input() tableLayout: TableLayout[] = [];
    @Input() data: T[] = [];

    dataSource!: MatTableDataSource<T>;
    displayedColumns: string[] = [];

    pageSizeCtl = new FormControl(5, [Validators.min(0)]);

    pageEvent!: PageEvent;

    ngOnChanges(): void {
        this.displayedColumns = this.tableLayout.map((item) => item.colKey);

        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.pageSizeCtl.valueChanges.subscribe((data) => {
            this.paginator._changePageSize(data!);
        })
    }

    ngAfterViewInit(): void {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    }

    handlePageEvent(e: PageEvent) {
        this.pageEvent = e;
        console.log(e)
    }
}
