import { compute } from './compute';


describe('compute test suite', ()=> {

	it ('should return 0 if input es negative', () => {
          const result = compute(-1);
	  expect(result).toBe(0);
	})

	it ('should increment the input if its positive', () => {
          const result = compute(1);
	  expect(result).toBe(2);
	})
})