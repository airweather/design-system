import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div>
  <h1>Design System</h1>
</div>
<div>
  <h3>Input : text</h3>
  <input class="text text-sm" type="text" placeholder="text-sm" />
  <input class="text text-md" type="text" placeholder="text-md" />
  <input class="text text-lg" type="text" placeholder="text-lg" />
</div>

<div>
  <h3>Input : radio</h3>
  <div>
    <input class="radio" type="radio" name="design" id="design1" />
    <input class="radio" type="radio" name="design" id="design2" />
    <input class="radio" type="radio" name="design" id="design3" />
  </div>
</div>

<div>
  <h3>Input : checkbox</h3>
  <div>
    <input class="checkbox" type="checkbox" name="design" id="design1" />
    <input class="checkbox" type="checkbox" name="design" id="design2" />
    <input class="checkbox" type="checkbox" name="design" id="design3" />
  </div>
</div>

<div>
  <h3>Input : range</h3>
  <div>
    <input class="range" type="range" name="design" id="design1" />
  </div>
</div>
`;

setupCounter(document.querySelector("#counter"));
