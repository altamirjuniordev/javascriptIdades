function submit() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let mesNumber = data.getMonth() + 1;
    let diaHoje = data.getDate();
    let anoString = document.getElementById("ano").value;
    let res = document.getElementById("res");
    let ano = Number(anoString);
    let idade = anoAtual - ano;
    let sexo = document.getElementsByName("radsex");
    let img = document.getElementById("img");
    let diaAtual = diaHoje.toString()
    let mesAtual = mesNumber.toString()


     
    if (ano == 0 || ano > anoAtual) {
      window.alert("Verifique os dados e tente novamente!");
    } else {
      var genero = "";
      if (sexo[0].checked) {
        genero = "homem";
        if (idade < 12) {
          img.src = "img/menino.png.png";
        } else if (idade < 24) {
          img.src = "img/jovemhomem.png";
        } else if (idade < 50) {
          img.src = "img/adultohomem.png";
        } else {
          img.src = "img/idoso.png";
          res.innerHTML = "veio";
        }
      } else {
        genero = "mulher";
        if (idade < 12) {
          img.src = "img/menina.png";
        } else if (idade < 24) {
          img.src = "img/jovemmulher.png";
        } else if (idade < 50) {
          img.src = "img/adultamulher.png";
        } else {
          img.src = "img/idosa.png";
        }
      }
      if(diaAtual.length == 1) {
        diaAtual = `0${diaHoje}`
      }
      if(mesAtual.length == 1) {
        mesAtual = `0${mesAtual}`
      }

      res.innerHTML = `Detectamos que você é ${genero} e caso tenha nascido entre 01/01 e ${diaAtual}/${mesAtual}, você possi ${idade} anos, caso contrário irá completar este ano ainda !`;
    }
  }