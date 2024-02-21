import { NgModule } from "@angular/core";
import { TableComponent } from "./element-ui/table/table.component";
import { SharedMaterialModule } from "./shared-material.module";

@NgModule({
    imports: [
        SharedMaterialModule
    ],
    declarations: [
        TableComponent
    ],
    exports: [
        TableComponent
    ],
    providers: []
})
export class SharedElementUiModule { }