let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
let add_more_char = "@#&{]}[|`^]%§/.?;:!,£µ*$-=+";
add_more_char = add_more_char.split('');
alphabet = alphabet.concat(add_more_char);
console.log(alphabet);

let normal_text = "+";
const alphabet_size = alphabet.length;

function chifre(text, key) {
    let cripto_text = "";
    let text_size = text.length;

    let letter_index;
    let cripto_index;
    let cripto_letter;
    for (x = 0; x < text_size; x++) {
        letter_index = alphabet.indexOf(text[x]);

        cripto_index = letter_index + (key % alphabet_size);
        // when index be more than alphabet_size (to fix a bug);
        if (cripto_index >= alphabet_size) {
            cripto_index = cripto_index - alphabet_size;
        }
        cripto_letter = alphabet[cripto_index];
        cripto_text += cripto_letter;


    }
    console.log(`text before: ${normal_text}
text_aftter:${cripto_text}`);



};


chifre(normal_text, 3);