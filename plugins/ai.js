const {
	Function,
	dalle,
	bing
} = require("../lib/");

Function({
	pattern: 'draw ?(.*)',
	fromMe: true,
	desc: 'Dall-E ai image generation',
	type: 'ai'
}, async (message, match) => {
	if (!match) return await message.reply('*Need a prompt!*\n_Example: dalle starry sky over the city_')
	await message.send('*Drawing image...🎨🖌️*\n_please waitttttttt!!⚡_')
	const image = await dalle(match)
	await message.send(image, 'image')
})

Function({
	pattern: 'bingo ?(.*)',
	fromMe: true,
	desc: 'Microsoft bing ai',
	type: 'ai'
}, async (message, match) => {
	if (!match) return await message.reply('*Need a prompt!*\n_Example: bing what is the time now?_')
	const msg = await message.reply('_processing...✨_')
	const content = await bing(match)
	await msg.edit(content)
})
