COMMIT: Error Handling of 5 Basic Errors:

1. product not found error making server crash so avoid it using error.js
2. Async fxns erros solved using catchAsyncErrors.js simply means try catch block
3. UnHandled Promise rejection-> means when db string is wrong and in this we crash whole server by ourself in server.js
4. Uncaught Exception error-> menas we randomly write console.log(tejas) without defiing tejas then in that case server can crash so we handle it in sevrver.js
5. Cast Error-> Suppose this is actual id i.e 640f5c15f6f698455fa7b519 and i changed last 9 to 8 then we get product not found error and we already tackled it in 1st error but what if i change above id to 640f5c15f6f means cut half so this small random id is called cast error in mongodb and we need to handle that in error.js

COMMIT: Added apifeatures such as searching, filtering and pagination
info within the files.

COMMIT: COmpleted User Routes(Authentication apis)

1. bycryptjs: storing the passwords of user by first converting them in hash form so that even admin can't see them
2. jsonwebtoken: for generating token(discuss in detail later)
3. validator: to check the email field contain only email
4. nodemailer: if someone click forget password then a otp or link go to the user
5. cookie-parser: jsonwebtoken get stores in cookie because it is not accissible through frontend and if we save it in local stre than anyone access the token of a specific user using the same system.
6. body-parser: we know if not see express video(i know but now i forget)

EXTRAS:

1. We create functions to perform or simply code tasks in middlewqare for example we created erro fnx to detect errors in middleware.
2. hierarchy of backend functioning is server then app then route and then controller and then model so process start from model then controller and like this
3. [ex. from auth.js in middleware] If we write const token= req.cookies; then with console.log(token) we get object but if we use const {token}= req.cookies; then we get value of that token directly.

NOTE: COmpleted User Routes(Authentication APIs and Completed Authentication APIs are same commit)

COMMIT: Authentication APIs Error Handling
For this, we handeled,

1. Mongoose Duplicate Key Error
2. Wrong JWT Token Error
3. JWT Token Expired Error
