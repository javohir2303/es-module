import { Person } from "./person.js";
import { sleep } from "./sleep.js";
import { random } from "./random.js";
    
async function async_and_await() { 
    await sleep(random()).then((data)=>{
            const result = new Person("Javohir Yakubov", 2006).getInfo()
            console.log(`bu malumotlar chiqishiga ${data} millisekund vaqt ketdi...`)
            console.log(result)
    })
}
async_and_await()