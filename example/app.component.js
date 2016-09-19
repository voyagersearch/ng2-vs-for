"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let AppComponent = class AppComponent {
    constructor() {
        this.items = [];
        // this.refresh();
    }
    refresh() {
        this.items = [];
        let len = ~~(Math.random() * 100) + 5;
        let i = 0;
        while (len--) {
            this.items.push({ value: Math.random(), index: i++ });
        }
        const tic = Date.now();
        setTimeout(() => {
            console.info(Date.now() - tic);
        });
    }
    getItemSize(item) {
        return item.index % 2 ? 25 : 50;
    }
    clear() {
        this.items = [];
    }
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng2-vs-for-test',
        styles: [`
    .container {
      height: 300px;
      overflow-y: auto;
      background: wheat;
    }

    .container.tall {
      height: 500px;
      background: lightgreen;
    }

    @media (max-width: 500px) {
      /*.repeat-item {
        height: 50px !important;
      }*/
    }
  `],
        template: `
    <div class="container" [ngClass]="{tall: isTall}" *ngIf="shown">
      <div *vsFor="items; size:getItemSize; offsetBefore:100; offsetAfter: 100; excess: 3; scrollParent:'.container'; let _items = vsCollection; let _startIndex = vsStartIndex">
        <div *ngFor="let item of _items" title="{{item.index}}" [ngStyle]="{height: item.index % 2 ? '25px' : '50px'}" class="repeat-item">
          {{ item.value }} {{ _startIndex }}
        </div>
      </div>
    </div>
    <button (click)="refresh()">
      refresh
    </button>
    <button (click)="clear()">
      clear
    </button>
    <button (click)="isTall = !isTall">
      toggle tall
    </button>
    <button (click)="shown = !shown">
      toggle shown
    </button>
  `
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map