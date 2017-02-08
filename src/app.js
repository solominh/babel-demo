

import User from './User';


let user = new User('John');
user.doSomething().then((value) => {
    console.log(value);
});


