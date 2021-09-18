
# Repro Webpack module lib format's un-treeshakeable output

1. Run `yarn` here
3. Run `yarn build`
4. Run `yarn link`
5. With CRA application or something else run `yarn link webpacklib-esm-test`
6. Include MyButton in the app. You should see 'Click me' as expected in production output.
7. Unexpectedly you should also see 'Hello', which should have been shaken out.
