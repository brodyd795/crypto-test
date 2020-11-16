# Node.js Crypto

### Overview

A simple message encryption/decryption tool using [the `crypto` library](https://nodejs.org/api/crypto.html).

### Usage

Allows the user to specify a message to encrypt, create a random key and initialization vector (IV) to encrypt the message, and pass all three to another user to decrypt. Keys and IVs are passed along as hex strings to allow for URL encoding.
