let text= 'Daddy loves me ';
function check(text){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text[i]=='a'||text[i]=='i'||text[i]=='o'||text[i]=='e'||text[i]=='u'){
            count++;
        }
    }if(count==0){
        count=false;
    }
    return count;
}
console.log(check(text));