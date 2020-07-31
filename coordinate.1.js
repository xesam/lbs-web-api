const fs = require('fs');
const c = require('./src/Coordinate');


const BATCH_COUNT = 200;
let count = 1;
function next() {
    if (count > BATCH_COUNT) {
        return;
    }
    setTimeout(() => {
        const points = new Array(40).fill(0).map(ele => {
            return [116.3 + 0.5 * Math.random(), 39.9 + 0.5 * Math.random()];
        });
        c.coordinate(points).then(locations => {
            console.log(`count=${count}`);
            const complete = locations.map((ele, index) => {
                const raw = points[index];
                return [...raw, ...ele].join(',');
            }).join('\n');
            fs.writeFileSync('./out.csv', complete, { flag: 'a' });
            fs.writeFileSync('./out.csv', '\n', { flag: 'a' });
            count++;
            next();
        }).catch(e => {
            console.error(`count=${count}`, e);
            next();
        });
    }, 20);
}

next();