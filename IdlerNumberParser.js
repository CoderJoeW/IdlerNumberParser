/*
-----------------------------------------------------------
Number conversions from
http://www.thealmightyguru.com/Pointless/BigNumbers.html
-----------------------------------------------------------
*/

var ranges = [
	{ divider: 1000000000000000000000000000000000000000000000000000000 , suffix: 'Septendecillion' },
	{ divider: 1000000000000000000000000000000000000000000000000000 , suffix: 'Sexdecillion' },
    	{ divider: 1000000000000000000000000000000000000000000000000 , suffix: 'Quindecillion' },
    	{ divider: 1000000000000000000000000000000000000000000000 , suffix: 'Quattuordecillion' },
    	{ divider: 1000000000000000000000000000000000000000000 , suffix: 'Tredecillion' },
    	{ divider: 1000000000000000000000000000000000000000 , suffix: 'Duodecillion' },
    	{ divider: 1000000000000000000000000000000000000 , suffix: 'Undecillion' },
    	{ divider: 1000000000000000000000000000000000 , suffix: 'Decillion' },
    	{ divider: 1000000000000000000000000000000 , suffix: 'Nonillion' },
    	{ divider: 1000000000000000000000000000 , suffix: 'Octillion' },
    	{ divider: 1000000000000000000000000 , suffix: 'Septillion' },
    	{ divider: 1000000000000000000000 , suffix: 'Sextillion' },
    	{ divider: 1000000000000000000 , suffix: 'Quintillion' },
    	{ divider: 1000000000000000 , suffix: 'Quadrillion' },
    	{ divider: 1000000000000 , suffix: 'Trillion' },
	{ divider: 1000000000 , suffix: 'Billion' },
	{ divider: 1000000 , suffix: 'Million' },
	{ divider: 1000 , suffix: 'Kilo' },
	{ divider: 100 , suffix: 'Hundred' }
];

function INP(number, round,stringLimit) {
	for (var i = 0; i < ranges.length; i++) {
		if (number >= ranges[i].divider) {
        		if(stringLimit == ''){
            			if (round == '') {
					return (number / ranges[i].divider) + ranges[i].suffix;
				} else {
					var res = (number / ranges[i].divider).toFixed(round),
					fr = res - parseInt(res, 10);
					return (fr > 0 ? res : parseInt(res, 10)) + ranges[i].suffix;
				}
            		}else{
				if (round == '') {
					return (number / ranges[i].divider) + Limiter(ranges[i].suffix,stringLimit);
				} else {
					var res = (number / ranges[i].divider).toFixed(round),
					fr = res - parseInt(res, 10);
					return (fr > 0 ? res : parseInt(res, 10)) + Limiter(ranges[i].suffix,stringLimit);
				}
            		}
		}
	}
	return number.toString();
}

function Limiter(str,limit){
	if(str.length > limit){
    		str = str.substring(0,limit);
        	return str;
    	}
    return str;
}
