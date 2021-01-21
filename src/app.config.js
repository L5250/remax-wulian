const pages = [
  'pages/index/index',
  'pages/login/index',
  "pages/home/index",
  "pages/sortGoods/index",
  "pages/recommend/index",
  "pages/shoppingCart/index",
  "pages/user/index",
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
  entryPagePath: "pages/home/index",
  window: {
    navigationBarTitleText: '微信小程序',
    // navigationBarBackgroundColor: '#282c34',
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        iconPath: '/images/icon/home.png',
        selectedIconPath: '/images/icon/home-1.png',
        text: "首页"
      },
      {
        pagePath: "pages/sortGoods/index",
        iconPath: '/images/icon/sortGoods.png',
        selectedIconPath: '/images/icon/sortGoods-1.png',
        text: "分类"
      },
      {
        pagePath: "pages/recommend/index",
        iconPath: '/images/icon/recommend.png',
        selectedIconPath: '/images/icon/recommend-1.png',
        text: "推荐"
      },
      {
        pagePath: "pages/shoppingCart/index",
        iconPath: '/images/icon/shoppingCart.png',
        selectedIconPath: '/images/icon/shoppingCart-1.png',
        text: "购物车"
      },
      {
        pagePath: "pages/user/index",
        iconPath: '/images/icon/user.png',
        selectedIconPath: '/images/icon/user-1.png',
        text: "我的"
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
