export default function ChooseButtons(props) {
  return (
    <div>
      <button onClick={() => props.ChoosePerson(false)}>Negar</button>
      <button onClick={() => props.ChoosePerson(true)}>Aceitar</button>
    </div>
  );
}
