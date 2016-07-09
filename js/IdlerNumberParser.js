/*
-----------------------------------------------------------
Number conversions from
http://www.thealmightyguru.com/Pointless/BigNumbers.html
-----------------------------------------------------------
*/

var ranges = [
    { divider: 1000000000000000000000000000000000 , suffix: 'Dec' },
    { divider: 1000000000000000000000000000000 , suffix: 'Non' },
    { divider: 1000000000000000000000000000 , suffix: 'Oct' },
    { divider: 1000000000000000000000000 , suffix: 'Sep' },
    { divider: 1000000000000000000000 , suffix: 'Sex' },
    { divider: 1000000000000000000 , suffix: 'Quin' },
    { divider: 1000000000000000 , suffix: 'Quad' },
    { divider: 1000000000000 , suffix: 'T' },
	{ divider: 1000000000 , suffix: 'B' },
	{ divider: 1000000 , suffix: 'M' },
	{ divider: 1000 , suffix: 'K' },
	{ divider: 100 , suffix: 'H' }
];

function INP(number, round) {
  for (var i = 0; i < ranges.length; i++) {
    if (number >= ranges[i].divider) {
      if (round == '') {
        return (number / ranges[i].divider) + ranges[i].suffix;
      } else {
        var res = (number / ranges[i].divider).toFixed(round),
          fr = res - parseInt(res, 10);
        return (fr > 0 ? res : parseInt(res, 10)) + ranges[i].suffix;
      }
    }
  }
  return number.toString();
}
