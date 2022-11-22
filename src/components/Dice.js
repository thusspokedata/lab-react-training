function Dice() {
  let x = Math.floor(Math.random() * 6 + 1);
  return (
    <button>
      <img src={`./assets/images/dice{x}.png`}></img>;
    </button>
  );
}

function formatWords(words) {
  let str = '';
  if (!words || words === []) {
    return '';
  } else if (words.length === 1) {
    return words[0];
  } else {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) {
        str = str + ', ' + words[i];
      }
    }
  }
  let newStr = str.split('').slice(2, str.split('').lastIndexOf(','))(
    newStr.length === 0
  )
    ? str.slice(str.lastIndexOf(' ') + 1)
    : newStr.join('') + ' and' + str.slice(str.lastIndexOf(' '));
}
