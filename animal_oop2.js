class Without_Backbone{
    constructor(no_backbone){
        this.no_backbone = true;
        this.isColdBlooded = true;
    }
    // cold_blooded(){
    //     return `${this.arthropoda} is cold-blooded`;
    // }
}

class With_Backbone{
    constructor(hasBackbone){
        this.hasBackbone = true;
    }
}

class Warm_Blooded extends With_Backbone{
    constructor(isWarmBlooded){
        super()
        this.isWarmBlooded = true;
    }
}

class Cold_Blooded extends With_Backbone{
    constructor(isColdBlooded){
        super()
        this.isColdBlooded = true;
    }
}

let bird = new Warm_Blooded(true, true);
console.log(bird);
let fish = new Cold_Blooded(true, true);
console.log(fish);
let mammal = new Warm_Blooded(true, true);
console.log(mammal);
let arthropoda = new Without_Backbone(true, true);
console.log(arthropoda);
