const names = ["Charlie", "Samip", "Ali"];
const newArray =[];
function writeCards(names,eventName) {
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}
function countDown(){
    let i = 10;
    while (i > -1){
        console.log(i)
        i--
    };
}