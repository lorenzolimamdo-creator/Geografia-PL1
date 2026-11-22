
const enderecoPortal = "https://lorenzolimamdo-creator.github.io/Geografia-PL1/";

const containerQRCode = document.getElementById("qrcode");

if (containerQRCode) {
    const imagemQRCode = document.createElement("img");

    imagemQRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(enderecoPortal)}`;

    imagemQRCode.alt = "QR Code para acessar o Portal da Turma 117";
    imagemQRCode.width = 220;
    imagemQRCode.height = 220;
    imagemQRCode.className = "img-fluid";

    containerQRCode.appendChild(imagemQRCode);
}
