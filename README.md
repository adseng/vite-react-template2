vite + react + tailwindcss

install
```shell
pnpm i
```
start
```shell
pnpm dev
```
build
```shell
pnpm build
```

# 目录

router 路由

component 公共组件 【建议】两次以上复用 【强制】大写字母开头

store 状态管理 【强制】全局状态，store不只有一个，需要跨组件传递状态的情况，可以创建页面专属的store

page 页面 【强制】小写字母开头

# css
【建议】使用tailwind，非必要不新增css文件
【建议】注意响应式布局，适配小屏

# git
【建议】格式：type(需求编号/bug编号):【影响范围/页面/模块】--【说明】

- feat - 新功能 feature
- fix - 修复 bug
- docs - 文档注释
- style - 代码格式(不影响代码运行的变动)
- refactor - 重构、优化(既不增加新功能，也不是修复bug)
- perf - 性能优化
- test - 增加测试
- chore - 构建过程或辅助工具的变动
- revert - 回退
