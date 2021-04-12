import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "React TODO",
    description:
      "功能：新增、刪除、編輯代辦事項。<br />狀態：全顯示(預設)、待處理、已處理。<br />排序：可標示每個事項的優先級別。<br />記錄：Local Storage 存儲代辦事項。",
    imagePath: "/images/todo.jpg",
    category: ["React"],
    deployedUrl: "https://cj-yang0225.github.io/react-todolist/",
    githubUrl: "https://github.com/CJ-Yang0225/react-todolist",
    keyTechs: ["React", "JavaScript", "Functional", "SCSS"],
  },
  {
    name: "Message Chat",
    description:
      "透過 Material-UI 模仿 Facebook Messenger 介面，連結 Cloud Firestore 製作即時聊天室。",
    imagePath: "/images/chat.jpg",
    category: ["React", "Firebase"],
    deployedUrl: "https://cj-yang0225.github.io/react-todolist/",
    githubUrl: "https://github.com/CJ-Yang0225/react-todolist",
    keyTechs: [
      "React",
      "Forwarding Ref",
      "React-Flip-Move",
      "Material-UI",
      "Firebase",
    ],
  },
  {
    name: "React Quiz App",
    description:
      "測驗小遊戲，開始後隨機獲得10題難度不等的測驗題目。選項將根據作答提示是否正確。",
    imagePath: "/images/quiz.jpg",
    category: ["React"],
    deployedUrl: "https://cj-yang0225.github.io/react-quiz-ts/",
    githubUrl: "https://github.com/CJ-Yang0225/react-quiz-ts",
    keyTechs: ["React", "TypeScript", "Styled-Components", "SCSS", "Open API"],
  },
  {
    name: "Facebook Clone",
    description:
      "以 React.js 作為核心技術，模仿 Facebook 介面，後端串接 Firebase，打造即時更新貼文的塗鴉牆。",
    imagePath: "/images/fb-clone.png",
    category: ["React", "Firebase"],
    deployedUrl: "https://cj-facebook-clone.web.app/",
    githubUrl: "https://github.com/CJ-Yang0225/facebook.clone",
    keyTechs: [
      "React",
      "useContext ",
      "useReducer ",
      "Material-UI",
      "Firebase",
      "Google Sign-In",
    ],
  },
];
