import supertest from 'supertest';
const request = supertest('https://sdetunicorns.com/api/test')


describe('BRAND Tests', () => {
    it('GET /brands', async () => {
        const res = await request.get('/brands');
        console.log('GET BRAND Tests',Object.keys(res.body[0]));
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThanOrEqual(1)
        expect(Object.keys(res.body[0])).toEqual(['_id', 'name' ])
    })

    // it.only('GET /brands with query params', async () => {
    //     // const res = await request.get('/comments?postId=1');
    //     // const res = await request.get('/comments').query('postId=1');
    //     const res = await request.get('/brand/63448f0500b2931578c0a5ac')
    //     expect(res.body.id).toEqual('63448f0500b2931578c0a5ac')
    // })

    
})

