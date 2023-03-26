class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr; // this.query means now query is associated with the property of Apifeatures class and saved within the this.query variable. Why it becomes the property of the class because we used constructor(& constructor by default runs everytim a class's object is formed) and if we suppose created a mehod instead of constructor and calls that method outside class \(means that is an object now with different values of query and querystr) in that case this.query and this.querystr becomes the property of that object only that takes valuse from the objects definiations i.e query and querystr only.
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr }; //we created a copy of queryStr but why used {...} cos if e directly pass this.queryStr then its refernce get saved in queryCopy and any changes to queryCopy also change this.queryStr as it is a object and in javascript all object pass through reference.
    //Remove some fields for filter by category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    // this.query = this.query.find(queryCopy);

    //Filter for price and Rating
    let queryStr = JSON.stringify(queryCopy); //the queryStr is differnt from above this.queryStr as here its a local variable of filter use to convert json of queryCopy to String
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    this.query = this.query.find(JSON.parse(queryStr)); //as we converted the queryCopy which was JSON to String and save it in queryStr so now again change it to JSON
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1; // now we know that queryStr is String but we require number hence we wrapped it in Number.
    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
