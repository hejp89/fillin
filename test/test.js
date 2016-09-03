require('../fillin.js');

var test = require('utest');
var assert = require('assert');

test('fillin#date', {
    'valid input checks': function() {
        try {
            fillin.date(new Date(2016, 7, 1), new Date(2016, 9, 1), fillin.DAY)
        } catch (err) {
            assert.equal(err, 'end, start, and delta must be supplied');
        }

        try {
            fillin.date(new Date(2016, 7, 1), new Date(2016, 9, 1), 'something wrong')
        } catch (err) {
            assert.equal(err, 'delta must be eith day, week, or month');
        }

        try {
            fillin.date(new Date(2016, 9, 1), new Date(2016, 7, 1), fillin.DAY);
        } catch (err) {
            assert.equal(err, 'end must be after start');
        }
    },

    'check day interval': function() {
        var correctDates = [new Date(2016, 7, 25), new Date(2016, 7, 26), new Date(2016, 7, 27), new Date(2016, 7, 28), new Date(2016, 7, 29), new Date(2016, 7, 30),
                            new Date(2016, 7, 31), new Date(2016, 8, 1), new Date(2016, 8, 2), new Date(2016, 8, 3), new Date(2016, 8, 4), new Date(2016, 8, 5)];

        var dates = fillin.date(new Date(2016, 7, 25), new Date(2016, 8, 5), fillin.DAY);

        for (var i = 0; i < correctDates.length; i++) {
            assert.equal(correctDates[i].toUTCString(), dates[i].toUTCString());
        }

        assert.equal(correctDates.length, dates.length);
    },

    'check week interval': function() {
        var correctDates = [new Date(2016, 7, 1), new Date(2016, 7, 8), new Date(2016, 7, 15), new Date(2016, 7, 22), new Date(2016, 7, 29), new Date(2016, 8, 5)];

        var dates = fillin.date(new Date(2016, 7, 1), new Date(2016, 8, 6), fillin.WEEK);

        for (var i = 0; i < correctDates.length; i++) {
            assert.equal(correctDates[i].toUTCString(), dates[i].toUTCString());
        }

        assert.equal(correctDates.length, dates.length);
    },

    'check month interval': function() {
        var correctDates = [new Date(2016, 7, 1), new Date(2016, 8, 1), new Date(2016, 9, 1)];

        var dates = fillin.date(new Date(2016, 7, 1), new Date(2016, 9, 1), fillin.MONTH);

        for (var i = 0; i < correctDates.length; i++) {
            assert.equal(correctDates[i].toUTCString(), dates[i].toUTCString());
        }

        assert.equal(correctDates.length, dates.length);
    },
});
