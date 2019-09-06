import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CricketService } from '../cricket.service';
var RankingsComponent = /** @class */ (function () {
    function RankingsComponent(cricketService) {
        this.cricketService = cricketService;
        this.title = 'ICC Rankings';
        this.data = {};
        this.data = this.cricketService.getFormats();
    }
    RankingsComponent.prototype.ngOnInit = function () {
    };
    RankingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rankings',
            templateUrl: './rankings.component.html',
            styleUrls: ['./rankings.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CricketService])
    ], RankingsComponent);
    return RankingsComponent;
}());
export { RankingsComponent };
//# sourceMappingURL=rankings.component.js.map