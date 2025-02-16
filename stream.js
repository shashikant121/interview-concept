// readable -> use to read
// writeable -> use to write
// duplex -> can be used for read and write (TCP socket)
// transform -> zlib stream

const fs = require("fs")
const zlib =require("zlib")
const crypto = require('crypto')

const {Transform}  = require("stream")

class EncryptStream extends Transform{
    constructor(key,vector){
        super()
        this.key=key;
        this.vector =vector
    }

    _transform(chuck,encoding,callback){
        const ciper  = crypto.createCipheriv('aes-256-cbc',this.key,this.vector) 
        const encrypted = Buffer.concat([ciper.update(chuck),ciper.final()]) // encrypt the data
        this.push(encrypted)
        callback()

    }
}

const key  = crypto.randomBytes(32)
const vector = crypto.randomBytes(16)

const readableStream  = fs.createReadStream('input.txt')

console.log(readableStream);


// new gzip object to compress the stream data

const gzibStream =zlib.createGzip()


const encryptedStream  = new EncryptStream(key,vector)

const writeableStream = fs.createWriteStream("output.txt.gz.enc")

readableStream.pipe(gzibStream).pipe(encryptedStream).pipe(writeableStream)

console.log("Streaming-> compressing-> writting data");
