import { MatPaginatorIntl } from "@angular/material/paginator";

export const ASC = 'asc';
export const DESC = 'desc';
export const SORT = 'sort';

export function CustomPaginator(): MatPaginatorIntl {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
    customPaginatorIntl.previousPageLabel = '上一頁';
    customPaginatorIntl.nextPageLabel = '下一頁';
    customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
        if (length === 0 || pageSize === 0) {
            return `第 0 筆、共 ${length} 筆`;
        }
    
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    
        return `${startIndex + 1} - ${endIndex}（共 ${length} 筆）`;
    };
    return customPaginatorIntl;
} 