# adapter-interop-test

This is a platform app that is used by adapters (Dotnet and Java) to run tests with InterOp.

### Run locally

1. Build the app with
~~~
npm run build
~~~
2. Host app.json and other assets at localhost:5555, such as
~~~
cd out
http-server -p 5555 -c-1
~~~
3. Change manfiest URL in testing code of adapters to http://localhost:5555/app.json

### Ready to deploy
1. Build the app with followings.  deploy task installs the app in https://testing-assets.openfin.co/adapters/interop.

~~~
npm run buildprod
npm run deploy
~~~


2. Change manfiest URL in testing code of adapters to https://testing-assets.openfin.co/adapters/interop/app.json


