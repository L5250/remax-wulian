const pages = [
  'pages/index/index',
  'pages/login/index',
  "pages/home/index",
];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: 'Remax Ali Template',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  pages,
  entryPagePath: "pages/login/index",
  window: {
    navigationBarTitleText: '微信小程序',
    // navigationBarBackgroundColor: '#282c34',
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页"
      },
      {
        pagePath: "pages/login/index",
        text: "登录"
      },
      {
        pagePath: "pages/index/index",
        text: "初始页"
      }
    ]
  }
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Toutiao Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: 'Remax Web Template',
};
