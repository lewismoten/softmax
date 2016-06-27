/* global describe it expect */
(() => {

    'use strict';

    let softmax = require('../index');

    describe('softmax', () => {

        it('is empty for empty', () => {

            expect(softmax([])).toEqual([]);

        });

        it('is 1 when only has one number', () => {

            expect(softmax([0])).toEqual([1]);
            expect(softmax([1])).toEqual([1]);
            expect(softmax([-1])).toEqual([1]);

        });

        describe('even distribution', () => {

            it('has two of the matching values', () => {

                expect(softmax([0, 0])).toEqual([1 / 2, 1 / 2]);

            });

            it('has three matching values', () => {

                expect(softmax([0, 0, 0])).toEqual([1 / 3, 1 / 3, 1 / 3]);

            });

        });

        it('sums to 1', () => {

            let maxed = softmax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            // Precision of numbers are not exact
            expect(maxed.reduce((a, b) => a + b)).toBeCloseTo(1, 14);

        });

        describe('vectors', () => {

            it('has positive numbers', () => {

                expect(softmax([1, 2]))
                  .toEqual([0.2689414213699951, 0.7310585786300048]);

            });

            it('has negative numbers', () => {

                expect(softmax([-2, -1]))
                  .toEqual([0.26894142136999505, 0.7310585786300048]);

            });

            it('has positive and negative numbers', () => {

                expect(softmax([-1, 1]))
                  .toEqual([0.11920292202211759, 0.8807970779778824]);

            });

            it('has fractional positive and negative numbers', () => {

                expect(softmax([-0.1, 0.1]))
                  .toEqual([0.4501660026875221, 0.549833997312478]);

            });

        });

    });

})();
