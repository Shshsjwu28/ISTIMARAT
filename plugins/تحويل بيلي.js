let handler = async (m, { command, text }) => m.reply(`⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
﹝♻️↓ تـحـويـل بـيـلـي ↓♻️﹞
⎔⋅• ━ ╼╃ ⌬〔💧〕⌬ ╄╾ ━ •⋅⎔
↾🏮↿┊الـمـحـول ⇇〔〕
↾💷↿┊الـمـبـلـغ ⇇〔〕
↾♠️↿┊الـمـنـشـن ⇇〔〕
↾🏮↿┊الـمـحـول لـه ⇇〔〕
↾🔮↿┊الـمـسـؤول ⇇〔〕
⎔⋅• ━ ╼╃ ⌬〔💧〕⌬ ╄╾ ━ •⋅⎔
﹝تـوقـيـع↓📜↓مـمـلكة﹞
┊𝐎𝐒𝐀𝐊𝐀 𓆩💧𓆪 𝐊.𝐍.𝐆┊
⎔⋅• ━ ╼╃ ⌬〔💧〕⌬ ╄╾ ━ •⋅⎔`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(10)$/i

export default handler
