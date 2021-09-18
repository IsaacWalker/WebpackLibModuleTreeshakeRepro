
# Repro Webpack module lib format's un-treeshakeable output

1. Run `yarn here`
2. Run `yarn build`
3. Run `yarn link`
4. With CRA application or something else run `yarn link webpacklib-esm-test`
5. Include MyButton in the app. You should see 'Click me' as expected in production output.
6. Unexpectedly you should also see 'Hello', which should have been shaken out.