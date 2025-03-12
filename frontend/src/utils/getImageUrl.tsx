export default function getImmageUrl(imagePath:string|undefined):string|undefined{
    if(!imagePath){
        return undefined
    } 
    const k=imagePath.split('/');
     return 'http://localhost:3000/images/'+k[k.length-1];
}