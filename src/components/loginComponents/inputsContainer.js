import FieldWithFloatingLabel from "../loginComponents/textField"
import "../../App.css";

export default function InputsContainer() {
  return (
    <div className="inputs-div">
      <FieldWithFloatingLabel id="usernameInput" label="Username" />
      <FieldWithFloatingLabel id="passwordInput" label="Password" />
    </div>
  );
}
