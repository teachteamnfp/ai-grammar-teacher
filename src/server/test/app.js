var Parser = require('../services/parser');

var sampleInputText = 'Dick and Jane were two children who had a series of books ' +
    'written about them that were used to help real children learn to read ' + 
    'from the 1930\'s to 1970\'s. In 2005, there was a movie made about ' +
    'Dick and Jane, starring Jim Carrey. In the movie, Dick and Jane resort to ' +
    'bank robbery to make a living. Their movie characters sure seem different than the ' +
    'original children\'s books.';

var metsInputText = 'NEW YORK -- The New York Mets have made a one-year, $15.8 million qualifying offer to free-agent infielder Daniel Murphy. Murphy hit .281 with 38 doubles, 14 homers and 73 RBIs in 499 regular-season at-bats. The long ball total represented a career high as Murphy placed more emphasis on pulling the ball at the request of Mets hitting coach Kevin Long.';

console.log('testing. Hello? World?');
var parser = new Parser();
var outputText = parser.getEditedText(metsInputText);
console.log('InputText = \n', sampleInputText);
console.log('OutputText = \n', outputText);
