let handler = async (m, { command, text }) => m.reply(`⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
﹝تـرحـيـب↓🪽↓عـضـو﹞
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
↾🏮↿┊اللـقـب ⇇〔〕
↾🎥↿┊مـن انـمـي ⇇〔〕
↾📧↿┊الـمـنـشـن ⇇〔〕
↾🎐↿┊الـمـسـؤول ⇇〔〕
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
↾🌼↿┊اشرقـت بك الانـوار بوجـودك مـعـنا و نُـرحـب بـكِ اشـد الـترحيـب و لتـسـتـمـتـع بـوقـت جـمـيل فـي نقابـتـنا☁️✨〕
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
﹝تـوقـيـع↓📜↓مـمـلكة﹞
┊𝐎𝐒𝐀𝐊𝐀 𓆩💧𓆪 𝐊.𝐍.𝐆┊
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(2)$/i

export default handler
