let handler = async (m, { command, text }) => m.reply(`https://653980001de4c.site123.me`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(12)$/i

export default handler
