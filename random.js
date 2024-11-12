function random(){
    const ran = Math.trunc(Math.random()*1000)
    if(ran < 100 && ran > 999){
        random()
    }
    return ran
}
export {random}