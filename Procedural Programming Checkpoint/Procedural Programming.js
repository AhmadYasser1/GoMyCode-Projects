var vector1 = [1,0];
var vector2 = [0,1];
var IR = [vector1, vector2];
var final_dot_product = 0

function dot_product(vector1, vector2) {
    if (vector1.length === vector2.length) {
        for (let i = 0; i < vector1.length; i++) {
        let totalProduct = (vector1[i] * vector2[i]);
        final_dot_product += totalProduct;
      }
    }
    if (vector1.length !== vector2.length) {
        return;
    }
    return final_dot_product;
}

console.log(dot_product(vector1, vector2));

if(dot_product(vector1, vector2) === 0) {
    console.log("Orthogonal");
}
else {
        console.log("Not Orthogonal");
    }


