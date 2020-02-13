let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === null)
    continue;
  console.log(cities[index]);
}
