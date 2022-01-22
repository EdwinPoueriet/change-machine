// Bills that the change machine has configured
const availableBills =  [1, 5, 10, 20, 50, 100];
const Calculator = {
    // Given money amount, break into bills
    // input: 195
    // output: [100, 50, 20, 20, 5]
    changeMachine: (money) => {
        let amount = money
        let result = []
        availableBills.reduceRight((_,item) => {
            while(amount >= item ){
                result.push(item)
                amount= amount - item
            }
        },null)
        return result;
    }
};
// Do not modify, as the tests call this method to verify that your implementation works
module.exports = Calculator;
