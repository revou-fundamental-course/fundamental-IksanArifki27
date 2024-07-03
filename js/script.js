const triger = () => {
  const inputTglLahir = document.querySelector("#tglLahir").value;
  const inputGender = document.querySelector(".gender").value;
  const inputPesan = document.querySelector("#msg").value;
  const inputName = document.querySelector("#name").value;
  //   tampil
  const outName = document.querySelector("#tampilNama");
  const waktu = document.querySelector("#time");
  const outlahir = document.querySelector("#tampitglLahir");
  const outPesan = document.querySelector("#pesan");
  const visitor = document.querySelector("#visitor");
  const gender = document.querySelector("#jenis-Kelamin");
  visitor.innerHTML = "Hi " + inputName + ", Welcome to My Website";
  outlahir.innerHTML = " Tanggal lahir :" + inputTglLahir;
  gender.innerHTML = "Jenis Kelamin :" + inputGender;
  outName.innerHTML = "Nama : " + inputName;
  outPesan.innerHTML = " Pesan : " + inputPesan;
};
