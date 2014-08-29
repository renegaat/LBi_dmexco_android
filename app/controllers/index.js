
var iBeacon = require('miga.tibeacon');

iBeacon.initBeacon({
    success : onSuccess, error:onError, interval: 15, region: onRegion, found:onFound
});

function onSuccess(e){
	// iterate found devices
	// device example   {"device":{"proximity":0.37019523952171035,"uuidDashed":"B9407F30-F5F8-466E-AFF9-25556B57FE6D","minor":25294,"power":-74,"mac":"D9:69:62:CE:FE:A1","uuid":"B9407F30F5F8466EAFF925556B57FE6D","rssi":-67,"type":0,"major":65185}}	  
	for(var obj in e){
		
    }
	Ti.API.info(JSON.stringify(e));		
}

function onRegion(e){
  Ti.API.info(JSON.stringify(e));
}  

function onFound(e){
  Ti.API.info(JSON.stringify(e));
}  

function onError(e){
  Ti.API.info(JSON.stringify(e));
}  

if (iBeacon.isEnabled()){
	 iBeacon.startScanning();
}


