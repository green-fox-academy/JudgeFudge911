import { DoggosModule } from './doggos.module';

describe('DoggosModule', () => {
  let doggosModule: DoggosModule;

  beforeEach(() => {
    doggosModule = new DoggosModule();
  });

  it('should create an instance', () => {
    expect(doggosModule).toBeTruthy();
  });
});
