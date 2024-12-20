// Function to encrypt text using Caesar Cipher
function encryptText() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedText = caesarCipher(text, shift);
    document.getElementById('output').textContent = "Encrypted Text: " + encryptedText;
  }
  
  // Function to decrypt text using Caesar Cipher
  function decryptText() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedText = caesarCipher(text, -shift); // Negative shift for decryption
    document.getElementById('output').textContent = "Decrypted Text: " + decryptedText;
  }
  
  // Caesar Cipher logic
  function caesarCipher(str, shift) {
    return str.split('').map(function (char) {
      if (/[a-zA-Z]/.test(char)) {
        const startCode = (char === char.toLowerCase()) ? 97 : 65;
        const charCode = char.charCodeAt(0);
        const shiftedCode = ((charCode - startCode + shift + 26) % 26) + startCode;
        return String.fromCharCode(shiftedCode);
      }
      return char; // Non-alphabetic characters are not modified
    }).join('');
  }
  