/**
 * Description
 * @method exports
 * @param {} param1
 * @param {} testing_value2
 * @return FunctionExpression
 */
module.exports = function(param1, testing_value2){


    param1 = 3
    testing_value2 += param1

    return function(a,b){
        return a+b + testing_value2;
    }
}