//var MAX_NUM = 100;
//
//randomNumber = function(){
//return Math.floor(Math.random() * MAX_NUM)
//}
//
//module.exports = randomNumber
//
//
//a = {
//    req.url.split()
//    add = {
//        add = function(){
//           return
//    }
//    sub = function(){
//
//    }
//    mul = function(){
//
//    }
//    div = function(){
//
//    }
//  }
//}
//
//exports = a

module.exports = {
    sum: function() {
        console.log('var is', this.a);
        console.log('var is', this.b);
        return parseInt(this.a) + parseInt(this.b);
    },
    sub: function() {
        console.log('var is', this.a);
        console.log('var is', this.b);
        return parseInt(this.a) - parseInt(this.b);
    },
    mul: function() {
        console.log('var is', this.a);
        console.log('var is', this.b);
        return parseInt(this.a) * parseInt(this.b);
    },
    div: function() {
        console.log('var is', this.a);
        console.log('var is', this.b);
        return parseInt(this.a) / parseInt(this.b);
    }
};

