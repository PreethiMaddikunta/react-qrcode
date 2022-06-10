import './App.css';
import { useState } from 'react';
import QRCode from 'qrcode';

function App() {
const [url,SetUrl] = useState("");
const [qrcode,SetQrcode] = useState("");

const GenerateQRCode = () => {
  QRCode.toDataURL(url, {
    width: 800,
    margin: 2,
    color:{
      dark: '#000000ff',
      light: '#ffffffff',
    }
  }, (error , url) => {
    if(error) return console.error(error);

    console.log(url);
    SetQrcode(url);
  })
}

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input 
      type="text" 
      placeholder="e.g. https://google.com"
      value = {url} 
      onChange={(event) => {SetUrl(event.target.value);}}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} download="qrcode.png">Download</a>
      </>
      }
    </div>
  );
}

export default App;
