# 简历生成器 - Resume Generator

一个现代、专业的在线简历模板生成器，使用 React 18 + TypeScript + Ant Design v5 开发，界面简洁、现代、专业

## 🎯 设计特色

- **界面简洁现代**：弱化 antd 默认样式，采用自定义 CSS 覆盖，界面更轻盈、现代
- **专业排版**：注重排版与留白，避免 antd 默认的"企业后台感"
- **固定双栏布局**：左 40% 表单编辑区 / 右 60% 实时预览区，桌面端优先
- **3 款精美模板**：简约两栏、极简单栏、现代创意，对标老鱼简历风格

## 🛠️ 技术栈

- **UI 库**：`antd@5.x`（仅用于左侧表单区域）
- **状态管理**：`zustand`（轻量，支持 localStorage 持久化）
- **表单**：`antd Form` + `zod` 验证
- **PDF 导出**：`html2pdf.js`，从预览容器生成，确保 PDF 导出干净
- **路由**：`react-router-dom@6`
- **工具**：`dayjs`（配合 DatePicker）、`lodash/debounce`（防抖保存）
- **样式增强**：自定义 CSS（预览区和全局布局）

## 📦 功能特性

- ✅ 实时双向同步（表单 ↔ 预览）
- ✅ 模板切换（简约两栏 / 现代创意 / 极简单栏）
- ✅ "导入示例数据" / "重置" 按钮
- ✅ 导出 PDF（支持 A4 尺寸，内联关键样式）
- ✅ 所有用户输入自动保存到 `localStorage`
- ✅ 响应式设计，支持打印

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
resume-generator/
├── src/
│   ├── components/           # React 组件
│   │   ├── ResumeEditor.tsx  # 左侧表单编辑器
│   │   └── ResumePreview.tsx # 右侧预览组件
│   ├── store/               # Zustand 状态管理
│   │   └── resumeStore.ts   # 简历数据状态
│   ├── types/               # TypeScript 类型定义
│   │   └── resume.ts        # 简历数据类型
│   ├── templates/           # 简历模板组件
│   │   ├── SimpleResumeTemplate.tsx   # 简约两栏模板
│   │   ├── ModernResumeTemplate.tsx   # 现代创意模板
│   │   └── MinimalResumeTemplate.tsx  # 极简单栏模板
│   ├── styles/              # 样式文件
│   │   └── global.css       # 全局样式，覆盖 antd 默认样式
│   ├── App.tsx              # 主应用组件
│   └── main.tsx             # 应用入口
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── tsconfig.json            # TypeScript 配置
├── vite.config.ts           # Vite 配置
└── README.md                # 项目说明
```

## 🎨 自定义主题

项目使用 CSS 变量定义主题色，可在 `src/styles/global.css` 中修改：

```css
:root {
  --primary-color: #2563eb;     /* 主色 */
  --primary-hover: #1d4ed8;     /* 主色悬停 */
  --text-primary: #1e293b;      /* 主要文字 */
  --text-secondary: #334155;    /* 次要文字 */
  --bg-light: #fafafa;          /* 背景色 */
  --border-color: #e2e8f0;      /* 边框色 */
}
```

## 🖼️ 界面截图

### 左表单右预览，界面清爽专业

- **左侧表单区**：使用 antd 组件，但经过自定义样式优化，视觉轻盈现代
- **右侧预览区**：纯 HTML/CSS 渲染，确保 PDF 导出干净，无 antd 样式污染
- **实时同步**：表单输入实时反映在预览区，所见即所得

### 3 款模板风格

1. **简约两栏**：经典双栏布局，信息层次清晰
2. **现代创意**：卡片式设计，现代感十足
3. **极简单栏**：单栏布局，极简风格

## 📄 PDF 导出

点击"导出PDF"按钮，系统会：
1. 获取预览容器的 HTML 内容
2. 内联关键样式，确保 PDF 样式正确
3. 生成 A4 尺寸的 PDF 文件
4. 自动下载到本地

## 💾 数据持久化

所有用户输入会自动保存到浏览器的 `localStorage` 中，刷新页面后数据不会丢失。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License