import Heading from "./components/heading/heading.js";
import KiwiImage from "./components/kiwi-image/kiwi-image.js";

const heading = new Heading();
heading.render("kiwi");
const kiwiImage = new KiwiImage();
kiwiImage.render();

// 리모트 모듈은 비동기로 임포트됨
import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
  const HelloWorldButton = HelloWorldButtonModule.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
});
