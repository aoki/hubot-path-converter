# hubot-path-converter

Transform file path between windows and mac each other.
Windows file path `\\foo\bar\baz` transform to `smb://foo/bar/baz`.
Mac file path `smb://foo/bar/baz` transform to `\\foo\bar\baz`.

![demo](demo.gif)


## How to Install

1. `npm i hubot-path-converter`
2. Add `hubot-path-converter` to the `external-scripts.json`
