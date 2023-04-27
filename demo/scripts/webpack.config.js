require("../env/env.js");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const dirRoot = path.resolve(__dirname, "../");

const baseConfig = {
  context: path.resolve(dirRoot, "./src"),
  entry: "./main.jsx",
  output: {
    path: path.resolve(dirRoot, "./dist"), //必须是绝对路径
    filename: "[name]_[contenthash].js",
    chunkFilename: "js/[name]_[contenthash].js",
    clean: true,
    publicPath: "/",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devtool: false,
  // loader 规则
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /.j(sx|s)/, // 配置js和jsx的loader
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
                useBuiltIns: "usage",
                corejs: "3",
              },
            ],
            ["@babel/preset-react"],
          ],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif)/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 限制于 8kb
          },
        },
      },
    ],
  },
  // 模块解析
  resolve: {
    alias: {
      "@": path.resolve(dirRoot, "./src"),
    },
    extensions: [".jsx", "..."], // 自动不全文件后缀
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "react",
      template: path.resolve(dirRoot, "./public/index.html"),
      filename: "index.html",
    }),
    // css 分离
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  externals: {
    react: "React",
    "react-dom/client": "ReactDOM",
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    const devServer = {
      historyApiFallback: true,
      compress: true,
      client: {
        logging: "error",
        progress: true,
        overlay: true,
      },
      port: 8889,
    };
    baseConfig.devServer = devServer;
    baseConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));
  }

  if (argv.mode === "production") {
    const optimization = {
      minimize: true,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            filename: "[contenthash].vendor.js",
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          react: {
            name: "ReactAbout",
            test: /.jsx/,
            priority: 1,
          },
        },
      },
    };
    baseConfig.optimization = optimization;
    baseConfig.plugins.push(
      new BundleAnalyzerPlugin({ analyzerMode: "static" })
    );
  }

  console.log(`运行环境 ${argv.mode}`);

  return baseConfig;
};
