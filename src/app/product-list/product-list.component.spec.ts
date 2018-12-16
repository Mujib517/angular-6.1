import { ProductListComponent } from './product-list.component';
import { Observable } from 'rxjs';

describe("Product List Component", () => {
  let comp;
  let productSvc;
  let logger;
  let router;
  let obs;

  beforeEach(() => {
    obs = new Observable(o => {
      o.next([{ brand: 'nokia' }])
    });
    productSvc = jasmine.createSpyObj('Product', ['get']); //fake obj
    productSvc.get = jasmine.createSpy().and.returnValue(obs);

    logger = jasmine.createSpyObj('logger', ['warn', 'log']);
    logger.warn = jasmine.createSpy();

    const activatedRoute = jasmine.createSpyObj('activatedRoute', ['abc']);
    activatedRoute.snapshot = {
      data: {
        products: [1, 2, 3, 4]
      }
    };

    router = jasmine.createSpyObj('router', ['navigate']);
    router.navigate = jasmine.createSpy();

    comp = new ProductListComponent(productSvc, logger, activatedRoute, router);
  });

  it('Should assign products', () => {
    expect(comp.products.length).toBe(4);
  });

  describe("load()", () => {
    it("Should call warn method of logger service", () => {
      comp.load();

      expect(logger.warn).toHaveBeenCalled();
    });

    it('Should call get of product service', () => {
      comp.load();

      expect(productSvc.get).toHaveBeenCalled();
    });

    it('Should assign response to products', () => {
      comp.load();

      expect(comp.products.length).toBe(1);
      expect(comp.products).toEqual([{ brand: 'nokia' }]);
    })
  });



  afterEach(() => {
    comp = null;
  });
});