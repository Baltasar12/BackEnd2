export default {
    PORT: process.env.PORT || 8080,
    mongoRemote: {
        client: 'mongodb',
        cnxStr: 'mongodb+srv://balta_sar:Jf4yc8iAkujCNv5s@cluster0.zly7w.mongodb.net/?retryWrites=true&w=majority'
    },
    fileSystem: {
        path: './DB'
    }
}