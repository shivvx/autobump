
# Discord Auto Bump Selfbot

A selfbot that automatically sends the `/bump` command on Disboard in multiple Discord channels at regular intervals.

---

## WARNING

Selfbots are against Discord's Terms of Service.  
Use this code strictly for educational purposes.  
The author is not liable for any accounts that get moderated or banned by Discord due to the use of this selfbot.

---

## Features

- Supports automatic bumping in multiple Discord channels.
- Sends bump commands every 30 minutes.
- Logs bump activity with timestamps and channel IDs in the terminal.

---

## Setup

1. Clone or download this repository.

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your bot credentials and channels:

   The configuration is stored in `config.js`.  
   **Important:** For security, do not commit your token or channel IDs publicly.

   Example `config.js`:
   ```js
   const config = {
       TOKEN: 'your-discord-user-token-here',
       BUMP_CHANNELS: ['channelID1', 'channelID2']
   }

   module.exports = config
   ```

4. Run the bot:
   ```
   node index.js
   ```

---

## How It Works

- The bot logs in using your Discord user token.
- It fetches all channels listed in `BUMP_CHANNELS`.
- Every 30 minutes, it sends the `/bump` slash command in each channel.
- Logs are printed to the terminal showing bump start and completion times, and counts per channel.

---

## Important Notes

- **User Token:** This bot uses your Discord user token (selfbot). Keep it private and secure.
- **Multiple Channels:** Add as many channel IDs as you want in the `BUMP_CHANNELS` array.
- **Rate Limits:** Be aware of Discord's rate limits and terms of service to avoid account issues.
- **Logging:** The bot logs bump activity with timestamps for monitoring.

---

## Contact

- Discord: @shivvbrom | 531444263884554241  
- GitHub: https://github.com/Shivamx-Dev

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
