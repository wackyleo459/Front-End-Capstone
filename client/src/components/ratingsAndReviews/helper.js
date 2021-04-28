const MetaChars = (key) => {
  let charObj = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
  };

  if (key === 'Size') {
    charObj.one = 'A size too small';
    charObj.two = '½ a size too small';
    charObj.three = 'Perfect';
    charObj.four = '½ a size too big';
    charObj.five = 'A size too wide';
  }
  if (key === 'Width') {
    charObj.one = 'Too narrow';
    charObj.two = 'Slightly narrow';
    charObj.three = 'Perfect';
    charObj.four = 'Slightly wide';
    charObj.five = 'Too wide';
  }
  if (key === 'Comfort') {
    charObj.one = 'Uncomfortable';
    charObj.two = 'Slightly uncomfortable';
    charObj.three = 'Ok';
    charObj.four = 'Comfortable';
    charObj.five = 'Perfect';
  }
  if (key === 'Quality') {
    charObj.one = 'Poor';
    charObj.two = 'Below average';
    charObj.three = 'What I expected';
    charObj.four = 'Pretty great';
    charObj.five = 'Perfect';
  }
  if (key === 'Length') {
    charObj.one = 'Runs short';
    charObj.two = 'Runs slightly short';
    charObj.three = 'Perfect';
    charObj.four = 'Runs slightly long';
    charObj.five = 'Runs long';
  }
  if (key === 'Fit') {
    charObj.one = 'Runs tight';
    charObj.two = 'Runs slightly tight';
    charObj.three = 'Perfect';
    charObj.four = 'Runs slightly long';
    charObj.five = 'Runs long';
  }

  return charObj;
};
 module.exports = MetaChars;