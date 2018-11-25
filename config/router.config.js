export default [
  // user
  // {
  //   path: '/user',
  //   component: '../layouts/UserLayout',
  //   routes: [
  //     { path: '/user', redirect: '/user/login' },
  //     { path: '/user/login', component: './User/Login' },
  //     { path: '/user/register', component: './User/Register' },
  //     { path: '/user/register-result', component: './User/RegisterResult' },
  //   ],
  // },
  // app
  {
    path: "/",
    component: "../layouts/BasicLayout",
    // Routes: ['src/pages/Authorized'],
    // authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: "/", redirect: "/dashboard/analysis" },
      {
        path: "/dashboard",
        name: "dashboard",
        icon: "dashboard",
        routes: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: "./Dashboard/Analysis"
          },{
            path: "/dashboard/sourceslist",
            name: "sources",
            component: "./Dashboard/SourcesList"
          }
        ]
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        component: '404',
      },
    ]
  }
];
