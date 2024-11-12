class Person {
    constructor(full_name,year){
        this.full_name = full_name
        this.year = year
    }
    getInfo(){
        const data = new Date().getFullYear()
        return [
            `Full name - ${this.full_name}`,
            `age - ${data - this.year}`
        ]
    }
}
export { Person }