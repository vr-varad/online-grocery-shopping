module.exports = (app)=>{
    app.use('/app-events',async(req,res,next)=>{
        const {payload} = req.body

        console.log('---------Product Service Recieved Event---------')
        return res.json(payload)
    })
}