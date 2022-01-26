# TypeScript vs JavaScript

> Disclaimer: I am a fan of TypeScript. My purpose here is to persuade you to feel the same. Or to at least be more open to it.

## UBIQUITY

Javascript is the language of the web. It is hugely ubiquitous. No doubt about that. However, TypeScript's popularity is on the rise.

Some popular npm packages are written using TypeScript:

- [MUI](https://github.com/mui-org/material-ui)
- [React Router](https://github.com/remix-run/react-router)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- [Remix](https://github.com/remix-run/remix)

## WHY?

I won't go into depth about the benefits of TypeScript, but here is my quick pitch:

- TypeScript makes code more understandable
- TypeScript makes it easier to refactor
- TypeScript really isn't that difficult, even for beginner developers

## THIS SAMPLE

The repo provides a simple sample meant to demonstrate the benefits listed above. It is a simple app. It displays a default user and allows you to make modifications to the user.

The **main** branch has the TypeScript version, while the **as-js** branch has the same app using plain old JavaScript. In fact, the JavaScript version was created by simply changing all of the file extensions to `.js` and removing any type information. Just switch between the two branches to see the differences and work with both.

## EXERCISE

When in the Javascript version

1. look for the user object and the property `username`. Rename it to `userName`. How difficult was that to get it working? Did you change it in all of the places?
2. where did `user.info.bar` come from? Is it a string, number, or boolean? Perhaps an object?
