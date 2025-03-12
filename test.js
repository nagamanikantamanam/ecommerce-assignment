async function hi() {
    try{
        throw Error("eroor hi")
    }catch(err){
        
console.log(err.message);

    }
}
async function bye(){
    try{
        await hi();
    }catch(err){
        console.log("byee");
        console.log(err.message)
    }
}
bye();