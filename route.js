const { APP } = require('./index');
const studentRoute = require('./route/studentRoute')

const routes = async () => {
    APP.get('/', (req, res) => {
        res.send('Node Api Working properly')
    })

    APP.use('/api/student', studentRoute)

}

module.exports.route = routes
