const a13_0x1b2894=a13_0x5b05;(function(_0x44483a,_0x1a6217){const _0x1cfe14=a13_0x5b05,_0x4a71c7=_0x44483a();while(!![]){try{const _0x12c976=parseInt(_0x1cfe14(0x178))/0x1*(parseInt(_0x1cfe14(0x18d))/0x2)+parseInt(_0x1cfe14(0x186))/0x3+-parseInt(_0x1cfe14(0x181))/0x4*(parseInt(_0x1cfe14(0x182))/0x5)+parseInt(_0x1cfe14(0x17f))/0x6+parseInt(_0x1cfe14(0x184))/0x7+parseInt(_0x1cfe14(0x18e))/0x8*(parseInt(_0x1cfe14(0x18f))/0x9)+-parseInt(_0x1cfe14(0x176))/0xa*(parseInt(_0x1cfe14(0x179))/0xb);if(_0x12c976===_0x1a6217)break;else _0x4a71c7['push'](_0x4a71c7['shift']());}catch(_0x286f88){_0x4a71c7['push'](_0x4a71c7['shift']());}}}(a13_0x5db3,0x59861),require(a13_0x1b2894(0x189))['config']());const {Pool}=require('pg'),s=require(a13_0x1b2894(0x190));var dbUrl=s[a13_0x1b2894(0x18a)]?s['DATABASE_URL']:a13_0x1b2894(0x17d);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createSudoTable(){const _0x45b44b=a13_0x1b2894,_0xc78e6c=await pool['connect']();try{await _0xc78e6c[_0x45b44b(0x188)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20sudo\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console[_0x45b44b(0x194)](_0x45b44b(0x180));}catch(_0x2350e2){console['error']('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27sudo\x27:',_0x2350e2);}finally{_0xc78e6c[_0x45b44b(0x17a)]();}}createSudoTable();async function issudo(_0x472655){const _0x2515bd=a13_0x1b2894,_0x91fb75=await pool[_0x2515bd(0x192)]();try{const _0x2543cc=_0x2515bd(0x18b),_0x247521=[_0x472655],_0x405b74=await _0x91fb75[_0x2515bd(0x188)](_0x2543cc,_0x247521);return _0x405b74[_0x2515bd(0x177)][0x0][_0x2515bd(0x17c)];}catch(_0x598dfc){return console[_0x2515bd(0x183)]('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20banni\x20:',_0x598dfc),![];}finally{_0x91fb75[_0x2515bd(0x17a)]();}}async function removeSudoNumber(_0x2b01da){const _0x58af58=a13_0x1b2894,_0x4ab745=await pool['connect']();try{const _0xfecde9=_0x58af58(0x17b),_0x1a5992=[_0x2b01da];await _0x4ab745[_0x58af58(0x188)](_0xfecde9,_0x1a5992),console[_0x58af58(0x194)](_0x58af58(0x195)+_0x2b01da+_0x58af58(0x185));}catch(_0x22d102){console[_0x58af58(0x183)]('Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:',_0x22d102);}finally{_0x4ab745['release']();}}async function addSudoNumber(_0x5dc4e7){const _0x3c8320=a13_0x1b2894,_0x43767a=await pool[_0x3c8320(0x192)]();try{const _0xfac38a='INSERT\x20INTO\x20sudo\x20(jid)\x20VALUES\x20($1)',_0x48f307=[_0x5dc4e7];await _0x43767a[_0x3c8320(0x188)](_0xfac38a,_0x48f307),console[_0x3c8320(0x194)](_0x3c8320(0x195)+_0x5dc4e7+'\x20ajouté\x20à\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.');}catch(_0x3f89bc){console[_0x3c8320(0x183)]('Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:',_0x3f89bc);}finally{_0x43767a[_0x3c8320(0x17a)]();}}async function getAllSudoNumbers(){const _0x31d047=a13_0x1b2894,_0x261fcd=await pool[_0x31d047(0x192)]();try{const _0x18db7c=_0x31d047(0x17e),_0x2dd3cc=await _0x261fcd['query'](_0x18db7c),_0x13b29e=_0x2dd3cc[_0x31d047(0x177)][_0x31d047(0x187)](_0x318409=>_0x318409[_0x31d047(0x18c)]);return _0x13b29e;}catch(_0x2d0144){return console[_0x31d047(0x183)]('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20numéros\x20de\x20téléphone\x20autorisés\x20:',_0x2d0144),[];}finally{_0x261fcd['release']();}}function a13_0x5b05(_0xa52e9e,_0x3e7c77){const _0x5db35e=a13_0x5db3();return a13_0x5b05=function(_0x5b0567,_0x264aa){_0x5b0567=_0x5b0567-0x176;let _0x4eb007=_0x5db35e[_0x5b0567];return _0x4eb007;},a13_0x5b05(_0xa52e9e,_0x3e7c77);}async function isSudoTableNotEmpty(){const _0x8c18f1=a13_0x1b2894,_0x4fa911=await pool[_0x8c18f1(0x192)]();try{const _0x411b68=await _0x4fa911[_0x8c18f1(0x188)]('SELECT\x20COUNT(*)\x20FROM\x20sudo'),_0x3725b2=parseInt(_0x411b68[_0x8c18f1(0x177)][0x0][_0x8c18f1(0x191)]);return _0x3725b2>0x0;}catch(_0x194416){return console['error'](_0x8c18f1(0x196),_0x194416),![];}finally{_0x4fa911[_0x8c18f1(0x17a)]();}}function a13_0x5db3(){const _0x3bc4b1=['221070TQdEei','error','3425415MzCImW','\x20supprimé\x20de\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.','1074267CYgJmz','map','query','dotenv','DATABASE_URL','SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1)','jid','130570UJhWlu','8oyvwRv','1935585FqDPiX','../set','count','connect','exports','log','Numéro\x20de\x20téléphone\x20','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20la\x20table\x20\x22sudo\x22\x20:','460wokNuT','rows','11gtWqXL','267740YPaVJA','release','DELETE\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1','exists','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','SELECT\x20jid\x20FROM\x20sudo','356442BcgHvs','La\x20table\x20\x27sudo\x27\x20a\x20été\x20créée\x20avec\x20succès.','32xnKjda'];a13_0x5db3=function(){return _0x3bc4b1;};return a13_0x5db3();};module[a13_0x1b2894(0x193)]={'issudo':issudo,'addSudoNumber':addSudoNumber,'removeSudoNumber':removeSudoNumber,'getAllSudoNumbers':getAllSudoNumbers,'isSudoTableNotEmpty':isSudoTableNotEmpty};