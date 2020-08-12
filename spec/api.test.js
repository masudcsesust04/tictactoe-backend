const request = require("supertest");
const app = require("../app");

describe('Root path test', () => {
  it('It should response 200 status code', () => {
    return request(app).get("/").expect(200);
  });
  
  it('should response the json object', async () => {
    const res = await request(app).get('/');
    const response = { message: "Welcome to tictactoe backend API application." };
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(response);
  });
});

describe('Rounds', () => {
  it('should create a new round', async() => {
    const res = await request(app).post('/api/rounds').send({});
    expect(res.statusCode).toBe(200);
    expect(res.body.winner).toEqual(null);
  });
});

