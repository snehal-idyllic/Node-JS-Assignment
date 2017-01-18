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

