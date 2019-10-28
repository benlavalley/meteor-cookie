Package.describe({
  name: 'chuangbo:cookie',
  summary: "Simple cookies for browser.",
  version: "1.1.2",
  git: "https://github.com/chuangbo/meteor-cookie.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.8.1");
  api.export('Cookie', 'client');
  api.add_files('cookie.js', 'client');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'chuangbo:cookie'], 'client');
  api.addFiles('cookie_tests.js', 'client');
});
