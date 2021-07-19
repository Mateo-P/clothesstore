const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    app: {
        storageDir: 'tmp'
    },
    images: {
        domains: ['http2.mlstatic.com', 'mco-s1-p.mlstatic.com', 'localhost']
    }
};
