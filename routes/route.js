module.exports=(app)=>{
    const blog=require('../controllers/controllers');
    app.get('/api/blogs',blog.getall);
    app.post('/api/create',blog.create);
    app.get('/api/blog/:blogID',blog.getone)
    app.put('/api/update/:blogID',blog.updateone)
    app.delete('/api/delete/:blogID',blog.deleteone)
    app.get('/api/blogs/title',blog.getbytitle)
    app.get('/api/blogs/author',blog.getbyauthor)
    app.get('/api/blogs/desc',blog.getbydesc)
} 