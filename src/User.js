class User {
    constructor(name) {
        this.name = name;
    }

    async doSomething(){
        const value = await Promise.resolve('Hello');
        return value;
    }
}

export default User;
