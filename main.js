"use strict";

/**
 * @param {import('foo/types.js').Foo} foo
 * @param {import('bar/types.js').Bar} bar
 */
function bazzer(foo, bar) {
    return {
        baz: foo.name,
        qux: foo.flavor,
        quux: bar.age,
        grault: bar.lucky_number,
    };
}

module.exports.bazzer = bazzer;
