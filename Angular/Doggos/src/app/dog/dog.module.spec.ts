import { DogModule } from './dog.module';

describe('DogModule', () => {
  let dogModule: DogModule;

  beforeEach(() => {
    dogModule = new DogModule();
  });

  it('should create an instance', () => {
    expect(dogModule).toBeTruthy();
  });
});
