// nullable types
const searchName = (value: string | null) => {
  if (value) {
    console.log('Searching...');
  } else {
    console.log('There is nothing to search');
  }
};

searchName(null);

const getSpeedInMeterPerSecond = (value: unknown) => {
  const converter = (value: number) => (value * 1000) / 3600;
  if (typeof value === 'number') {
    console.log(`The speed is ${converter(value)} ms^1`);
  } else if (typeof value === 'string') {
    const [result, unit] = value.split(' ');
    console.log(`The speed is ${converter(Number(result))} ms^1`);
  } else {
    console.log('worng input');
  }
};

getSpeedInMeterPerSecond(200);
getSpeedInMeterPerSecond(null);
getSpeedInMeterPerSecond('1000 ms^1');

function throwError(msg: string): never {
  throw new Error(msg);
}

throwError('hahaha');
