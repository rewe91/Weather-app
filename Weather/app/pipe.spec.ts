import { TempConverter } from './tempconverter.pipe';
describe('tempconverter', () => {
  let pipe: TempConverter;
  beforeEach(() => {
    pipe = new TempConverter();    
  });
  it('should convert to fahrenheit', () => {
    let value: number = 10;

    expect(pipe.transform (value, 'F')).toEqual('50.00');
  
  });
});
