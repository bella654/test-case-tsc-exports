# Reduced Test Case: How to import types.js?

This shows how exported types cannot also be used as package-scope types.

Re:

-   https://stackoverflow.com/q/73480632/151312
-   https://github.com/microsoft/TypeScript/issues/50436

### Setup

```sh
curl https://webi.sh/node | sh
source ~/.config/envman/PATH.sh

npm install --location=global jshint prettier uglify-js typescript fixjson
```

```sh
git clone https://gist.github.com/coolaj86/aaaf1a5c469a47d40f5f57d37ea4484f
cd ./aaaf1a5c469a47d40f5f57d37ea4484f/
```

### Top-Level Package

```sh
tsc -p tsconfig.json
```

❌

```txt
main.js:4:19 - error TS2306: File '/private/tmp/aaaf1a5c469a47d40f5f57d37ea4484f/node_modules/foo/types.js' is not a module.

4  * @param {import('foo/types.js').Foo} foo
                    ~~~~~~~~~~~~~~


Found 1 error in main.js:4
```

### Package Foo

```sh
(
    cd ./node_modules/foo/
    tsc -p tsconfig.json
)
```

✅

### Package Bar

```sh
(
    cd ./node_modules/bar/
    tsc -p tsconfig.json
)
```

❌

```txt
bar.js:3:12 - error TS2552: Cannot find name 'Bar'. Did you mean 'bar'?

3 /** @type {Bar} */
             ~~~

  bar.js:4:5
    4 let bar = {
          ~~~
    'bar' is declared here.


Found 1 error in bar.js:3

```

### These are not the droids you're looking for.

To any random wanderers, try <https://github.com/BeyondCodeBootcamp/js-with-types-jsdoc-tsc-starter> instead.
