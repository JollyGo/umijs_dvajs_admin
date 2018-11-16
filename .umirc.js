export default{
    plugins: [
        ['umi-plugin-react', {
            antd:true,
            dva:true
            // mock:true
        }],
    ],

    routes: [{
        path: '/home',
        component: '../layout',
        routes:[{
            path:'.',
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

    proxy: {
        '/v1.0': {
          target: 'http://localhost:5000/api',
          changeOrigin: true,
        },
      },
}