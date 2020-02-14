function contains(city, destinations) {

  for (let i = 0; i < destinations.length; i++) {
    if (city === destinations[i]) {
      return true;
    }
  }
  return false;
}


let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
