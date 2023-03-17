module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next); //Promise is ajs class and here act as a try and then we give catch. Now using it as try catch for async functions in productController.js like in exports.createProduct async function
};
