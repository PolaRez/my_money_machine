export default function ActionButton(props) {
  return <button className="action-button" type='submit' style={{width: 250, padding: 10, fontSize: 16}}>{props.children}</button>;
}