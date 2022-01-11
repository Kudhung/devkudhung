import { useState } from "react";

const Upimage = () => {
  const [base64URL, setBase64] = useState([])
  const [gmbrstring,setGmbrString] = useState('')
  const file = null

  const getBase64 = (file) => {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };


  const handleFileInputChange = (e) => {
    let { file } = base64URL;

    file = e.target.files[0];
    getBase64(file)
      .then(result => {
        let filebase64 = file["base64"] = Buffer.from(result).toString('base64')
        let filestring = file["stringimage"] = Buffer.from(filebase64, 'base64').toString()
        setBase64(filebase64)
        setGmbrString(filestring)
        console.log("BASE64:", filebase64)
        console.log("String Image:", filestring)
        console.log("InfoFile", file)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={handleFileInputChange}
      />
      <div style={{ marginTop: "2%" }}><p>Hasil Base64 : {base64URL}</p></div>
      <img src={gmbrstring} />
      <div style={{ marginTop: "2%" }}><p>Hasil String : {gmbrstring}</p></div>
    </div>
  )
}

export default Upimage