// 5. Create a program that generates a sequence of the first n number in the look-and-say sequence. The look-and-say sequence starts with "1" and the
// next number is the reading of the previous number: "one 1" becomes "11" and "two 1s" becomes "21"

let n = 6;
let seq = ""
let last = "";
for (let i = 1; i <= n; i++) {
    console.log(seq);
  if (i == 1) { 
    seq = "1";
  }
  if (i == 2){
    seq += " 11";
    last = "11";
  }
  else {
    let count = 0;
    let currNum = "";
    for (let j = 0; j < last.length; j++) {
        count++;
        let nextNum = last.charAt(j + 1);
        if (last.charAt(j) != nextNum || j == last.length) {
            // let numS = `${count}`;
            let numS = count + last.charAt(j);
            currNum += numS;
            count = 0;
        }
        if (j == last.length - 1) {
            last = currNum;
            seq += " " + currNum;
            break;
        }
    }

  }

}

console.log(seq);