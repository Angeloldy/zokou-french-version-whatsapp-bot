function a9_0x40c5(_0x38bf90,_0x98bbdc){const _0x399aca=a9_0x399a();return a9_0x40c5=function(_0x40c5f1,_0x1116b9){_0x40c5f1=_0x40c5f1-0x190;let _0x55068d=_0x399aca[_0x40c5f1];return _0x55068d;},a9_0x40c5(_0x38bf90,_0x98bbdc);}const a9_0x461c38=a9_0x40c5;(function(_0x213f09,_0x3c0ee3){const _0x52a269=a9_0x40c5,_0x5d3346=_0x213f09();while(!![]){try{const _0x41340a=parseInt(_0x52a269(0x19f))/0x1+-parseInt(_0x52a269(0x191))/0x2*(-parseInt(_0x52a269(0x19b))/0x3)+parseInt(_0x52a269(0x1ac))/0x4*(parseInt(_0x52a269(0x1a2))/0x5)+-parseInt(_0x52a269(0x1a0))/0x6*(parseInt(_0x52a269(0x1a3))/0x7)+parseInt(_0x52a269(0x199))/0x8+-parseInt(_0x52a269(0x19c))/0x9+parseInt(_0x52a269(0x1ab))/0xa;if(_0x41340a===_0x3c0ee3)break;else _0x5d3346['push'](_0x5d3346['shift']());}catch(_0x480fed){_0x5d3346['push'](_0x5d3346['shift']());}}}(a9_0x399a,0xc6644),require('dotenv')[a9_0x461c38(0x1a7)]());const {Pool}=require('pg'),s=require(a9_0x461c38(0x19e)),dbUrl=s[a9_0x461c38(0x1a9)]?s['DATABASE_URL']:a9_0x461c38(0x1a8),proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createUsersRankTable(){const _0x47c435=a9_0x461c38,_0x89f54d=await pool[_0x47c435(0x19d)]();try{await _0x89f54d[_0x47c435(0x1a1)](_0x47c435(0x197));}catch(_0x22289e){console['error'](_0x47c435(0x196),_0x22289e);}finally{_0x89f54d[_0x47c435(0x198)]();}}async function ajouterOuMettreAJourUserData(_0x24e2ba){const _0x102f77=a9_0x461c38,_0x4c170f=await pool[_0x102f77(0x19d)]();try{const _0x52dc9e=await _0x4c170f[_0x102f77(0x1a1)](_0x102f77(0x1a4),[_0x24e2ba]),_0xb6f70c=_0x52dc9e['rows'][_0x102f77(0x192)]>0x0;_0xb6f70c?await _0x4c170f['query'](_0x102f77(0x193),[_0x24e2ba]):await _0x4c170f[_0x102f77(0x1a1)](_0x102f77(0x1aa),[_0x24e2ba,0xa,0x1]);}catch(_0x540b47){console[_0x102f77(0x194)]('Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20de\x20l\x27utilisateur:',_0x540b47);}finally{_0x4c170f['release']();}}function a9_0x399a(){const _0x2a822b=['connect','../set','306006nvCewm','1848kKODIR','query','2016395TXoHKM','27958cNEVJS','SELECT\x20*\x20FROM\x20users_rank\x20WHERE\x20jid\x20=\x20$1','SELECT\x20messages,\x20xp\x20FROM\x20users_rank\x20WHERE\x20jid\x20=\x20$1','rows','config','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','DATABASE_URL','INSERT\x20INTO\x20users_rank\x20(jid,\x20xp,\x20messages)\x20VALUES\x20($1,\x20$2,\x20$3)','20591050ijuhJj','4NWvKZd','exports','6AlWFon','length','UPDATE\x20users_rank\x20SET\x20xp\x20=\x20xp\x20+\x2010,\x20messages\x20=\x20messages\x20+\x201\x20WHERE\x20jid\x20=\x20$1','error','Erreur\x20lors\x20de\x20la\x20récupération\x20du\x20bottom\x2010\x20des\x20utilisateurs:','Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20users_rank:','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users_rank\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20SERIAL\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20VARCHAR(255)\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20messages\x20INTEGER\x20DEFAULT\x200\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','release','5751904gVyTqH','SELECT\x20jid,\x20xp\x20,\x20messages\x20FROM\x20users_rank\x20ORDER\x20BY\x20xp\x20DESC\x20LIMIT\x2010','52329lfnVlH','13472487aYGOYl'];a9_0x399a=function(){return _0x2a822b;};return a9_0x399a();};async function getMessagesAndXPByJID(_0x3e4f45){const _0x40ec25=a9_0x461c38,_0x23fe44=await pool[_0x40ec25(0x19d)]();try{const _0x353de4=_0x40ec25(0x1a5),_0x16207c=await _0x23fe44['query'](_0x353de4,[_0x3e4f45]);if(_0x16207c[_0x40ec25(0x1a6)][_0x40ec25(0x192)]>0x0){const {messages:_0x13aae0,xp:_0x424162}=_0x16207c[_0x40ec25(0x1a6)][0x0];return{'messages':_0x13aae0,'xp':_0x424162};}else return{'messages':0x0,'xp':0x0};}catch(_0x474bf0){return console['error']('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20données\x20de\x20l\x27utilisateur:',_0x474bf0),{'messages':0x0,'xp':0x0};}finally{_0x23fe44['release']();}}async function getBottom10Users(){const _0x35e16b=a9_0x461c38,_0xfb7d49=await pool['connect']();try{const _0x16c859=_0x35e16b(0x19a),_0x573bf3=await _0xfb7d49[_0x35e16b(0x1a1)](_0x16c859);return _0x573bf3[_0x35e16b(0x1a6)];}catch(_0x17af21){return console[_0x35e16b(0x194)](_0x35e16b(0x195),_0x17af21),[];}finally{_0xfb7d49[_0x35e16b(0x198)]();}}createUsersRankTable(),module[a9_0x461c38(0x190)]={'ajouterOuMettreAJourUserData':ajouterOuMettreAJourUserData,'getMessagesAndXPByJID':getMessagesAndXPByJID,'getBottom10Users':getBottom10Users};