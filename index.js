const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

const encrypt = (text) => {
    const key = crypto.randomBytes(32).toString('hex');
    const iv = crypto.randomBytes(16).toString('hex');
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString(),
        encryptedMessage: encrypted.toString('hex'),
        key
    };
}

const decrypt = (text) => {
    const {key, iv, encryptedMessage} = text;

    const encryptedText = Buffer.from(encryptedMessage, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);

    return decrypted.toString();
}

const messageToEncrypt = "My secret";
console.log('messageToEncrypt', messageToEncrypt)
const encryptedMessageAndKey = encrypt(messageToEncrypt);
console.log('encryptedMessageAndKey', encryptedMessageAndKey);

const decryptedMessage = decrypt(encryptedMessageAndKey);
console.log('decryptedMessage', decryptedMessage);