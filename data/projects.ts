import { Projects } from "./types";

export const projects: Projects[] = [
  {
    name: "React TODO",
    description:
      "功能：新增、刪除、編輯代辦事項。<br />狀態：全顯示(預設)、待處理、已處理。<br />排序：可標示每個事項的優先級別。<br />記錄：Local Storage 存儲代辦事項。",
    image_path: "../public/images/todo.jpg",
    category: ["React"],
    deployed_url: "https://cj-yang0225.github.io/react-todolist/",
    github_url: "https://github.com/CJ-Yang0225/react-todolist",
    key_techs: ["React", "JavaScript", "Functional", "SCSS"],
  },
  {
    name: "Message Chat",
    description:
      "功能：新增、刪除、編輯代辦事項。<br />狀態：全顯示(預設)、待處理、已處理。<br />排序：可標示每個事項的優先級別。<br />記錄：Local Storage 存儲代辦事項。",
    image_path: "../public/images/todo.jpg",
    category: ["React"],
    deployed_url: "https://cj-yang0225.github.io/react-todolist/",
    github_url: "https://github.com/CJ-Yang0225/react-todolist",
    key_techs: ["React", "JavaScript", "Functional", "SCSS"],
  },
  {
    name: "React Quiz App",
    description:
      "測驗小遊戲，開始後隨機獲得10題難度不等的測驗題目。選項將根據作答提示是否正確。",
    image_path: "../public/images/quiz.jpg",
    category: ["React"],
    deployed_url: "https://cj-yang0225.github.io/react-quiz-ts/",
    github_url: "https://github.com/CJ-Yang0225/react-quiz-ts",
    key_techs: ["React", "TypeScript", "Styled-Components", "SCSS", "Open API"],
  },
  {
    name: "Facebook Clone",
    description:
      "以 React.js 作為核心技術，模仿 Facebook 介面，後端串接 Firebase，打造即時更新貼文的塗鴉牆。",
    image_path: "../public/images/todo.jpg",
    category: ["React"],
    deployed_url: "https://cj-facebook-clone.web.app/",
    github_url: "https://github.com/CJ-Yang0225/facebook.clone",
    key_techs: [
      "React",
      "useContext ",
      "useReducer ",
      "Material-UI",
      "Firebase",
      "Google Sign-In",
    ],
  },
];
