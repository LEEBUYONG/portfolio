/**
 * Education Operation PM Portfolio
 * config.js
 *
 * 이 파일에서 포트폴리오의 주요 문구, 링크, 카드, 표 데이터를 수정할 수 있습니다.
 * 개인정보 및 내부 운영 정보가 포함된 링크는 공개 전 반드시 비식별화 여부를 확인해주세요.
 */

const CONFIG = {
  profile: {
    name: "이부용",
    initial: "B",
    role: "Education Operation PM Portfolio",
    targetRole: "기업교육 Project Manager 지원자",
    heroEyebrow: "APM 기반 교육 운영 PM 포트폴리오",
    heroTitle: "교육 운영 데이터와 문서화로<br />학습 경험을 개선하는 PM",
    heroDescription:
      "APM 업무를 수행하며 출결, 공지, 상담, 이슈, 일정, 조 순회 로그, 튜터 인계 등 교육 과정의 세부 운영 요소를 관리했습니다. Notion, Google Sheets, 웹 가이드 페이지를 활용해 흩어진 정보를 정리하고 반복되는 업무를 구조화했습니다.",
    coreMessage:
      "저는 단순히 교육 운영 업무를 수행한 것이 아니라, 운영 중 발생하는 정보를 구조화하고, 참여자 경험을 개선하기 위한 가이드와 운영안을 만들고, 행사 이후에는 회고를 통해 다음 운영에 재사용 가능한 문서로 남겼습니다.",
    footerDescription:
      "APM 업무 기반 교육 운영 · HRD Project Management Portfolio",
    lastUpdated: "2026.05",
    summary: [
      {
        label: "지원 방향",
        value: "기업교육 Project Manager"
      },
      {
        label: "핵심 경험",
        value: "APM · 교육 운영 · 행사 운영"
      },
      {
        label: "주요 도구",
        value: "Notion · Google Sheets · Web Guide"
      },
      {
        label: "강점",
        value: "문서화 · 데이터 정리 · 프로세스 개선"
      }
    ]
  },

  links: {
    mingleTrackingSheet:
      "https://docs.google.com/spreadsheets/d/1g0zg3QJi4rzuyXkdXFh2P3O4FLCRBdZgRRembR-sXJQ/edit?usp=sharing",

    studentGuideGithub: "https://github.com/LEEBUYONG/nbc-apm-sharing",
    studentGuidePage: "https://leebuyong.github.io/nbc-apm-sharing/",

    managerGuideGithub: "https://github.com/NBC-APM/nbc-apm-manager",
    managerGuidePage: "https://nbc-apm.github.io/nbc-apm-manager/",

    notionPortfolio: "",
    resume: "",
    email: ""
  },

  tabs: [
    {
      id: "home",
      label: "Home"
    },
    {
      id: "operations",
      label: "APM Operations"
    },
    {
      id: "data",
      label: "Learning Data"
    },
    {
      id: "case",
      label: "Mingle Day Case"
    },
    {
      id: "improvement",
      label: "Process Improvement"
    },
    {
      id: "guides",
      label: "Web Guides"
    },
    {
      id: "growth",
      label: "Growth"
    },
    {
      id: "links",
      label: "Links"
    }
  ],

  heroActions: [
    {
      label: "밍글데이 Case 보기",
      target: "case",
      type: "tab",
      style: "primary"
    },
    {
      label: "가이드 웹페이지 보기",
      target: "guides",
      type: "tab",
      style: "secondary"
    },
    {
      label: "자료 링크 모음",
      target: "links",
      type: "tab",
      style: "secondary"
    }
  ],

  skills: [
    "교육 운영",
    "학습자 관리",
    "출결 관리",
    "상담/이슈 관리",
    "공지 운영",
    "일정 관리",
    "운영 데이터 정리",
    "Notion 문서화",
    "Google Sheets",
    "웹 가이드 제작",
    "행사 운영",
    "회의록 정리",
    "프로세스 개선",
    "HRD 관심"
  ],

  highlights: [
    {
      icon: "📋",
      title: "교육 운영 관리",
      description:
        "출결, 공지, 상담, 이슈, 일정, 조 순회 로그 등 교육 과정의 세부 운영 요소를 관리했습니다."
    },
    {
      icon: "📊",
      title: "운영 데이터 구조화",
      description:
        "Google Sheets와 Notion을 활용해 운영 현황, 이슈, 일정, 후속 액션을 확인 가능한 구조로 정리했습니다."
    },
    {
      icon: "🧭",
      title: "가이드 및 문서화",
      description:
        "수강생용·운영진용 웹 가이드를 분리 제작하고, 행사 회고를 다음 운영에 활용 가능한 문서로 정리했습니다."
    }
  ],

  operations: [
    {
      area: "출결 관리",
      task: "입실, 지각, 외출, 조퇴, 미입실 여부 확인 및 특이사항 기록",
      pmPoint: "운영 리스크 조기 확인 및 후속 조치 기반 마련"
    },
    {
      area: "공지 운영",
      task: "세션, 과제, 프로젝트, 만족도 조사, 다면평가 등 주요 일정 안내",
      pmPoint: "공지 누락과 일정 혼선을 줄이는 커뮤니케이션 관리"
    },
    {
      area: "상담/이슈 관리",
      task: "수강생 상담, 민원, 학습 컨디션, 팀 내 이슈 기록 및 공유",
      pmPoint: "학습자 문제를 관리 가능한 운영 이슈로 전환"
    },
    {
      area: "조 순회 로그",
      task: "조별 학습 분위기, 팀 내 상황, 튜터 인계 필요 사항 확인",
      pmPoint: "운영진과 튜터가 학습 상황을 파악할 수 있는 정보 흐름 정리"
    },
    {
      area: "튜터 커뮤니케이션",
      task: "튜터 인계, 피드백 방향 공유, 세션 및 프로젝트 운영 지원",
      pmPoint: "교육 운영 이해관계자 간 커뮤니케이션 조율"
    },
    {
      area: "행사 운영",
      task: "발표회, 밍글데이, 팀 빌딩 활동 등 교육 과정 내 이벤트 운영 지원",
      pmPoint: "학습자 몰입과 팀 빌딩을 위한 교육 프로젝트 운영"
    },
    {
      area: "문서화",
      task: "Notion 업무 페이지, 회의록, 체크리스트, R&R, 운영 가이드 정리",
      pmPoint: "반복 업무의 표준화와 운영 재현성 확보"
    }
  ],

  operationFlow: [
    {
      step: "01",
      title: "학습자 상태 확인",
      description:
        "출결, 조 순회, 상담 로그를 통해 학습자의 참여 상태와 컨디션을 확인합니다."
    },
    {
      step: "02",
      title: "이슈 기록 및 분류",
      description:
        "상담, 민원, 과제 지연, 팀 내 갈등 등 운영 이슈를 유형별로 정리합니다."
    },
    {
      step: "03",
      title: "담당자 공유",
      description:
        "튜터, 운영진, 담당 매니저에게 필요한 정보를 전달하고 후속 조치를 연결합니다."
    },
    {
      step: "04",
      title: "공지 및 리마인드",
      description:
        "세션, 과제, 프로젝트, 설문, 발표회 등 주요 일정을 수강생에게 안내합니다."
    },
    {
      step: "05",
      title: "문서화 및 회고",
      description:
        "반복되는 업무와 운영 이슈를 문서화하여 다음 운영에 재사용 가능한 형태로 남깁니다."
    }
  ],

  operationLearning:
    "APM 업무를 통해 교육 운영은 단순한 행정 처리가 아니라, 학습자의 상태를 확인하고, 필요한 정보를 제때 전달하며, 발생한 이슈를 관리 가능한 형태로 전환하는 일이라는 점을 배웠습니다. 또한 교육 운영의 품질은 세부 업무의 정확성과 담당자 간 정보 흐름에서 만들어진다는 것을 체감했습니다.",

  dataStructures: [
    {
      icon: "👥",
      title: "학습자 관리 데이터",
      items: [
        "출결 상태",
        "지각·외출·조퇴·미입실 여부",
        "상담 필요 여부",
        "학습 컨디션",
        "과제·프로젝트 관련 이슈",
        "조 순회 로그",
        "튜터 인계 필요 사항"
      ]
    },
    {
      icon: "🗓️",
      title: "운영 일정 데이터",
      items: [
        "세션 일정",
        "과제 마감",
        "프로젝트 일정",
        "만족도 조사",
        "다면평가",
        "발표회",
        "밍글데이"
      ]
    },
    {
      icon: "✅",
      title: "운영 액션 데이터",
      items: [
        "담당자",
        "처리 상태",
        "후속 액션",
        "완료 여부",
        "공유 필요 대상",
        "마감 기한"
      ]
    },
    {
      icon: "📌",
      title: "참여 및 보상 데이터",
      items: [
        "설문 참여 여부",
        "미니게임 참여 결과",
        "시상 및 포인트 지급 대상",
        "제출물 확인 여부",
        "정산 필요 항목"
      ]
    }
  ],

  dataCases: [
    {
      title: "출결 관리",
      description:
        "수강생의 입실, 지각, 외출, 조퇴, 미입실 여부를 확인하고 특이사항을 기록했습니다.",
      pmPoint:
        "교육 운영 리스크를 조기에 확인하고 후속 조치가 가능하도록 관리했습니다."
    },
    {
      title: "상담/이슈 관리",
      description:
        "수강생 상담, 민원, 학습 컨디션, 팀 내 이슈를 유형별로 정리했습니다.",
      pmPoint:
        "학습자의 문제를 방치하지 않고 관리 가능한 운영 이슈로 전환하는 경험을 쌓았습니다."
    },
    {
      title: "조 순회 로그",
      description:
        "조별 학습 분위기와 팀 내 상황을 확인하고 로그로 기록했습니다.",
      pmPoint:
        "운영진과 튜터가 학습 상황을 파악할 수 있도록 정보 흐름을 정리했습니다."
    },
    {
      title: "공지 및 일정 관리",
      description:
        "세션, 과제, 프로젝트, 만족도 조사, 다면평가 등 주요 일정을 안내했습니다.",
      pmPoint:
        "공지 누락과 일정 혼선을 줄여 학습자 경험을 안정적으로 유지했습니다."
    }
  ],

  mingleDay: {
    title: "AI 디자이너 4기 밍글데이 운영 프로젝트",
    summary:
      "수강생 간 아이스브레이킹, 팀 빌딩, 학습 피로 완화, 운영진-수강생 간 라포 형성을 목적으로 진행한 ZEP 기반 온라인 행사입니다.",
    meta: [
      {
        label: "프로젝트",
        value: "AI 디자이너 4기 밍글데이"
      },
      {
        label: "참여 규모",
        value: "약 130명"
      },
      {
        label: "진행 방식",
        value: "ZEP 기반 온라인 행사"
      },
      {
        label: "행사 시간",
        value: "19:00 ~ 21:00"
      },
      {
        label: "주요 콘텐츠",
        value: "OX 퀴즈 · 골든벨 · 그림 빙고 · 라디오"
      },
      {
        label: "나의 역할",
        value: "그림 빙고 진행 · 가이드 제작 · 회고 문서화 · 개선안 정리"
      }
    ],
    contributions: [
      {
        icon: "🌐",
        title: "수강생용 가이드 홈페이지 제작",
        description:
          "행사 목적, 진행 순서, 콘텐츠별 참여 방법, 제출물 안내를 수강생 관점에서 정리했습니다."
      },
      {
        icon: "🛠️",
        title: "운영진용 내부 가이드 홈페이지 제작",
        description:
          "콘텐츠별 담당자 역할, 진행 순서, 준비물, 예외 상황 대응 방식을 운영진 관점에서 정리했습니다."
      },
      {
        icon: "🎨",
        title: "그림 빙고 콘텐츠 운영",
        description:
          "24개 팀이 참여하는 그림 빙고 콘텐츠를 진행하며 제출물 관리, 스포트라이트, 점수 집계, 수상 기준 정리를 경험했습니다."
      },
      {
        icon: "📝",
        title: "행사 회고 및 개선안 문서화",
        description:
          "콘텐츠별 좋았던 점, 아쉬웠던 점, 개선 아이디어를 정리하여 다음 행사에서 재사용 가능한 운영 매뉴얼 형태로 발전시켰습니다."
      }
    ],
    programs: [
      {
        title: "OX 퀴즈",
        purpose: "튜터/매니저 TMI 기반 아이스브레이킹",
        result: "초반 분위기 형성에 효과적이었고 참여 반응이 좋았습니다.",
        issue:
          "우승자가 예상보다 빠르게 결정되어 추가 문제 준비와 예외 상황 기준이 필요했습니다.",
        improvement:
          "라운드별 문제 파일 분리, 예비 문제 확보, 전원 탈락/동시 우승 기준 마련이 필요합니다."
      },
      {
        title: "골든벨",
        purpose: "운영 규칙, 디자인, AI 기초 지식 복습",
        result:
          "학습 내용과 운영 기준을 재미있게 복습할 수 있었고, 운영 관련 정보 확인의 필요성을 알 수 있었습니다.",
        issue:
          "운영 관련 문제에서 다수 탈락이 발생했고, 추가 라운드 세팅 과정에서 시간이 소요되었습니다.",
        improvement:
          "운영 문제 난이도 조정, 정답 입력 기준 사전 안내, 추가 라운드 파일 준비가 필요합니다."
      },
      {
        title: "그림 빙고",
        purpose: "팀별 협업 및 디자이너 트랙 특성에 맞는 창의적 참여 유도",
        result:
          "팀별 그림 결과물이 행사 이후 아카이브 자료로도 활용 가능했고, 참여형 콘텐츠로 반응이 좋았습니다.",
        issue:
          "5x5 빙고판과 24개 팀 전체 진행으로 시간이 크게 초과되었고, 제한 시간 내 수상 기준이 모호해졌습니다.",
        improvement:
          "3x3 또는 4x4 축소, 8팀씩 그룹 분리, 대체 수상 기준 사전 마련이 필요합니다."
      },
      {
        title: "라디오 / 사연 콘텐츠",
        purpose: "사연 공유를 통한 감성적 마무리",
        result:
          "참여자 간 공감과 긍정적인 반응이 형성되었고, 행사 후반부 분위기를 부드럽게 마무리했습니다.",
        issue:
          "시간 부족으로 일부 사연을 소개하지 못했고, 음악 송출 이슈가 발생했습니다.",
        improvement:
          "사연 길이 제한, 소개 기준 마련, 5분/10분/15분 축약안 준비, 음향 사전 테스트가 필요합니다."
      }
    ],
    reflection:
      "이 경험을 통해 교육 행사는 단순한 이벤트가 아니라, 학습자의 몰입과 팀 빌딩, 운영 신뢰도를 높이는 교육 프로젝트의 일부라는 것을 배웠습니다. 다수의 참여자, 여러 운영진, 다양한 콘텐츠, 제한된 시간, 예산, 도구 이슈가 동시에 존재하는 상황에서 PM은 사전에 기준을 정리하고, 현장에서는 빠르게 판단하며, 종료 후에는 재사용 가능한 문서로 남겨야 한다는 점을 체감했습니다."
  },

  processImprovement: {
    surveyProposal: {
      problem:
        "다면평가와 만족도 조사 등 교육 운영상 중요한 설문은 제출률이 중요하지만, 운영팀이 개별 수강생을 일일이 확인하고 독려하는 방식은 리소스가 많이 소요됩니다.",
      solution:
        "팀 노션에 설문 완료 체크표를 만들고, 팀원이 각자 완료 여부를 체크한 뒤, 팀장이 매니저에게 노션 링크를 전달하는 구조를 제안했습니다. 운영팀은 노션 표를 확인한 뒤 팀 단위로 포인트를 지급하며, 팀원 전원 완료 시 즉시 보상하는 방식으로 참여율과 운영 효율을 함께 높이는 구조를 설계했습니다.",
      flow: [
        "챕터 종료 및 새 팀 구성",
        "팀 노션에 설문 완료 체크표 생성",
        "팀원 각자 설문 완료 후 체크",
        "팀장 확인 후 매니저에게 노션 URL 전달",
        "운영팀 확인",
        "포인트 지급 및 완료 안내"
      ]
    },
    meetingNotes: [
      {
        icon: "🧾",
        title: "회의록 구조화",
        description:
          "논의 내용을 단순 기록하는 데서 끝내지 않고, 논의 사항, 결정 사항, Task, QnA, 후속 액션으로 구분해 정리했습니다."
      },
      {
        icon: "📌",
        title: "액션아이템 관리",
        description:
          "회의 후 해야 할 일을 담당자와 상태 중심으로 정리해 운영진이 다음 행동을 빠르게 확인할 수 있도록 했습니다."
      },
      {
        icon: "💡",
        title: "운영 개선안 제안",
        description:
          "설문 참여 포인트 지급, TIL·디감훈 포인트 구조, 포인트 트래킹 시트 필요성 등을 운영 관점에서 제안했습니다."
      },
      {
        icon: "🔁",
        title: "재사용 가능한 문서화",
        description:
          "회의록과 회고를 다음 기수 또는 다른 트랙에서도 참고할 수 있는 운영 자료로 남기는 방향을 고민했습니다."
      }
    ],
    policyDiscussions: [
      "TIL 제출 건당 포인트 지급 및 월 단위 일괄 정산 방향 검토",
      "디자인 감각 훈련을 TIL로 통합 제출하는 방안 검토",
      "우수 디감훈 선정 방식과 우수 TIL 선정 필요성 논의",
      "설문조사 완료 여부를 팀 단위로 확인하고 보상하는 구조 제안",
      "포인트 지급 현황을 확인할 수 있는 트래킹 시트 신규 제작 필요성 정리",
      "연대 책임 방식에서 발생할 수 있는 팀장 부담과 운영팀 개입 기준 검토"
    ]
  },

  growth: {
    learning:
      "교육 운영은 단순히 공지를 전달하고 출결을 확인하는 일이 아니라, 학습자의 경험과 과정의 목표 달성을 관리하는 프로젝트라는 것을 배웠습니다. 출결, 상담, 공지, 이슈, 일정, 설문, 만족도, 팀 빌딩 활동은 각각 분리된 업무가 아니라 학습자가 끝까지 몰입하고 성장하도록 돕는 연결된 운영 요소였습니다.",
    pmFit:
      "기업교육 PM은 고객사의 문제를 교육 솔루션으로 구체화하고, 교육 과정에서 발생하는 다양한 이해관계자의 요구를 조율하며, 교육 결과를 데이터와 피드백으로 개선하는 역할이라고 이해하고 있습니다. 저는 APM 업무를 통해 교육 운영의 세부를 경험했고, SW 교육 수료 경험을 통해 기술 교육을 듣는 학습자의 관점도 이해하고 있습니다.",
    plans: [
      {
        icon: "🎓",
        title: "HRD/인재개발 이론 기반 강화",
        description:
          "교육 운영 경험을 HRD 이론과 연결해, 교육이 개인 성장과 조직 변화로 이어지는 구조를 더 깊이 이해하고 싶습니다."
      },
      {
        icon: "📈",
        title: "교육 운영 데이터 분석 역량 강화",
        description:
          "출결, 설문, 만족도, 참여율 등 운영 데이터를 기반으로 교육 개선점을 도출하는 역량을 키우고 싶습니다."
      },
      {
        icon: "🤖",
        title: "AI/DX 교육 이해 확대",
        description:
          "AI와 DX 교육 콘텐츠 및 기업교육 시장에 대한 이해를 넓혀 기술 교육 프로젝트를 더 안정적으로 운영하고 싶습니다."
      },
      {
        icon: "⚙️",
        title: "반복 운영 업무의 표준화",
        description:
          "반복되는 운영 업무를 문서화, 체크리스트화, 자동화하여 한 프로젝트의 성공 경험이 다른 프로젝트에도 복제될 수 있도록 만들고 싶습니다."
      }
    ]
  },

  resources: [
    {
      category: "Mingle Day",
      title: "밍글데이 실시간 트래킹 및 정산 시트",
      description:
        "행사 진행 중 우승자 기록, 포인트 및 기프티콘 정산, 콘텐츠별 결과 확인을 위해 사용한 Google Sheet입니다.",
      url:
        "https://docs.google.com/spreadsheets/d/1g0zg3QJi4rzuyXkdXFh2P3O4FLCRBdZgRRembR-sXJQ/edit?usp=sharing",
      status: "공개 링크",
      buttonLabel: "시트 보기"
    },
    {
      category: "Web Guide",
      title: "수강생 공유용 가이드 페이지",
      description:
        "행사 목적, 일정, 콘텐츠별 참여 방법, 제출물 안내를 수강생 관점에서 정리한 웹 가이드입니다.",
      url: "https://leebuyong.github.io/nbc-apm-sharing/",
      status: "배포 페이지",
      buttonLabel: "페이지 보기"
    },
    {
      category: "GitHub",
      title: "수강생 공유용 가이드 GitHub",
      description:
        "수강생 공유용 가이드 페이지의 GitHub 저장소입니다.",
      url: "https://github.com/LEEBUYONG/nbc-apm-sharing",
      status: "GitHub",
      buttonLabel: "GitHub 보기"
    },
    {
      category: "Web Guide",
      title: "운영진 내부용 가이드 페이지",
      description:
        "콘텐츠별 담당자, 진행 순서, 준비물, 예외 상황 대응 내용을 운영진 관점에서 정리한 내부 운영 가이드입니다.",
      url: "https://nbc-apm.github.io/nbc-apm-manager/",
      status: "배포 페이지",
      buttonLabel: "페이지 보기"
    },
    {
      category: "GitHub",
      title: "운영진 내부용 가이드 GitHub",
      description:
        "운영진 내부용 가이드 페이지의 GitHub 저장소입니다.",
      url: "https://github.com/NBC-APM/nbc-apm-manager",
      status: "GitHub",
      buttonLabel: "GitHub 보기"
    },
    {
      category: "Notion",
      title: "APM 업무 정리 재구성 페이지",
      description:
        "개인정보 및 내부 정보를 제거한 뒤, 실제 운영 구조를 기반으로 새로 재구성할 예정입니다.",
      url: "",
      status: "준비 중",
      buttonLabel: "준비 중"
    }
  ]
};
