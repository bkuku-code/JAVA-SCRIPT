function sequentialSize(Val) {
    var answer = "";

    switch (Val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;

        case 4:
        case 5:
        case 6:
            answer = "Medium";
            break;

        case 7:
        case 8:
        case 9:
            answer = "Large"
            break;
    }
    return answer;

}
console.log(sequentialSize(7));