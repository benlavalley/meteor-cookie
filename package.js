Package.describe({
  name: 'chuangbo:cookie',
  summary: "Simple cookies for browser.",
  version: "1.1.3",
  git: "https://github.com/chuangbo/meteor-cookie.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@2.5");
  api.use(['ecmascript'], ['client']);
  api.mainModule('cookie.js', 'client');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'chuangbo:cookie'], 'client');
  api.addFiles('cookie_tests.js', 'client');
});
