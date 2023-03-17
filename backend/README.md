3 types of errors we handled:

1. product not found error making server crash so avoid it using error.js
2. Async fxns erros solved using catchAsyncErrors.js simply means try catch block
3. UnHandled Promise rejection-> means when db string is wrong and in this we crash whole server by ourself in server.js
4. Uncaught Exception error-> menas we randomly write console.log(tejas) without defiing tejas then in that case server can crash so we handle it in sevrver.js
