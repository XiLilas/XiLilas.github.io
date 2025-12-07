(function() {
    const views = {
        home: document.getElementById('view-home'),
        about: document.getElementById('view-about'),
        work: document.getElementById('view-work'),
        contact: document.getElementById('view-contact')
    };

    function showView(name) {
        Object.values(views).forEach(v => v.hidden = true);
        views[name].hidden = false;

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.route === name);
        });
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => showView(btn.dataset.route));
    });

    showView('home');
})();
