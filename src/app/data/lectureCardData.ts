const LECTURE_CARD_DATA = [
  {
    id: 1,
    image: '/images/lesson1.png',
    title:
      '레슨 1_ 이해하기 쉬운 ChatGPT 활용법 – 강의 소개',
    content:
      '안녕하세요! 이 강의에서는 ChatGPT를 활용해서 풀스택 웹 개발을 해볼거에요. 저희의 목표는 커넥트 4 게임을 만드는 것이고 만드는 과정을 통해서 백엔드와 프론트엔드의 흐름 그리고 아키텍처 구성방안 등을 배울거에요.',
    rate: 4.0,
    tags: ['langchain', 'plusX', 'BX', 'Design', 'Brand'],
    viewCount: 1200,
    date: '2023-08-03',
    lessonContents: [
      '/images/lesson1-content1.png',
      '/images/lesson1-content2.png',
    ],
  },
  {
    id: 2,
    image: '/images/lesson1-1.png',
    title:
      '레슨 1-1 _ 이해하기 쉬운 방식으로 ChatGPT 사용하기 – 작동 방식 소개',
    content:
      '먼저 인터넷 주소창에 chat.openai.com 을 입력해서 ChatGPT 웹사이트를 방문해주세요. 회원가입을 아직 안 하셨다면 회원가입을 해주셔야 ChatGPT 사용이 가능해요.',
    rate: 3.0,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 1100,
    date: '2023-08-02',
    lessonContents: [
      '/images/lesson1-1-content1.png',
      '/images/lesson1-1-content2.png',
    ],
  },
  {
    id: 3,
    image: '/images/lesson2.png',
    title:
      '레슨2 _ ChatGPT를 사용하여 전체 프로그램 구조 만들기 – 구축 단계 정리 가이드',
    content:
      'ChatGPT에게 질문을 하면 그 질문에 대한 답을 들을 수 있는 걸 저희는 이전 강의에서 확인을 했어요. 그러면 여기서 질문을 해볼께요.',
    rate: 3.2,
    tags: ['langchain', 'plusX'],
    viewCount: 2000,
    date: '2023-08-03',
    lessonContents: [
      '/images/lesson2-content1.png',
      '/images/lesson2-content2.png',
      '/images/lesson2-content3.png',
      '/images/lesson2-content4.png',
      '/images/lesson2-content5.png',
    ],
  },
  {
    id: 4,
    image: '/images/lesson2-1.png',
    title:
      '레슨 2-1_ ChatGPT를 사용하여 전체 프로그램 구조 만들기 - Node.js와 Visual Studio Code 소개 및 설치',
    content:
      '좋아요. 여러분이 풀 스택 리액트 앱을 만들려고 하는데, 커넥트 4 게임을 예로 들어볼게요.',
    rate: 4.4,
    tags: ['langchain', 'plusX', 'Design'],
    viewCount: 3000,
    date: '2023-08-01',
    lessonContents: [
      '/images/lesson2-1-content1.png',
      '/images/lesson2-1-content2.png',
      '/images/lesson2-1-content3.png',
      '/images/lesson2-1-content4.png',
      '/images/lesson2-1-content5.png',
      '/images/lesson2-1-content6.png',
      '/images/lesson2-1-content7.png',
    ],
  },
  {
    id: 5,
    image: '/images/lesson3.png',
    title:
      '레슨 3_ ChatGPT를 사용하여 정보 송수신을 위한 서버 생성하기-package.json 설정 Express.js알아보기',
    content:
      '좋아요! 우리는 Node, npm(이건 Node를 설치하면 받아집니다),그리고 Visual Studio Code를 알아봤어요.',
    rate: 5.0,
    tags: ['langchain', 'plusX'],
    viewCount: 1000,
    date: '2023-07-14',
    lessonContents: [
      '/images/lesson3-content1.png',
      '/images/lesson3-content2.png',
      '/images/lesson3-content3.png',
      '/images/lesson3-content4.png',
      '/images/lesson3-content5.png',
      '/images/lesson3-content6.png',
      '/images/lesson3-content7.png',
      '/images/lesson3-content8.png',
      '/images/lesson3-content9.png',
      '/images/lesson3-content10.png',
      '/images/lesson3-content11.png',
      '/images/lesson3-content12.png',
    ],
  },
  {
    id: 6,
    image: '/images/lesson3-1.png',
    title:
      '레슨 3-1_ Express 서버와 라우팅 설정하기 MongoDB 계정 설정',
    content:
      '우리들은 이제 또 하나를 해야 할 거예요. 가져왔으니, 이제 사용해 보는 게 좋겠죠. 그래서 새 파일을 만들어야 합니다.파일 이름은 "server.js"로 하면 돼요. 터미널로 다시 돌아가 봅시다. 새 파일을 어떻게 만들 수 있을까요?',
    rate: 4.1,
    tags: ['langchain', 'plusX', 'Design', 'Brand'],
    viewCount: 1400,
    date: '2023-07-11',
    lessonContents: [
      '/images/lesson3-1-content1.png',
      '/images/lesson3-1-content2.png',
      '/images/lesson3-1-content3.png',
      '/images/lesson3-1-content4.png',
      '/images/lesson3-1-content5.png',
      '/images/lesson3-1-content6.png',
      '/images/lesson3-1-content7.png',
      '/images/lesson3-1-content8.png',
      '/images/lesson3-1-content9.png',
      '/images/lesson3-1-content10.png',
      '/images/lesson3-1-content11.png',
      '/images/lesson3-1-content12.png',
      '/images/lesson3-1-content13.png',
    ],
  },
  {
    id: 7,
    image: '/images/lesson4.png',
    title:
      '레슨 4_ ChatGPT를 사용하여 데이터 저장소 설정하기 - MongoDB 를 활용하여 데이터베이스 연결',
    content:
      '우리는 데이터베이스와 프록시 서버를 구비한 상태고 Express도 갖고 있죠. 그걸 백엔드 쪽에 마련했어요.',
    rate: 3.8,
    tags: ['langchain', 'plusX'],
    viewCount: 3400,
    date: '2023-07-12',
    lessonContents: [
      '/images/lesson4-content1.png',
      '/images/lesson4-content2.png',
      '/images/lesson4-content3.png',
      '/images/lesson4-content4.png',
      '/images/lesson4-content5.png',
      '/images/lesson4-content6.png',
      '/images/lesson4-content7.png',
      '/images/lesson4-content8.png',
    ],
  },
  {
    id: 8,
    image: '/images/lesson5.png',
    title:
      '레슨 5 - 나만의 시스템 구축하기(로컬 호스트, 라우팅 설정 및 첫 사용자 추가하기)',
    content:
      '우리는 데이터베이스를 사용해서 정보를 저장하고 불러올 수 있고이건 마치 데이터베이스가 마치 컴퓨터의 큰 서랍처럼 우리가 필요한 정보를 저장하고 나중에 꺼내서 사용할 수 있어요.',
    rate: 2.9,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 500,
    date: '2023-07-01',
    lessonContents: [
      '/images/lesson5-content1.png',
      '/images/lesson5-content2.png',
      '/images/lesson5-content3.png',
      '/images/lesson5-content4.png',
      '/images/lesson5-content5.png',
      '/images/lesson5-content6.png',
      '/images/lesson5-content7.png',
      '/images/lesson5-content8.png',
    ],
  },
  {
    id: 9,
    image: '/images/lesson5-1.png',
    title: '레슨 5-1_ 나만의 시스템 구축하기(내용정리)',
    content:
      '기억을 되살려보면, 우리는 Google Chrome에서 localhost:3000에 접속해서 확인했었죠. Express를 사용해서 포트를 설정하고 실행했습니다. 그렇게 하면 우리의 백엔드 프록시가 작동하는 거예요. ',
    rate: 3.9,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 5100,
    date: '2023-07-11',
    lessonContents: [
      '/images/lesson5-1-content1.png',
      '/images/lesson5-1-content2.png',
      '/images/lesson5-1-content3.png',
      '/images/lesson5-1-content4.png',
      '/images/lesson5-1-content5.png',
      '/images/lesson5-1-content6.png',
      '/images/lesson5-1-content7.png',
      '/images/lesson5-1-content8.png',
    ],
  },
  {
    id: 10,
    image: '/images/lesson6.png',
    title:
      '레슨 6_ ChatGPT로 앱의 사용자 화면 설정하기(프런트엔드 애플리케이션 구축)',
    content:
      '그럼 설명서의 첫 페이지로 이동해 볼까요? 아래 명령을 실행하여 리액트와 필요한 도구들을 설치해 봅시다.',
    rate: 3.9,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 5100,
    date: '2023-07-19',
    lessonContents: [
      '/images/lesson6-content1.png',
      '/images/lesson6-content2.png',
      '/images/lesson6-content3.png',
      '/images/lesson6-content4.png',
      '/images/lesson6-content5.png',
      '/images/lesson6-content6.png',
      '/images/lesson6-content7.png',
      '/images/lesson6-content8.png',
      '/images/lesson6-content9.png',
      '/images/lesson6-content10.png',
      '/images/lesson6-content11.png',
      '/images/lesson6-content12.png',
      '/images/lesson6-content13.png',
      '/images/lesson6-content14.png',
      '/images/lesson6-content15.png',
      '/images/lesson6-content16.png',
      '/images/lesson6-content17.png',
      '/images/lesson6-content18.png',
      '/images/lesson6-content19.png',
      '/images/lesson6-content20.png',
      '/images/lesson6-content21.png',
      '/images/lesson6-content22.png',
      '/images/lesson6-content23.png',
    ],
  },
  {
    id: 11,
    image: '/images/lesson6-1.png',
    title:
      '레슨 6-1_ ChatGPT로 앱의 사용자 화면 설정하기(리액트 앱에 폼 추가하기 및 사용자 데이터 처리하기)',
    content:
      '폼을 추가하는 기능을 직접 작성해 보도록 할까요? 왜냐하면 이렇게 해서 사용자 이름과 패스워드를 입력하고 엔터 키를 누르면 데이터베이스에 추가되어 게임을 할 수 있게 되기 때문입니다.',
    rate: 4.0,
    tags: ['langchain', 'plusX', 'BX', 'Design', 'Brand'],
    viewCount: 1200,
    date: '2023-08-03',
    lessonContents: [
      '/images/lesson6-1-content1.png',
      '/images/lesson6-1-content2.png',
      '/images/lesson6-1-content3.png',
      '/images/lesson6-1-content4.png',
      '/images/lesson6-1-content5.png',
      '/images/lesson6-1-content6.png',
      '/images/lesson6-1-content7.png',
      '/images/lesson6-1-content8.png',
    ],
  },
  {
    id: 12,
    image: '/images/lesson6-2.png',
    title:
      '레슨 6-2_ ChatGPT로 앱의 사용자 화면 설정하기(사용자 이름과 비밀번호 입력 기능 구현)',
    content:
      '이제 우리는 이 폼이 실제로 작동하도록 만들려고 합니다. 사용자 이름과 패스워드를 연결하여 실제로 동작하는 기능을 추가하려고 해요. 그럼 이제 시작해 볼게요.',
    rate: 3.0,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 1100,
    date: '2023-08-02',
    lessonContents: [
      '/images/lesson6-2-content1.png',
      '/images/lesson6-2-content2.png',
      '/images/lesson6-2-content3.png',
      '/images/lesson6-2-content4.png',
      '/images/lesson6-2-content5.png',
      '/images/lesson6-2-content6.png',
      '/images/lesson6-2-content7.png',
    ],
  },
  {
    id: 13,
    image: '/images/lesson7.png',
    title:
      '레슨 7_ Express와 React로 데이터베이스 활용하기( MongoDB 데이터베이스 사용하는 법 알아보기)',
    content:
      'handleUsernameChange()로 폼에서 event 객체를 받아 처리했죠 그런데 실제로 변경되는 것은 아니에요.   ',
    rate: 3.2,
    tags: ['langchain', 'plusX'],
    viewCount: 2000,
    date: '2023-08-03',
    lessonContents: [
      '/images/lesson7-content1.png',
      '/images/lesson7-content2.png',
      '/images/lesson7-content3.png',
      '/images/lesson7-content4.png',
      '/images/lesson7-content5.png',
      '/images/lesson7-content6.png',
      '/images/lesson7-content7.png',
      '/images/lesson7-content8.png',
      '/images/lesson7-content9.png',
      '/images/lesson7-content10.png',
    ],
  },
  {
    id: 14,
    image: '/images/lesson7-1.png',
    title:
      '레슨 7-1_ Express와 React로 데이터베이스 활용하기(클라이언트에서 데이터베이스로 요청 전송)',
    content:
      '데이터베이스를 업데이트하려면 어떻게 해야 할까요? 저희가 만든 앱에서는 ChatGPT가 시키는 대로 handleSumit() 함수를 만들었습니다.',
    rate: 4.4,
    tags: ['langchain', 'plusX', 'Design'],
    viewCount: 3000,
    date: '2023-08-01',
    lessonContents: [
      '/images/lesson7-1-content1.png',
      '/images/lesson7-1-content2.png',
      '/images/lesson7-1-content3.png',
      '/images/lesson7-1-content4.png',
      '/images/lesson7-1-content5.png',
      '/images/lesson7-1-content6.png',
      '/images/lesson7-1-content7.png',
      '/images/lesson7-1-content8.png',
      '/images/lesson7-1-content9.png',
      '/images/lesson7-1-content10.png',
      '/images/lesson7-1-content11.png',
    ],
  },
  {
    id: 15,
    image: '/images/lesson8.png',
    title:
      '레슨 8_ 데이터 가져오기 및 업데이트하기(ChatGPT에게 애플리케이션에 라우팅 기능 추가)',
    content:
      '이제 남은 건 게임 그 자체와 라우팅(Routing)뿐이에요. 라우팅은 인증 단계에 필요하죠. 사용자 이름을 넣고 암호를 넣은 다음, 경로 변경(라우팅)이 필요합니다.',
    rate: 5.0,
    tags: ['langchain', 'plusX'],
    viewCount: 1000,
    date: '2023-07-14',
    lessonContents: [
      '/images/lesson8-content1.png',
      '/images/lesson8-content2.png',
      '/images/lesson8-content3.png',
      '/images/lesson8-content4.png',
      '/images/lesson8-content5.png',
      '/images/lesson8-content6.png',
      '/images/lesson8-content7.png',
      '/images/lesson8-content8.png',
      '/images/lesson8-content9.png',
      '/images/lesson8-content10.png',
      '/images/lesson8-content11.png',
      '/images/lesson8-content12.png',
    ],
  },
  {
    id: 16,
    image: '/images/lesson9.png',
    title:
      '레슨 9_ ChatGPT로 앱에 내비게이션 추가（리액트에서 라우팅 설정하고 탐색、 페이지 렌더링하기）',
    content:
      '유저이름이 바꿀 때마다 아래쪽 문구에 반영됩니다. chat GPT에게 App.js 파일에 코드를 모두 복사해서 이렇게 물어볼게요.',
    rate: 4.1,
    tags: ['langchain', 'plusX', 'Design', 'Brand'],
    viewCount: 1400,
    date: '2023-07-11',
    lessonContents: [
      '/images/lesson9-content1.png',
      '/images/lesson9-content2.png',
      '/images/lesson9-content3.png',
      '/images/lesson9-content4.png',
      '/images/lesson9-content5.png',
      '/images/lesson9-content6.png',
      '/images/lesson9-content7.png',
      '/images/lesson9-content8.png',
      '/images/lesson9-content9.png',
      '/images/lesson9-content10.png',
      '/images/lesson9-content11.png',
      '/images/lesson9-content12.png',
      '/images/lesson9-content13.png',
      '/images/lesson9-content14.png',
      '/images/lesson9-content15.png',
      '/images/lesson9-content16.png',
      '/images/lesson9-content17.png',
      '/images/lesson9-content18.png',
      '/images/lesson9-content19.png',
      '/images/lesson9-content20.png',
      '/images/lesson9-content21.png',
      '/images/lesson9-content22.png',
    ],
  },
  {
    id: 17,
    image: '/images/lesson10.png',
    title:
      '레슨 10_ 클라이언트 코드 문제 해결 (리액트 기반의 커넥트4 코드 구조 예제 요청)',
    content:
      '여기서부터 진행하기 위해 우리 코드에 첨부된 다음 파일들을 추가해야 합니다. Welcome.jsx 파일은 현재의 Welcome.jsx 파일을 대체해야 합니다. App.css 파일은 현재의 App.css 파일을 대체해야 합니다.',
    rate: 3.8,
    tags: ['langchain', 'plusX'],
    viewCount: 3400,
    date: '2023-07-12',
    lessonContents: [
      '/images/lesson10-content1.png',
      '/images/lesson10-content2.png',
      '/images/lesson10-content3.png',
      '/images/lesson10-content4.png',
      '/images/lesson10-content5.png',
      '/images/lesson10-content6.png',
      '/images/lesson10-content7.png',
      '/images/lesson10-content8.png',
      '/images/lesson10-content9.png',
      '/images/lesson10-content10.png',
    ],
  },
  {
    id: 18,
    image: '/images/lesson10-1.png',
    title:
      '레슨 10-1_ 클라이언트 코드 문제 해결(리액트 코드 디버깅하기)',
    content:
      '그럼 이제 본격적으로 해봅시다. 여기 두 종류의 에러가 있습니다. 하나는 boardSettings가 없다는 거고, 하나는 getIndex가 없다는 거예요. 같은 종류의 오류가 반복해서 나옵니다.',
    rate: 2.9,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 500,
    date: '2023-07-01',
    lessonContents: [
      '/images/lesson10-1-content1.png',
      '/images/lesson10-1-content2.png',
      '/images/lesson10-1-content3.png',
      '/images/lesson10-1-content4.png',
      '/images/lesson10-1-content5.png',
      '/images/lesson10-1-content6.png',
      '/images/lesson10-1-content7.png',
      '/images/lesson10-1-content8.png',
      '/images/lesson10-1-content9.png',
      '/images/lesson10-1-content10.png',
      '/images/lesson10-1-content11.png',
      '/images/lesson10-1-content12.png',
      '/images/lesson10-1-content13.png',
      '/images/lesson10-1-content14.png',
      '/images/lesson10-1-content15.png',
      '/images/lesson10-1-content16.png',
      '/images/lesson10-1-content17.png',
      '/images/lesson10-1-content18.png',
      '/images/lesson10-1-content19.png',
      '/images/lesson10-1-content20.png',
    ],
  },
  {
    id: 19,
    image: '/images/lesson10-2.png',
    title:
      '레슨 10-2_ 클라이언트 코드 문제 해결(풀 스택 앱 완성)',
    content:
      '좋아요, 그럼 풀 스택 앱에 있는 리액트 코드를 계속해서 디버깅해 봅시다. 이미지에서 보시다 시피 가장 눈에 띄는 건 열이 너무 많다는 겁니다.',
    rate: 3.9,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 5100,
    date: '2023-07-11',
    lessonContents: [
      '/images/lesson10-2-content1.png',
      '/images/lesson10-2-content2.png',
      '/images/lesson10-2-content3.png',
      '/images/lesson10-2-content4.png',
      '/images/lesson10-2-content5.png',
      '/images/lesson10-2-content6.png',
      '/images/lesson10-2-content7.png',
      '/images/lesson10-2-content8.png',
      '/images/lesson10-2-content9.png',
      '/images/lesson10-2-content10.png',
      '/images/lesson10-2-content11.png',
      '/images/lesson10-2-content12.png',
      '/images/lesson10-2-content13.png',
      '/images/lesson10-2-content14.png',
      '/images/lesson10-2-content15.png',
      '/images/lesson10-2-content16.png',
      '/images/lesson10-2-content17.png',
      '/images/lesson10-2-content18.png',
      '/images/lesson10-2-content19.png',
    ],
  },
  {
    id: 20,
    image: '/images/lesson10-3.png',
    title:
      '레슨 10-3 _ 클라이언트 코드 문제 해결(마무리 하며..)',
    content: '정말 축하드려요. 과정을 끝까지 진행하셨네요.',
    rate: 3.9,
    tags: ['langchain', 'plusX', 'BX'],
    viewCount: 5100,
    date: '2023-07-19',
    lessonContents: [
      '/images/lesson10-3-content1.png',
      '/images/lesson10-3-content2.png',
      '/images/lesson10-3-content3.png',
      '/images/lesson10-3-content4.png',
    ],
  },
];

export default LECTURE_CARD_DATA;
