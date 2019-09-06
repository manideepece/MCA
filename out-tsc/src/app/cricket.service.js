import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CricketService = /** @class */ (function () {
    function CricketService(httpClient) {
        this.httpClient = httpClient;
        this.rankingsUrl = "https://rest.entitysport.com/v2/iccranks";
        this.token = "ec471071441bb2ac538a0ff901abd249";
    }
    CricketService.prototype.getFormats = function () {
        return this.httpClient.get(this.rankingsUrl + "?token=" + this.token);
    };
    CricketService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CricketService);
    return CricketService;
}());
export { CricketService };
//# sourceMappingURL=cricket.service.js.map