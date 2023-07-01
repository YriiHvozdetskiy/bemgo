assemblage documentation https://github.com/werty1001/bemgo

assembly started on Node.js 12.21

with Word Press
change the settings to work with WP

in FRONT/tasks/del.js replace all on: 

====================
const del = require('del');

module.exports = {
    build: 0,
    name: 'del',
    run(done) {
        return del(['path/to/files'], { force: true });
    },
};
====================

uncomment line: 16,63 and comment line 62 in FRONT/core/index.js 

tailwind watch: npx tailwindcss -i app/blocks/develop/app/assets/styles.css -o dist/styles/styles.css --watch
