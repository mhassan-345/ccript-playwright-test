const https = require('https');
https.get('https://ccript.com/', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        // Match href="/some-page" or href="https://ccript.com/some-page"
        const regex = /href=[\"'](\/[^\/\"'][^\"']*|https:\/\/ccript\.com\/[^\"']*)[\"']/gi;
        let match;
        const links = new Set();
        while ((match = regex.exec(data)) !== null) {
            links.add(match[1].replace('https://ccript.com', ''));
        }
        const internalLinks = [...links].filter(link =>
            !link.includes('wp-json') &&
            !link.includes('xmlrpc') &&
            !link.includes('.css') &&
            !link.includes('.js') &&
            !link.includes('.png') &&
            !link.includes('.svg') &&
            !link.includes('.jpg')
        );
        console.log(internalLinks.join('\n'));
    });
});
