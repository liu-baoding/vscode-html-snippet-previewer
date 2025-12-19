# HTML Snippet Previewer - 快速发布指南

## 🚀 快速开始

### 步骤 1: 准备工作（只需做一次）

1. **创建 Microsoft 账号**（如果已有可跳过）
   - 访问 https://account.microsoft.com/

2. **创建 Azure DevOps 组织和 PAT**
   ```
   访问: https://dev.azure.com/
   → 登录
   → 创建组织（如果需要）
   → 用户设置 → Personal access tokens
   → New Token
   → 名称: VS Code Publishing
   → 勾选: Marketplace (Acquire + Manage)
   → 创建并保存 Token（重要！）
   ```

3. **创建 Marketplace 发布者**
   ```
   访问: https://marketplace.visualstudio.com/manage
   → 登录
   → Create publisher
   → 填写 ID、名称等
   → 创建
   ```

4. **更新 package.json**
   
   打开 `package.json`，修改以下字段：
   ```json
   {
     "publisher": "你的发布者ID",
     "author": {
       "name": "你的名字"
     },
     "repository": {
       "url": "https://github.com/你的用户名/html-snippet-previewer.git"
     },
     "homepage": "https://github.com/你的用户名/html-snippet-previewer#readme",
     "bugs": {
       "url": "https://github.com/你的用户名/html-snippet-previewer/issues"
     }
   }
   ```

### 步骤 2: 登录

```bash
npx @vscode/vsce login 你的发布者ID
```

输入你的 Personal Access Token（PAT）

### 步骤 3: 发布

```bash
# 确保代码已编译
npm run compile

# 发布到 Marketplace
npx @vscode/vsce publish
```

就这么简单！🎉

---

## 📦 其他有用的命令

### 打包成 .vsix 文件（不发布）
```bash
npx @vscode/vsce package
```

### 本地安装测试
在 VS Code 中:
1. 打开 Extensions 视图 (Ctrl+Shift+X)
2. 点击 "..." 菜单
3. 选择 "Install from VSIX..."
4. 选择生成的 .vsix 文件

### 更新版本并发布
```bash
npx @vscode/vsce publish patch   # 1.0.0 -> 1.0.1
npx @vscode/vsce publish minor   # 1.0.0 -> 1.1.0
npx @vscode/vsce publish major   # 1.0.0 -> 2.0.0
```

---

## ✅ 发布前检查清单

在运行 `vsce publish` 之前，确保：

- [ ] package.json 中的 publisher、author、repository 等信息已更新
- [ ] 代码已编译无错误: `npm run compile`
- [ ] README.md 完整且最新
- [ ] CHANGELOG.md 记录了版本变更
- [ ] icon.png 存在（至少 128x128 像素）
- [ ] 已在本地测试扩展功能
- [ ] LICENSE 文件存在

---

## 🔍 查看你的扩展

发布成功后，访问：
```
https://marketplace.visualstudio.com/items?itemName=你的发布者ID.html-snippet-previewer
```

在 VS Code 中搜索：
1. 打开 Extensions 视图 (Ctrl+Shift+X)
2. 搜索 "HTML Snippet Previewer"
3. 应该能看到你的扩展

---

## 🆘 遇到问题？

查看详细指南：[PUBLISHING.md](./PUBLISHING.md)

常见问题：
- **"publisher not found"**: 确保已创建发布者账号且 package.json 中的 publisher 字段正确
- **"Invalid PAT"**: Token 可能过期或权限不足，需要重新创建
- **图标不显示**: 确保 icon.png 存在且尺寸足够大（推荐 512x512）
