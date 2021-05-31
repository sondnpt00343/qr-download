import { useRef } from 'react'
import html2canvas from 'html2canvas'
import QRCode from 'react-qr-code'
import './App.css'

function App() {
  const downloadRef = useRef(null)
  const canvasElement = useRef(null)

  const handleRef = (ref) => {
    html2canvas(ref).then(canvas => {
      canvasElement.current = canvas
      downloadRef.current.appendChild(canvas)
    });
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.download = 'QR.png'
    link.href = canvasElement.current.toDataURL()
    link.click()
  }

  return (
    <div>
      <button onClick={handleDownload}>Download</button>

      <div ref={downloadRef}>
      </div>

      <div className="hide">
        <div ref={handleRef} className="App">
          <img className="bg" src="/qa-bg.png" />
          <QRCode value="longbd" />
        </div>
      </div>
    </div>
  );
}

export default App;
