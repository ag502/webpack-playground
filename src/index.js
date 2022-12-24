import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
// import addImage from "./add-image.js";
import Heading from "./components/heading/heading.js";

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
helloWorldButton.render();

const heading2 = new Heading();
const helloWorldButton2 = new HelloWorldButton();

heading2.render();
helloWorldButton2.render();

let ten = 10;

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}

helloWorldButton.methodDoesNotExist();
