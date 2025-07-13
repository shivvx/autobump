const { Client } = require('discord.js-selfbot-v13')
const config = require('./config')
const client = new Client()

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    if (!config.BUMP_CHANNELS || config.BUMP_CHANNELS.length === 0) {
        console.error('Error: BUMP_CHANNELS is not defined in config.')
        process.exit(1)
    }

    // Will Fetch all channels | Made by @shivvbrom
    const channels = await Promise.all(config.BUMP_CHANNELS.map(id => client.channels.fetch(id)))

    async function bump() {
        const now = new Date()
        const timeString = now.toLocaleTimeString()
        console.log(`Starting bump at ${timeString}`)
        for (const channel of channels) {
            try {
                await channel.sendSlash('302050872383242240', 'bump')
                console.count(`Bumped in channel ${channel.id}!`)
            } catch (error) {
                console.error(`Failed to bump in channel ${channel.id}:`, error)
            }
        }
        console.log(`Completed bump at ${timeString}`)
    }

    function loop() {
        // send bump message every 30 minutes  | Made by @shivvbrom
        var interval = 30 * 60 * 1000 // 30 minutes in milliseconds  | Made by @shivvbrom
        setTimeout(function () {
            bump()
            loop()
        }, interval)
    }
    
    bump()
    loop()
})

client.login(config.TOKEN)
