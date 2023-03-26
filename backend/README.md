COMMIT: Error Handling of 5 Basic Errors:

1. product not found error making server crash so avoid it using error.js
2. Async fxns erros solved using catchAsyncErrors.js simply means try catch block
3. UnHandled Promise rejection-> means when db string is wrong and in this we crash whole server by ourself in server.js
4. Uncaught Exception error-> menas we randomly write console.log(tejas) without defiing tejas then in that case server can crash so we handle it in sevrver.js
5. Cast Error-> Suppose this is actual id i.e 640f5c15f6f698455fa7b519 and i changed last 9 to 8 then we get product not found error and we already tackled it in 1st error but what if i change above id to 640f5c15f6f means cut half so this small random id is called cast error in mongodb and we need to handle that in error.js
