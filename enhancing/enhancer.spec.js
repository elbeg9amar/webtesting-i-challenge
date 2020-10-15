const { it, expect } = require('@jest/globals');
const enhancer = require('./enhancer.js');
// test away!
let item = {
    name:"Player",
    enchancement: 20
    ,
    durability: 99 ,
};



it('if it succeed, it will add 1 on the enchancement', () => {
    
    expect(enhancer.success(item)).toStrictEqual(item);
    // expect(enhancer.success({...item, [item.enchancement]
    // : 20})).toBe({...item, [item.enchancement]
    //     : 20})
});

it('if it fails, it will perform based on the condition', () => {
    expect(enhancer.fail(item)).not.toBe(item)
})