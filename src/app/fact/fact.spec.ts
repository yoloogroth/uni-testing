import { fact } from "./fact";

describe('fact', () => {
    it("'Should return 1 if n is 0'", () => {
        const res = fact(0);
        expect(res).toBe(1);
    })
    it("'Should return 0 if n is negative'", () => {
        const res = fact(-1);
        expect(res).toBe(0);
    })
    it("'Should return 6 if n is 3'", () => {
        const res = fact(3);
        expect(res).toBe(6);
    })
    it("'Should return 24 if n is 4'", () => {
        const res = fact(4);
        expect(res).toBe(24);
    })
    it("'Should return 120 if n is 5'", () => {
        const res = fact(5);
        expect(res).toBe(120);
    })
    it("'Should return 0 if n is 16'", () => {
        const res = fact(16);
        expect(res).toBe(0);
    })
});