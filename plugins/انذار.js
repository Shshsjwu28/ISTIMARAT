let handler = async (m, { command, text }) => m.reply(`⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
﹝⚠️↓ انـذار عـضـو ↓⚠️﹞
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
↾🏮↿┊اللـقـب ⇇〔〕
↾📧↿┊الـمـنـشـن ⇇〔〕
↾❓↿┊الـسـبـب ⇇〔〕
↾❕↿┊الـعـقـوبة ⇇〔〕
↾📯↿┊الـمـسـؤول ⇇〔〕
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
↾❕↿┊يـرجـى عـدم تـكـرار الـخـطـأ〕
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔
﹝تـوقـيـع↓📜↓مـمـلكة﹞
┊𝐎𝐒𝐀𝐊𝐀 𓆩💧𓆪 𝐊.𝐍.𝐆┊
⎔⋅• ━ ╼╃ ◈ 〔💧〕 ◈ ╄╾ ━ •⋅⎔`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(5)$/i

export default handler
