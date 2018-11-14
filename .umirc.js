export default{
    plugins: [
        ['umi-plugin-react', {
            antd:true,
            dva:true,
            mock:true
        }],
    ],

    routes: [{
        path: '/home',
        component: '../layout',
        routes:[{
            path:'/home',
            component:'home'
        },{
            path:'user',
            component:'user'
        },{
            path:'upload',
            component:'upload'
        }]
      },{
          path:'/',
          component:'login'
      }],

    // proxy: {
    //     '/v1.0': {
    //       target: 'https://api.dttsh.cn/api',
    //       changeOrigin: true,
    //     },
    //   },
}