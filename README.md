# SKGooglePlace

## Requirements before start project
Set up Google API key
Refer: https://developers.google.com/maps/documentation/javascript/get-api-key

MUST enable billing account before you can start using the Google APIs
Refer: https://support.google.com/googleapi/answer/6158867?hl=en

MUST enable the items below, if your API key is restricted.
1. Places API
2. Geocoding API
3. Maps SDK for Android
4. Maps SDK for iOS

## Once finished setup the Google API key
Global search "YOUR_GOOGLE_API_KEY" and replace to your Google API key

There are the 3 files that required to change:
1. AndroidManifest.xml
2. AppDelegate.m
3. config.tsx

## Start running project
```js
npm install
```
or
```js
yarn install
```

For iOS:
```js
cd ios && pod install && cd ..
```
```js
react-native run-ios
```

For android:
```js
react-native run-android
```
