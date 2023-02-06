

function totalCost(products){
    let sum = 0;
    for(var i = 0; i<myProducts.length; i++){
        let index = i;
        let element = myProducts[i];
        sum = sum + element.price; 
        
    }
    return sum;
}
const myProducts = [{name: "laptop", price: 30000 }, {name: "I-phone", price: 5000 }, {name: "I-pad", price: 40000 }];

console.log(totalCost(myProducts));