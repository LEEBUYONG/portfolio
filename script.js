/**
 * Education Operation PM Portfolio — script.js
 * -----------------------------------------------
 * config.js 의 CONFIG 데이터를 읽어 페이지 전체를 렌더링합니다.
 * HTML / config.js 구조가 바뀌지 않는 한 이 파일은 수정하지 않아도 됩니다.
 */

/* =============================================
  초기화
============================================= */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined") {
    console.error("[Portfolio] CONFIG를 찾을 수 없습니다. config.js 가 script.js 보다 먼저 로드되는지 확인하세요.");
    return;
  }

  renderProfile();
  renderNav();
  renderHeroActions();
  renderHighlights();
  renderResume();
  renderOperations();
  renderLearningData();
  renderMingleDay();
  renderProcessImprovement();
  renderGuides();
  renderGrowth();
  renderResources();
  initTabs();
});

/* =============================================
  유틸
============================================= */

/** querySelector 단축 */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
/** querySelectorAll → Array 단축 */
const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/** textContent 세팅 (요소 없으면 무시) */
function setText(sel, val, ctx = document) {
  const el = qs(sel, ctx);
  if (el && val != null) el.textContent = val;
}

/** innerHTML 세팅 (요소 없으면 무시) */
function setHTML(sel, val, ctx = document) {
  const el = qs(sel, ctx);
  if (el && val != null) el.innerHTML = val;
}

/** XSS 방지용 이스케이프 */
function esc(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** URL 유효성 확인 */
const isUrl = (url) => typeof url === "string" && url.trim().length > 0;

/**
 * <a> 버튼 생성
 * @param {string} label
 * @param {string} url
 * @param {string} style   - "primary" | "secondary"
 * @param {boolean} disabled
 * @param {string} [download] - download 속성값 (파일명)
 */
function makeLink(label, url, style = "secondary", disabled = false, download = null) {
  const a = document.createElement("a");
  a.className = `btn btn--${style}${disabled ? " btn--disabled" : ""}`;
  a.textContent = label;

  if (disabled || !isUrl(url)) {
    a.href = "javascript:void(0)";
    a.setAttribute("aria-disabled", "true");
    a.addEventListener("click", (e) => e.preventDefault());
  } else {
    a.href = url;
    if (download) {
      a.download = download;
    } else {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  }
  return a;
}

/**
 * 카드 엘리먼트 생성
 * @param {string} className
 * @param {string} html
 */
function makeCard(className, html) {
  const el = document.createElement("article");
  el.className = className;
  el.innerHTML = html;
  return el;
}

/* =============================================
  프로필 / 브랜드
============================================= */
function renderProfile() {
  const p = CONFIG.profile;

  // 페이지 타이틀
  document.title = `${p.name} | ${p.role}`;

  // 헤더
  setText("#brandName",    p.name);
  setText("#brandSub",     p.brandSub);
  setText("#brandMark",    p.initial);

  // 히어로
  setText("#heroLabel",    p.heroLabel);
  setHTML("#heroTitle",    p.heroTitle);
  setText("#heroDesc",     p.heroDesc);

  // 프로필 카드
  setText("#profileAvatar", p.initial);
  setText("#profileName",   p.name);
  setText("#profileRole",   p.targetRole);

  // 핵심 요약 dl
  const dl = qs("#profileDl");
  if (dl) {
    dl.innerHTML = p.summary.map((item) => `
      <div class="profile__dl-row">
        <dt>${esc(item.label)}</dt>
        <dd>${esc(item.value)}</dd>
      </div>
    `).join("");
  }

  // 스킬 칩
  const chips = qs("#heroChips");
  if (chips) {
    chips.innerHTML = CONFIG.skills
      .map((s) => `<span class="chip">${esc(s)}</span>`)
      .join("");
  }

  // 핵심 메시지
  setText("#coreMessage", p.coreMessage);

  // 푸터
  setText("#footerName",    p.name);
  setText("#footerDesc",    p.footerDesc);
  setText("#footerUpdated", p.lastUpdated);
}

/* =============================================
  내비게이션 탭
============================================= */
function renderNav() {
  const nav    = qs("#mainNav");
  const toggle = qs("#navToggle");
  if (!nav) return;

  nav.innerHTML = "";

  CONFIG.tabs.forEach((tab) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav__btn";
    btn.dataset.tab = tab.id;
    btn.textContent = tab.label;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.addEventListener("click", () => switchTab(tab.id));
    nav.appendChild(btn);
  });

  // 모바일 토글
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("nav--open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.classList.toggle("nav__toggle--open", open);
    });

    // 바깥 클릭 시 닫기
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("nav--open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.classList.remove("nav__toggle--open");
      }
    });
  }

  // 해시 변경 감지
  window.addEventListener("hashchange", () => {
    const id = location.hash.replace("#", "");
    if (id) switchTab(id, false);
  });
}

/* =============================================
  탭 전환
============================================= */
function switchTab(id, pushHash = true) {
  // 유효한 탭인지 확인
  const valid = CONFIG.tabs.some((t) => t.id === id);
  if (!valid) return;

  // 섹션 전환
  qsa(".page").forEach((sec) => {
    sec.classList.toggle("page--active", sec.dataset.page === id);
  });

  // 버튼 상태
  qsa(".nav__btn").forEach((btn) => {
    const active = btn.dataset.tab === id;
    btn.classList.toggle("nav__btn--active", active);
    btn.setAttribute("aria-selected", String(active));
  });

  // 모바일 메뉴 닫기
  const nav    = qs("#mainNav");
  const toggle = qs("#navToggle");
  if (nav)    nav.classList.remove("nav--open");
  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.classList.remove("nav__toggle--open");
  }

  // 해시 업데이트
  if (pushHash) history.replaceState(null, "", `#${id}`);

  // 스크롤 상단
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initTabs() {
  const hash = location.hash.replace("#", "");
  const valid = CONFIG.tabs.some((t) => t.id === hash);
  switchTab(valid ? hash : CONFIG.tabs[0].id, false);
}

/* =============================================
  히어로 액션 버튼
============================================= */
function renderHeroActions() {
  const wrap = qs("#heroActions");
  if (!wrap) return;
  wrap.innerHTML = "";

  CONFIG.heroActions.forEach((action) => {
    if (action.type === "tab") {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `btn btn--${action.style || "secondary"}`;
      btn.textContent = action.label;
      btn.addEventListener("click", () => switchTab(action.target));
      wrap.appendChild(btn);
    } else if (action.type === "link") {
      const url = CONFIG.links[action.linkKey] || "";
      wrap.appendChild(makeLink(action.label, url, action.style || "secondary"));
    }
  });
}

/* =============================================
  홈 하이라이트 카드
============================================= */
function renderHighlights() {
  const grid = qs("#highlightGrid");
  if (!grid) return;
  grid.innerHTML = "";

  CONFIG.highlights.forEach((item) => {
    grid.appendChild(makeCard("card card--hover", `
      <div class="card__icon">${esc(item.icon)}</div>
      <h3 class="card__title">${esc(item.title)}</h3>
      <p class="card__desc">${esc(item.desc)}</p>
    `));
  });
}

/* =============================================
  이력서
============================================= */
function renderResume() {
  const r = CONFIG.resume;
  const L = CONFIG.links;

  // PDF 다운로드 버튼
  const pdfLink = qs("#resumePdfLink");
  if (pdfLink && isUrl(L.resumePdf)) {
    pdfLink.href = L.resumePdf;
    pdfLink.download = "Resume_LeeBuYong.pdf";
  }

  // GitHub 링크
  const ghLink = qs("#resumeGithubLink");
  if (ghLink) {
    if (isUrl(L.resumeGithub)) {
      ghLink.href = L.resumeGithub;
      ghLink.target = "_blank";
      ghLink.rel = "noopener noreferrer";
    } else {
      ghLink.classList.add("btn--disabled");
      ghLink.setAttribute("aria-disabled", "true");
      ghLink.href = "javascript:void(0)";
      ghLink.addEventListener("click", (e) => e.preventDefault());
    }
  }

  // 지원 직무
  const roleWrap = qs("#resumeTargetRole");
  if (roleWrap) {
    roleWrap.innerHTML = `
      <div class="resume-role">
        <h3>${esc(r.targetRole.title)}</h3>
        <div class="resume-role__chips">
          ${r.targetRole.keywords.map((k) => `<span class="chip chip--blue">${esc(k)}</span>`).join("")}
        </div>
      </div>
    `;
  }

  // 핵심 요약
  const summaryWrap = qs("#resumeSummaryBlock");
  if (summaryWrap) {
    summaryWrap.innerHTML = `<p class="resume-summary__text">${esc(r.summary)}</p>`;
  }

  // 경력 / 프로젝트 / 교육
  renderCareerBlock("#resumeCareerList",  r.careers);
  renderCareerBlock("#resumeProjectList", r.projects);
  renderCareerBlock("#resumeEduList",     r.education);

  // 보유 기술
  const skillsGrid = qs("#resumeSkillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = r.skillGroups.map((group) => `
      <div class="resume-skill-group">
        <h3 class="resume-skill-group__label">${esc(group.label)}</h3>
        <div class="resume-skill-group__chips">
          ${group.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  // 자격
  const certList = qs("#resumeCertList");
  if (certList) {
    certList.innerHTML = r.certifications.map((c) => `
      <div class="resume-cert">
        <strong>${esc(c.name)}</strong>
        <span>${esc(c.issuer)}</span>
        <span>${esc(c.date)}</span>
      </div>
    `).join("");
  }
}

/** 경력/프로젝트/교육 블록 공통 렌더 */
function renderCareerBlock(sel, items) {
  const wrap = qs(sel);
  if (!wrap || !items) return;
  wrap.innerHTML = "";

  items.forEach((item) => {
    const el = document.createElement("div");
    el.className = "resume-career";
    el.innerHTML = `
      <div class="resume-career__head">
        <div class="resume-career__left">
          <h3 class="resume-career__company">${esc(item.company)}</h3>
          <p class="resume-career__role">${esc(item.role)}</p>
        </div>
        <span class="resume-career__period">${esc(item.period)}</span>
      </div>
      <ul class="resume-career__tasks">
        ${item.tasks.map((t) => `<li>${esc(t)}</li>`).join("")}
      </ul>
    `;
    wrap.appendChild(el);
  });
}

/* =============================================
  APM Operations
============================================= */
function renderOperations() {
  // 업무 표
  const tbody = qs("#operationTableBody");
  if (tbody) {
    tbody.innerHTML = CONFIG.operations.map((op) => `
      <tr>
        <td><strong>${esc(op.area)}</strong></td>
        <td>${esc(op.task)}</td>
        <td><span class="pm-badge">${esc(op.pmPoint)}</span></td>
      </tr>
    `).join("");
  }

  // 타임라인
  const timeline = qs("#operationTimeline");
  if (timeline) {
    timeline.innerHTML = CONFIG.operationFlow.map((item) => `
      <div class="timeline-item">
        <div class="timeline-item__step">${esc(item.step)}</div>
        <div class="timeline-item__body">
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </div>
      </div>
    `).join("");
  }

  // 배운 점
  setText("#operationLearning", CONFIG.operationLearning);
}

/* =============================================
  Learning Data
============================================= */
function renderLearningData() {
  // 데이터 구조 카드
  const structGrid = qs("#dataStructureGrid");
  if (structGrid) {
    structGrid.innerHTML = "";
    CONFIG.dataStructures.forEach((item) => {
      structGrid.appendChild(makeCard("card card--hover", `
        <div class="card__icon">${esc(item.icon)}</div>
        <h3 class="card__title">${esc(item.title)}</h3>
        <ul class="bullet-list">
          ${item.items.map((i) => `<li>${esc(i)}</li>`).join("")}
        </ul>
      `));
    });
  }

  // 데이터 기반 운영 사례
  const caseGrid = qs("#dataCaseGrid");
  if (caseGrid) {
    caseGrid.innerHTML = "";
    CONFIG.dataCases.forEach((item) => {
      caseGrid.appendChild(makeCard("card card--hover", `
        <h3 class="card__title">${esc(item.title)}</h3>
        <p class="card__desc">${esc(item.desc)}</p>
        <div class="pm-point">
          <strong>PM Point</strong>
          <span>${esc(item.pmPoint)}</span>
        </div>
      `));
    });
  }
}

/* =============================================
  Mingle Day Case
============================================= */
function renderMingleDay() {
  const md = CONFIG.mingleDay;
  const L  = CONFIG.links;

  setText("#mingleTitle",      md.title);
  setText("#mingleSummary",    md.summary);
  setText("#mingleReflection", md.reflection);

  // 메타 그리드
  const metaWrap = qs("#mingleMeta");
  if (metaWrap) {
    metaWrap.innerHTML = md.meta.map((m) => `
      <div class="case-meta__item">
        <span class="case-meta__label">${esc(m.label)}</span>
        <strong class="case-meta__value">${esc(m.value)}</strong>
      </div>
    `).join("");
  }

  // 기여 카드
  const contribGrid = qs("#mingleContribGrid");
  if (contribGrid) {
    contribGrid.innerHTML = "";
    md.contributions.forEach((item) => {
      contribGrid.appendChild(makeCard("card card--hover", `
        <div class="card__icon">${esc(item.icon)}</div>
        <h3 class="card__title">${esc(item.title)}</h3>
        <p class="card__desc">${esc(item.desc)}</p>
      `));
    });
  }

  // 아코디언
  const accordion = qs("#mingleAccordion");
  if (accordion) {
    accordion.innerHTML = "";
    md.programs.forEach((prog, idx) => {
      const item = document.createElement("div");
      item.className = "accordion__item";

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "accordion__trigger";
      trigger.setAttribute("aria-expanded", idx === 0 ? "true" : "false");
      trigger.innerHTML = `
        <span>${esc(prog.title)}</span>
        <span class="accordion__icon" aria-hidden="true"></span>
      `;

      const panel = document.createElement("div");
      panel.className = "accordion__panel";
      panel.hidden = idx !== 0;
      panel.innerHTML = `
        <div class="program-grid">
          <div class="program-grid__cell">
            <strong>목적</strong>
            <p>${esc(prog.purpose)}</p>
          </div>
          <div class="program-grid__cell">
            <strong>운영 결과</strong>
            <p>${esc(prog.result)}</p>
          </div>
          <div class="program-grid__cell program-grid__cell--warn">
            <strong>이슈</strong>
            <p>${esc(prog.issue)}</p>
          </div>
          <div class="program-grid__cell program-grid__cell--info">
            <strong>개선안</strong>
            <p>${esc(prog.improvement)}</p>
          </div>
        </div>
      `;

      trigger.addEventListener("click", () => {
        const isOpen = panel.hidden;
        panel.hidden = !isOpen;
        trigger.setAttribute("aria-expanded", String(isOpen));
        trigger.classList.toggle("accordion__trigger--open", isOpen);
      });

      item.appendChild(trigger);
      item.appendChild(panel);
      accordion.appendChild(item);

      // 첫 번째 항목 기본 열림
      if (idx === 0) trigger.classList.add("accordion__trigger--open");
    });
  }

  // 트래킹 시트 링크
  const sheetLink = qs("#mingleSheetLink");
  if (sheetLink && isUrl(L.mingleSheet)) {
    sheetLink.href = L.mingleSheet;
    sheetLink.target = "_blank";
    sheetLink.rel = "noopener noreferrer";
  }
}

/* =============================================
  Process Improvement
============================================= */
function renderProcessImprovement() {
  const pi = CONFIG.processImprovement;

  // 설문 포인트 운영안
  setText("#surveyProblem",  pi.surveyProposal.problem);
  setText("#surveySolution", pi.surveyProposal.solution);

  const flowList = qs("#surveyFlowList");
  if (flowList) {
    flowList.innerHTML = pi.surveyProposal.flow
      .map((step) => `<li>${esc(step)}</li>`)
      .join("");
  }

  // 회의록 카드
  const noteGrid = qs("#meetingNoteGrid");
  if (noteGrid) {
    noteGrid.innerHTML = "";
    pi.meetingNotes.forEach((item) => {
      noteGrid.appendChild(makeCard("card card--hover", `
        <div class="card__icon">${esc(item.icon)}</div>
        <h3 class="card__title">${esc(item.title)}</h3>
        <p class="card__desc">${esc(item.desc)}</p>
      `));
    });
  }

  // 정책 체크리스트
  const checklist = qs("#policyChecklist");
  if (checklist) {
    checklist.innerHTML = pi.policyDiscussions.map((text) => `
      <div class="checklist__item">
        <span class="checklist__icon" aria-hidden="true">✓</span>
        <p>${esc(text)}</p>
      </div>
    `).join("");
  }
}

/* =============================================
  Web Guides
============================================= */
function renderGuides() {
  const L = CONFIG.links;

  // 수강생용
  bindLink("#studentPageLink",   L.studentPage,   "_blank");
  bindLink("#studentGithubLink", L.studentGithub, "_blank");

  // 운영진용
  bindLink("#managerPageLink",   L.managerPage,   "_blank");
  bindLink("#managerGithubLink", L.managerGithub, "_blank");

  // 제작 의도
  setText("#guideIntent", CONFIG.guideIntent);
}

/* =============================================
  Growth
============================================= */
function renderGrowth() {
  const g = CONFIG.growth;

  // 배운 것 + PM Fit 카드
  const summaryGrid = qs("#growthSummaryGrid");
  if (summaryGrid) {
    summaryGrid.innerHTML = `
      <article class="card card--accent">
        <p class="label">교육 운영을 통해 배운 것</p>
        <p class="card__desc">${esc(g.learning)}</p>
      </article>
      <article class="card card--accent">
        <p class="label">기업교육 PM과의 연결</p>
        <p class="card__desc">${esc(g.pmFit)}</p>
      </article>
    `;
  }

  // 강화하고 싶은 역량
  const planGrid = qs("#growthPlanGrid");
  if (planGrid) {
    planGrid.innerHTML = "";
    g.plans.forEach((item) => {
      planGrid.appendChild(makeCard("card card--hover", `
        <div class="card__icon">${esc(item.icon)}</div>
        <h3 class="card__title">${esc(item.title)}</h3>
        <p class="card__desc">${esc(item.desc)}</p>
      `));
    });
  }
}

/* =============================================
  Resources / Links
============================================= */
function renderResources() {
  const list = qs("#resourceList");
  if (!list) return;
  list.innerHTML = "";

  CONFIG.resources.forEach((res) => {
    const disabled = !isUrl(res.url);
    const card = document.createElement("div");
    card.className = `resource-card${disabled ? " resource-card--disabled" : ""}`;

    const body = document.createElement("div");
    body.className = "resource-card__body";
    body.innerHTML = `
      <span class="resource-card__cat">${esc(res.cat)}</span>
      <h3 class="resource-card__title">${esc(res.title)}</h3>
      <p class="resource-card__desc">${esc(res.desc)}</p>
      <span class="resource-card__status">${esc(res.status)}</span>
    `;

    const btn = makeLink(
      res.label,
      res.url,
      disabled ? "secondary" : "primary",
      disabled,
      res.download || null
    );

    card.appendChild(body);
    card.appendChild(btn);
    list.appendChild(card);
  });
}

/* =============================================
  링크 바인딩 헬퍼
============================================= */
function bindLink(sel, url, target = "_blank") {
  const el = qs(sel);
  if (!el) return;

  if (isUrl(url)) {
    el.href = url;
    el.target = target;
    el.rel = "noopener noreferrer";
    el.classList.remove("btn--disabled");
    el.removeAttribute("aria-disabled");
  } else {
    el.href = "javascript:void(0)";
    el.classList.add("btn--disabled");
    el.setAttribute("aria-disabled", "true");
    el.addEventListener("click", (e) => e.preventDefault());
  }
}
