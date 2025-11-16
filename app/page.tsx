export default function Home() {
  const projects = [
    {
      title: "منصة توظيف - Hirely",
      description: "موقع تفاعلي يربط بين الشركات والباحثين عن عمل باستخدام Next.js وTailwindCSS.",
      link: "https://github.com/adel307/hirely-platform",
      github: "https://github.com/adel307/hirely-platform"
    },
    {
      title: "موقع تعليمي",
      description: "منصة تعليمية تفاعلية لتعلم البرمجة عبر الإنترنت.",
      link: "#",
      github: "https://github.com/adel307/learning-platform"
    },
    {
      title: "مدونة تقنية",
      description: "مدونة حديثة تعرض مقالات في تطوير الويب وتقنيات المستقبل.",
      link: "#",
      github: "https://github.com/adel307/tech-blog"
    },
  ];

  const skills = [
    { name: "AWS", icon: "☁️" },
    { name: "Bootstrap", icon: "🎨" },
    { name: "C", icon: "⚙️" },
    { name: "C++", icon: "💻" },
    { name: "Django", icon: "🐍" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📚" },
    { name: "Heroku", icon: "🚀" },
    { name: "HTML5", icon: "🌐" },
    { name: "Illustrator", icon: "✏️" },
    { name: "JavaScript", icon: "📜" },
    { name: "Linux", icon: "🐧" },
    { name: "MSSQL", icon: "🗄️" },
    { name: "MySQL", icon: "💾" },
    { name: "Node.js", icon: "🟢" },
    { name: "Photoshop", icon: "🎭" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Postman", icon: "📬" },
    { name: "Python", icon: "🐍" },
    { name: "Redis", icon: "🔴" },
    { name: "SQLite", icon: "💿" },
    { name: "Tailwind", icon: "💨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Vue.js", icon: "🟢" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adel-ahmed-20b956379/",
      icon: "💼"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/adel.ahmed.500823",
      icon: "👥"
    },
    {
      name: "GitHub",
      url: "https://github.com/adel307",
      icon: "🐙"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            عادل البوشي
          </h1>
          <p className="text-lg text-gray-300">مطور ويب متكامل | Full Stack Developer</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-4 space-x-reverse">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105"
              >
                <span>{link.icon}</span>
                <span className="text-cyan-400">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">نبذة عني</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              أنا <span className="font-semibold text-cyan-400">مطور ويب متكامل</span> شغوف بإنشاء مواقع 
              <span className="text-cyan-400 font-medium"> سريعة </span> 
              و<span className="text-cyan-400 font-medium"> سهلة الاستخدام</span>.
              أعمل باستخدام أحدث التقنيات في مجالات مختلفة تشمل:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-cyan-400 text-xl">🔹</span>
                  <span className="font-semibold text-cyan-400">Frontend:</span>
                  <span>Next.js, TailwindCSS, Vue.js, TypeScript</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-cyan-400 text-xl">🔹</span>
                  <span className="font-semibold text-cyan-400">Backend:</span>
                  <span>Django, Node.js, Python</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-cyan-400 text-xl">🔹</span>
                  <span className="font-semibold text-cyan-400">Databases:</span>
                  <span>MySQL, PostgreSQL, MSSQL, SQLite, Redis</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-cyan-400 text-xl">🔹</span>
                  <span className="font-semibold text-cyan-400">DevOps:</span>
                  <span>Docker, AWS, Heroku, Linux</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-cyan-400 text-xl">🔹</span>
                  <span className="font-semibold text-cyan-400">Tools:</span>
                  <span>Git, Postman, Photoshop, Illustrator</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-cyan-400 text-xl">🔹</span>
                  <span className="font-semibold text-cyan-400">Languages:</span>
                  <span>JavaScript, Python, C, C++</span>
                </div>
              </div>
            </div>

            <p className="mt-6 p-4 bg-gray-700 rounded-lg border-r-4 border-cyan-400">
              هدفي هو إنشاء تجارب ويب مميزة تدمج بين الأداء العالي والتصميم الجذاب، 
              مع التركيز على تقديم حلول فعّالة وسلسة للمستخدم.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">المهارات التقنية</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center group border border-gray-700"
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <h3 className="font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">المشاريع</h2>
          {/* GitHub Profile Link */}
          <div className="text-center mt-8">
            <a
              href="https://github.com/adel307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 space-x-reverse bg-gray-700 text-cyan-400 px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-cyan-400"
            >
              <span>🌙</span>
              <span>عرض جميع المشاريع على GitHub</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-2xl p-8 text-center border border-gray-600">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">تواصل معي</h2>
          <p className="text-lg mb-6 text-gray-300">
            هل ترغب في التعاون معي أو لديك مشروع ترغب بمناقشته؟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:adelelboshy@example.com"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-500 transition-all duration-300 font-semibold hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
            >
              <span>📧</span>
              <span>راسلني عبر البريد الإلكتروني</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adel-ahmed-20b956379/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 space-x-reverse"
            >
              <span>💼</span>
              <span>تواصل على LinkedIn</span>
            </a>
            <a
              href="https://wa.me/201115756122"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-500 text-green-400 px-8 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center space-x-2 space-x-reverse"
            >
              <span>💬</span>
              <span>راسلني على WhatsApp</span>
            </a>
          </div>
          
          {/* رقم الواتساب بشكل واضح */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
            <p className="text-gray-300 mb-2">أو راسلني مباشرة على الرقم:</p>
            <a 
              href="https://wa.me/201115756122" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-xl font-bold transition-colors"
            >
              +20 11 1575 6122
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 text-center py-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <p>© 2025 عادل البوشي. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center space-x-6 mt-4 space-x-reverse">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 space-x-reverse"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}