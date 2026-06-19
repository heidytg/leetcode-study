// Car Fleet — https://leetcode.com/problems/car-fleet/
export function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position
    .map((pos, i) => ({ pos, speed: speed[i] }))
    .sort((a, b) => b.pos - a.pos); // closest to target first

  let fleets = 0;
  let curTime = 0;
  for (const car of cars) {
    const time = (target - car.pos) / car.speed;
    if (time > curTime) {
      fleets++;
      curTime = time;
    }
  }
  return fleets;
}
