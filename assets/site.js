(function(){
  const translations = {
  "About": "关于",
  "Research": "研究",
  "Publications": "论文",
  "CV": "简历",
  "Prospective PhD Applicant · Mechanical Engineering": "博士申请者 · 机械工程",
  "M.S. Candidate, Dalian University of Technology": "大连理工大学机械工程硕士研究生",
  "I study how interfaces evolve under mechanical and thermal loading, with current work spanning bolted-joint mechanics, friction and wear, and metallic-coating degradation. I combine finite-element modeling, contact mechanics, controlled experiments, and surface characterization to connect local interface behavior with structural performance and lifetime.": "我的研究关注界面在机械与热载荷作用下的演化规律，目前主要涉及螺栓连接力学、摩擦磨损以及金属涂层退化。我结合有限元建模、接触力学、可控实验与表面表征，研究局部界面行为如何影响结构性能与服役寿命。",
  "Explore my research": "查看我的研究",
  "Download CV": "下载简历",
  "Email": "邮箱",
  "Interface Mechanics": "界面力学",
  "Tribology": "摩擦学",
  "Finite Element Analysis": "有限元分析",
  "Metastructures": "超结构",
  "Biomechanics": "生物力学",
  "Medical Devices": "医疗器械",
  "At a glance": "概览",
  "M.S. GPA": "硕士 GPA",
  "M.S. & B.S. ranking": "硕士与本科排名",
  "Manuscripts submitted / in preparation": "已投稿 / 在撰论文",
  "Major research projects": "主要科研项目",
  "Research profile": "研究概况",
  "My current work is rooted in mechanics of interfaces and durability. For doctoral research, I am especially interested in extending these methods toward metastructures, metamaterials, biomechanics, and medical-device mechanics.": "我目前的研究基础主要集中于界面力学与结构耐久性。博士阶段，我尤其希望将现有方法进一步拓展至超结构、超材料、生物力学与医疗器械力学。",
  "Current focus": "当前方向",
  "Bolted-joint mechanics": "螺栓连接力学",
  "Nonlinear hysteresis, interface evolution, preload control, thread-load distribution, stiffness, fatigue behavior, and manufacturing-error effects.": "研究非线性迟滞、界面演化、预紧力控制、螺纹载荷分布、刚度、疲劳行为以及制造误差效应。",
  "Tribology & surface engineering": "摩擦学与表面工程",
  "Friction and wear, high-temperature dry-film degradation, silver-coating lifetime prediction, residual thickness, and post-failure morphology.": "研究摩擦磨损、高温干膜涂层退化、银涂层寿命预测、残余厚度以及失效后表面形貌。",
  "PhD direction": "博士研究方向",
  "Metastructures & biomechanics": "超结构与生物力学",
  "Interest in mechanics-driven design for metamaterials, biomechanical systems, and medical devices, building on interface mechanics and computational modeling.": "希望以界面力学与计算建模为基础，开展超材料、生物力学系统与医疗器械的力学驱动设计研究。",
  "Selected research": "代表性研究",
  "Four projects that best represent my progression from connection mechanics to interface degradation and lifetime prediction.": "以下项目代表了我的研究路径：从连接结构力学逐步拓展到界面退化机制与寿命预测。",
  "View all details →": "查看全部研究 →",
  "Leader · 2026–Present": "负责人 · 2026–至今",
  "Tribological Degradation Mechanisms and Lifetime Prediction of Silver Coatings": "基材调控下银涂层摩擦退化机制与寿命预测",
  "Built a residual-thickness-decay framework to relate substrate properties and normal load to coating wear rate, with failure defined by critical residual thickness.": "建立银涂层残余厚度衰减框架，将基材性能与法向载荷关联到涂层磨损速率，并以临界残余厚度定义失效。",
  "Key Contributor · 2026": "核心参与者 · 2026",
  "Interfacial Degradation and Anomalous Disassembly Torque Increase": "界面退化与异常拆卸力矩升高",
  "Linked high-temperature dry-film degradation, adhesive wear, material transfer, breakaway torque, and bolt stress through theory and controlled experiments.": "通过理论分析与受控实验，将高温干膜退化、黏着磨损、材料转移、拆卸力矩与螺栓应力联系起来。",
  "Key Contributor · 2025–2026": "核心参与者 · 2025–2026",
  "Nonlinear Hysteresis Behavior and Evolution of Bolted Joint Interfaces": "螺栓连接界面的非线性迟滞行为与演化",
  "Developed a parametric ANSYS model incorporating tightening, thread contact, bearing-surface nonparallelism, and roughness to quantify stiffness and loss-factor evolution.": "建立参数化 ANSYS 模型，综合考虑拧紧、螺纹接触、承压面不平行度与粗糙度，以量化等效刚度与损耗因子的演化。",
  "Education": "教育背景",
  "Dalian University of Technology": "大连理工大学",
  "M.S. Mechanical Engineering · 2024–2027 (expected)": "机械工程硕士 · 2024–2027（预计）",
  "GPA 3.79/4.00 · Average 88.93/100 · Rank 34/343 (Top 10%)": "GPA 3.79/4.00 · 平均分 88.93/100 · 排名 34/343（前 10%）",
  "Northeast Agricultural University": "东北农业大学",
  "B.S. Mechanical Engineering · 2020–2024": "机械工程学士 · 2020–2024",
  "Average 84.99/100 · Rank 9/99 (Top 10%)": "平均分 84.99/100 · 排名 9/99（前 10%）",
  "Selected recognition": "代表性荣誉",
  "National Second-Class Scholarship": "国家二等奖学金",
  "Dalian University of Technology · 2025, 2026": "大连理工大学 · 2025、2026",
  "Outstanding Student Award": "优秀学生奖",
  "Northeast Agricultural University · 2021, 2022, 2023": "东北农业大学 · 2021、2022、2023",
  "First Prize": "一等奖",
  "16th National College Student Competition on Energy Conservation, Emission Reduction, Social Practice, and Technology · 2023": "第十六届全国大学生节能减排社会实践与科技竞赛 · 2023",
  "· Academic homepage for research and PhD applications.": "· 用于科研展示与博士申请的个人学术主页。",
  "Interface mechanics, tribology & structural durability": "界面力学、摩擦学与结构耐久性",
  "My research combines mechanics-based modeling with experiments to understand interface degradation, hysteresis, wear, and load transfer in mechanical connections.": "我的研究结合基于力学的建模与实验方法，用于理解机械连接中的界面退化、迟滞、磨损与载荷传递。",
  "Leader": "负责人",
  "Apr. 2026 – Present": "2026年4月 – 至今",
  "Tribological Degradation Mechanisms and Lifetime Prediction of Silver Coatings Modulated by Substrate Materials": "基材调控下银涂层摩擦退化机制与寿命预测",
  "Developed a residual-thickness-decay framework for silver-coating life prediction, incorporating substrate roughness, hardness, elastic modulus, and normal load to relate coating wear rate to metallic contact conditions.": "建立银涂层残余厚度衰减寿命预测框架，将基材粗糙度、硬度、弹性模量和法向载荷纳入模型，以揭示涂层磨损速率与金属接触条件之间的关系。",
  "Defined failure life as sliding distance to a critical residual coating thickness.": "将涂层磨损至临界残余厚度所对应的滑动距离定义为失效寿命。",
  "Validated the framework using friction curves, residual-thickness measurements, and post-failure surface morphology.": "利用摩擦曲线、残余厚度测量及失效后表面形貌对该框架进行验证。",
  "Outcome: first-author manuscript in preparation.": "成果：第一作者论文正在撰写中。",
  "No project images uploaded yet for this project.": "该项目暂未上传研究图片。",
  "You can add friction curves, wear-scar morphology, or residual-thickness figures later.": "后续可补充摩擦曲线、磨痕形貌或残余厚度等图片。",
  "Key Contributor": "核心参与者",
  "Jan. 2026 – Apr. 2026": "2026年1月 – 2026年4月",
  "Interfacial Degradation and Anomalous Disassembly Torque Increase of High-Temperature Dry-Film Coated Threaded Connections": "高温干膜涂层螺纹连接界面退化与异常拆卸力矩升高研究",
  "Developed a temperature–coating condition–interface wear–breakaway torque–bolt stress framework using asperity contact theory, adhesive-wear mechanisms, and the Tresca maximum shear stress criterion.": "基于微凸体接触理论、黏着磨损机制与 Tresca 最大剪应力准则，建立“温度—涂层状态—界面磨损—拆卸力矩—螺栓应力”分析框架。",
  "Conducted four controlled bolt–self-locking-nut tests at 400 °C and after further heating to 700 °C.": "开展四组螺栓—自锁螺母对照试验，分别研究 400 °C 以及进一步升温至 700 °C 后的连接行为。",
  "Observed peak breakaway torque reaching 4.62× the room-temperature value.": "观测到峰值拆卸力矩达到室温条件的 4.62 倍。",
  "Microscopy linked adhesive wear and material transfer in the locking region to the torque increase.": "显微分析表明，锁紧区域的黏着磨损与材料转移是拆卸力矩升高的重要原因。",
  "Research background and problem setting for anomalous disassembly torque at high temperature.": "高温条件下异常拆卸力矩问题的研究背景与问题定义。",
  "Experimental observation showing breakaway torque significantly higher than tightening torque after high-temperature exposure.": "实验结果显示，高温作用后拆卸力矩显著高于拧紧力矩。",
  "Microscopy-supported mechanism: high-temperature sintering, adhesive wear, and seizure in the locking region.": "显微观察支持的机理：高温烧结、黏着磨损以及锁紧区域咬死。",
  "Sep. 2025 – Jan. 2026": "2025年9月 – 2026年1月",
  "Study on Nonlinear Hysteresis Behavior and Evolution of Bolted Joint Interface": "螺栓连接界面非线性迟滞行为及其演化研究",
  "Built a parametric ANSYS Workbench model of a single-bolt lap joint incorporating tightening, thread contact, bearing-surface nonparallelism, and roughness.": "建立单螺栓搭接结构的参数化 ANSYS Workbench 模型，考虑拧紧、螺纹接触、承压面不平行度和表面粗糙度。",
  "Evaluated 16 combinations of tightening torque and cyclic tangential displacement.": "分析 16 组不同拧紧力矩与循环切向位移组合。",
  "Quantified hysteresis, equivalent stiffness, and loss factor.": "定量分析迟滞特性、等效刚度与损耗因子。",
  "Increasing bearing-surface nonparallelism from 0.5° to 1° raised the average change rate of equivalent stiffness from 11.28% to 19.32% and loss factor from 9.86% to 12.32%.": "当承压面不平行度由 0.5° 增加至 1° 时，等效刚度平均变化率由 11.28% 升至 19.32%，损耗因子平均变化率由 9.86% 升至 12.32%。",
  "Experimental setup used for cyclic tangential loading and hysteresis characterization.": "用于循环切向加载与迟滞特性表征的实验装置。",
  "Bolted-joint test specimen for studying interface evolution and nonlinear hysteresis.": "用于研究界面演化与非线性迟滞行为的螺栓连接试验件。",
  "Representative hysteresis curves used to analyze equivalent stiffness and loss factor.": "用于分析等效刚度与损耗因子的代表性迟滞曲线。",
  "Apr. 2025 – Sep. 2025": "2025年4月 – 2025年9月",
  "Development and Research on Advanced Threaded Connection Technology": "先进螺纹连接技术开发与研究",
  "Developed theoretical and finite-element models of bolted-joint deformation and investigated preload, thread pitch, structural parameters, and material properties.": "建立螺栓连接变形的理论模型与有限元模型，并研究预紧力、螺距、结构参数及材料性能的影响。",
  "Derived an equal-stress optimal pitch distribution at 568.65 kN preload.": "在 568.65 kN 预紧力下推导等应力最优螺距分布。",
  "Finite-element validation reduced maximum thread stress by 13.83% and increased thread stiffness by 8.9%.": "有限元验证表明，优化后最大螺纹应力降低 13.83%，螺纹刚度提高 8.9%。",
  "Torque-angle tightening reduced preload dispersion from 19.29% to 10.3% versus torque control.": "与扭矩控制相比，扭矩—转角法将预紧力离散度由 19.29% 降低至 10.3%。",
  "Findings supported a wind-turbine blade-root bolting system and successful project acceptance.": "研究结果应用于风电叶片根部螺栓连接系统设计，并支撑项目顺利验收。",
  "Research background of advanced threaded connection technology.": "先进螺纹连接技术的研究背景。",
  "Mathematical model formulation for load transfer and deformation in threaded connections.": "螺纹连接载荷传递与变形的数学模型构建。",
  "Parametric finite-element model used to study preload, pitch, and load distribution.": "用于研究预紧力、螺距与载荷分布的参数化有限元模型。",
  "Design optimization reduced stress concentration and improved structural stiffness.": "设计优化有效缓解应力集中并提升结构刚度。",
  "Torque-angle tightening outperformed torque control by reducing preload dispersion.": "扭矩—转角法通过降低预紧力离散度表现出优于扭矩法的控制效果。",
  "Methods & tools": "方法与工具",
  "Computational": "计算分析",
  "ANSYS · MATLAB · Python · C++ · finite-element modeling · parametric analysis": "ANSYS · MATLAB · Python · C++ · 有限元建模 · 参数化分析",
  "Design": "设计",
  "Experimental": "实验能力",
  "Friction & wear testing · bolt tightening · fatigue tensile testing · muffle furnace": "摩擦磨损试验 · 螺栓拧紧试验 · 疲劳拉伸试验 · 马弗炉",
  "Characterization": "表征能力",
  "SEM · XRF thickness measurement · surface / residual-thickness analysis": "SEM · XRF 厚度测量 · 表面 / 残余厚度分析",
  "PhD research direction": "博士研究方向",
  "I am interested in extending my background in interface mechanics, finite-element modeling, and tribological degradation toward metastructures / metamaterials, biomechanics, and medical-device mechanics. I am particularly drawn to problems where local contact, microstructure, geometry, and damage evolution control system-level performance.": "我希望将界面力学、有限元建模与摩擦退化方面的研究基础进一步拓展至超结构 / 超材料、生物力学和医疗器械力学。我尤其关注局部接触、微观结构、几何特征与损伤演化如何控制系统层面的力学性能。",
  "Manuscripts": "论文与稿件",
  "Current manuscripts reflect my work on bolted-joint hysteresis, thread-pitch correction, and substrate-dependent degradation of silver coatings.": "当前论文与稿件主要围绕螺栓连接迟滞行为、螺距修正以及基材影响下的银涂层退化展开。",
  "Submitted · 2026": "已投稿 · 2026",
  "In preparation": "撰写中",
  "* Corresponding author": "* 通讯作者",
  "Curriculum Vitae": "个人简历",
  "Mechanical Engineering · Dalian University of Technology · Harbin, China": "机械工程 · 大连理工大学 · 中国哈尔滨",
  "Download PDF CV": "下载 PDF 简历",
  "Dalian University of Technology (Project 985)": "大连理工大学（985 工程）",
  "M.S. Mechanical Engineering · Sep. 2024 – Jun. 2027 (expected)": "机械工程硕士 · 2024年9月 – 2027年6月（预计）",
  "GPA: 3.79/4.00 · Average: 88.93/100 · Rank: 34/343 (Top 10%)": "GPA：3.79/4.00 · 平均分：88.93/100 · 排名：34/343（前 10%）",
  "Northeast Agricultural University (Project 211)": "东北农业大学（211 工程）",
  "B.S. Mechanical Engineering · Sep. 2020 – Jun. 2024": "机械工程学士 · 2020年9月 – 2024年6月",
  "GPA: 3.49/5.00 · Average: 84.99/100 · Rank: 9/99 (Top 10%)": "GPA：3.49/5.00 · 平均分：84.99/100 · 排名：9/99（前 10%）",
  "Research interests": "研究兴趣",
  "Metastructure": "超结构",
  "Metamaterial": "超材料",
  "Medical Device": "医疗器械",
  "Friction and Wear Analysis": "摩擦磨损分析",
  "Research experience": "研究经历",
  "Master's Research Advisor:": "硕士生导师：",
  "Wei Zhang, Associate Professor, Associate Dean": "张伟，副教授、副院长",
  "Research Focus:": "研究方向：",
  "Static/Dynamic Analysis and Friction/Wear Analysis of Bolted Joint Structures": "螺栓连接结构静 / 动力学分析及摩擦磨损分析",
  "See detailed project descriptions →": "查看详细项目 →",
  "Skills": "技能",
  "Programming": "编程",
  "Simulation & Design": "仿真与设计",
  "Friction and Wear Tester · Muffle Furnace · Electric Bolt Tightening Spindle · Fatigue Tensile Testing Machine": "摩擦磨损试验机 · 马弗炉 · 电动螺栓拧紧轴 · 疲劳拉伸试验机",
  "SEM · XRF Thickness Gauge": "SEM · XRF 测厚仪",
  "Languages": "语言能力",
  "Mandarin · English (IELTS 6.5)": "中文 · 英语（IELTS 6.5）",
  "Awards & scholarships": "荣誉与奖学金",
  "Dalian University of Technology · Sep. 2025, Sep. 2026": "大连理工大学 · 2025年9月、2026年9月",
  "Northeast Agricultural University · Sep. 2021, Sep. 2022, Sep. 2023": "东北农业大学 · 2021年9月、2022年9月、2023年9月",
  "16th National College Student Competition on Energy Conservation, Emission Reduction, Social Practice, and Technology · Jun. 2023": "第十六届全国大学生节能减排社会实践与科技竞赛 · 2023年6月",
  "Second Prize": "二等奖",
  "10th National College Student Competition on Agricultural Building, Environment, and Energy Engineering · Oct. 2022": "第十届全国大学生农业建筑环境与能源工程竞赛 · 2022年10月",
  "Wear-life comparison for silver coatings on GCr15 and In718 substrates across different surface-roughness levels.": "GCr15 与 In718 基材银涂层在不同表面粗糙度条件下的磨损寿命对比。",
  "Wear-depth and wear-width comparison for GCr15 and In718 under different surface-roughness conditions.": "GCr15 与 In718 在不同表面粗糙度条件下的磨损深度与磨痕宽度对比。",
  "Effect of normal load on friction evolution and silver-coating wear life.": "不同法向载荷对摩擦演化及银涂层磨损寿命的影响。",
  "SEM and elemental-mapping analysis used to compare load-dependent coating degradation and substrate exposure.": "通过 SEM 与元素面分布分析，对比不同载荷下银涂层退化与基材暴露特征。"
};
  const titleTranslations = {
  "Yuxin Xu | Academic Homepage": "Yuxin Xu | 个人学术主页",
  "Research | Yuxin Xu": "研究 | Yuxin Xu",
  "Publications | Yuxin Xu": "论文 | Yuxin Xu",
  "CV | Yuxin Xu": "简历 | Yuxin Xu"
};
  const altTranslations = {
  "Portrait of Yuxin Xu": "Yuxin Xu 个人照片",
  "Research background for high-temperature bolt disassembly": "高温螺栓拆卸研究背景",
  "Breakaway torque significantly exceeds tightening torque": "拆卸力矩显著高于拧紧力矩",
  "Microscopy-based mechanism analysis": "显微机理分析",
  "Experimental setup for hysteresis tests": "迟滞试验实验装置",
  "Bolted joint specimen used for hysteresis tests": "迟滞试验用螺栓连接试验件",
  "Measured hysteresis curves": "实验测得的迟滞曲线",
  "Research background for advanced threaded connection technology": "先进螺纹连接技术研究背景",
  "Mathematical model of advanced threaded connections": "先进螺纹连接数学模型",
  "Parametric finite element model": "参数化有限元模型",
  "Stress concentration relief and stiffness improvement": "应力集中缓解与刚度提升",
  "Torque-angle method versus torque method": "扭矩—转角法与扭矩法对比",
  "Silver-coating wear-life comparison across surface roughness": "不同表面粗糙度下银涂层磨损寿命对比",
  "Wear depth and width comparison across surface roughness": "不同表面粗糙度下磨损深度与磨痕宽度对比",
  "Effect of normal load on silver-coating wear life": "法向载荷对银涂层磨损寿命的影响",
  "SEM analysis of load-dependent silver-coating degradation": "不同载荷下银涂层退化的 SEM 分析"
};
  const LANG_KEY = 'yx-academic-site-language';
  const originalText = new WeakMap();
  const originalAlt = new WeakMap();
  const originalTitle = document.title;

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  function collectTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT','STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => originalText.set(node, node.nodeValue));
    return nodes;
  }

  const textNodes = collectTextNodes(document.body);
  const translatableImages = Array.from(document.querySelectorAll('img[alt]'));
  translatableImages.forEach(img => originalAlt.set(img, img.alt));

  const navLinks = document.querySelector('.nav-links');
  const langButton = document.createElement('button');
  langButton.type = 'button';
  langButton.className = 'lang-toggle';
  langButton.setAttribute('aria-label', 'Switch site language');
  if (navLinks) navLinks.appendChild(langButton);

  function translateTextNode(node, lang) {
    const raw = originalText.get(node) || node.nodeValue;
    if (lang === 'en') { node.nodeValue = raw; return; }
    const trimmed = raw.trim();
    const translated = translations[trimmed];
    if (!translated) { node.nodeValue = raw; return; }
    const leading = raw.match(/^\s*/)?.[0] || '';
    const trailing = raw.match(/\s*$/)?.[0] || '';
    node.nodeValue = leading + translated + trailing;
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    textNodes.forEach(node => translateTextNode(node, lang));
    translatableImages.forEach(img => {
      const enAlt = originalAlt.get(img) || img.alt;
      img.alt = lang === 'zh' ? (altTranslations[enAlt] || enAlt) : enAlt;
      if (img.closest('.project-gallery')) img.title = lang === 'zh' ? '点击查看完整图片' : 'Click to view full image';
    });
    document.title = lang === 'zh' ? (titleTranslations[originalTitle] || originalTitle) : originalTitle;
    langButton.textContent = lang === 'zh' ? 'EN' : '中文';
    langButton.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    localStorage.setItem(LANG_KEY, lang);
    document.body.dataset.language = lang;
  }

  let currentLang = localStorage.getItem(LANG_KEY) === 'zh' ? 'zh' : 'en';
  langButton.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    applyLanguage(currentLang);
  });
  applyLanguage(currentLang);

  const images = document.querySelectorAll('.project-gallery img');
  if (!images.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button">×</button>
    <div class="image-lightbox-inner">
      <img src="" alt="">
      <div class="image-lightbox-caption"></div>
    </div>`;
  document.body.appendChild(lightbox);

  const full = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.image-lightbox-caption');
  const closeBtn = lightbox.querySelector('.image-lightbox-close');

  function updateLightboxLabels() {
    const zh = document.body.dataset.language === 'zh';
    lightbox.setAttribute('aria-label', zh ? '完整研究图片' : 'Full research image');
    closeBtn.setAttribute('aria-label', zh ? '关闭图片' : 'Close image');
  }

  function openLightbox(img) {
    updateLightboxLabels();
    full.src = img.src;
    full.alt = img.alt || (document.body.dataset.language === 'zh' ? '研究图片' : 'Research image');
    const fig = img.closest('figure');
    const cap = fig ? fig.querySelector('figcaption') : null;
    caption.textContent = cap ? cap.textContent : (img.alt || '');
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    full.src = '';
  }

  images.forEach((img) => {
    img.setAttribute('tabindex', '0');
    img.addEventListener('click', () => openLightbox(img));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
})();
