import { NgModule } from '@angular/core';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomPaginator } from '../config/pagination.constants';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatChipsModule,
        MatCommonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSortModule,
        MatStepperModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        BrowserModule,
        FormsModule,
        MatToolbarModule,
        MatListModule,
        MatTooltipModule,
    ],
    providers: [
        {
            provide: MatPaginatorIntl,
            useValue: CustomPaginator()
        },
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'outline'
            }
        },
        {
            provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
            useValue: {
                pageSize: 5,
                pageSizeOptions: [5, 10, 15],
                formFieldAppearance: 'legacy'
            }
        },
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: {
                displayDefaultIndicatorType: false
            }
        }
    ],
    exports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatCommonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatProgressBarModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSortModule,
        MatStepperModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        BrowserModule,
        FormsModule,
        MatToolbarModule,
        MatListModule,
        MatTooltipModule,
        
    ],
})
export class SharedMaterialModule { }
