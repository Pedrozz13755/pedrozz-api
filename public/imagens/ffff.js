<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Pedrozz API</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="icon" href="https://telegra.ph/file/2ff582485546fb946994b.jpg" type="image/jpg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
  <style>

     body {
                background-image: url('/im');
                background-size: cover;
                background-position: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 0;
                color: #ff0000;
            }

  </style>
<body>
    <header>
        <nav>
            <div class="menu-btn" onclick="toggleSideBar()">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>
  <style>
          body {
              margin: 0;
              padding: 0;
          }
      </style>
  </head>
  <body>


    <div class="side-bar">
        <div class="close-btn" onclick="toggleSideBar()">
            <i class="fas fa-times"></i>
        </div>
        <div class="txt">
            <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            <p>PEDROZZ-API</p>
        </div>
        <br>
        <hr>
        <div class="menu">
            <div id="colorForm">
                <label for="textColor">Cor do Texto:</label>
                <input type="color" id="textColor" onchange="changeColor('textColor')">
            </div>
            <script>
                function changeColor(type) {
                    const color = document.getElementById(type).value;
                    document.body.style[type === 'backgroundColor' ? 'backgroundColor' : 'color'] = color;
                }
            </script>
          <audio id="backgroundMusic" loop autoplay>
              <source src="" type="audio/mp3">

              <!-- <source src="sua-musica.ogg" type="audio/ogg"> -->
              Seu navegador não suporta a tag de áudio.
          </audio>

          <script>
              // Função para ajustar o volume da música
              function ajustarVolume() {
                  var volume = document.getElementById("volumeInput").value;
                  document.getElementById("backgroundMusic").volume = volume;
              }

              // Adiciona um ouvinte de eventos para aguardar o carregamento da página
              window.addEventListener("load", function () {
                  // Adiciona um ouvinte de eventos para aguardar o carregamento da música
                  document.getElementById("backgroundMusic").addEventListener("canplaythrough", function () {
                      // Exibe um controle deslizante de volume
                      document.body.innerHTML += '<input type="range" id="volumeInput" min="0" max="1" step="0.1" value="1" oninput="ajustarVolume()">';

                      // Atualiza o volume inicial
                      ajustarVolume();
                  });
              });
          </script>
  <div id="links">
          <a class="link" href="canvas/changemymind?texto=PEDROZZ O BRABO&apikey=SUAKEY">Canvas ChangeMyMind</a>
      </div>
      <div id="links">
          <a class="link" href="loli?apikey=SUAKEY">Loli</a>
      </div>
      <div id="links">
          <a class="link" href="shota?apikey=SUAKEY">Shota</a>
      </div>
      <div id="links">
          <a class="link" href="nsfwloli?apikey=SUAKEY">NSFW loli</a>
      </div>
      <div id="links">
          <a class="link" href="nsfw/hetai?apikey=SUAKEY">HEtai</a>
      </div>
      <div id="links">
          <a class="link" href="download/play?&nome=pedrozz mods&apikey=SUAKEY">Play</a>
      </div>
      <div id="links">
          <a class="link" href="download/playv?&nome=pedrozz mods&apikey=SUAKEY">Play vídeo</a>
      </div>
      <div id="links">
          <a class="link" href="download/ytmp3?&link=https://youtu.be/PYta8TrHx8M?si=hsFTQj0Xq_fqcf1g&apikey=SUAKEY">Ytmp3</a>
      </div>
          <div class="links">
            <a class="link" href="download/ytmp4?&link=https://youtu.be/PYta8TrHx8M?si=hsFTQj0Xq_fqcf1g&apikey=SUAKEY">Ytmp4</a>
      </div>
  </div>
      </div>
    <div class="center-image">
        <a href="https://telegra.ph/file/5adba795b9a6348c2f381.jpg" alt="pedrozz: criador">
            <img class="round-image" src="https://telegra.ph/file/71f0b7f75b12b61178d8a.jpg" alt="laura a braba">
        </a>
    </div>
        <a href="https://api.whatsapp.com/send?phone=556199317165&text=key%20de%20teste%20da%20API" id="userName">by Pedrozz</a>

  <section>
   <h2>⟬ PEDROZZ⟭</h2>
   <p>╔━━━━━━━━━━━━━━━━━━━━━╗</p>
   <p>O QUE VOCE PROCURA ESTA</p>
   <p>NA BARRA LATERAL AO LADO</p>
   <p>╚━━━━━━━━━━━━━━━━━━━━━╝</p>
  </section

    <script src="/script/jquery.min.js"></script>
    <script src="/script/index.js"></script>

    <script>
        function toggleSideBar() {
            const sideBar = document.querySelector('.side-bar');
            sideBar.style.left = sideBar.style.left === '0px' ? '-250px' : '0';
        }

        function carregarPagina(pagina) {
            window.open(pagina, '_blank');
        }
    </script>
  <script>
      window.addEventListener('load', function () {
          const audio = document.getElementById('myAudio');
          const audioBtn = document.getElementById('toggle-audio-btn');

          audioBtn.addEventListener('click', function () {
              if (audio.paused) {
                  audio.play();
                  audioBtn.textContent = 'Desativar Áudio';
              } else {
                  audio.pause();
                  audioBtn.textContent = 'Ativar Áudio';
              }
          });
      });
  </script>


</body>
</html>
