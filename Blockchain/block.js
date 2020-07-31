const cryptoHash = require('../Util/cryptoHash');
const hexToBinary = require('hex-to-binary');
class Block{

    constructor({ timestamp,data,lastHash,hash }){
             this.timestamp = timestamp;
             this.data = data;
             this.hash = hash;
             this.lastHash = lastHash;
    }

    static genesis() {
			const GENESIS_DATA = {
				timestamp: "Genesis timestamp",
				lastHash:"Nil",
                hash:'0000000000000000000000000000000000000000000000000000000000000000',
				data: []
		  };
      return new Block(GENESIS_DATA); 
  }

    static addBlock({lastBlock,data}){
        const lastHash = lastBlock.hash;

        let timestamp,hash;
        timestamp = Date.now();
        hash = cryptoHash(timestamp,lastHash,data);

        return new Block({
            timestamp,
            lastHash,
            data,
            hash
        });
    }
}

module.exports = Block;