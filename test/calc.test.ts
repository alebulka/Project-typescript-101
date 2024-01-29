import { somar } from '../src/calc'

test('Deve somar corretamente', () => {
    const result = somar(12, 20);
    expect(result).toBe(32);
});