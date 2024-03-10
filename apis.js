
api = process.cwd()

var express = require('express');
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
  case '/wasted':
case '/wasted/':
  if (!texto) return res.status(408).send(resposta.cdimg);
  res.type('jpg');
  res.send(await canvacord.wasted(texto));
  break;
   case '/drake':
case '/drake/':
  if (!texto) return res.status(408).send(resposta.cdimg);
  res.type('jpg');
  res.send(await canvacord.drake(texto.top, texto.bottom));
  break;
  case '/trump':
case '/trump/':
  if (!texto) return res.status(408).send(resposta.cdimg);
  res.type('jpg');
  res.send(await canvacord.trump(texto));
  break;
  case '/captcha':
case '/captcha/':
  if (!texto) return res.status(408).send(resposta.cdimg);
  res.type('jpg');
  res.send(await canvacord.captcha(texto));
  break;
   case '/trash':
case '/trash/':
  if (!texto) return res.status(408).send(resposta.cdimg);
  res.type('jpg');
  res.send(await canvacord.trash(texto));
  break;
   case '/affect':
case '/affect/':
  if (!texto) return res.status(408).send(resposta.cdimg);
  res.type('jpg');
  res.send(await canvacord.affect(texto));
  break;
  case '/wasted':
case '/wasted/':
  if (!texto) return res.status(408).send(resposta.cdimg);
  res.type('jpg');
  res.send(await canvacord.wasted(texto));
  break;
      
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

router.get("/photooxy/shadow", async (req, res, next) => {
  var cdapikey = req.query.apikey;
  try {
    if (!cdapikey) return res.json({ error: "Chave API não fornecida" });
    
    if (cdapikey !== key) return res.sendFile(keyinvalida); // Certifique-se de que keyinvalida esteja definida
    
    const text1 = req.query.text;
    
    if (!text1) return res.json({ error: "Texto não fornecido" });
    
    pShadow(text1)
      .then((data) => {
        const result = {
          status: true,
          code: 200,
          criador: `${criador}`,
          result: data.url
        };
        res.json(result);
      })
      .catch((error) => {
        res.json({ error: error.message });
      });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get("/photooxy/shadow", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pShadow(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/romantic", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/naruto", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/love-message", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/glitch", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/double-heart", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/love-text", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } catch {
    	res.send(resposta.error)
    }
});

router.get("/photooxy/butterfly", async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        criador: `${criador}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    } catch {
    	res.send(resposta.error)
    }
});

/*
@ AKHIR PHOTOOXY
*/
/*
@ TEXTPROME
*/
router.get('/photooxy/army', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {
  var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/natural-leaves', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/logo-wolf2', async(req, res, next) => {

  var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/harry-potter', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/magma', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/hallowen-text', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/neon-light', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/broken-glass', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/art-papper', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/glossy', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/water-color', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/multi-color', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/neon-devil', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/sky-text', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/luxury', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/vintage', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
    zrapi 
  .textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/writing', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/engraved', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } catch {
    res.send(resposta.error)
  }
});

router.get('/textpro/glue-text', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((e) => console.log(e));
  } catch {
    res.send(resposta.eor)
  }
});

router.get('/textpro/minios', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
    zrapi 
  .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((e) => console.log(e));
  } catch {
    res.send(resposta.eor)
  }
});

router.get('/textpro/porn-hub', async(req, res, next) => {

var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
  const text = req.query.text1;
  const text2 = req.query.text2;
  if(!text) return res.json(resposta.nottext1)
  if(!text2) return res.json(resposta.nottext2)
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      criador: `${criador}`,
      result: data
    })
  })
  .catch((e) => console.log(e));
  } catch {
    res.send(`deu erro`)
  }
});

router.get('/api/attp', async(req, res, next) => {
var cdapikey = req.query.apikey;
   try {
   if(!cdapikey) return res.json(resposta.semkey)
    if(cdapikey !== key) return res.sendFile(keyinvalida)
    const text1 = req.query.text;
   if(!text1) return res.json(resposta.nottext1)
  let hasil = 'https://api.sabapi.tech/api/ttp?texto='+ text +'&apikey=@Luix1397'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
  } catch {
    res.send(`deu erro`)
  }
})





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






