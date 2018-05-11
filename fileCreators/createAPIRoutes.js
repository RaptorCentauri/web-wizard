const createAPIRoutes = (model) => {
    let apiRouteFile =

    `
    app.get('/api/${model}/', (req, res) => {

    })

    app.post('/api/${model}', (req, res) => {

    })

    app.put('/api/${model}', (req,res)=>{
    })

    app.delete('/api/${model}', (req, res) => {

    })

    `

    return apiRouteFile
}

export default createAPIRoutes