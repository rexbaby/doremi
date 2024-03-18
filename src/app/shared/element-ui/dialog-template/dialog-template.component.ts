import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dialog-template',
    templateUrl: './dialog-template.component.html',
    styleUrls: ['./dialog-template.component.scss']
})
export class DialogTemplateComponent {
    @Input() title!: string;
}