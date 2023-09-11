### 基础环境

- react 18.2.0
- react 仓库为 submodule
- node@16

#### step 1 

  - 构建react (根目录执行)
    - 安装依赖 npm run i-react (可能会有部分依赖 无法安装 可直接尝试 build 命令)
    - 构建项目 npm run build

#### step 2

  - 复制 react/build/node_modules 内的
    - react/react
    - react/react-dom
    - 至 demo/public 下

#### step 3 
  - 启动测试项目
    - 进入 demo 安装依赖
    - 项目根目录执行 npm run start


#### step 4
  - 使用 运行和调试 进行测试
    - 断点在 调试-已载入的脚本 内设置

