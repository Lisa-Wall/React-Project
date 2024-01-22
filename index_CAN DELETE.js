import React from "react";
import {createRoot} from "react-dom/client";
import Link from "./src/Link.js";
import Button from "./src/Button.js";
import Container from "./src/Container.js";
import Input from "./src/Input.js";
import './index.css';

function App() {
    return (<>
        <Link href="https://react-tutorial.app">Shop online</Link>
        <Button>Click Me</Button>
        <Container><p>This is a paragraph inside my containier</p></Container>
        <Input placeholder="Suggested Text" name="Lisa" />
    </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);