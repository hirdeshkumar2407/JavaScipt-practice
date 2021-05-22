const  crypto= require('crypto')

/*
//supported hashes
console.log(crypto.getHashes())
console.log(crypto.getCiphers())
*/

// random byte
crypto.randomBytes(16,(err,buf)=>{});

let iv =crypto.randomBytes(16);

/*//create hash
let hash= crypto
         .createHash('sha256')
         .update('my message')
         .digest('hex')


console.log(hash);         
*/

let secret_message='shanta';
let key='12345678123456781234567812345678';


let cipher=crypto.createCipheriv('aes-256-cbc',key,iv);
let encrpyted= cipher.update(secret_message,'utf-8', 'hex');
                                //input encoding // output encoding

encrpyted += cipher.final('hex');

console.log('encrpyted: '+encrpyted )

let decipher = crypto.createDecipheriv('aes-256-cbc',key,iv);
let decrypted = decipher.update(encrpyted,'hex','utf-8');
decrypted +=decipher.final('utf-8');
console.log('decrypted:'+decrypted)