var nlp = require('nlp_compromise');
var _ = require('underscore');
var BaseTeacher = require('./base_teacher');
var EditItem = require('../../models/edit_item');

var WordConfusionTeacher = BaseTeacher.extend({

    lessonDecription : 'Swap words that are commonly mispelled or confused ' +
        'such as there-their or affect-effect.',

    // List of lists. What words are often confused for each other
    confusionWords : [
        ['affect', 'effect'],
        ['its', 'it\'s'],
        ['there', 'their', 'they\'re'],
        ['to', 'too', 'two'],
        ['whose', 'who\'s'],
        ['your', 'you\'re']
    ],

    /**
     * Search through given input text for examples of frequently confused words.
     * Return list of possible edits to the text that could swap in an incorrect word.
     * @override
     * @param {string} inputText
     * @returns {Array.<EditItem>} 
     */
    getPossibleErrors : function (inputText) {
        var errors = [];
        var tokens = _.flatten(_.map(nlp.tokenize(inputText), function(sentence) {
            return sentence.tokens;
        }));
        _.each(tokens, function(token, index) {
            var wordList = this._getConfusionWordList(token.normalised);
            if (!_.isUndefined(wordList)) {
                _.each(wordList, function(confusionWord) {
                    if (confusionWord !== token.normalised) {
                        var editItem = new EditItem(index, index, confusionWord, 'word-confusion');
                        errors.push(editItem);
                    }
                });
            }
        }, this);
        return errors;
    },

    _getConfusionWordList : function (word) {
        return _.find(this.confusionWords, function(wordList) {
            if (_.contains(wordList, word)) {
                return wordList;
            }
        });
    }
});

module.exports = WordConfusionTeacher; 
