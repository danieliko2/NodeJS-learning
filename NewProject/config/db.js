
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://danieliko:<aij123maj456d7>@danieldb.1kkae.mongodb.net/DanielDB?retryWrites=true&w=majority?authSource=admin&replicaSet=xyz').then(() => {
    console.log(`connection successful`);
}).catch((err) => {
    console.log(err)
})

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI)
//         console.log(`MongoDB Connected: ${conn.connection.host}`)
//     } catch (err) {
//         console.log(err)
//         process.exit(1)
//     }
// }

//module.exports = connectDB