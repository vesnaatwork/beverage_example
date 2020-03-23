
class User
{
    constructor(name)
    {
        if (name==null)
        throw "400"
        this.name=name;

    }
     
    getName(){
        return this.name;
    }


}
module.exports = User;
