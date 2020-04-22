class Glass {
  constructor(maxvolume, name, pubsub) {
    if (maxvolume == null) {
      throw new ValidationError("Glass maximum volume can't be null");
    }
    if (name == null) {
      throw new ValidationError("Glass name can't be null");
    }
    this.maxvolume = maxvolume;
    this.name = name;
    this.volume = 0;
    pubsub.publish("200", this);
  }

  fill(beverage, pubsub) {
    if (this.volume + beverage.volume > this.maxvolume) {
      throw new ValidationError(
        str.concat("Volume can't be larger than ", this.maxvolume)
      );
    }
    this.volume += beverage.volume;
    this.beverage = beverage;
    pubsub.publish("200", this);
    return `fill ${this.name} volume ${this.volume} beverage ${this.beverage}`;
  }

  spill(beverage, pubsub) {
    if (this.volume - beverage.volume < 0) {
      throw new ValidationError(
        str.concat("Volume can't be less than ", this.volume)
      );
    }
    this.volume -= beverage.volume;
    pubsub.publish("200", this);
    return `fill ${this.name} volume ${this.volume} beverage ${this.beverage}`;
  }

  toString() {
    return `Glass max volume= ${this.maxvolume} name =${this.name} volume= ${this.volume}\n`;
  }
}
module.exports = Glass;
