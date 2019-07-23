module.exports = app => {
    app.get('*', (req, res) => {
        console.log('get')
        console.log(req.body)
        console.log(req.params)
        res.send('get')
    })
        .post('*', (req, res) => {
            console.log('post')
            console.log(req.body)
            res.send('post')
        })
}