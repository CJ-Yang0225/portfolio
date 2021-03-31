import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Services } from ".";

export const services: Services[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "我可以使用 <b> HTML</b>、<b>CSS</b> 和 <b>React.js</b> 建立一個兼具美觀和擴展性的 SPA ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "具備 <b>Express</b> 基礎知識，可對 Database、Server、API 進行操作 ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "有使用 <b>Apollo</b> & <b>GraphQL</b> 建立 Server 與開設 API 的經驗 ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Android Development",
    about: "有 Android Native 開發經驗，使用過 <b>Dagger</b>、<b>RxJava</b>和 <b>Retrofit</b> 等等 ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about:
      "熟悉 <b>SCSS</b> 、 <b>BEM</b> 命名模式，能使用 <b>Styled Components</b>、<b>Material-UI</b> 設計畫面 ",
  },
  {
    Icon: RiComputerLine,
    title: "Others",
    about:
      "熟悉基本 <b>Git</b> 操作與指令，開發上使用 <b>ESLint</b> 和 <b>Prettier</b> 維持程式碼品質",
  },
];
