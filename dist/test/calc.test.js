"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../src/calc");
test('Deve somar corretamente', () => {
    const result = (0, calc_1.somar)(12, 20);
    expect(result).toBe(32);
});
