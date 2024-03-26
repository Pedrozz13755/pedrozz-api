
api = process.cwd()

var express = require('express');
const path = require('path');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var canvacord = require('canvacord').Canvas
var zrapi = require("zrapi");
var fs = require('fs')
const {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./lib/youtube");
var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./lib/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./lib/anjay");

var criador = ['pedrozz'];
var key = 'pedrozz13'

resposta = {
    semkey: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'Insira a apikey na url'
    },
    cdtxt: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'insira o texto na url'
    },
    cdimg: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'Insira a imagem na url'
    },
    nottext: {
        status: false,
        criador: `${criador}`,
        code: 406,
        message: 'insira o parâmetro text'
    },
    error: {
       status: false,
        criador: `${criador}`,
        mensagem: 
        'ops :/ deu erro no servidor interno'
    }
}

var keyinvalida = api + '/paginas/keysemresultado.html' // html key de invalida

async function getBuffer(url) {
  he = await fetch(url).then(c => c.buffer())
   return he
}
async function getJson(url) {
  he = await fetch(url).then(c => c.json())
   return he
}
function getRandom(nans) {
  he = nans[Math.floor(Math.random() * nans.length)]
   return he
}
 router.all('/loli', async (req, res) => {
   var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
router.get('/download', (req, res) => {
  const htmlPath = path.join(__dirname, './public/download.html');
  res.sendFile(htmlPath);
});
router.get('/ia', (req, res) => {
  const htmlPath = path.join(__dirname, './public/ia.html');
  res.sendFile(htmlPath);
});   
router.get('/nsfw', (req, res) => {
  const htmlPath = path.join(__dirname, './public/nsfw.html');
  res.sendFile(htmlPath);
});   
router.get('/animes', (req, res) => {
  const htmlPath = path.join(__dirname, './public/animes.html');
  res.sendFile(htmlPath);
});   
router.get('/games', (req, res) => {
  const htmlPath = path.join(__dirname, './public/games.html');
  res.sendFile(htmlPath);
});   
router.get('/canvas', (req, res) => {
  const htmlPath = path.join(__dirname, './public/canvas.html');
  res.sendFile(htmlPath);
});   
router.get('/wallpapers', (req, res) => {
  const htmlPath = path.join(__dirname, './public/wallpapere.html');
  res.sendFile(htmlPath);
});   
router.get('/bots', (req, res) => {
  const htmlPath = path.join(__dirname, './public/bots.html');
  res.sendFile(htmlPath);
});   
router.get('/sticks', (req, res) => {
  const htmlPath = path.join(__dirname, './public/sticker.html');
  res.sendFile(htmlPath);
});
router.get('/docs', (req, res) => {
  const htmlPath = path.join(__dirname, './public/docs.html');
  res.sendFile(htmlPath);
});

router.get('/perfil', (req, res) => {
  const htmlPath = path.join(__dirname, './public/perfil.html');
  res.sendFile(htmlPath);
});
   
  router.get('/canvas/*', async (req, res) => {
  var cdapikey = req.query.apikey;
   let { url, texto } = req.query
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
  switch(req.path.replace(/\/canvas/, '').toLowerCase()) {
 case '/trigger':
 case '/trigger/':
  if (!url) return res.status(408).send(resposta.cdimg)
  res.type('gif')
  res.send(await canvacord.trigger(url))
 break
 case '/changemymind':
 case '/changemymind/':
  if (!texto) return res.status(408).send(resposta.cdimg)
  res.type('jpg')
  res.send(await canvacord.changemymind(texto))
  break
      
 case '/clyde':
 case '/clyde/':
  if (!texto) return res.status(408).send(resposta.cdimg)
  res.type('jpg')
  res.send(await canvacord.clyde(texto))
  break
 default: 
 res.status(404).json({
            status:404,
            error: 'A página que você está procurando não foi encontrada',
            endpoint: req.path
        })
 }
  } catch (e) {
  console.error(e) 
   res.type('text/json')
   res.status(400).send(resposta.error)
 }
 })
  router.get('/api/meme', async (req, res, next) => {
     var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
      const meme = JSON.parse(fs.readFileSync(__dirname + '/lib/meme.json'));
      const randmeme = meme[Math.floor(Math.random() * meme.length)];

      res.json({
      status: true,
      código: 200,
      criador: `${criador}`,
      url: `${randmeme}`
    })
    } catch {
      res.status(400).send(resposta.error)
    }
    })
     router.get('/api/memes', async (req, res, next) => {
    var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
      const meme = JSON.parse(fs.readFileSync(__dirname + '/lib/memes-video.json'));
      const randmeme = meme[Math.floor(Math.random() * meme.length)];

      res.json({
      status: true,
      código: 200,
      criador: `${criador}`,
      url: `${randmeme}`
    })
    } catch {
      res.status(400).send(resposta.error)
    }
    })
 router.get('/nsfw/hentai', async (req, res) => {
 var cdapikey = req.query.apikey;
 try {
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 end = getRandom([,"waifu", "neko"])
 let { url } = await getJson(`https://api.waifu.pics/nsfw/${end}`)
 let buffer = await getBuffer(url)
 res.type('png')
 res.send(buffer)
 } catch {
 res.type('text/json')
 res.status(400).send(resposta.error)
 }
 })
  
 router.get('/download/ytmp3', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 link = req.query.link          
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o link"})
 ytDonlodMp3(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

 router.get('/download/ytmp4', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 link = req.query.link          
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o link"})
 ytDonlodMp4(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

 router.get('/download/play', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
 ytPlayMp3(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

 router.get('/download/playv', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
if(!cdapikey) return res.json(resposta.semkey)
 if(cdapikey !== key) return res.sendFile(keyinvalida)
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
 ytPlayMp4(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

////////////////(ia)//////////////////

router.get('/ia/gpt4', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/gpt4?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});


router.get('/ia/gemini', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
     if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/gemini?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/ia/turbo', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
     if (!text) return res.json("coloque sua perqunta na URL 🥰");

    fetch("https://aemt.me/turbo?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/ia/bingia', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
     if (!text) return res.json("coloque sua perqunta na URL 🥰)");

    fetch("https://aemt.me/bingai?text=" + text)
      .then(response => response.json())
      .then(data => {
        res.json({
          status: true,
          code: 200,
          criador: `${criador}`,
          resultado: data.result
        });
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/ia/txtimg', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("Coloque seu texto para eu gerar tua imagem🥰      Explore sua criatividade com uma ia que gera imagem com seus texto🤖");

    fetch("https://aemt.me/ai/text2img?text=" + text)
      .then(response => {
        // Verifica se a resposta é uma imagem (content-type: image/*)
        if (response.headers.get('content-type').startsWith('image/')) {
          // Retorna a imagem como buffer
          return response.buffer();
        } else {
          throw new Error('A resposta não é uma imagem.');
        }
      })
      .then(imageBuffer => {
        // Converte o buffer da imagem para base64
        const imageBase64 = imageBuffer.toString('base64');
        // Envie a imagem como resposta
        res.send(`<img src="data:image/jpeg;base64,${imageBase64}" />`);
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/ia/dalle', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("Coloque seu texto para eu gerar tua imagem🥰      Explore sua criatividade com uma ia que gera imagem com seus texto🤖");

    fetch("https://aemt.me/dalle?text=" + text)
      .then(response => {
        // Verifica se a resposta é uma imagem (content-type: image/*)
        if (response.headers.get('content-type').startsWith('image/')) {
          // Retorna a imagem como buffer
          return response.buffer();
        } else {
          throw new Error('A resposta não é uma imagem.');
        }
      })
      .then(imageBuffer => {
        // Converte o buffer da imagem para base64
        const imageBase64 = imageBuffer.toString('base64');
        // Envie a imagem como resposta
        res.send(`<img src="data:image/jpeg;base64,${imageBase64}" />`);
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/ia/txtimg2', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("Coloque seu texto para eu gerar tua imagem🥰      Explore sua criatividade com uma ia que gera imagem com seus texto🤖");

    fetch("https://aemt.me/v6/text2img?text=" + text)
      .then(response => {
        // Verifica se a resposta é uma imagem (content-type: image/*)
        if (response.headers.get('content-type').startsWith('image/')) {
          // Retorna a imagem como buffer
          return response.buffer();
        } else {
          throw new Error('A resposta não é uma imagem.');
        }
      })
      .then(imageBuffer => {
        // Converte o buffer da imagem para base64
        const imageBase64 = imageBuffer.toString('base64');
        // Envie a imagem como resposta
        res.send(`<img src="data:image/jpeg;base64,${imageBase64}" />`);
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});

router.get('/api/ttp', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("Coloque seu texto para eu gerar tua imagem🥰      Explore sua criatividade com uma ia que gera imagem com seus texto🤖");

    fetch("https://aemt.me/ttp?text=" + text)
      .then(response => {
        // Verifica se a resposta é uma imagem (content-type: image/*)
        if (response.headers.get('content-type').startsWith('image/')) {
          // Retorna a imagem como buffer
          return response.buffer();
        } else {
          throw new Error('A resposta não é uma imagem.');
        }
      })
      .then(imageBuffer => {
        // Converte o buffer da imagem para base64
        const imageBase64 = imageBuffer.toString('base64');
        // Envie a imagem como resposta
        res.send(`<img src="data:image/jpeg;base64,${imageBase64}" />`);
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
});


 router.get('/api/attp', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("cade o texto");

    fetch("https://aemt.me/attp?text=" + text)
      .then(response => {
        // Verifica se a resposta é um GIF (content-type: image/gif)
        if (response.headers.get('content-type').startsWith('image/gif')) {
          // Retorna o GIF como buffer
          return response.buffer();
        } else {
          throw new Error('A resposta não é um GIF.');
        }
      })
      .then(imageBuffer => {
        // Converte o buffer do GIF para base64
        const imageBase64 = imageBuffer.toString('base64');
        // Envie o GIF como resposta
        res.send(`<img src="data:image/gif;base64,${imageBase64}" />`);
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }

 });

  router.get('/api/pinterest', async(req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json(resposta.semkey);
    if (cdapikey !== key) return res.sendFile(keyinvalida);

    const text = req.query.text1;
    if (!text) return res.json("cade o titulo da sua pesquisa");

    fetch("https://aemt.me/pinimg?query=" + text)
      .then(response => {
        // Verifica se a resposta é uma imagem (content-type: image/*)
        if (response.headers.get('content-type').startsWith('image/')) {
          // Retorna a imagem como buffer
          return response.buffer();
        } else {
          throw new Error('A resposta não é uma imagem.');
        }
      })
      .then(imageBuffer => {
        // Converte o buffer da imagem para base64
        const imageBase64 = imageBuffer.toString('base64');
        // Envie a imagem como resposta
        res.send(`<img src="data:image/jpeg;base64,${imageBase64}" />`);
      })
      .catch(error => {
        console.log(error);
        res.send(`Deu erro: ${error}`);
      });
  } catch (error) {
    console.log(error);
    res.send(`Deu erro: ${error}`);
  }
}); 

//////////////////(ia)//////////////////
//////////////// +18 \\\\\\\\\\\\\\\\\\\\
router.all('/shota', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })

router.get('/18/video18', async (req, res, next) => {
    var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
      const vid = require("./lib/pack.js")
      const video_18 = vid.video_18
      const xvid = video_18[Math.floor(Math.random() * video_18.length)];

      res.json({
        url: `${xvid}`
    })
    } catch {
      res.send(resposta.error)
    }
    })
router.all('/18/foto18', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const tra = require("./lib/video+18.json")
const foto_18 = tra.foto_18
const traft = foto_18[Math.floor(Math.random() *foto_18.length)];
   res.json({
    url: `${traft}`
    })
   } catch (e) {
   res.send(resposta.error)
   }
   })

router.all('/cum', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/cum.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
  router.all('/neko', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/neko.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
  router.all('/ero', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/ero.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
  router.all('/neko2', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/neko2.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/zettai', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/zettai.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
router.all('/ass', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/ass.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   }) 
   router.all('/foto18', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/foto18.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
router.all('/ahegao', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/ahegao.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
router.all('/masturbation', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/masturbation.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
router.all('/orgy', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/orgy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
router.all('/pussy', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/pussy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
router.all('/tentacles', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/tentacles.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/manga', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/manga.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
router.all('/waifu', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/waifu.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   
router.all('/waifu2', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/waifu2.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/nsfwloli', async (req, res) => {
   var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
//////////////////fim +18\\\\\\\\\\\\\\\\
//////////////wallpaper\\\\\\\\\\\\\\\\\\
router.all('/wallpapernime', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/wallpapernime.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
  router.all('/satanic', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/satanic.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })  
   router.all('/bonek', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/bonek.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/travazap', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/travazap.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/femeninotrava', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/femininotrava.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/aesthetic', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/aesthetic.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/GameWallp', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/GameWallp.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })

//////////////fim wallpaper\\\\\\\\\\\\\\\\\\
////////////// Animes \\\\\\\\\\\\\\\\\\   
router.all('/cosplay', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/cosplay.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })   
router.all('/cosplayloli', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/cosplayloli.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   }) 
   router.all('/cosplaysagiri', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/cosplaysagiri.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })   
   router.all('/akira', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/akira.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })     
    router.all('/boruto', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/boruto.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })      
   router.all('/deidara', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/deidara.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })          
   router.all('/elaina', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/elaina.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })              
   router.all('/emilia', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/emilia.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/erza', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/erza.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/hinata', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/hinata.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })   
   router.all('/itachi', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/itachi.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
   router.all('/itori', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/itori.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/madara', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/madara.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
    router.all('/mikasa', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/mikasa.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
    router.all('/minato', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/minato.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
    router.all('/nezuko', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/nezuko.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })    
   router.all('/onepiece', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/onepiece.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   }) 
   router.all('/pokemon', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/pokemon.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   }) 
    router.all('/rize', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/rize.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })     
   router.all('/roze', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/roze.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })           
    router.all('/sakura', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/sakura.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })               
      router.all('/sagiri', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/sagiri.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })               
   router.all('/sasuke', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/sasuke.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })                     
   router.all('/tsunade', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
   json = JSON.parse(fs.readFileSync('lib/tsunade.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })                                   
//////////// fim Animes \\\\\\\\\\\\\\  
router.post('/post/body', async (req, res) => {
  res.send(req.body)
})
   
   router.all('*', async (req, res) => {
   res.status(404).json({
            status:404,
            error: 'Esta página não esta presente na Rest Api',
            endpoint: req.path
        })
})


module.exports = router






