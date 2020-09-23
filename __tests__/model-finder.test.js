const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const productModel = require('../lib/models/products/products-collection.js');
// require('./supergoose.js');

const mockRequest = supergoose(server);

beforeEach(async () => {
  await productModel.schema.deleteMany({});
});

describe('Products API', () => {

  it('returns empty array when empty', async () => {

    const products = await mockRequest.get('/api/v1/products');
    expect(products.status).toBe(200);
    expect(products.body.count).toBe(0);
    expect(products.body.results.length).toBe(0);

  });


  it('can create() a new product', async () => {

    const testData = { category: 'writing', name: 'pencil', display_name: 'Pencil', description:'this is a pencil' };
    // you have to send it all the data (keys) it wants, or else it wont pass

    const response = await mockRequest.post('/api/v1/products').send(testData);
    expect(response.status).toBe(200);
    compareProps(testData, response.body);

  });


  it('can get() all products', async () => {

    const testData = { category: 'writing', name: 'pencil', display_name: 'Pencil', description:'this is a pencil' };

    await mockRequest.post('/api/v1/products').send(testData);

    const testData2 = { category: 'writing', name: 'pen', display_name: 'Pen', description:'this is a pen to write with' };

    await mockRequest.post('/api/v1/products').send(testData2);

    const response = await mockRequest.get('/api/v1/products');

    expect(response.body.count).toBe(2);
    expect(response.body.results.length).toBe(2);

  });


  it('can get() a product', async () => {
    const testData = { category: 'writing', name: 'pencil', display_name: 'Pencil', description:'this is a pencil' };

    const {body : createdTest} = await mockRequest.post('/api/v1/products').send(testData);
    const response = await mockRequest.get('/api/v1/products/' + createdTest._id);

    // console.log('REQUEST IN GET 1 PROD TEST:', response.body);
    expect(response.body[0]._id).toBe(createdTest._id);

  });

  it('can update (PUT) a product', async () => {
    const testData = { category: 'writing', name: 'pencil', display_name: 'Pencil', description:'this is a pencil' };

    const {body : createdTest} = await mockRequest.post('/api/v1/products').send(testData);

    testData.category = 'drawing';

    const response = await mockRequest.put('/api/v1/products/' + createdTest._id).send(testData);
    // console.log('RESPONSE IN PUT TEST', response.body);

    expect(response.body.category).toBe('drawing');
  });

  it('can update (PATCH) a product', async () => {
    const testData = { category: 'writing', name: 'pencil', display_name: 'Pencil', description:'this is a pencil' };

    const {body : createdTest} = await mockRequest.post('/api/v1/products').send(testData);

    testData.category = 'drawing';

    const response = await mockRequest.patch('/api/v1/products/' + createdTest._id).send(testData);
    // console.log('RESPONSE IN PATCH TEST', response.body);

    expect(response.body.category).toBe('drawing');

  });




  it('can delete() a product', async () => {

    const testData = { id:'1', category: 'writing', name: 'pencil', display_name: 'Pencil', description:'this is a pencil' };

    const {body : createdTest} = await mockRequest.post('/api/v1/products').send(testData);
    // console.log('CREATEDTEST IN DELETE:', createdTest);
    const {body: deletedTest} = await mockRequest.delete('/api/v1/products/' + createdTest._id);
    // console.log('RESPONSE IN DELETE:', deletedTest);
    compareProps(deletedTest, createdTest);

  });





});

function compareProps(a,b){
  for(let key in a) {
    const valueA = a[key];
    const valueB = b[key];
    expect(valueA).toBe(valueB);
  }
}

