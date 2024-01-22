export default function Container(props) {
    const type = (props.type) ?? "text";
    return <input className="ui-textfield" type={type} name={props.name} placeholder={props.placeholder} />;
}