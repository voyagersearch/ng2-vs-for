import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VsForComponent } from './ng2-vs-for.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        VsForComponent
    ],
    exports: [
        VsForComponent
    ],
    providers: [

    ]
})
export class VsFor { }