# adapter-interop-test

This is a platform app that is used by adapters (Dotnet and Java) to run integration tests with InterOp.

### Files

- App Manifest:  public/app.json
- Platform Provider: public/provider.html, src/platform-provider.ts
- Platform Window: public/platform-window.html, src/platform-window.ts
- Platform View: public/platform-view.html, src/platform-view.ts

### Code
The main logic is in src/platform-view.ts and src/platform-provider.ts
- Context Handler: when receiving a context, creates a new context, with "1" appended to ticker field and send so adapters can validate the reponse.
- Intent Handler: Listen to intent name "JsTestIntent".  when receiving an intent, creates a new context, with "1" appended to ticker field and send so adapters can validate the reponse.  Intents from Java and .Net adapters are marked based on context.type.  Both Adapters are listening to "DotNetIntent" and "JavaIntent" respectively.
- interopOverride: Intent targets are set based on intent.name with UUID of integration tests in Java and .Net adapters.

### Run locally

1. Build the app with
~~~
npm run build
~~~
2. Run Webpack dev server at localhost:5555
~~~
npm run start
~~~
3. Change manfiest URL in testing code of adapters to http://localhost:5555/app.json

### Ready to deploy
1. Build the app with followings.  deploy task installs the app in http://testing-assets.openfin.co.s3-website-us-east-1.amazonaws.com/adapters/interop.

~~~
npm run buildprod
npm run deploy
~~~


2. Change manfiest URL in testing code of adapters to http://testing-assets.openfin.co.s3-website-us-east-1.amazonaws.com/adapters/interop/app.json


