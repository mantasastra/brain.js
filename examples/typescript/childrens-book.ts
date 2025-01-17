import { brain } from '../../src';

const trainingData = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.',
];

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
  iterations: 1500,
  log: (details: string) => console.log(details),
  errorThresh: 0.011,
});

console.log('Training result: ', result);

const run1: string = lstm.run('Jane');
const run2: string = lstm.run('Doug');
const run3: string = lstm.run('Spot');
const run4: string = lstm.run('It');

console.log(`run 1: Jane ${run1}`);
console.log(`run 2: Doug ${run2}`);
console.log(`run 3: Spot ${run3}`);
console.log(`run 4: It ${run4}`);
