WeexBox 项目初始化工具 https://aygtech.github.io/weexbox/guide/#weexbox-cli

# 介绍

WeexBox 致力于打造一套简单、高效的基于 [weex](https://weex-project.io/cn/) 的APP混合开发解决方案。

# 安装

```
npm install -g @weexbox/cli
```
# 使用
1. 快速创建 weex 项目

  ```
  weexbox create <projectName>
  ```

1. 快速创建页面

  ```
  weexbox page <pageName> --template <template_dir>
  ```

** 更多命令详情可通过``` weexbox -h```快速查看 **

## 开发 WeexBox 的初衷

weex给了vue开发者一条全新的道路，让前端开发者在APP中大放异彩。  
然而，weex也给前端开发者一个错觉，误以为整个APP都可以用weex来做，而不需要原生的支持。  
事实是，想要开发出优秀体验的APP，前端是离不开原生的，而且是重度依赖的。  
所以，前端需要与原生端紧密配合，我们称之为大前端的紧紧拥抱...  
weex的重心放在了js渲染UI的能力上，对原生的扩展并不多。  
于是我们想通过 WeexBox

- 扩展 weex 的能力
- 把最佳实践带入进来，提供大前端正确拥抱的姿势
- 开发一些实用工具，带来更棒的开发体验
- 填掉 weex 的坑

最终，开发者能够专注写bug了~~~
