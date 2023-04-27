### 调试 react 源码

- 断点在 调试-已载入的脚本 内设置
- react 18.2.0
- react 仓库为 submodule
- 建议使用 node 16

- step 1

  - 拉取 react 仓库
  - 检查分支
  - 安装依赖
  - 构建项目

- step 2

  - 复制 react/build/node_modules 内的
  - react/react/umd/react.development.js
  - react/react/umd/react.development.js.map
  - react/react-dom/umd/react-dom.development.js
  - react/react-dom/umd/react-dom.development.js.map
  - 至 demo/public 下

- step 3
  - 进入 demo 启动项目
