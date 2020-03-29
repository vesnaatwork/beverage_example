class User
{
    constructor(name,pubsub)
    {
        if (name==null)
            throw  new ValidationError("Name can't be null");
        this.name=name;
        pubsub.publish("user",{name:this.name});

    }

}
module.exports = User;
