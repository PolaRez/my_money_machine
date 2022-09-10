import ActionButton from "./actionButton";
import TextField from "../loginComponents/textField";

export default function LoginForm() {
  const onLogin = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onLogin}>
      <div
        style={{
          maxWidth: 250,
          margin: "0 auto",
          paddingRight: 30,
          paddingLeft: 30,
          paddingTop: 45,
          paddingBottom: 45,
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 30,
        }}
      >
        <TextField id="usernameInput" label="Username" />
        <TextField id="passwordInput" label="Password" />
        <ActionButton>Log in</ActionButton>
      </div>
    </form>
  );
}
