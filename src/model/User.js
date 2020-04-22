const ValidationError = require("../Error");
class User
{
    constructor(name,pubsub)
    {
        if (name==null)
            throw  new ValidationError("Name can't be null");
        this.name=name;
        pubsub.publish("200",this);

    }

    toString(){
        return `User ${this.name}\n`;
    }

}
module.exports = User;
