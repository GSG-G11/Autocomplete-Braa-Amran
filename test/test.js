const supertest = require('supertest');
const router = require('../src/router')

test('err', (done) => {
    supertest(router)
    .get("/asd")
    .expect(404)
    // .expect('Content-Type',/html/)
    .end((err,res)=>{
      if(err) return done(err);
      expect(res.text).toBe('not found');
      done()
    })
  })

test('Done', (done) => {
    supertest(router)
    .get("/")
    .expect(200)
    // .expect('Content-Type',/html/)
    .end((err,res)=>{
      if(err) return done(err);
      expect(res.statusCode).toBe(200);
      done()
    })
  })
  