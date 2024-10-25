감정다이어리 
---------------------------------------------------------------------------------------------------------------------------------
[소개] 

감정다이어리 : 본인이 겪었던 사건이나 그 때에 느꼈던 생각 및 감정을 적기 위한 일기장 플랫폼 

사용한 개발툴 : VSCode

사용한 웹 서버 환경 : Node.js 

사용한 언어 : JavaScript, JSX, ReactJS, CSS3


1. 메인페이지
![리액트 프로젝트3 캡쳐8-2](https://github.com/user-attachments/assets/1798ed71-a0f0-453c-b29b-0b6d1004d2e8)


- 구성페이지 : Home.jsx, Header.jsx, DiaryList.jsx
- 일기쓰기 기능 외에도 개인일정 관리할 수 있음
- 일기의 내용에 대한 좋아요 표시 기능 구현 

2. 새 일기 쓰기 페이지
![리액트 프로젝트3 캡쳐5](https://github.com/user-attachments/assets/0fe424c4-b48a-4078-9474-34ded36e3466)


- 구성페이지 : New.jsx
- 일기내용을 새로 생성할 수 있음 
- 작성한 일기내용을 Editor 컴포넌트를 통해 onSubmit에 의해 내용값 전달됨 

3. 수정페이지
![리액트 프로젝트3 캡쳐2-1](https://github.com/user-attachments/assets/f178f8ad-21a9-48e5-a3cc-17bb692a07fd)


- 구성페이지 : Edit.jsx
- 일기 내용을 수정할 수 있음
- 일기 작성 날짜를 표시하며, 감정상태를 표시할 수 있음
- 해당 내용을 삭제할 수 있다. 

4. 상세페이지
![리액트 프로젝트3 캡쳐6-1](https://github.com/user-attachments/assets/af79162a-24ba-4bb4-a53d-2af9bbb7a52d)


- 구성페이지 : Diary.jsx, useDiary.jsx, get-stringed-date.js, Viewer.jsx
- 사용자가 기록한 사건일지과 감정을 화면에서 시각적으로 표시
- 페이지를 뒤로 이동하거나, 해당 페이지를 수정할 수 있다. => 수정페이지로 이동 
