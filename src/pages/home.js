/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect} from 'react'

function Home() {

  const [greetList, setGreetList] = useState([])
  const greetUrl = 'http://localhost:3000/api/v1/greets'

  const fetchGreetList = () => {
    fetch(greetUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setGreetList(data)
      })
  }

  useEffect(() => {
    fetchGreetList()
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="message">
      <h1>Greetings app!</h1>
      <button onClick={refreshPage}>Change Greeting</button>
      {greetList.map((greet) =>
        <h2 key={ greet.id }>
          { greet.message }
        </h2>
      )}
    </div>
  );
}

export default Home;
