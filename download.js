const MinecraftLoaders = require('./components/index.js');

// MinecraftLoaders.forge({
//     root: './.minecraft',
//     version: '1.4.3-latest',
// }).on('data',(msg)=>{
//     console.log(`Downloading | Progress ${msg.progress} | Total ${msg.total}`);
// });

// MinecraftLoaders.fabric({
//     root: './.minecraft',
//     version: '1.4.3-latest',
// }).on('data',(msg)=>{
//     console.log(`Downloading | Progress ${msg.progress} | Total ${msg.total}`);
// });

// MinecraftLoaders.legacyfabric({
//     root: './.minecraft',
//     version: '1.4.3-latest',
// }).on('data',(msg)=>{
//     console.log(`Downloading | Progress ${msg.progress} | Total ${msg.total}`);
// });

// MinecraftLoaders.quilt({
//     root: './.minecraft',
//     version: '1.4.3-latest',
// }).on('data',(msg)=>{
//     console.log(`Downloading | Progress ${msg.progress} | Total ${msg.total}`);
// });

MinecraftLoaders.getVersions({
    type: 'fabric',
}).on('data', (versions) => {
    console.log('[Fabric] Versiones disponibles:', versions);
}).on('error', console.error);