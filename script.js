(function() {
    const sections = {
        home: document.getElementById('view-home'),
        about: document.getElementById('view-about'),
        work: document.getElementById('view-work'),
        contact: document.getElementById('view-contact')
    };

    function showView(name) {
        // 隐藏所有 section
        Object.values(sections).forEach(sec => sec.classList.remove('active'));
        // 显示当前 section
        if (sections[name]) {
            sections[name].classList.add('active');
        }

        // 更新导航按钮状态
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.route === name);
        });
    }

    // 绑定按钮点击事件
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => showView(btn.dataset.route));
    });

    // 默认显示 Home
    showView('home');
})();
