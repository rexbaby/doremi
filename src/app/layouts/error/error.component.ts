import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
    selector: 'jhi-error',
    templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {
    errorMessage?: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.subscribe((routeData: Data) => {
            if (routeData['errorMessage']) {
                this.errorMessage = routeData['errorMessage'];
            }
        });
    }
}
