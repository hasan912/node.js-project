import inquirer from "inquirer";

function counter(paragraph:string){

    let freewhitespace = paragraph.replace(/\s/g,"")

    return freewhitespace.length

}

async function startwordcount(counter:(text:string)=>number) {
   do{
    let res = await inquirer.prompt({
        type:"input",
        name:'paragraph',
        message:`Please enter the file path..`
    })

    console.log(counter(res.paragraph));
    
   }while(true)
}

startwordcount(counter)