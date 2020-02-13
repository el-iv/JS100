let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/*
  It will log:
    neigh
    tweet tweet
    *cricket*

    It will executed the statement associated with the case that matches,
    as well as the statements in all case following the matching case until
    reaching either the end of the switch statement or a break.
*/
