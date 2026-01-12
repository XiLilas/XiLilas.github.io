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

    // 可选：切换后回到顶部
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


/* ====== DATA : 项目分类 ====== */
const projects = {
  "Datascience and IA": [
    {
      title: "Picture and Signal Processing",
      desc: "Projet Python – traitement d’images et signaux (2025)",
      image: "",
      link: ""
    },
    {
      title: "Stellar Classification",
      desc: "Hands-on ML 2024 avec Scikit-learn, numpy, pandas, seaborn, imblearn et matplotlib",
      image: "",
      link: "https://github.com/XiLilas/Stellar"
    },
    {
      title: "DataCamp2024",
      desc: "Classification of variable stars from light curves using sklearn, numpy et pandas",
      image: "",
      link: "https://github.com/XiLilas/DataCamp2024"
    },
    {
      title : "TER IoT - Weather",
      desc : "Conception de l'architecture de solutions IoT pour la collecte, le traitement et la visualisation de données météorologiques en temps réel. En tant que le chef du groupe IA et le développeur python, mise en place différents méthode pour estimer les températures et les précipitations de la semaine qui suit. Utilisation de conteneurs Docker pour collecter les données en temps réel via API de Météo France, et assurer l'estimation en temps réel. Technologies IA Python : LSTM, XGBoost, SMOTE.",
      image : "imgs/TER.jpg",
      link : "https://github.com/XiLilas/weather"
    }
  ],

  "Web Development": [
    {
      title: "WeShare",
      desc: "WeShare aide les groupes (colocations, équipes ou familles) à organiser et répartir leurs tâches sans confusion. L’objectif du site est d’attribuer automatiquement ou manuellement les responsabilités et de suivre en temps réel l’avancement de chacun pour éviter les retards, les malentendus et les déséquilibres en offrant une vision partagée et transparente des tâches à accomplir. Les utilisateurs peuvent ajuster ou échanger leurs tâches facilement, tout en conservant une répartition équitable. WeShare apporte une organisation simple, intelligente et collaborative pour que chaque groupe fonctionne harmonieusement.",
      image: "imgs/WeShare.jpg",
      link: "https://github.com/YannickD78/WeShare"
    },
    {
      title: "Site de vote",
      desc: "Projet Web – HTML / CSS / JS / PHP (2024)",
      image: "imgs/scrutin1.jpg",
      link: "https://github.com/XiLilas/WebVote"
    }
  ],

  "UI/UX Design": [
    {
      title: "BioFolia – Arbre de vie",
      desc: "Projet JavaFX – UI/UX (2024)",
      image: "imgs/BioFolia.jpg",
      link: "https://github.com/XiLilas/BioFolia"
    }
  ],

  "Video Games": [
    {
      title: "Rancher",
      desc: "Jeu Java (2024) Le projet que nous voulons réaliser s’appelle «rancher», inspiré par les jeux de stratégie en temps réel.
Dans ce jeu vidéo, il dispose quatre types d’objets, un propriétaire de ranch, un proie mouton, un prédateur loup et un magasin.
Le joueur peut contrôler le propriétaire de ranch dans le ranch directement par le clavier de se déplacer, faire peur au loup ou de faire d'autres actions.
Les moutons produisent de la laine dans le temps, le taux de production dépend s'ils ont bien mangé ou s'il y a des moutons morts en raison du loup. Touche E pour ramasser la laine.
Le loup est un unité non contrôlée par le joueur qui se déplace sur la carte, chassant les moutons dans le ranch.
Le magasin résume la richesse du rancher, et permet au joueur d'acheter des moutons et des herbes.
Le but du jeu est de nourrir plus d’un certain somme des moutons lors d’atteindre un délai du temps (compter par le temps du monde du jeu) sinon le joueur a perdu le jeu.
",
      image: "imgs/rancher.jpg",
      link: "https://github.com/XiLilas/Rancher"
    }
  ],

  "Algorithm and System": [
    {
      title: "Prédateur / Proie & 2048",
      desc: "Projet C++ (2021–2022)",
      image: "imgs/gifLR.gif",
      link: ""
    }
  ]
};

/* ====== LOGIQUE ====== */
const listItems = document.querySelectorAll(".list-item");
const projectDetail = document.getElementById("project-detail");
const backBtn = document.getElementById("back-btn");

listItems.forEach(item => {
  item.addEventListener("click", () => {
    const category = item.innerText.trim();
    const data = projects[category];
    if (!data) return;

    // cacher la liste
    document.querySelector(".list-container").style.display = "none";
    document.getElementById("work_exp").style.display = "none";

    // reset détails
    projectDetail.innerHTML = `<button id="back-btn">← Return</button>`;

    // générer projets
    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "project-item";
      div.innerHTML = `
        ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-image">` : ""}
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        ${p.link ? `<a href="${p.link}" target="_blank">lien</a>` : ""}
      `;
      projectDetail.appendChild(div);
    });

    /* ===== 图片点击放大 ===== */
    let modal = document.querySelector(".image-modal");

    if (!modal) {
      modal = document.createElement("div");
      modal.className = "image-modal";
      modal.innerHTML = `<img src="">`;
      document.body.appendChild(modal);
    }

    const modalImg = modal.querySelector("img");

    document.querySelectorAll(".project-image").forEach(img => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
      });
    });

    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    projectDetail.style.display = "block";

    // rebind return
    document.getElementById("back-btn").onclick = () => {
      document.getElementById("work_exp").style.display = "block";
      projectDetail.style.display = "none";
      document.querySelector(".list-container").style.display = "flex";
    };
  });
});
