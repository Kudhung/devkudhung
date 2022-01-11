import { useState } from "react";

export default function FormDepoimentos() {
    // const [depoimentoNome, setDepoimentoNome] = useState("");
    // const [depoimentoEmail, setDepoimentoEmail] = useState("");
    // const [depoimentoMensagem, setDepoimentoMensagem] = useState("");

    const imageUploaded =()=> {
    const base64String = " ";
        var file = document.querySelector(
            'input[type=file]')['files'][0];
      
        var reader = new FileReader();
        console.log("next");
          
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
      
            imageBase64Stringsep = base64String;
      
            // alert(imageBase64Stringsep);
            console.log(base64String);
        }
        reader.readAsDataURL(file);
    }
      
    const displayString=()=> {
        console.log("Base64String about to be printed");
        alert(base64String);
    }


    // async function addDepoimento() {
    //     const depoimentoInfo = {
    //         nome: depoimentoNome,
    //         slug: depoimentoNome.toLowerCase().replace(/\s/g, ""),
    //         email: depoimentoEmail,
    //         mensagem: depoimentoMensagem,
    //     };

    //     const add = await fetch("http://localhost:3004/UploadGambar", {
    //         method: "POST",
    //         headers: {
    //             Accept: "apllication/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(depoimentoInfo),
    //     });
    //     const addResponse = await add.json();

    //     console.log(addResponse);
    // }

    return (
        <>

            <input type="file" name="" id="fileId"
                onChange={imageUploaded} />
            <br /><br />

            <button onClick={displayString}>
                Display String
            </button>
            {/* <form className="w-full space-y-2 md:space-y-4">
                <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <input
                        type="text"
                        onChange={(e) => setDepoimentoNome(e.target.value)}
                        value={depoimentoNome}
                        name="nome"
                        className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                        placeholder="Nome"
                    />
                </div>

                <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <input
                        type="email"
                        onChange={(e) => setDepoimentoEmail(e.target.value)}
                        value={depoimentoEmail}
                        name="email"
                        className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                        placeholder="E-mail"
                    />
                </div>

                <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <textarea
                        onChange={(e) => setDepoimentoMensagem(e.target.value)}
                        value={depoimentoMensagem}
                        name="mensage"
                        className="text-sm font-light outline-none h-24 w-full py-2 text-red-800 placeholder-red-800"
                        placeholder="Mensagem"
                    />
                </div>

                <div className=' pl-3 text-red-800 text-sm'>Enviar Foto</div>
                <div className="flex  pl-3 pt-3 pb-0 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <input
                        type="file"
                        name="file"
                        className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                    />
                </div>

                <div className="bg-red-800 rounded-lg py-2">
                    <button
                        className="w-full text-base font-Nunito text-white tracking-wider hover:font-bold hover:text-xl"
                        type="button"
                        onClick={() => addDepoimento()}
                    >
                        Enviar
                    </button>
                </div>
            </form> */}
        </>
    );
}