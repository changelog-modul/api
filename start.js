export default function handler(req, res) {
    const { placeId, gameInstanceId } = req.query;

    if (!placeId || !gameInstanceId) {
        return res.status(400).send("Missing placeId or gameInstanceId");
    }

    const robloxApp = `roblox://placeId=${placeId}&gameInstanceId=${gameInstanceId}`;
    const web = `https://www.roblox.com/games/${placeId}`;

    res.send(`
        <html>
        <head>
            <script>
                window.location.href = "${robloxApp}";
                setTimeout(() => {
                    window.location.href = "${web}";
                }, 2000);
            </script>
        </head>
        <body>
            <h2>Joining server...</h2>
        </body>
        </html>
    `);
}
