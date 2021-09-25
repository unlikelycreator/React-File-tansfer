import './App.css';
import {useState} from 'react'
function App() {
  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const [data, setdata] = useState()
  const Submit = (e) => {
    e.preventDefault();
  
    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();
  
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "docs_upload_example_us_preset");
  
      fetch(url, {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setdata(data.url)
        });
    }
  };
  return (
    <div className="App">
      <header className="header">
        <h2>BuffedShare</h2>
      </header>
      <div className="form-section">
        <form onSubmit={Submit} className="form">
          <input type="file" name="files[]" multiple/>
          <input type="submit" value="Upload Files" name="submit"></input>
        </form>
        <div className="preview">
          <img src={data} alt="preview" height="300px" width="100%"/>
          <a href={data}>Your File</a></div>
      </div>
    </div>
  );
}

export default App;
