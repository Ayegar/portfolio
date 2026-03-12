# 个人求职主页 - 云端名片

一个专业、技术感强的求职个人主页，定位为「云端名片」，专为软件开发工程师（后端/全栈方向）设计。

## 🌟 特性

- **现代化设计**：深色主题 + 渐变效果，科技感十足
- **响应式布局**：完美适配桌面端和移动端
- **React + TailwindCSS**：使用 CDN 引入，无需构建工具
- **动画效果**：流畅的交互动画和悬停效果
- **易于定制**：所有数据集中在文件顶部，修改方便

## 📁 项目结构

```
portfolio/
├── index.html          # 主 HTML 文件
├── css/
│   └── style.css       # 自定义样式
├── js/
│   └── app.js          # React 组件和数据
└── README.md           # 说明文档
```

## 🚀 快速开始

### 方式一：直接打开
双击 `index.html` 文件即可在浏览器中预览。

### 方式二：本地服务器（推荐）
```bash
# Python 3
python -m http.server 8000

# 访问 http://localhost:8000
```

### 方式三：使用 VS Code Live Server
1. 安装 Live Server 扩展
2. 右键 `index.html` → Open with Live Server

## ✏️ 个性化定制

打开 `js/app.js` 文件，修改顶部的数据对象：

### 1. 个人信息 (`profileData`)
```javascript
const profileData = {
    name: "你的名字",           // 姓名
    title: "软件开发工程师",      // 职位
    subtitle: "后端/全栈开发",    // 方向
    tagline: "你的座右铭",
    bio: "个人简介...",
    email: "your@email.com",
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    location: "城市·国家",
    availability: "寻求机会"
};
```

### 2. 技能数据 (`skillsData`)
```javascript
skillsData: {
    languages: [
        { name: "Java", level: 90, icon: "☕" },
        // 添加/修改你的编程语言技能
    ],
    frameworks: [
        // 框架和库
    ],
    tools: [
        // 工具和平台
    ]
}
```

### 3. 项目经历 (`projectsData`)
```javascript
{
    id: 1,
    title: "项目名称",
    description: "项目描述",
    techStack: ["技术 1", "技术 2"],
    highlights: ["亮点 1", "亮点 2"],
    github: "https://github.com/...",
    live: "https://..." (可选),
    image: "🎯"  // emoji 图标
}
```

## 🎨 颜色主题

当前主题色为蓝色 + 紫色渐变，如需修改，编辑 `index.html` 中的 Tailwind 配置：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: { /* 主色调 */ },
                accent: { /* 强调色 */ }
            }
        }
    }
}
```

## 📤 部署上线

### GitHub Pages（推荐）
1. 创建 GitHub 仓库
2. 推送所有文件
3. Settings → Pages → 选择 main branch
4. 访问 `https://username.github.io/repo-name`

### Vercel / Netlify
直接拖拽项目文件夹到 Vercel/Netlify 即可自动部署。

### 云服务器
上传所有文件到 Nginx/Apache 的静态资源目录。

## 💡 优化建议

1. **图片优化**：将 emoji 替换为真实项目截图
2. **SEO 优化**：添加 meta 描述和关键词
3. **性能优化**：如需添加大量内容，建议迁移到构建工具
4. **数据分析**：可集成 Google Analytics 或 Umami

## 🛠️ 技术栈

- React 18 (CDN)
- TailwindCSS 3 (CDN)
- Lucide Icons
- Google Fonts (Inter, Fira Code)
- 纯静态 HTML/CSS/JS

## 📄 License

MIT License - 可自由使用和修改

---

**
