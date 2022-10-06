import { getCurrencies } from "./currencies";

describe('currencies', () => {
    it("'Should return the currencies suported'", () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })});