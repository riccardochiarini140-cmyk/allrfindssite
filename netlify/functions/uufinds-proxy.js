exports.handler = async function(event) {
    const url = event.queryStringParameters && event.queryStringParameters.url;
    if (!url) {
        return { statusCode: 400, body: JSON.stringify({ error: 'missing url' }) };
    }

    const apiUrl = 'https://api.uufinds.com/open/api/convertUrl?from=21matte&url=' + encodeURIComponent(url);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};
