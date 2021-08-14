import { InputFormatDirective } from './input-format.directive';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div'),
    };
    const directive = new InputFormatDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
