let handler = async (m, { command, text }) => m.reply(`⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
﹝حـسـبة↓🎉↓المـسـابـقـة﹞
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
↺┊اللـقـب⇜〔〕
↺┊اللـقـب⇜〔〕
↺┊اللـقـب⇜〔〕
↺┊اللـقـب⇜〔〕
↺┊اللـقـب⇜〔〕
↺┊اللـقـب⇜〔〕
↺┊اللـقـب⇜〔〕
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
↾👨🏻‍💻↿┊الـمـقـدم⇜〔〕
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(15)$/i

export default handler
