# 이부용 | Education Operation PM Portfolio

> APM 업무 기반 교육 운영 · HRD Project Management Portfolio  
> **교육 Project Manager** 직무 지원을 위해 제작한 SPA 포트폴리오 웹사이트입니다.

🔗 **배포 주소** : `https://leebuyong.github.io/portfolio/`

---

## 📌 포트폴리오 소개

스파르타코딩클럽 APM(학습관리매니저) 업무를 수행하며 쌓은 교육 운영 경험을  
교육 Project Manager 관점으로 정리한 포트폴리오입니다.

출결 관리, 상담/이슈 대응, 공지 운영, 행사 운영, 가이드 제작, 프로세스 개선 등  
교육 과정의 세부 운영 요소를 어떻게 관리하고 구조화했는지를 담았습니다.

> 🔒 **개인정보 보호 안내**  
> 수강생명, 연락처, 상담 내용, 내부 운영 링크 등 민감 정보는 모두 제거하거나  
> 비식별화한 상태로 정리했습니다.

---

## 🗂️ 페이지 구성

| 탭 | 내용 |
|---|---|
| **Home** | 포트폴리오 소개, 핵심 역량, 대표 경험 |
| **Resume** | 이력서 |
| **APM Operations** | APM 업무 범위와 PM 직무 연결점 |
| **Learning Data** | 학습자 운영 데이터 구조와 관리 방식 |
| **Mingle Day Case** | AI 디자이너 4기 밍글데이 운영 케이스 스터디 |
| **Process Improvement** | 설문 포인트 운영안, 회의록 정리, 정책 논의 |
| **Web Guides** | 수강생용 · 운영진용 가이드 웹페이지 제작 |
| **Growth** | PM으로의 성장 방향 |
| **Links** | 산출물 및 외부 링크 모음 |

---

## 📁 파일 구조

```
📁 portfolio/
├── index.html              # SPA 전체 구조 (HTML)
├── config.js               # 모든 문구·링크·데이터 관리
├── script.js               # 렌더링·탭 전환·인터랙션 로직
├── style.css               # 전체 스타일 (반응형 포함)
├── Resume_LeeBuYong.pdf    # 이력서 PDF
└── README.md               # 이 파일
```

---

## ⚙️ 기술 스택

| 항목 | 내용 |
|---|---|
| **구조** | Vanilla HTML / CSS / JavaScript (SPA) |
| **스타일** | CSS Custom Properties (변수 토큰 기반) |
| **렌더링** | config.js 데이터 → script.js 동적 렌더링 |
| **배포** | GitHub Pages |
| **외부 라이브러리** | 없음 (Zero dependency) |

---

## 🚀 GitHub Pages 배포 방법

### 1. 리포지토리 생성
```
GitHub → New repository → 리포지토리명 입력 → Create
```

### 2. 파일 업로드
아래 5개 파일을 리포지토리 루트에 업로드합니다.
```
index.html
config.js
script.js
style.css
Resume_LeeBuYong.pdf
```

### 3. GitHub Pages 설정
```
리포지토리 → Settings → Pages
→ Source: Deploy from a branch
→ Branch: main / (root)
→ Save
```

### 4. 배포 확인
```
https://{GitHub 아이디}.github.io/{리포지토리명}/
```
설정 후 약 1~3분 뒤 배포가 완료됩니다.

---

## ✏️ 내용 수정 방법

포트폴리오의 모든 문구, 링크, 데이터는 **`config.js` 파일 하나**에서 관리합니다.  
`index.html` / `script.js` / `style.css`는 수정하지 않아도 됩니다.

### 주요 수정 위치

| 수정 항목 | config.js 위치 |
|---|---|
| 이름 / 직무 / 소개 문구 | `CONFIG.profile` |
| 이력서 PDF 경로 | `CONFIG.links.resumePdf` |
| GitHub / Notion 링크 | `CONFIG.links` |
| 이력서 경력·프로젝트·교육 | `CONFIG.resume.careers` / `.projects` / `.education` |
| 기술 스택 | `CONFIG.resume.skillGroups` |
| 홈 스킬 칩 | `CONFIG.skills` |
| 밍글데이 케이스 내용 | `CONFIG.mingleDay` |
| 산출물 링크 목록 | `CONFIG.resources` |

### 이력서 PDF 교체
```
1. 새 PDF 파일명을 Resume_LeeBuYong.pdf 로 저장
2. 리포지토리 루트에 업로드 (기존 파일 덮어쓰기)
3. config.js → CONFIG.links.resumePdf 경로 확인
```

---

## 🔗 주요 산출물 링크

| 구분 | 링크 |
|---|---|
| 수강생 공유용 가이드 페이지 | https://leebuyong.github.io/nbc-apm-sharing/ |
| 수강생 가이드 GitHub | https://github.com/LEEBUYONG/nbc-apm-sharing |
| 운영진 내부용 가이드 페이지 | https://nbc-apm.github.io/nbc-apm-manager/ |
| 운영진 가이드 GitHub | https://github.com/NBC-APM/nbc-apm-manager |
| 밍글데이 트래킹 시트 | https://docs.google.com/spreadsheets/d/1g0zg3QJi4rzuyXkdXFh2P3O4FLCRBdZgRRembR-sXJQ |

---

## 📄 이력서

이력서 PDF는 리포지토리 루트의 `Resume_LeeBuYong.pdf` 파일로 제공됩니다.  
포트폴리오 웹사이트 **Resume 탭**에서 직접 다운로드할 수 있습니다.

---

## 🔒 개인정보 보호

- 수강생명, 연락처, 상담 내용 등 개인정보는 모두 제거했습니다.
- 내부 운영 링크는 공개 범위 확인 후 단계적으로 연결할 예정입니다.
- 일부 데이터 구조는 실제 업무 흐름을 바탕으로 재구성한 예시입니다.

---

## 👤 만든 사람

**이부용**  
dqd001@naver.com

---

*Last Updated : 2026.05*
