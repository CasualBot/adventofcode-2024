import fs from "node:fs";
import readline from "node:readline";

export function withinFloorRange(floor: Array<number>): boolean {
  return floor.every(
    (value: number) => Math.abs(value) > 0 && Math.abs(value) <= 3,
  );
}

export function positiveRange(floor: Array<number>): boolean {
  return floor.every((value) => value > 0);
}

export function negativeRange(floor: Array<number>): boolean {
  return floor.every((value) => value < 0);
}
async function main() {
  let partOneAnswer: number = 0;
  const readStream = fs.createReadStream("../../problem/day2/input");
  const _lineReader = readline.createInterface({
    input: readStream,
  });

  for await (const floorRow of _lineReader) {
    const floorArray = floorRow.split(" ").map(Number);
    let floorDiffsArray = Array<number>();
    floorArray.forEach((floorValue, floorIndex) => {
      if (!isNaN(floorArray[floorIndex] - floorArray[floorIndex + 1])) {
        floorDiffsArray[floorIndex] =
          floorArray[floorIndex] - floorArray[floorIndex + 1];
      }
    });
    if (withinFloorRange(floorDiffsArray)) {
      if (positiveRange(floorDiffsArray)) {
        partOneAnswer++;
        continue;
      }
      if (negativeRange(floorDiffsArray)) {
        partOneAnswer++;
        continue;
      }
    }
  }
  console.log(`Part one answer: ${partOneAnswer}`);
}

main();
