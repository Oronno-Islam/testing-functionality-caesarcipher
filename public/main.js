document.getElementById('cipher-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let text = document.getElementById('text').value;
    const plainText = text.replace(/\s+/g,'')
    const key = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(plainText, key);

    document.getElementById('result').textContent = `Encrypted Text: ${result}`;
});

function caesarCipher(plainText, key) {
    return plainText.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let shiftedCode = code + key;

            if (char >= 'A' && char <= 'Z') {
                if (shiftedCode > 'Z'.charCodeAt(0)) {
                    shiftedCode -= 26;
                } else if (shiftedCode < 'A'.charCodeAt(0)) {
                    shiftedCode += 26;
                }
            } else if (char >= 'a' && char <= 'z') {
                if (shiftedCode > 'z'.charCodeAt(0)) {
                    shiftedCode -= 26;
                } else if (shiftedCode < 'a'.charCodeAt(0)) {
                    shiftedCode += 26;
                }
            }

            return String.fromCharCode(shiftedCode);
        }

        return char;
    }).join('');
}
