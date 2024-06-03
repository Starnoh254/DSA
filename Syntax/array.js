// let mountain = ['Everest' , 'Kenya', 'Uganda'];
// console.log(mountain.shift());
// console.log(mountain);

// function compar(a, b){
//     if(a > b){
//         return 1
//     }else if(a < b){
//         return -1
//     }else{
//         return 0
//     };

// }
// const june = compar(5, 1);
// console.log(june);



function say(message){
    if(!message){
        return ;
    }

    console.log(message)
}
// falsy values = null , undefined , 0 , false , ""
say("null");

const user1 = {
    name: "Stanley",
    email: "stano12@gmail",
    loyalpoints: 0 
}

const user2 = {
  name: "John",
  email: "jn222@gmail",
  loyalpoints: 1
};

function displayloyalpoints(doit) {
    if(doit.loyalpoints){
        console.log(`user has ${doit.loyalpoints} loyal points `);
    } else {
        console.log("Field 'LoyaltyPoints' is not defined for user");
    }
}

displayloyalpoints(user1);
displayloyalpoints(user2);