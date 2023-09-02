import supertest from 'supertest';
const request = supertest('https://jsonplaceholder.typicode.com')

describe('POC Tests', () => {
     
    it('GET /posts', async () => {
        const res = await request.get('/posts');
        // console.log('GET POSTS', res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body[0].id).toBe(1)
        
    })

    it('GET /comments with query params', async () => {
        // const res = await request.get('/comments?postId=1');
        // const res = await request.get('/comments').query('postId=1');
        const res = await request
            .get('/comments')
            .query({ postId: 1, limit: 10 })
        expect(res.body[0].postId).toBe(1)
    })

    it('POST /post', async () => {
        const payload = {
            "userId": 10,
            "id": 1,
            "title": "Hello Dude",
            "body": "I am Post Body",
            "": "I must be ignored from server"
        }
        const res = await request
            .post('/posts')
            .send(payload+'')
        console.log("POST Res -", res.body);
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe(payload.title);
        console.log("POST Res -", res.body);
    })


    it('PUT /posts/{id}', async () => {
        const getRes = await request.get('/posts/1');
        let beforeTitle = getRes.body.title;       
        console.log("POST beforeTitle -", beforeTitle);
        const payload = {
            "userId": 1,
            "id": 1,
            "title": "Hello Dude uodated",
            "body": "I am Post Body updated"
        }
        const res = await request
            .put(`/posts/1`)
            .send(payload)
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe(res.body.title);
        expect(res.body.title).not.toBe(beforeTitle);
        console.log("POST afterTitle -", res.body.title);
    })

    it('PATCH /posts/{id}', async () => {
        const getRes = await request.get('/posts/1');
        let beforeTitle = getRes.body.title;       
        console.log("PATCH beforeTitle -", beforeTitle);
        const payload = {"title": "Hello Dude uodated"}
        const res = await request
            .patch(`/posts/1`)
            .send(payload)
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe(res.body.title);
        expect(res.body.title).not.toBe(beforeTitle);
        console.log("PATCH afterTitle -", res.body.title);
    })


    it('DELETE /posts/{id}', async () => {
        const res = await request.delete(`/posts/1`)
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe(res.body.title);
    })
})

