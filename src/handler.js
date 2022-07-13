export async function ready(client) {
    console.table({
        'Bot User': client.user.tag,
        'Guild(s)': client.guilds.cache.size + ' Servers',
        'Watching': client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) + ' Members',
        'Prefix': config.prefix,
        'Discord.js': 'v' + djs_version,
        'Node.js': process.version,
        'Plattform': process.platform + ' | ' + process.arch,
        'Memory': (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB | ' + (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + 'MB'
    });
    // await commands.register(client);
}