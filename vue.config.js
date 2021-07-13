const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports={
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    //打包文件输出位置
    outputDir:'project',
    //静态资源放置位置
    assetsDir: '',
    //是否生成sourceMap文件
    productionSourceMap: false,
    //配置dev-server
    // devServer:{
    //     host: '192.168.1.106',
    //     open: true,
    //     port: 6024,
    //     proxy:{
    //         '/api':{
    //             target:'http://192.168.1.25:8380',//接口地址
    //             changeOrigin: true,
    //             ws: true,
    //             pathRewrite: { // 路径重写，
    //                 '^/api': '/api' ,//将api替换为api
    //             }
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue:37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    }
}

