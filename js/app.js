// ============================================
// 示例数据 - 请根据实际情况修改
// ============================================
const profileData = {
    name: "周上清",
    title: "软件开发工程师",
    subtitle: "后端开发",
    tagline: "用代码构建未来，以技术驱动创新",
    bio: "软件工程专业大三学生，热衷于后端架构设计与全栈开发。熟悉分布式系统设计，对高并发、微服务架构有深入研究。在校期间参与多个实际项目开发，具备良好的工程实践能力和团队协作精神。",
    email: "3040725001@qq.com",
    github: "https://github.com/",
    wechat: "zxs1116667890",
    phone: "13937893807",
    location: "中国·郑州",
    availability: "寻找实习机会"
};

// 技能数据
const skillsData = {
    languages: [
        { name: "C", level: 70, icon: "⚙️" },
        { name: "Java", level: 60, icon: "☕" },
        { name: "Python", level: 60, icon: "🐍" },
        { name: "SQL", level: 70, icon: "🗄️" }
    ],
    frameworks: [
        { name: "Spring Boot", level: 60 },
        { name: "React", level: 40 },
        { name: "Vue.js", level: 40 }
    ],
    tools: [
        { name: "IntelliJ IDEA", level: 75 },
        { name: "HeidiSQL", level: 70 },
        { name: "HBuilderX", level: 65 },
        { name: "阿里云", level: 60 },
        { name: "Git", level: 60 }
    ]
};

// 项目经历数据
const projectsData = [
    {
        id: 1,
        title: "酒店预定管理系统",
        description: "基于 JavaWeb 的酒店全流程管理平台，支持普通用户注册登录、客房查询与在线预订，同时提供管理员后台，可对用户、客房类型、预订、结账等核心业务数据进行统一管理。",
        techStack: ["Java", "Servlet/JSP", "JDBC", "MySQL", "Tomcat"],
        highlights: [
            "实现双角色权限控制：普通用户专注客房预订与个人信息管理，管理员可操作全业务模块",
            "覆盖酒店完整业务闭环：从客房展示、用户预订、入住登记到账单结算",
            "采用原生 JDBC+MVC 模式开发，代码结构模块化，便于理解和二次扩展"
        ],
        image: "🏨"
    }
];

// ============================================
// React 组件
// ============================================

// 加载进度条组件
function LoadingProgress() {
    const [progress, setProgress] = React.useState(0);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);
        
        return () => clearInterval(timer);
    }, []);
    
    if (progress >= 100) {
        return null;
    }
    
    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-[9999]">
            <div 
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}

// 主题切换按钮组件
function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(true);
    
    React.useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.remove('light');
        } else {
            root.classList.add('light');
        }
    }, [isDark]);
    
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    
    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all card-hover no-print flex items-center justify-center"
            title={isDark ? '切换到浅色模式' : '切换到深色模式'}
        >
            {isDark ? (
                <i data-lucide="sun" className="w-6 h-6 text-white"></i>
            ) : (
                <i data-lucide="moon" className="w-6 h-6 text-white"></i>
            )}
        </button>
    );
}

// 打印按钮组件
function PrintButton() {
    const handlePrint = () => {
        window.print();
    };
    
    return (
        <button
            onClick={handlePrint}
            className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-slate-800 border border-slate-700 rounded-full shadow-lg hover:bg-slate-700 transition-all card-hover no-print flex items-center justify-center"
            title="打印或保存为 PDF"
        >
            <i data-lucide="printer" className="w-6 h-6 text-white"></i>
        </button>
    );
}

// 导航栏组件
function Navbar() {
    const navItems = [
        { name: '首页', href: '#home' },
        { name: '技能', href: '#skills' },
        { name: '项目', href: '#projects' },
        { name: '联系', href: '#contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-slate-800 no-print">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="text-xl font-bold gradient-text">
                        &lt;{profileData.name} /&gt;
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-slate-300 hover:text-white link-underline transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.print()}
                            className="p-2 text-slate-300 hover:text-white transition-colors"
                            title="打印简历"
                        >
                            <i data-lucide="printer" className="w-5 h-5"></i>
                        </button>
                        <a
                            href="#contact"
                            className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all card-hover"
                        >
                            联系我
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Hero 区域组件
function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
            {/* 背景装饰 */}
            <div className="glow glow-1"></div>
            <div className="glow glow-2"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 左侧内容 */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm text-slate-300">{profileData.availability}</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            <span className="text-white">你好，我是</span>
                            <br />
                            <span className="gradient-text">{profileData.name}</span>
                        </h1>
                        
                        <p className="text-xl lg:text-2xl text-slate-400">
                            {profileData.title} · <span className="text-primary-400">{profileData.subtitle}</span>
                        </p>
                        
                        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                            {profileData.tagline}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all card-hover btn-pulse"
                            >
                                查看项目
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all card-hover"
                            >
                                联系方式
                            </a>
                        </div>
                        
                        {/* 社交链接 */}
                        <div className="flex items-center gap-6 pt-4">
                            <a
                                href={profileData.github}
                                target="_blank"
                                className="text-slate-400 hover:text-white transition-colors text-2xl"
                                title="GitHub"
                            >
                                <i data-lucide="github"></i>
                            </a>
                            <a
                                href={profileData.linkedin}
                                target="_blank"
                                className="text-slate-400 hover:text-blue-500 transition-colors text-2xl"
                                title="LinkedIn"
                            >
                                <i data-lucide="linkedin"></i>
                            </a>
                            <a
                                href={`mailto:${profileData.email}`}
                                className="text-slate-400 hover:text-primary-400 transition-colors text-2xl"
                                title="Email"
                            >
                                <i data-lucide="mail"></i>
                            </a>
                        </div>
                    </div>
                    
                    {/* 右侧代码块装饰 */}
                    <div className="hidden lg:block animate-float">
                        <div className="code-block bg-slate-900/80 border-slate-700">
                            <pre className="text-sm leading-relaxed">
                                <code className="text-slate-300">
{`class Developer {
  constructor() {
    this.name = '${profileData.name}';
    this.role = '${profileData.title}';
    this.location = '${profileData.location}';
  }

  async code() {
    while (awake) {
      await this.createSomething();
      this.improve();
    }
  }
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 技能条组件
function SkillBar({ name, level, color = "from-primary-500 to-accent-500" }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-300">{name}</span>
                <span className="text-xs text-slate-500 font-mono">{level}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden skill-bar">
                <div
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000`}
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}

// 技能卡片组件
function SkillCard({ title, icon, children }) {
    return (
        <div className="card-hover p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{icon}</span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}

// 技能区域组件
function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">技术栈</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        持续学习新技术，保持对技术的热情与好奇心
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* 编程语言 */}
                    <SkillCard title="编程语言" icon="💻">
                        {skillsData.languages.map((skill, index) => (
                            <SkillBar
                                key={index}
                                name={`${skill.icon} ${skill.name}`}
                                level={skill.level}
                            />
                        ))}
                    </SkillCard>
                    
                    {/* 框架 & 库 */}
                    <SkillCard title="框架 & 库" icon="⚛️">
                        {skillsData.frameworks.map((skill, index) => (
                            <SkillBar
                                key={index}
                                name={skill.name}
                                level={skill.level}
                                color="from-accent-500 to-purple-600"
                            />
                        ))}
                    </SkillCard>
                    
                    {/* 工具 & 平台 */}
                    <SkillCard title="工具 & 平台" icon="🛠️">
                        {skillsData.tools.map((skill, index) => (
                            <SkillBar
                                key={index}
                                name={skill.name}
                                level={skill.level}
                                color="from-cyan-500 to-blue-600"
                            />
                        ))}
                    </SkillCard>
                </div>
            </div>
        </section>
    );
}

// 项目卡片组件
function ProjectCard({ project }) {
    return (
        <div className="card-hover group p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm hover:border-primary-500/50">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                    <span className="text-5xl">{project.image}</span>
                    <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                            {project.title}
                        </h3>
                    </div>
                </div>
            </div>
            
            <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
            </p>
            
            {/* 技术栈标签 */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full border border-slate-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            
            {/* 亮点 */}
            <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-400">
                        <span className="text-primary-400 mr-2">▸</span>
                        {highlight}
                    </li>
                ))}
            </ul>
            
            {/* 链接 */}
            <div className="flex items-center gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                >
                    <i data-lucide="github" className="w-4 h-4 mr-2"></i>
                    源码
                </a>
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <i data-lucide="external-link" className="w-4 h-4 mr-2"></i>
                        在线演示
                    </a>
                )}
            </div>
        </div>
    );
}

// 项目经历区域组件
function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">项目经历</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        实践出真知，以下是我在学习和实践中完成的部分项目
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// 联系区域组件
function ContactSection() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">联系我</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        期待与您共创精彩，如有合作意向或技术交流，欢迎随时联系
                    </p>
                </div>
                
                <div className="card-hover p-8 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* 邮箱 */}
                        <a
                            href={`mailto:${profileData.email}`}
                            className="group p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary-500/50 transition-all text-center"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                                <i data-lucide="mail" className="w-6 h-6 text-primary-400"></i>
                            </div>
                            <h3 className="text-white font-medium mb-2">邮箱</h3>
                            <p className="text-sm text-slate-400">{profileData.email}</p>
                        </a>
                        
                        {/* 微信 */}
                        <div
                            className="group p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary-500/50 transition-all text-center"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                                <i data-lucide="wechat" className="w-6 h-6 text-primary-400"></i>
                            </div>
                            <h3 className="text-white font-medium mb-2">微信</h3>
                            <p className="text-sm text-slate-400">{profileData.wechat}</p>
                        </div>
                        
                        {/* 电话 */}
                        <a
                            href={`tel:${profileData.phone}`}
                            className="group p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary-500/50 transition-all text-center"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-primary-500/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                                <i data-lucide="phone" className="w-6 h-6 text-primary-400"></i>
                            </div>
                            <h3 className="text-white font-medium mb-2">电话</h3>
                            <p className="text-sm text-slate-400">{profileData.phone}</p>
                        </a>
                    </div>
                    
                    {/* 位置信息 */}
                    <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                        <div className="flex items-center justify-center gap-2 text-slate-400">
                            <i data-lucide="map-pin" className="w-5 h-5"></i>
                            <span>{profileData.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 页脚组件
function Footer() {
    return (
        <footer className="py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 {profileData.name}. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                        <span>Made with</span>
                        <span className="text-red-500">❤</span>
                        <span>and</span>
                        <span className="text-primary-400 font-mono">Code</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

// 主应用组件
function App() {
    // 初始化 Lucide 图标
    React.useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });

    return (
        <div className="relative">
            <LoadingProgress />
            <div className="bg-grid"></div>
            <Navbar />
            <main>
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
            <ThemeToggle />
            <PrintButton />
        </div>
    );
}

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
