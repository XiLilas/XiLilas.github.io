// 单独 JS 文件：控制显示/隐藏
(function() {
    const views = {
        home: document.getElementById('view-home'),
        about: document.getElementById('view-about'),
        work: document.getElementById('view-work'),
        contact: document.getElementById('view-contact')
    };

    function showView(name) {
        Object.values(views).forEach(v => v.hidden = true); // 隐藏所有
        if (views[name]) views[name].hidden = false;       // 显示当前
        // 按钮高亮
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.route === name);
        });
    }

    // 按钮事件绑定
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => showView(btn.dataset.route));
    });

    // 页面加载默认显示 Home
    showView('home');
})();
