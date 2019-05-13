function *idGenerate(){
    let i=0;
    while(i<10){
        yield i;//pause here
        i++;
    }
}

const generator = idGenerate();
module.exports.idGenerator = generator;