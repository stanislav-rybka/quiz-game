export const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex = null;

  while ( currentIndex > 0 ) {
    randomIndex = Math.floor( Math.random() * currentIndex );
    currentIndex--;

    [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
  }

  return array;
}