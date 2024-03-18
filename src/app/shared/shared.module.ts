import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogTemplateComponent } from "./element-ui/dialog-template/dialog-template.component";
import { TableComponent } from "./element-ui/table/table.component";
import { ValidateComponent } from "./service/validate/validate.component";
import { SharedMaterialModule } from "./shared-material.module";

@NgModule({
    imports: [
        SharedMaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TableComponent,
        DialogTemplateComponent,
        ValidateComponent
    ],
    exports: [
        SharedMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TableComponent,
        DialogTemplateComponent,
        ValidateComponent
    ],
    providers: []
})
export class SharedModule { }