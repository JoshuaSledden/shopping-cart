process.env.NODE_ENV = 'test';

// Require the development dependencies.
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const Product = require('../src/models/product');

chai.use(chaiHttp);

describe('Products', () => {

    // Clear the database before each test.
    beforeEach(done => {
        Product.deleteMany({}, err => {
            done();
        })
    });

    // Test getting all products.
    describe('/GET products', () => {
        it('it should GET all products', done => {
            chai.request('http://localhost:8080')
                .get('/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    // Test posting a new product.
    describe('/POST products', () => {
        it('it should POST a product with full fields.', done => {
            let product = {
                title: "The Lord of the Rings",
                description: "A book by J.R.R Tolkien",
                price: 15.99
            };

            chai.request('http://localhost:8080')
                .post('/products')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('title');
                    res.body.should.have.property('description');
                    res.body.should.have.property('price');
                    done();
                });
        });
    });

    // Test getting an individual product.
    describe('/GET/:productID product', () => {
        it('It should GET a product of a specific Product ID', done => {
            let product = new Product({
                title: "Who Moved My Cheese?",
                description: "Book by Spencer Johnson",
                price: 5.99
            });

            product.save((err, product) => {
                chai.request('http://localhost:8080')
                .get('/products/' + product.id)
                .send(product)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('_id');
                        res.body.should.have.property('title');
                        res.body.should.have.property('description');
                        res.body.should.have.property('price');
                        res.body.should.have.property('_id').eql(product.id);
                    done();
                });
            });
        });
    });

    // Test updating an individual product.
    describe('/PUT/:productID product', () => {
        it('It should update a product of a specific Product ID', done => {
            let product = new Product({
                title: "Who Moved My Cheese?",
                description: "Book by Spencer Johnson",
                price: 5.99
            });

            let newProduct = {
                title: "I Moved your cheese!",
                description: "A fake book",
                price: 0.99
            }

            product.save((err, product) => {
                chai.request('http://localhost:8080')
                .put('/products/' + product.id)
                .send(newProduct)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('n');
                        res.body.should.have.property('nModified').greaterThan(0);
                        res.body.should.have.property('ok').eql(1);
                    done();
                });
            });
        });
    });
});