

  

 const CracoLessPlugin = require('craco-less-plugin')
 const path = require('path')
 
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyVars: {
          hack: `true;@import "${require.resolve(path.join(__dirname, "src/styles/theme.less"))}";`
        },
        javascriptEnabled: true
      }
    }
  ]
}


// const CracoLessPlugin = require('craco-less');
// const path = require('path')

// module.exports = {
//     plugins: [
//       {
//         plugin: CracoLessPlugin,
//         options: {
//            customizeThemeLessPath: path.join(__dirname, "src/styles/theme.less"),
//             lessLoaderOptions: {
//              lessOptions: {
//               javascriptEnabled: true,
//             },
//           },

//         },
//       },
//     ],
//   };
