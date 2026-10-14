function Greetings(props) {
  console.log(props)
  return <h1>Welcome To My React Class, {props.name}! thanks I am {props.age} years old</h1>
}



function App() {

  let age = 70;


  return (
    <div className="">
      <Greetings name="Shade" age={50} />
      <Greetings name='Jimmy' age={age} />
    </div>
  );
}



export default App