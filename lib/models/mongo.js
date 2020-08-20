'use strict';
//represents a generic model

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {

    let queryObj = _id ? { _id } : {};
    return this.schema.find(queryObj);

  }


  create(record) {

    const newRecord = new this.schema(record);
    return newRecord.save();
    //do something else here? feedback to user?

  }


  update(_id, record) {

    return this.schema.findByIdAndUpdate(_id, record, {new:true});

  }


  delete(_id) {

    return this.schema.findByIdAndDelete(_id);

  }



}

module.exports = Model;
