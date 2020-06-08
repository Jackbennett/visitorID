function start(){
  I2C3.setup({scl:A8, sda:B4});
  var nfc = require("PN532").connect(I2C3);
  print(nfc.getVersion());
  nfc.SAMConfig(); // start listening
  setInterval(function() {
   nfc.findCards(function(card) {
    print("Found card "+card);
    card = JSON.stringify(card);
    var leds = [LED1,LED2];
    if (card=="[147,239,211,128]") digitalWrite(leds[0],1);
    if (card=="[249,192,235,164]") digitalWrite(leds[1],1);
    if (card=="[4,99,129,114,72,52,128]") digitalWrite(leds[1],1);
    if (card=="[4,99,129,114,72,52,128]") digitalWrite(leds[1],1);
   });
  }, 1000);

}
