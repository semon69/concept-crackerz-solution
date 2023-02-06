function getLetter(s) {

    for( let i = 0; i < s.length; i++){

        if(s.length >= 1 && s.length <= 100){
            if(s[0] == 'a' || s[0] == 'e'|| s[0] == 'i' || s[0] == 'o' || s[0] == 'u'){
                return 'A';
            }
            else if(s[0] == 'b' || s[0] == 'c'|| s[0] == 'd' || s[0] == 'f' || s[0] == 'g'){
                return 'B';
            }
            else if(s[0] == 'h' || s[0] == 'j'|| s[0] == 'k' || s[0] == 'l' || s[0] == 'm'){
                return 'C';
            } 
            else{
                return 'D'
            }
        } else{
            return 'Give a valid string'
        }
    }
}

console.log(getLetter('ihjgdfgd'));