const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.id + "-section";   // home -> home-section
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    // 切换页面
    sections.forEach(sec => sec.classList.remove('active'));
    targetSection.classList.add('active');

    // 高亮菜单
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // 可选：切换后回到顶部（更像她）
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
