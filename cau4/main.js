class Animal{
    constructor(name,weight){
        this.name=name;
        this.weight=weight;
    }
    setName(name){
        this.name=name;
    }
    setWeight(weight){
        this.weight=weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        console.log(`name: ${this.name} weight: ${this.weight}`)
    }

}
let objAnimal1= new Animal('Elephant',45.6);
objAnimal1.toString();
let objAnimal2=new Animal();
objAnimal2.setName('Mouse');
objAnimal2.setWeight(100);
objAnimal2.toString();

