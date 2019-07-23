module.exports = app => {
    app.get('*', (req, res) => {
        console.log('get')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.post('*', (req, res) => {
        console.log('post')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.put('*', (req, res) => {
        console.log('Put')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.patch('*', (req, res) => {
        console.log('patch')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.delete('*', (req, res) => {
        console.log('Delete')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.copy('*', (req, res) => {
        console.log('copy')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.head('*', (req, res) => {
        console.log('Head')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.options('*', (req, res) => {
        console.log('Options')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.link('*', (req, res) => {
        console.log('link')
        console.log(req.body)
        console.log(req.params)
        res.send('link')
    })
    app.unlink('*', (req, res) => {
        console.log('unlink')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.purge('*', (req, res) => {
        console.log('purge')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.lock('*', (req, res) => {
        console.log('lock')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.unlock('*', (req, res) => {
        console.log('unlock')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    app.propfind('*', (req, res) => {
        console.log('propfind')
        console.log(req.body)
        console.log(req.params)
        res.json({ "body": req.body, "params": req.params })
    })
    // app.view('*', (req, res) => {
    //     console.log('view')
    //     console.log(req.body)
    //     console.log(req.params)
    //     res.json({ "body": req.body, "params": req.params })
    // })
}