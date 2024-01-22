export default function Button(props) {
    return <button type={props.type} className="ui-button" disabled={props.disabled}>{props.children}</button>;
}