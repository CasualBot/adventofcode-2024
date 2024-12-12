import fs from 'node:fs';
import readline from 'readline';
let partOneAnswer: number = 0;
let partTwoAnswer: number = 0;
let listOne: Array<number> = []; 
let listTwo: Array<number> = [];
let readStream: fs.ReadStream
let lineReader: readline.Interface;
async function main(): Promise<void> {
    readStream = fs.createReadStream('../../problem/day1/lists'); 
    lineReader = readline.createInterface({
        input: readStream
    });

    for await(const line of lineReader)
    {
        const l = line.split('   ');
        listOne.push(parseInt(l[0]));
        listTwo.push(parseInt(l[1]));

    }
    lineReader.close();
    readStream.destroy();

    listOne.sort();
    listTwo.sort();

    for(let i = 0; i < Math.min(listOne.length, listTwo.length); i++) {
        partOneAnswer += Math.abs(listOne[i] - listTwo[i]);
    }
    console.log(`Part One Answer: ${partOneAnswer}\n`);
    let similar: Array<number> = [];
    for await(const one of listOne) {
        let timesFound = 0;
        for await(const two of listTwo) {
            if(one == two) {
                timesFound++
            }
        }
        similar.push(one * timesFound);
    }
    for await(const it of similar)
    {
        partTwoAnswer += it;
    }
    console.log(`Part Two Answer: ${partTwoAnswer}`)
}
main();
