import { TestBed } from '@angular/core/testing';
import { CricketService } from './cricket.service';
describe('CricketService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CricketService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cricket.service.spec.js.map