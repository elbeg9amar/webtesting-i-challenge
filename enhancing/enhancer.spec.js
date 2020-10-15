const { it, expect } = require('@jest/globals');
const enhancer = require('./enhancer.js');
// test away!
let item = {
    name:"Player",
    enhancement : 15,
    durability: 60 ,
};

describe('enhancer module', () => {

    describe("enhancer success", () => {

        it('if it succeed, it will add 1 on the enhancement ', () => {

            expect(enhancer.success(item)).not.toBe(item);

        });
    });

    describe('enhancer fail', () => {

        it('if it fails, it will perform based on the condition', () => {

            expect(enhancer.fail(item)).not.toBe(item);

            expect(enhancer.fail({...item, enhancement: 5})).toStrictEqual({...item,enhancement: 5, durability: 55});

            expect(enhancer.fail({...item, enhancement: 15})).toStrictEqual({...item,enhancement: 15, durability: 50});

           
        });


    });

    describe('enhancer repair', () => {

        it("it will repair the player and the durability restored to 100", () => {
            expect(enhancer.repair(item)).toStrictEqual({...item, durability: 100})
        }) ;
    });
});





