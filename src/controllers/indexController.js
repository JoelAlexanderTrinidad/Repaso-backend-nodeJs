const path = require('path');

module.exports = {
    index: (req, res) => {
        return res.sendFile(path.join(__dirname, '../../public/views/index.html'))
    }
}