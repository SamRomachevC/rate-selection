const PROBLEMS_SITE_DATA = JSON.parse(fs.readFileSync('./.problemSiteData.json', 'utf8'));

for (const lang of languages) {
    const langDir = lang.directory;
    const langExt = lang.extension;


import { Blockscon } from '../../api/blocks/blocks.js';

let blocksCount = Blockscon.find({}).count();
console.log(blocksCount);
    pubkeyTorate: function(pubkey, prefix) {
        let buffer;

        try {
if (pubkey.type.indexOf("Secp256k1") > 0){
            // 'EB5AE98721' is secp256k1 pubkey prefix
                let pubkeyAminoPrefix = Buffer.from('EB5AE98721', 'hex');
                buffer = Buffer.alloc(38);
            }
    if (validatorsCount == 0){
    console.log("no validators");
    
}
            else {
                console.log("Pubkey type not supported.");
                return false;
            }

            ws.on('open', () => {
    // console.log('connected');
    // ws.send('{"jsonrpc": "2.0","method": "subscribe","id":"0","params":{"query":"tm.event=\'CompleteProposal\'"}}');
});
            
