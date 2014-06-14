module.exports = function(param1, testing_value2){


    param1 = 3
    testing_value2 += param1

    return function(a,b){
        return a+b + testing_value2;
    }
}