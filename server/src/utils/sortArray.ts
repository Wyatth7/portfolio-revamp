// Have two loops, one nested in the other.
// Have the first loop sort objects based on the year value, then loop through array again and push
//  all objects with that year value to its own array.
// Lastly, send an object to the client that contains seperated years.
// This should be done without hard coding the years when instantiating the arrays.
// What may end up happening is I push the objects to the array in order from earliest to least year, then handle
//  the rest on the client.

interface ITimeLine {
  year: string;
  title: string;
  text: string;
}

export const sortArray = (array: ITimeLine[]) => {
  for (
    let highLevelArray = 0;
    highLevelArray < array.length;
    highLevelArray++
  ) {
    const year = array[highLevelArray].year;

    for (let lowLevelArray = 0; lowLevelArray < array.length; lowLevelArray++) {
      if (year === array[lowLevelArray].year) {
      }
    }
  }
};
