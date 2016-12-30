const {parse} = require('url');
const {createReadStream} = require('fs');
module.exports = ({url}) => {
    const {pathname} = parse(url);
    if (pathname.endsWith('.js')) {
        return createReadStream(`.${pathname}`);
    }
    return `
        <!DOCTYPE html>
        <body>
            <script src="bundle.js"></script>
        </body>
    `;
}
