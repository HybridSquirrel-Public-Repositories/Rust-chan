/*promt.start();
promt.get(['msg', 'chanel'], (err, result)=> {
    if(err) {return console.log(err);}
    let { cache } = client.channels.cache;
    let chl = cache.find(chl => chl.name.toLowerCase() === result.chanel)
    if(chl){ chl.send(`${msg}`)}
});*/