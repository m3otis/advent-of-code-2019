solutions = [];

const toasty = function() {
  var x = document.getElementById('toastygif');

  if (x.style.display === '') {
    x.style.display = 'none';
  }

  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
};

main();

function timer(toasty) {
  setTimeout(() => {
    toasty();
  }, 2000);

  setTimeout(() => {
    toasty();
  }, 5000);
}

function main() {
  runSolutions();
  createContent(solutions);
  printSolutions(solutions);
  timer(toasty);
}

function runSolutions() {
  solutions.push(one());
  solutions.push(two());
  solutions.push(three());
}

function three() {
  
}

function two() {
  const input =
    '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,9,23,1,23,5,27,2,6,27,31,1,31,5,35,1,35,5,39,2,39,6,43,2,43,10,47,1,47,6,51,1,51,6,55,2,55,6,59,1,10,59,63,1,5,63,67,2,10,67,71,1,6,71,75,1,5,75,79,1,10,79,83,2,83,10,87,1,87,9,91,1,91,10,95,2,6,95,99,1,5,99,103,1,103,13,107,1,107,10,111,2,9,111,115,1,115,6,119,2,13,119,123,1,123,6,127,1,5,127,131,2,6,131,135,2,6,135,139,1,139,5,143,1,143,10,147,1,147,2,151,1,151,13,0,99,2,0,14,0';
  const inputs = input.split(',');

  inputs[1] = 12;
  inputs[2] = 2;

  for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    const one = inputs[index + 1];
    const two = inputs[index + 2];
    const position = inputs[index + 3];

    if (element === '1') {
      inputs[position] = parseInt(inputs[one]) + parseInt(inputs[two]);
      index = index + 3;
    } else if (element === '2') {
      inputs[position] = parseInt(inputs[one]) * parseInt(inputs[two]);
      index = index + 3;
    } else if (element === '99') {
      break;
    } else {
      console.log('error in seq');
    }
  }

  // solution 2
  const input2 =
    '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,9,23,1,23,5,27,2,6,27,31,1,31,5,35,1,35,5,39,2,39,6,43,2,43,10,47,1,47,6,51,1,51,6,55,2,55,6,59,1,10,59,63,1,5,63,67,2,10,67,71,1,6,71,75,1,5,75,79,1,10,79,83,2,83,10,87,1,87,9,91,1,91,10,95,2,6,95,99,1,5,99,103,1,103,13,107,1,107,10,111,2,9,111,115,1,115,6,119,2,13,119,123,1,123,6,127,1,5,127,131,2,6,131,135,2,6,135,139,1,139,5,143,1,143,10,147,1,147,2,151,1,151,13,0,99,2,0,14,0';

  const inputs2 = input.split(',');
  let go = true;
  let solution2 = '';

  while (go === true) {
    for (let pos1 = 1; pos1 < 100; pos1++) {
      let inputs = [...inputs2];
      inputs[1] = pos1;

      for (let pos2 = 1; pos2 < 100; pos2++) {
        inputs[2] = pos2;

        for (let index = 0; index < inputs2.length; index++) {
          const element = inputs2[index];
          const one = inputs2[index + 1];
          const two = inputs2[index + 2];
          const position = inputs[index + 3];

          if (element === '1') {
            inputs[position] = parseInt(inputs[one]) + parseInt(inputs[two]);
            index = index + 3;
          } else if (element === '2') {
            inputs[position] = parseInt(inputs[one]) * parseInt(inputs[two]);
            index = index + 3;
          } else if (element === '99') {
            break;
          } else {
            console.log('e');
          }
        }

        if (inputs[0] === 19690720) {
          solution2 = inputs[1] * 100 + inputs[2];
          go = false;

          break;
        } else {
          inputs = [...inputs2];
          inputs[1] = pos1;
        }
      }
    }
  }

  return '[1]: ' + inputs[0] + ' [2]: ' + solution2;
}

function one() {
  // input
  const input =
    '74364 146203 128470 91616 115655 134147 53470 126471 70040 88750 142353 143329 86356 118399 97959 148345 117705 87624 63862 71962 106974 66255 119735 78726 93698 148680 144638 83341 149571 147196 54526 91775 63153 143441 71134 114131 120931 109833 106073 64547 126938 52877 89945 59466 79660 147815 55381 100052 78824 121844 104155 117313 69305 144645 81350 123512 81467 120836 118612 143999 90792 71054 138942 56481 71850 85266 77437 86530 147311 133699 126684 58708 149482 104101 67985 81648 95290 77155 76578 116025 83980 59517 62078 89003 126205 122542 116388 144040 102560 77098 127534 56415 85703 85580 86787 72029 82533 132187 70849 98839';
  const inputs = input.split(' ');

  // solution 1
  let solution;

  let total = 0;
  const divide = 3;
  const subtract = 2;

  inputs.forEach(input => {
    const exactAmount = input / divide;
    const roundAmount = Math.floor(exactAmount);
    const subAmount = roundAmount - subtract;
    total = total + subAmount;
  });

  solution = total;

  // solution 2
  let solution2;
  let total2 = 0;

  function calculateFuelNeeded(input) {
    const exactAmount = input / divide;
    const roundAmount = Math.floor(exactAmount);
    const subAmount = roundAmount - subtract;

    return subAmount;
  }

  inputs.forEach(input => {
    let fuelAmount = input;

    let fuel = calculateFuelNeeded(fuelAmount);

    while (fuel > 0) {
      total2 = total2 + fuel;
      fuel = calculateFuelNeeded(fuel);
    }
  });

  solution2 = total2;

  solution = '[1]: ' + solution + ' [2]: ' + solution2;

  return solution;
}

function printSolutions(solutions) {
  for (let index = 0; index < solutions.length; index++) {
    const solution = solutions[index];
    const element = document.getElementById('solution' + index);
    element.innerHTML = solution;
  }
}

function createContent(solutions) {
  const element = document.getElementById('content');

  for (let index = 0; index < solutions.length; index++) {
    const h2element = document.createElement('div');
    h2element.innerHTML = `--- Day 0${index + 1} ---`;
    h2element.style.color = '';

    const solution = document.createElement('div');
    solution.id = `solution${index}`;
    solution.style.wordBreak = 'break-word';

    element.appendChild(h2element);
    element.appendChild(solution);
  }
}
