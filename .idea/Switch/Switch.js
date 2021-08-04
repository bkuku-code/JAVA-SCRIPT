/* Write a switch statement that wich test a Val and set answer for the followingconditions:
1 - "alpha'
2- "beta"
3- "gamma"
4- "delta"*/

function switchcase(val){
    var answer = "";

    switch(val) {

    case 1:
        answer = " alpha ";
        break;

        case 2:
            answer ="bata";
            break;

        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "delta"

            break;
    }
            return answer;
}

console.log(switchcase(4));

