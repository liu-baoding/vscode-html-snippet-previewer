# 发布到 VS Code Marketplace 指南

## 前置准备

### 1. 创建 Azure DevOps 账号和 Personal Access Token (PAT)

1. 访问 [Azure DevOps](https://dev.azure.com/)
2. 使用 Microsoft 账号登录（如果没有，需要先注册）
3. 创建一个组织（如果还没有）

### 2. 创建 Personal Access Token

1. 点击右上角的用户设置图标
2. 选择 "Personal access tokens"
3. 点击 "+ New Token"
4. 配置 Token：
   - **Name**: VS Code Marketplace Publishing
   - **Organization**: 选择你的组织（或选择 All accessible organizations）
   - **Expiration**: 选择过期时间（建议选择较长时间）
   - **Scopes**: 选择 "Custom defined"
   - 展开 "Marketplace"，勾选 **Acquire** 和 **Manage**
5. 点击 "Create"
6. **重要**: 复制生成的 Token 并保存到安全的地方（只会显示一次！）

### 3. 创建发布者账号

1. 访问 [Visual Studio Marketplace 发布者管理页面](https://marketplace.visualstudio.com/manage)
2. 使用同一个 Microsoft 账号登录
3. 点击 "Create publisher"
4. 填写信息：
   - **ID**: 发布者唯一标识（只能包含字母、数字、连字符，一旦创建不可更改）
   - **Display Name**: 显示名称
   - **Description**: 描述（可选）
5. 点击 "Create"

### 4. 更新 package.json

将 `package.json` 中的以下字段替换为你的实际信息：

```json
{
  "publisher": "your-publisher-id",  // 步骤3中创建的发布者ID
  "author": {
    "name": "你的名字"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/你的用户名/html-snippet-previewer.git"
  },
  "homepage": "https://github.com/你的用户名/html-snippet-previewer#readme",
  "bugs": {
    "url": "https://github.com/你的用户名/html-snippet-previewer/issues"
  }
}
```

## 发布步骤

### 方法 1: 使用 vsce 命令行工具（推荐）

#### 1. 登录

使用你在步骤2中创建的 Personal Access Token：

```bash
npx @vscode/vsce login your-publisher-id
```

系统会提示输入 PAT，粘贴你的 Token 并按回车。

#### 2. 打包扩展（可选）

先打包成 .vsix 文件进行测试：

```bash
npx @vscode/vsce package
```

这会生成 `html-snippet-previewer-1.0.0.vsix` 文件。你可以：
- 在本地安装测试：在 VS Code 中，Extensions 视图 → 点击 "..." → "Install from VSIX..."
- 分享给他人测试

#### 3. 发布到 Marketplace

```bash
npx @vscode/vsce publish
```

或者指定版本号自动递增：

```bash
npx @vscode/vsce publish patch  # 1.0.0 -> 1.0.1
npx @vscode/vsce publish minor  # 1.0.0 -> 1.1.0
npx @vscode/vsce publish major  # 1.0.0 -> 2.0.0
```

### 方法 2: 通过 Web 界面上传

1. 先打包扩展：
   ```bash
   npx @vscode/vsce package
   ```

2. 访问 [Marketplace 发布者管理页面](https://marketplace.visualstudio.com/manage)

3. 点击你的发布者名称

4. 点击 "+ New extension" → "Visual Studio Code"

5. 上传打包好的 .vsix 文件

6. 点击 "Upload"

## 发布后

### 验证发布

1. 访问你的扩展页面：`https://marketplace.visualstudio.com/items?itemName=your-publisher-id.html-snippet-previewer`

2. 在 VS Code 中搜索你的扩展：
   - 打开 Extensions 视图 (Ctrl+Shift+X)
   - 搜索 "HTML Snippet Previewer"
   - 应该能看到你的扩展

### 更新扩展

当需要发布新版本时：

1. 更新代码
2. 更新 `CHANGELOG.md` 记录变更
3. 运行测试确保一切正常
4. 使用 vsce 发布新版本：
   ```bash
   npx @vscode/vsce publish patch  # 或 minor/major
   ```

## 发布前检查清单

在发布前，请确保：

- [ ] package.json 中的所有信息都已正确填写
- [ ] README.md 内容完整，包含使用说明和示例
- [ ] CHANGELOG.md 已记录版本变更
- [ ] LICENSE 文件存在
- [ ] icon.png 存在且尺寸正确（至少 128x128 像素，推荐 512x512）
- [ ] 代码已编译且无错误：`npm run compile`
- [ ] 所有测试通过：`npm test`
- [ ] 已在本地测试扩展功能正常
- [ ] .vscodeignore 文件配置正确（排除不需要发布的文件）

## 常见问题

### Q: 发布失败，提示 "publisher not found"
**A**: 确保你已经创建了发布者账号，并且 package.json 中的 publisher 字段与发布者 ID 完全匹配。

### Q: 发布失败，提示 "Invalid Personal Access Token"
**A**: 
- 确保 Token 没有过期
- 确保创建 Token 时勾选了 Marketplace 的 Acquire 和 Manage 权限
- 重新运行 `npx @vscode/vsce login your-publisher-id` 并输入正确的 Token

### Q: 图标不显示
**A**: 
- 确保 icon.png 文件存在于 resources 目录
- 图标尺寸建议为 128x128 或更大（推荐 512x512）
- 图标格式必须是 PNG

### Q: 如何撤销已发布的版本
**A**: 访问 Marketplace 管理页面，找到你的扩展，点击特定版本旁的删除按钮。注意：删除后无法恢复。

### Q: 发布后多久能在 Marketplace 搜索到
**A**: 通常几分钟内就能生效，最多可能需要等待 10-15 分钟。

## 有用的链接

- [VS Code 扩展发布官方文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Marketplace 发布者管理](https://marketplace.visualstudio.com/manage)
- [Azure DevOps](https://dev.azure.com/)
- [vsce GitHub 仓库](https://github.com/microsoft/vscode-vsce)

## 最佳实践

1. **语义化版本**: 遵循 [Semantic Versioning](https://semver.org/)
   - MAJOR: 不兼容的 API 更改
   - MINOR: 向后兼容的新功能
   - PATCH: 向后兼容的 bug 修复

2. **保持 CHANGELOG**: 每次更新都记录在 CHANGELOG.md 中

3. **测试**: 发布前在本地充分测试

4. **文档**: 保持 README.md 更新，包含清晰的使用说明

5. **图标**: 使用清晰、专业的图标

6. **标签**: 在 package.json 中添加准确的 keywords，帮助用户找到你的扩展
