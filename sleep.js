
const sleep = (time)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            return res(time)
        },time)
    })
}
export {sleep}