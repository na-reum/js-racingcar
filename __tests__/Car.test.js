import Car from "../src/Car.js";

describe("Car 클래스 기능 테스트", () => {
  let car;

  beforeEach(() => {
    car = new Car("na-reum");
  });
  describe("Car 객체 생성 테스트", () => {
    it("Car객체는 생성시 string으로 넘긴 text를 name으로 가진다.", () => {
      expect(car.name).toBe("na-reum");
    });

    it("Car객체의 초기 position 값은 0이다.", () => {
      expect(car.position).toBe(0);
    });
  });
  describe("moveForward", () => {
    it("moveForward 실행시 position값에 1을 더한다.", () => {
      const initialPosition = car.position;
      car.moveForward();
      expect(car.position).toBe(initialPosition + 1);
    });
  });
});
