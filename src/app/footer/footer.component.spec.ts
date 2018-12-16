import { FooterComponent } from './footer.component';

describe("Footer Component", () => {
  //AAA 
  var comp;

  beforeEach(() => {
    comp = new FooterComponent();
  });

  it('should have count initialized to zero', () => {
    expect(comp.count).toBe(0);
  });

  it("ngOnInit should increment the counter", () => {
    comp.ngOnInit();

    expect(comp.count).toBe(1);
  });

  afterEach(() => {
    comp = null;
  });
});