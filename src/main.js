import readline from "readline";
import Car from "./Car.js";

function readLineAsync(query) {
  return new Promise((resolve, reject) => {
    if (arguments.length !== 1) {
      reject(new Error("arguments must be 1"));
    }

    if (typeof query !== "string") {
      reject(new Error("query must be string"));
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

// 입출력 예시
async function play() {
  const namesInput = await readLineAsync("자동차 이름을 입력하세요 > ");
  const names = namesInput.split(",").map((name) => name.trim());
  const cars = names.map((name) => new Car(name));
  const RACE_COUNT = 5;

  for (let i = 0; i < RACE_COUNT; i++) {
    cars.forEach((car) => {
      car.moveForward();
    });
  }

  const result = cars.map((car) => `${car.name}: ${"-".repeat(car.position)}`);
  console.log(result.join("\n"));

  const winner = cars.filter(
    (car) => car.position === Math.max(...cars.map((car) => car.position))
  );

  console.log(
    `${winner.map((car) => car.name).join(", ")} 가 최종 우승했습니다.`
  );
}
play();
