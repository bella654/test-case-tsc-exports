/**
 * @param {import('foo/types.js').Foo} foo
 */
function bazzer(foo) {
  return {
    baz: foo.name,
    qux: foo.flavor,
  };
}