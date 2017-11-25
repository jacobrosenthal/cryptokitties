// NOTE: this is going to make a *LOT* of web requests,
 client = require("./")();
let cattributes = {};
let errorCount = 0;
let catCount = 10000;
let wantedCattribute = process.argv[2];
const errorHandler = e => {
  errorCount++;
  catCount--;
}
client.getAllKitties().then(kitties => {
  catCount = Object.keys(kitties).length - 10000 + catCount;
  Object.keys(kitties).forEach(id => {
    client.getKitten(kitties[id].id).then(kitten => {
      for(let cattribute of kitten.cattributes){
        cattributes[cattribute] = 1 + (cattributes[cattribute] || 0);
        if(cattribute == wantedCattribute) console.log(kitten.id);
      };
      if(!catCount--) {
        console.log(errorCount);
        console.log(cattributes);
      }
    }).catch(errorHandler);
  });
});
