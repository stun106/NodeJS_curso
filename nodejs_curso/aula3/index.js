const fs = require('fs').promises;
const path = require('path');

async function readdir(rootdir){
    rootdir = rootdir || path.resolve(__dirname);
    const file = await fs.readdir(rootdir);
    walk(file,rootdir);
}

async function walk(file,rootdir){
    for(let filex of file){
        const fileFullPath = path.resolve(rootdir,filex);
        const stats = await fs.stat(fileFullPath);
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue
        }
        console.log(filex, stats.isDirectory())
    }
}

readdir('/Users/José/Documents/nodejs/')
