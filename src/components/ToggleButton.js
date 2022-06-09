export default function ToggleButton(props) {

  const {toggle, handleToggle, className, prop1, prop2} = props;

  let buttonState = false;

  const toggleProps = () => {
    handleToggle(!toggle);
  }

  return (

    <button
      onClick={toggleProps}
      className={className}
    >
      {!toggle ? (prop1) : (prop2)}
    </button>
  )
}