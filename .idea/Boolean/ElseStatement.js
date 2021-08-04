function testLessOrEqual(val){

    if(val < 12){
        return "Smaller or Equal to 12";
    }

    else if (val < 24){
        return  "Smaller or Equal to 24";
    }
    else {
        return "High Number";
    }


}
console.log(testLessOrEqual(23))