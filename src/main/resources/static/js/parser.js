/**
 * Convert a string containing Markdown syntax into corresponding HTML representation.
 * @param {string} str - A string with Markdown syntax .
 * @return {string} A valid html string.
 */
function parse(markdown) {
    const lines = markdown.split('\n');
    let str = '';

    for (const line of lines) {
        if (line.trim().startsWith('#')) {
            let level = 0;
            while (line[level] === '#') {
                level++;
            }
            const title = line.substring(level + 1).trim();
            str += `<h${level}>${title}</h${level}>`;
        } else if (line.trim().startsWith('>')) {
            const content = line.substring(1).trim();
            str += `<blockquote><p>${content}</p></blockquote>`;
        } else if (line.trim().startsWith('*')) {
            const formatted = line.trim().replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\*(.*?)\*/g, '<i>$1</i>');
            str += `<p>${formatted}</p>`;
        } else if (line.trim()) {
            str += `<p>${line.trim()}</p>`;
        }
    }

    return str;
}

module.exports = parse;




