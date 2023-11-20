//singleton
//object.create


//object literals
const mySym = Symbol("key1")
//note: symbel key declear in object with [key]braclet.
const JsUser = {
    name: "waleed",
    "full name": "Waleed Lateef",
    [mySym]:"key1",
    age: 20,
    location: "gwadar",
    email: "waleed@google.com",
    isLoggedIn: "false",
    lastLoginDays:["Monday", "Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]);
//symbol
console.log(JsUser[mySym]);

//change email value

JsUser.email = "waleed@chatgpt.com";
//now we freezed our objects, con not override key's value
//Object.freeze(JsUser);
JsUser.email = "waleed@microsoft.com"
console.log(JsUser);

JsUser.greeting =  function(){
    console.log('Hello js user');
}

console.log(JsUser.greeting);
//this
JsUser.greeting2 =  function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
