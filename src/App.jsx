import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Link from "./Link.jsx";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import Input from "./Input.jsx";

function App() {
  const [count, setCount] = useState(0);
  const buttonCode = `export default function Button(props) {
      return <button type={props.type}>{props.children}</button>;
}`;
  const nonJSX = `React.createElement("h1", {className: "classy"}, "Hello World")`;
  const importHook = `import { useState } from 'react'`;
  const initializeState = `function MyReactComponent() {
    const [count, setCount] = useState(0);
  }`;
  const onClick = `<button onClick={() => setCount((count) => count + 1)}>
  Hit count: {count}
</button>`;
  return (
    <div class="container">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lisa's React Tutorial</h1>
      
      <p class="long-body">This tutorial is an introduction to the central concepts of React:
        <b>
          <ul>
            <li>Components</li>
            <li>JSX</li>
            <li>Props</li>
            <li>State</li>
            <li>Hooks</li>
          </ul>
        </b>
        It is not meant to be exhaustive. There are links to more in-depth resources at the end.
      </p>
      Also, this tutorial itself is a React app - of course!
      <p>For development, build and deploy I'm using <a target="new" href="https://vitejs.dev/">Vite</a>. <img src={viteLogo} className="logo vite" alt="Vite logo" /></p>

      <p>Here we go!</p>
      
      <Button>This is a Button.</Button>
      <p>This button is a React Component. It was created with</p>
      <pre><code class="code">&lt;Button&gt;My Button Component&lt;/Button&gt;</code></pre>
      
      <p class="long-body">But wait! <code class="code">&lt;Button&gt;</code> (with a capital B) is not a standard HTML markup tag. Aha! So this is where React comes in. This Button is a React component, which I can direct to display as I wish. It can contain standard HTML tags or other React components.</p>

      <p class="long-body">This is how that Button component looks under the hood:</p>
      
      <pre class="code"><code class="code">{buttonCode}</code></pre>

      <h1>Components</h1>

      <p class="long-body">Components, like the button above, are central to React. Generally, desigingn a React app involves analyzing the UI and breaking it down into sub-sections that will become components. Remember, components can be nested inside other components.</p>

      <p class="long-body">So basically, React components are JavaScript functions that return markup. BUT! This markup is <u><b>NOT HTML</b></u>. It may look similar to HTML, but it's not. It is...</p>

      <h1>JSX</h1>

      <p class="long-body">
      Enter JSX. JSX is a syntax extension to JavaScript that makes working with React components more practical. If we didn't use JSX, our code would get ugly fast, since we would have to use the js equivalent everywhere. ex:</p>

      <pre class="code"><code class="code">{nonJSX}</code></pre>

      <p class="long-body">As opposed to... </p>

      <pre class="code"><code class="code">&lt;h1 className=&quot;classy&quot;&gt;Hello World&lt;/h1&gt;</code></pre>
      
      <p class="long-body">*Important: Browsers don't understand JSX, so it needs to be compiled first (ex: using Vite).</p>

      <h1>Props</h1>
      
      <p class="long-body">Notice that our button component uses a parameter called props. Props is a special keyword in React that stands for properties. This is the way we pass data between components. It maps to the attributes and children of the component.</p>

      <h1>State</h1>

      <p class="long-body">State allows us to track changes in data or properties and react to those changes by defining functions. Click this button a few times.</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hit count: {count}
        </button>
      </div>

      <p class="long-body">The button somehow "remembers" its state and increments the hit count each time it is clicked. How does it do this?</p>

      <h1>Hooks</h1>
      
      <p class="long-body">Hooks allow function components to have access to state and other React features. To use a hook, you need to import it from React. For example, the common useState hook is imported like this:</p>

      <pre class="code"><code class="code">{importHook}</code></pre>

      <p class="long-body">Then, inside our component we initialize the state. The first parameter holds the current state, and the second is the function used to update the state. This example also sets a default value of 0.</p>

      <pre class="code"><code class="code">{initializeState}</code></pre>

      <p class="long-body">After that we just have to link the behaviour to an action. Here, it's the onClick event of the button:</p>

      <pre class="code"><code class="code">{onClick}</code></pre>

      <h1>Taking it Further</h1>

      <p class="long-body">This has been a quick introduction to React, meant to be a springboard into other, more in-depth resources. Here are some I can personally recommend:
      <ul>
        <li>W3Schools has a comprehensive <a target="new" href="https://www.w3schools.com/react/">React tutorial</a></li>
        <li>I HIGHLY recommend this tutorial by independent developer Joubran Jad. It's simply excellent. The topics are presented in just the right order and speed, and it's interactive, so you get to try everything out at every step right on the platform. This course clearly incorporates the science of how we learn and retain information. And... it's really FUN too! Link: <a target="new" href="https://react-tutorial.app/">https://react-tutorial.app/</a></li>
      </ul>
 </p>

    </div>
  )
}

export default App
