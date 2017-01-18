var mustache = require("mustache");

result = mustache.render("Hello {{first_name}} {{last_name}}",
{
    'first_name': "Snehal",
    'last_name': 'Singh'
}
)

console.log(result);