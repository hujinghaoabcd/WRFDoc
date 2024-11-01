export const redirects = JSON.parse("{\"/manual/1.html\":\"/article/jjc4ynrx/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"WRF 用户指南"} }],
  ["/guide/WRF%E6%A6%82%E8%BF%B0.html", { loader: () => import(/* webpackChunkName: "guide_WRF概述.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/guide/WRF概述.html.js"), meta: {"title":"WRF概述"} }],
  ["/guide/%E7%BC%96%E8%AF%91%E6%8C%87%E5%8D%97.html", { loader: () => import(/* webpackChunkName: "guide_编译指南.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/guide/编译指南.html.js"), meta: {"title":"编译指南"} }],
  ["/article/jjc4ynrx/", { loader: () => import(/* webpackChunkName: "article_jjc4ynrx_index.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/article/jjc4ynrx/index.html.js"), meta: {"title":"installation"} }],
  ["/manual/", { loader: () => import(/* webpackChunkName: "manual_index.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/manual/index.html.js"), meta: {"title":"页面的标题"} }],
  ["/resources/1.html", { loader: () => import(/* webpackChunkName: "resources_1.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/resources/1.html.js"), meta: {"title":""} }],
  ["/resources/", { loader: () => import(/* webpackChunkName: "resources_index.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/resources/index.html.js"), meta: {"title":"页面的标题"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Projects/WRFDoc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
