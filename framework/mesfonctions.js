'use strict';const a58_0x1c49cb=a58_0x15cc;(function(_0x2f12eb,_0x20c022){const _0xb6813f=a58_0x15cc,_0xebcec9=_0x2f12eb();while(!![]){try{const _0x20f5b2=parseInt(_0xb6813f(0x21a))/0x1+parseInt(_0xb6813f(0x213))/0x2*(parseInt(_0xb6813f(0x21d))/0x3)+parseInt(_0xb6813f(0x241))/0x4*(parseInt(_0xb6813f(0x254))/0x5)+-parseInt(_0xb6813f(0x222))/0x6*(parseInt(_0xb6813f(0x24d))/0x7)+-parseInt(_0xb6813f(0x1ff))/0x8+parseInt(_0xb6813f(0x23b))/0x9*(-parseInt(_0xb6813f(0x239))/0xa)+-parseInt(_0xb6813f(0x257))/0xb;if(_0x20f5b2===_0x20c022)break;else _0xebcec9['push'](_0xebcec9['shift']());}catch(_0x539eef){_0xebcec9['push'](_0xebcec9['shift']());}}}(a58_0x264d,0xcfe4a));Object[a58_0x1c49cb(0x256)](exports,a58_0x1c49cb(0x1f0),{'value':!![]}),exports['reaction']=exports[a58_0x1c49cb(0x1f2)]=exports[a58_0x1c49cb(0x214)]=exports[a58_0x1c49cb(0x229)]=exports[a58_0x1c49cb(0x1ed)]=exports[a58_0x1c49cb(0x235)]=exports[a58_0x1c49cb(0x1ef)]=exports['tabCmd']=exports[a58_0x1c49cb(0x204)]=exports[a58_0x1c49cb(0x20b)]=exports['xlab']=exports[a58_0x1c49cb(0x244)]=void 0x0;const axios=require(a58_0x1c49cb(0x226)),path=require(a58_0x1c49cb(0x1fb)),cheerio=require(a58_0x1c49cb(0x227)),{Sticker,createSticker,StickerTypes}=require(a58_0x1c49cb(0x24a)),baileys_1=require(a58_0x1c49cb(0x21c)),fs=require(a58_0x1c49cb(0x1f4)),util=require(a58_0x1c49cb(0x22c));let {listall}=require(a58_0x1c49cb(0x1fd));module[a58_0x1c49cb(0x224)][a58_0x1c49cb(0x21f)]=async _0x522ff0=>{const _0x3fdc8a=a58_0x1c49cb;var _0x17be13=Math[_0x3fdc8a(0x259)](Math['random']()*0x7d0),_0x4fe4e4=_0x3fdc8a(0x22b)+_0x17be13+'.'+_0x522ff0;return _0x4fe4e4;},module['exports'][a58_0x1c49cb(0x1fe)]=async(_0x524168,_0x4baae7)=>{const _0x5841a2=a58_0x1c49cb;var _0x21c8f6=new Sticker(_0x524168,{'pack':_0x5841a2(0x23e),'author':_0x4baae7,'type':StickerTypes[_0x5841a2(0x212)],'categories':['🤩','🎉'],'id':_0x5841a2(0x20d),'quality':0x32,'background':'#000000'});return _0x21c8f6;};async function zJson(_0x5dc64b,_0x6b030a){const _0x5379f0=a58_0x1c49cb;try{_0x6b030a?_0x6b030a:{};const _0xd43f95=await axios({'method':'GET','url':_0x5dc64b,'headers':{'User-Agent':_0x5379f0(0x20a)},..._0x6b030a});return _0xd43f95['data'];}catch(_0x4818ee){return _0x4818ee;}}exports[a58_0x1c49cb(0x229)]=zJson;async function getBuffer(_0x4df8c0,_0x2cee9e){const _0x599255=a58_0x1c49cb;try{_0x2cee9e?_0x2cee9e:{};const _0x40d3fc=await axios({'method':'GET','url':_0x4df8c0,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x2cee9e,'responseType':_0x599255(0x20f)});return _0x40d3fc[_0x599255(0x208)];}catch(_0xe11f45){console[_0x599255(0x1f3)](_0xe11f45);}}exports[a58_0x1c49cb(0x214)]=getBuffer;async function recept_message(_0x39e6b8,_0x1b9d6f,_0x2d4d8b){const _0x627aee=a58_0x1c49cb;if(!_0x1b9d6f)return;_0x1b9d6f[_0x627aee(0x207)]&&(_0x1b9d6f[_0x627aee(0x236)]=_0x1b9d6f[_0x627aee(0x207)],_0x1b9d6f[_0x627aee(0x230)]=_0x1b9d6f['key']['id'],_0x1b9d6f[_0x627aee(0x252)]=_0x1b9d6f[_0x627aee(0x207)]['remoteJid'],_0x1b9d6f[_0x627aee(0x233)]=_0x1b9d6f[_0x627aee(0x207)][_0x627aee(0x25c)],_0x1b9d6f[_0x627aee(0x1f1)]=_0x1b9d6f[_0x627aee(0x252)][_0x627aee(0x253)](_0x627aee(0x20e)),_0x1b9d6f[_0x627aee(0x23d)]=_0x1b9d6f[_0x627aee(0x230)]['startsWith'](_0x627aee(0x1ee))&&_0x1b9d6f[_0x627aee(0x230)]['length']==0x10);if(_0x1b9d6f[_0x627aee(0x200)]){_0x1b9d6f[_0x627aee(0x22f)]=(0x0,baileys_1['getContentType'])(_0x1b9d6f[_0x627aee(0x200)]),_0x1b9d6f['ms']=_0x1b9d6f[_0x627aee(0x22f)]==_0x627aee(0x211)?_0x1b9d6f[_0x627aee(0x200)][_0x1b9d6f[_0x627aee(0x22f)]][_0x627aee(0x200)][(0x0,baileys_1['getContentType'])(_0x1b9d6f[_0x627aee(0x200)][_0x1b9d6f[_0x627aee(0x22f)]][_0x627aee(0x200)])]:_0x1b9d6f[_0x627aee(0x200)][_0x1b9d6f[_0x627aee(0x22f)]];try{switch(_0x1b9d6f[_0x627aee(0x22f)]){case'conversation':_0x1b9d6f[_0x627aee(0x225)]=_0x1b9d6f[_0x627aee(0x200)][_0x627aee(0x260)];break;case _0x627aee(0x20c):_0x1b9d6f[_0x627aee(0x225)]=_0x1b9d6f[_0x627aee(0x200)][_0x627aee(0x20c)]['caption'];break;case'videoMessage':_0x1b9d6f[_0x627aee(0x225)]=_0x1b9d6f['message'][_0x627aee(0x205)][_0x627aee(0x215)];break;case _0x627aee(0x255):_0x1b9d6f[_0x627aee(0x225)]=_0x1b9d6f[_0x627aee(0x200)][_0x627aee(0x238)][_0x627aee(0x234)];break;case _0x627aee(0x22e):_0x1b9d6f[_0x627aee(0x225)]=_0x1b9d6f[_0x627aee(0x200)][_0x627aee(0x22e)][_0x627aee(0x1f9)];break;case _0x627aee(0x209):_0x1b9d6f[_0x627aee(0x225)]=_0x1b9d6f[_0x627aee(0x200)][_0x627aee(0x209)][_0x627aee(0x261)][_0x627aee(0x1f8)];break;case _0x627aee(0x23c):_0x1b9d6f['corpsMessage']=_0x1b9d6f[_0x627aee(0x200)][_0x627aee(0x23c)][_0x627aee(0x250)];break;case _0x627aee(0x216):_0x1b9d6f['corpsMessage']=_0x1b9d6f[_0x627aee(0x200)][_0x627aee(0x22e)][_0x627aee(0x1f9)]||_0x1b9d6f[_0x627aee(0x200)]['listResponseMessage'][_0x627aee(0x261)][_0x627aee(0x1f8)]||_0x1b9d6f['text']||'';break;default:_0x1b9d6f[_0x627aee(0x225)]=![];}}catch{_0x1b9d6f[_0x627aee(0x225)]=![];}}let _0x429d32=_0x1b9d6f[_0x627aee(0x223)]=_0x1b9d6f['ms'][_0x627aee(0x1f5)]?_0x1b9d6f['ms'][_0x627aee(0x1f5)][_0x627aee(0x25e)]:null;_0x1b9d6f[_0x627aee(0x247)]=_0x1b9d6f['ms'][_0x627aee(0x1f5)]?_0x1b9d6f['ms'][_0x627aee(0x1f5)][_0x627aee(0x247)]:[];if(_0x1b9d6f[_0x627aee(0x223)]){}return _0x1b9d6f;}exports['recept_message']=recept_message;function a58_0x15cc(_0x53a2cc,_0x178fd3){const _0x264d3f=a58_0x264d();return a58_0x15cc=function(_0x15ccd9,_0x1ff86a){_0x15ccd9=_0x15ccd9-0x1ed;let _0x48960c=_0x264d3f[_0x15ccd9];return _0x48960c;},a58_0x15cc(_0x53a2cc,_0x178fd3);}function styletext(_0x220cba){return new Promise((_0x905772,_0x1a75d4)=>{const _0x10194d=a58_0x15cc;axios[_0x10194d(0x237)]('http://qaz.wtf/u/convert.cgi?text='+_0x220cba)[_0x10194d(0x23f)](({data:_0xcae13a})=>{const _0x2f188b=_0x10194d;let _0xae1944=cheerio['load'](_0xcae13a),_0x20b40e=[];_0xae1944(_0x2f188b(0x24f))[_0x2f188b(0x246)](function(_0x577564,_0x59a04d){const _0x3cdd2a=_0x2f188b;_0x20b40e[_0x3cdd2a(0x243)]({'name':_0xae1944(_0x59a04d)['find'](_0x3cdd2a(0x25d))[_0x3cdd2a(0x218)](),'result':_0xae1944(_0x59a04d)[_0x3cdd2a(0x23a)](_0x3cdd2a(0x242))['text']()['trim']()});}),_0x905772(_0x20b40e);});});}exports[a58_0x1c49cb(0x20b)]=styletext;async function apiWaifu(_0x3f8e0d){const _0x5cb60d=a58_0x1c49cb;var _0x3f80e9=_0x5cb60d(0x1f6);if(_0x3f8e0d=='waifu')_0x3f80e9+=_0x3f8e0d;else{if(_0x3f8e0d=='trap')_0x3f80e9+=_0x3f8e0d;else{if(_0x3f8e0d==_0x5cb60d(0x1fa))_0x3f80e9+=_0x3f8e0d;else _0x3f8e0d==_0x5cb60d(0x248)?_0x3f80e9+=_0x5cb60d(0x248):_0x3f80e9=_0x5cb60d(0x21e);}}try{const _0x1158fb=await axios[_0x5cb60d(0x237)](_0x3f80e9);return _0x1158fb[_0x5cb60d(0x208)][_0x5cb60d(0x220)];}catch(_0x897444){console[_0x5cb60d(0x1f3)](_0x897444);}}exports['apiWaifu']=apiWaifu;var tabCmd={};exports[a58_0x1c49cb(0x24b)]=tabCmd;var reaction={};exports[a58_0x1c49cb(0x228)]=reaction;var fruit={};exports[a58_0x1c49cb(0x1ef)]=fruit;async function ajouterCommande(){const _0x320e92=a58_0x1c49cb;fs['readdirSync'](__dirname+'/../commandes')[_0x320e92(0x202)](_0x27fe40=>{const _0x2e9563=_0x320e92;path[_0x2e9563(0x232)](_0x27fe40)[_0x2e9563(0x21b)]()==_0x2e9563(0x22d)&&(require(__dirname+_0x2e9563(0x24e)+_0x27fe40[_0x2e9563(0x1fc)](_0x2e9563(0x22d))[0x0]),console['log'](_0x2e9563(0x240)+_0x27fe40));});}exports['ajouterCommande']=ajouterCommande;function a58_0x264d(){const _0x3594af=['mentionedJid','blowjob','xlab','wa-sticker-formatter','tabCmd','getWidth','18137mBlTdb','/../commandes/','table\x20>\x20tbody\x20>\x20tr','selectedId','MIME_JPEG','origineMessage','endsWith','165BIeBJD','entendedTextMessage','defineProperty','18814587UPpIYl','scaleToFit','floor','readdir','clone','fromMe','td:nth-child(1)\x20>\x20span','quotedMessage','crop','conversation','singleSelectReply','apiWaifu','BAE5','fruit','__esModule','groupe','recept_message','log','fs-extra','contextInfo','https://api.waifu.pics/nsfw/','normalize','selectedRowId','SelectedButtonId','neko','path','split','./stylish-font','stick','4810936lrXMTx','message','execute','forEach','read','police','videoMessage','JEDEC','key','data','listResponseMessage','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/95.0.4638.69\x20Safari/537.36','styletext','imageMessage','12345','@g.us','arrayBuffer','getHeight','viewOnceMessage','FULL','3291934FweDSd','getBuffer','caption','messageContextInfo','human-readable','text','getBufferAsync','1646178uLoFay','toLowerCase','@whiskeysockets/baileys','3TwhWHl','https://api.waifu.pics/nsfw/waifu','genererNomFichier','url','readFile','234vZxgPo','quoted','exports','corpsMessage','axios','cheerio','reaction','zJson','sizeFormatter','Zok','util','.js','buttonsResponseMessage','typeMessage','idMessage','nomCom','extname','moi','Textarea','format','cleMessage','get','extendedTextMessage','11278370FdOnAf','find','9nPPMZc','templateButtonReplyMessage','origineBot','Zokou-MD','then','fichier\x20:\x20','133340mILHlS','td:nth-child(2)','push','ajouterCommande','promisify','each'];a58_0x264d=function(){return _0x3594af;};return a58_0x264d();}async function xlab(){const _0x36eca1=a58_0x1c49cb,_0x4af1e9=util['promisify'](fs[_0x36eca1(0x25a)]),_0x34a1a1=util[_0x36eca1(0x245)](fs[_0x36eca1(0x221)]);var _0x10a72f='./commandes/',_0x336c97=await _0x4af1e9(_0x10a72f);_0x336c97['forEach'](_0x126198=>{const _0x4be9c3=_0x36eca1;if(_0x126198[_0x4be9c3(0x253)]('.js')){var {commande:_0x4443c5}=require(__dirname+_0x4be9c3(0x24e)+_0x126198[_0x4be9c3(0x1fc)]('.js')[0x0]),_0x1d7528;_0x4443c5?_0x1d7528=_0x4443c5():_0x1d7528=null;if(_0x1d7528!=null)for(const _0x270151 of _0x1d7528[_0x4be9c3(0x231)]){fruit[_0x270151]=_0x1d7528[_0x4be9c3(0x201)];}}});}exports[a58_0x1c49cb(0x249)]=xlab;const human_readable_1=require(a58_0x1c49cb(0x217)),format=(0x0,human_readable_1[a58_0x1c49cb(0x22a)])({'std':a58_0x1c49cb(0x206),'decimalPlaces':0x2,'keepTrailingZeroes':![],'render':(_0x5ec4c7,_0x13c870)=>_0x5ec4c7+'\x20'+_0x13c870+'B'});exports[a58_0x1c49cb(0x235)]=format;function police(_0x52b0e2,_0x1f2e32){return _0x1f2e32=_0x1f2e32-0x1,listall(_0x52b0e2)[_0x1f2e32];}exports['police']=police,exports['generatepp']=async _0x35caea=>{const _0xf2089b=a58_0x1c49cb,_0x4f170f=require('jimp'),_0x3937b5=await _0x4f170f[_0xf2089b(0x203)](_0x35caea),_0x3bf923=_0x3937b5[_0xf2089b(0x24c)](),_0x40c214=_0x3937b5[_0xf2089b(0x210)](),_0x28059f=_0x3937b5['clone']()[_0xf2089b(0x25f)](0x0,0x0,_0x3bf923,_0x40c214),_0x1c6cc5=await _0x28059f[_0xf2089b(0x25b)]()[_0xf2089b(0x258)](0x2d0,0x2d0)['getBufferAsync'](_0x4f170f['MIME_JPEG']),_0x253644=await _0x28059f[_0xf2089b(0x25b)]()[_0xf2089b(0x1f7)]()[_0xf2089b(0x219)](_0x4f170f[_0xf2089b(0x251)]);return{'img':_0x1c6cc5,'preview':_0x253644};};