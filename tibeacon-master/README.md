###please have a look at https://github.com/jamesfalkner/liferay-android-beacons
it is more advanced and has more features!

___

#Usage:

```
var iBeacon = require('miga.tibeacon');
// register success Callback and set interval to 30sec
iBeacon.initBeacon({
    success : onSuccess, error:onError, interval: 30, region: onRegion, found:onFound
});

function onSuccess(e){
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
  iBeacon.stopScanning();
}
```

#Methods:

### initBeacon
Parameters
* success: callback function
* error: callback function
* region: callback function
* found: callback function
* interval: integer

### callback
succes(event). event conatins an array devices (success) or one device (region, found) with:
* mac
* major
* minor
* rssi
* power
* proximity
* uuid
* uuidDashed
* type (will be used to identify different beacons e.g. L8 smartlight)

### isEnabled


#Binary:

inside dist folder



#easiBeacon
Copyright 2014 Easi Technologies and Consulting Services, S.L.

Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
