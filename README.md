# adapter-interop-test

This is a platform app that is used by adapters (Dotnet and Java) to run tests with InterOp.

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


