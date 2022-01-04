var
  letters = [
    'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ', // consonants
    'aeiouyAEIOUY',// vowels
    // add stRings here to customize to your needs
    '!"§$%&/()=?',
    '0123456789'
  ],
  btn = $('button'),
  pwd = $('textarea#passwords'),
  len = $('input#length'),
  qty = $('input#quantity');

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generate() {
  var
    length = parseInt(len.val(), 10),
    quantity = parseInt(qty.val(), 10),
    i, j, res = '', curKey;
  for (i = 0; i < quantity; i++) {
    curKey = Math.floor(Math.random() * letters.length);
    for (j = 0; j < length; j++) {
      res += randomItem(letters[curKey]);
      curKey = (curKey + 1) % letters.length;
    }
    res += '\n';
  }
  pwd.val(res);
}

btn.on('click', function () {
  generate();
});

generate();
