//const generateQR = require("./generateQR");

function getQRcode(event){

     event.preventDefault();
     generateQR(document.getElementsByTagName("input")[0].files)

}

function generateQR(files){
    
    for(let i=0;i<files.length;i++){
 
        let element = document.createElement("div")
        let filename = document.createElement("h4")

        let temp = files[i].path.split("\\")

        filename.innerText = temp[temp.length-1]
        console.log(temp[temp.length-1])

        element.id=`qrcode${i}`
        element.style.marginTop="2%"
        
        document.getElementById("qrcode").append(element)
        element.appendChild(filename)


        let qrcode = new QRCode(`qrcode${i}`,{
            text: `http://localhost:5000/v1/downloadFile/?filePath=${files[i].path}`
        })
    }
}

document.getElementsByTagName("form")[0].addEventListener("submit",getQRcode)

