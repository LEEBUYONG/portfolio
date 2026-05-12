/**
 * Education Operation PM Portfolio
 * script.js
 *
 * config.js의 CONFIG 데이터를 기반으로 페이지 콘텐츠를 렌더링합니다.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined") {
    console.error("CONFIG를 찾을 수 없습니다. config.js가 script.js보다 먼저 로드되는지 확인해주세요.");
    return;
  }

  initProfile();
  initNavigation();
  initHeroActions();
  initHighlights();
  initOperations();
  initLearningData();
  initMingleDay();
  initProcessImprovement();
  initGuides();
  initGrowth();
  initResources();
  initInitialTab();
});

/**
 * Helpers
 */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function setText(selector, value) {
  const element = $(selector);
  if (element && value) {
    element.textContent = value;
  }
}

function setHTML(selector, value) {
  const element = $(selector);
  if (element && value) {
    element.innerHTML = value;
  }
}

function createElement(tag, className, html) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (html !== undefined) {
    element.innerHTML = html;
  }

  return element;
}

function escapeHTML(value) {
  if (value === null || value === undefined) return "";

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidUrl(url) {
  return typeof url === "string" && url.trim().length > 0;
}

function openTab(tabId, updateHash = true) {
  const targetSection = document.querySelector(`[data-page="${tabId}"]`);
  if (!targetSection) return;

  $$(".page-section").forEach((section) => {
    section.classList.toggle("active", section.dataset.page === tabId);
  });

  $$(".tab-button").forEach((button) => {
    const isActive = button.dataset.tab === tabId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  const mobileMenu = $("#tabNavigation");
  const mobileButton = $("#mobileMenuButton");

  if (mobileMenu) {
    mobileMenu.classList.remove("open");
  }

  if (mobileButton) {
    mobileButton.setAttribute("aria-expanded", "false");
  }

  if (updateHash) {
    history.replaceState(null, "", `#${tabId}`);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function createButtonLink({ label, url, style = "secondary", disabled = false }) {
  const button = document.createElement("a");
  button.className = `button ${style}${disabled ? " disabled" : ""}`;
  button.textContent = label;

  if (disabled || !isValidUrl(url)) {
    button.href = "javascript:void(0)";
    button.setAttribute("aria-disabled", "true");
    button.addEventListener("click", (event) => event.preventDefault());
  } else {
    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  }

  return button;
}

/**
 * Profile
 */
function initProfile() {
  const { profile } = CONFIG;

  setText("#profileName", profile.name);
  setText("#profileRole", profile.role);
  setText("#profileCardName", profile.name);
  setText("#profileTargetRole", profile.targetRole);
  setText("#profileInitial", profile.initial);
  setText("#footerName", profile.name);
  setText("#footerDescription", profile.footerDescription);
  setText("#lastUpdated", profile.lastUpdated);

  setHTML("#heroEyebrow", profile.heroEyebrow);
  setHTML("#heroTitle", profile.heroTitle);
  setText("#heroDescription", profile.heroDescription);
  setText("#coreMessage", profile.coreMessage);

  renderProfileSummary();
  renderSkillChips();
}

function renderProfileSummary() {
  const container = $("#profileSummary");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.profile.summary.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "profile-summary-item";

    const dt = document.createElement("dt");
    dt.textContent = item.label;

    const dd = document.createElement("dd");
    dd.textContent = item.value;

    wrapper.appendChild(dt);
    wrapper.appendChild(dd);
    container.appendChild(wrapper);
  });
}

function renderSkillChips() {
  const container = $("#heroSkillChips");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "skill-chip";
    chip.textContent = skill;
    container.appendChild(chip);
  });
}

/**
 * Navigation
 */
function initNavigation() {
  const nav = $("#tabNavigation");
  const mobileButton = $("#mobileMenuButton");

  if (!nav) return;

  nav.innerHTML = "";

  CONFIG.tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-button";
    button.dataset.tab = tab.id;
    button.textContent = tab.label;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");

    button.addEventListener("click", () => openTab(tab.id));

    nav.appendChild(button);
  });

  if (mobileButton) {
    mobileButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      mobileButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) openTab(hash, false);
  });
}

function initInitialTab() {
  const hash = window.location.hash.replace("#", "");
  const hasHashTab = CONFIG.tabs.some((tab) => tab.id === hash);

  if (hasHashTab) {
    openTab(hash, false);
  } else {
    openTab(CONFIG.tabs[0].id, false);
  }
}

/**
 * Hero
 */
function initHeroActions() {
  const container = $("#heroActions");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.heroActions.forEach((action) => {
    if (action.type === "tab") {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `button ${action.style || "secondary"}`;
      button.textContent = action.label;
      button.addEventListener("click", () => openTab(action.target));
      container.appendChild(button);
      return;
    }

    if (action.type === "link") {
      container.appendChild(
        createButtonLink({
          label: action.label,
          url: action.url,
          style: action.style || "secondary"
        })
      );
    }
  });
}

function initHighlights() {
  const container = $("#highlightCards");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.highlights.forEach((item) => {
    const card = createElement(
      "article",
      "info-card",
      `
        <div class="card-icon">${escapeHTML(item.icon)}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
      `
    );

    container.appendChild(card);
  });
}

/**
 * APM Operations
 */
function initOperations() {
  renderOperationTable();
  renderOperationTimeline();
  setText("#operationLearning", CONFIG.operationLearning);
}

function renderOperationTable() {
  const tbody = $("#operationTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  CONFIG.operations.forEach((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><strong>${escapeHTML(item.area)}</strong></td>
      <td>${escapeHTML(item.task)}</td>
      <td>${escapeHTML(item.pmPoint)}</td>
    `;

    tbody.appendChild(tr);
  });
}

function renderOperationTimeline() {
  const container = $("#operationTimeline");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.operationFlow.forEach((item) => {
    const timelineItem = createElement(
      "article",
      "timeline-item",
      `
        <div class="timeline-step">${escapeHTML(item.step)}</div>
        <div class="timeline-content">
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
        </div>
      `
    );

    container.appendChild(timelineItem);
  });
}

/**
 * Learning Data
 */
function initLearningData() {
  renderDataStructureCards();
  renderDataCaseCards();
}

function renderDataStructureCards() {
  const container = $("#dataStructureCards");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.dataStructures.forEach((item) => {
    const listItems = item.items
      .map((text) => `<li>${escapeHTML(text)}</li>`)
      .join("");

    const card = createElement(
      "article",
      "info-card data-structure-card",
      `
        <div class="card-icon">${escapeHTML(item.icon)}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <ul class="bullet-list">
          ${listItems}
        </ul>
      `
    );

    container.appendChild(card);
  });
}

function renderDataCaseCards() {
  const container = $("#dataCaseCards");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.dataCases.forEach((item) => {
    const card = createElement(
      "article",
      "case-card small",
      `
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <div class="pm-point">
          <strong>PM Point</strong>
          <span>${escapeHTML(item.pmPoint)}</span>
        </div>
      `
    );

    container.appendChild(card);
  });
}

/**
 * Mingle Day
 */
function initMingleDay() {
  const { mingleDay, links } = CONFIG;

  setText("#mingleTitle", mingleDay.title);
  setText("#mingleSummary", mingleDay.summary);
  setText("#mingleReflection", mingleDay.reflection);

  renderMingleMeta();
  renderMingleContributions();
  renderMinglePrograms();
  bindSimpleLink("#mingleTrackingSheetLink", links.mingleTrackingSheet);
}

function renderMingleMeta() {
  const container = $("#mingleMeta");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.mingleDay.meta.forEach((item) => {
    const meta = createElement(
      "div",
      "case-meta-item",
      `
        <span>${escapeHTML(item.label)}</span>
        <strong>${escapeHTML(item.value)}</strong>
      `
    );

    container.appendChild(meta);
  });
}

function renderMingleContributions() {
  const container = $("#mingleContributionCards");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.mingleDay.contributions.forEach((item) => {
    const card = createElement(
      "article",
      "info-card",
      `
        <div class="card-icon">${escapeHTML(item.icon)}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
      `
    );

    container.appendChild(card);
  });
}

function renderMinglePrograms() {
  const container = $("#mingleProgramAccordion");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.mingleDay.programs.forEach((program, index) => {
    const item = document.createElement("article");
    item.className = "accordion-item";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "accordion-trigger";
    button.setAttribute("aria-expanded", index === 0 ? "true" : "false");
    button.innerHTML = `
      <span>${escapeHTML(program.title)}</span>
      <span class="accordion-icon">+</span>
    `;

    const panel = document.createElement("div");
    panel.className = "accordion-panel";
    if (index === 0) {
      panel.classList.add("open");
    }

    panel.innerHTML = `
      <div class="program-grid">
        <div>
          <strong>목적</strong>
          <p>${escapeHTML(program.purpose)}</p>
        </div>
        <div>
          <strong>운영 결과</strong>
          <p>${escapeHTML(program.result)}</p>
        </div>
        <div>
          <strong>이슈</strong>
          <p>${escapeHTML(program.issue)}</p>
        </div>
        <div>
          <strong>개선안</strong>
          <p>${escapeHTML(program.improvement)}</p>
        </div>
      </div>
    `;

    button.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    item.appendChild(button);
    item.appendChild(panel);
    container.appendChild(item);
  });
}

/**
 * Process Improvement
 */
function initProcessImprovement() {
  const { processImprovement } = CONFIG;

  setText("#surveyProposalProblem", processImprovement.surveyProposal.problem);
  setText("#surveyProposalSolution", processImprovement.surveyProposal.solution);

  renderSurveyFlow();
  renderMeetingNoteCards();
  renderPolicyDiscussionList();
}

function renderSurveyFlow() {
  const container = $("#surveyProposalFlow");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.processImprovement.surveyProposal.flow.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    container.appendChild(li);
  });
}

function renderMeetingNoteCards() {
  const container = $("#meetingNoteCards");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.processImprovement.meetingNotes.forEach((item) => {
    const card = createElement(
      "article",
      "info-card",
      `
        <div class="card-icon">${escapeHTML(item.icon)}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
      `
    );

    container.appendChild(card);
  });
}

function renderPolicyDiscussionList() {
  const container = $("#policyDiscussionList");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.processImprovement.policyDiscussions.forEach((text) => {
    const item = createElement(
      "div",
      "check-card",
      `
        <span class="check-icon">✓</span>
        <p>${escapeHTML(text)}</p>
      `
    );

    container.appendChild(item);
  });
}

/**
 * Guides
 */
function initGuides() {
  const { links } = CONFIG;

  bindSimpleLink("#studentGuidePageLink", links.studentGuidePage);
  bindSimpleLink("#studentGuideGithubLink", links.studentGuideGithub);
  bindSimpleLink("#managerGuidePageLink", links.managerGuidePage);
  bindSimpleLink("#managerGuideGithubLink", links.managerGuideGithub);
}

/**
 * Growth
 */
function initGrowth() {
  const { growth } = CONFIG;

  setText("#growthLearning", growth.learning);
  setText("#growthPmFit", growth.pmFit);
  renderGrowthPlans();
}

function renderGrowthPlans() {
  const container = $("#growthPlanCards");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.growth.plans.forEach((item) => {
    const card = createElement(
      "article",
      "info-card",
      `
        <div class="card-icon">${escapeHTML(item.icon)}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
      `
    );

    container.appendChild(card);
  });
}

/**
 * Resources
 */
function initResources() {
  const container = $("#resourceList");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.resources.forEach((resource) => {
    const isDisabled = !isValidUrl(resource.url);

    const card = document.createElement("article");
    card.className = `resource-card${isDisabled ? " disabled-resource" : ""}`;

    const content = document.createElement("div");
    content.innerHTML = `
      <span class="resource-category">${escapeHTML(resource.category)}</span>
      <h3>${escapeHTML(resource.title)}</h3>
      <p>${escapeHTML(resource.description)}</p>
      <span class="resource-status">${escapeHTML(resource.status)}</span>
    `;

    const button = createButtonLink({
      label: resource.buttonLabel,
      url: resource.url,
      style: isDisabled ? "secondary" : "primary",
      disabled: isDisabled
    });

    card.appendChild(content);
    card.appendChild(button);
    container.appendChild(card);
  });
}

/**
 * Link Binding
 */
function bindSimpleLink(selector, url) {
  const element = $(selector);
  if (!element) return;

  if (isValidUrl(url)) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    element.classList.remove("disabled");
    element.removeAttribute("aria-disabled");
  } else {
    element.href = "javascript:void(0)";
    element.classList.add("disabled");
    element.setAttribute("aria-disabled", "true");
    element.addEventListener("click", (event) => event.preventDefault());
  }
}
