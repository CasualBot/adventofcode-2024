import fs from 'node:fs'
import readline from 'readline';

async function main()
{
    let partOneAnswer: number = 0;
    const readStream = fs.createReadStream('../../problem/day2/input')
    const lineReader = readline.createInterface({
        input: readStream
    });

    for await(const line of lineReader) {
        const numbers = line.split(' ');
        numbers.forEach((floor, index) => {
            if (index != numbers.length) {
                const current = parseInt(numbers[index]);
                const next = parseInt(numbers[index + 1]);
                console.log(current);
                console.log(next);
                console.log(current - next);
            }
        })

    }
    console.log(`Part one answer: ${partOneAnswer}`);
}

main();