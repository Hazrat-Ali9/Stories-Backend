import app from './app'
// Server js
const main = async () => {
    try {
    
        app.listen(process.env.PORT || 4000, () => {
            console.log('Server started on port 4000')
        })
    } catch (error) {
        console.log(error)
    }
}

main()