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
  return (
    <div class="container">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lisa's React Tutorial</h1>
      For development, build and deploy I'm using Vite. <img src={viteLogo} className="logo vite" alt="Vite logo" />
      <p>Here we go!</p>
      <Button>This is a Button.</Button>
      <p>This button is a React Component. It was created with</p>
      <pre><code class="code">&lt;Button&gt;My Button Component&lt;/Button&gt;</code></pre>
      
      <p class="long-body">But walit! <code class="code">&lt;Button&gt;</code> (with a capital B) is not a standard HTML markup tag. Aha! So this is where React comes in. This Button is a React component, which I can direct to display as I wish. It can contain standard HTML tags or other React components.</p>

      <p class="long-body">This is how that Button component under the hood:</p>
      
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

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hit count: {count}
        </button>
      </div>

    </div>
  )
}

export default App
