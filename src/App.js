import './App.css';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = () => {
    setOutput(`https://google.co.in/url?q=https://www.youtube.com/redirect?q=${url}%26redir_token=QUFFLUhqbmEtYl8tTUpnNkROaVZieXktNVNjMnZCQ0xrd3xBQ3Jtc0tuUGVJSjdvVkpyREJLYkllU0FQQlBORjVRdXhjb1ZWTTBoenVQcklkd2taWDd3TExLa0R3WU9YYVhaVnkycjVoTFo3Vm8zdFZFTXJqTDNWVWMxMXRmVnpoYTBRam5xS2NFT1BBd0tleWpkV2JGYUxiRQ`);
  }


  return (
    <div className="App">

      {
        !user && (
          <Login setUser={setUser} />
        )
      }


      {
        user && (
          <>
            <h1>URL Shortener</h1>

            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={handleSubmit}>Shorten</button>

            <h1>Output</h1>
            <p contentEditable="true">{output}</p>
          </>
        )
      }

    </div>
  );
}

export default App;