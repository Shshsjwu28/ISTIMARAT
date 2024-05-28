let handler = async (m, { command, text }) => m.reply(`https://664e109a83c4d.site123.me`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(11)$/i

export default handler
