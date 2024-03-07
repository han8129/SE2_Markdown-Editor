 function headingParse(str) {
    if (false == /^#{1,6}\s+\w+/.test(str))
    {
        return str;
    }

    let level = 0;

   for (const idx in str)
   {
        if (str[idx] == '#')
        {
            level += 1
        }
   }

   const firstCharIdx = str.search(/[^# ]/)
   console.log(firstCharIdx);
   const tag = `h${level}`;
   const bareText = str.slice(firstCharIdx);
   return `<${tag}>${bareText}</${tag}>`
 }

/**
 * Convert a string containing Markdown syntax into corresponding HTML representation.
 * @param {string} str - A string with Markdown syntax .
 * @return {string} A valid html string.
 */
 function parse(str) {
   let htmlStr = "";
   const splitedStr =  str.split('\n');

   if (splitedStr.length == 1) return headingParse(str);
   for (const line in splitedStr)
   {
    htmlStr += headingParse(line);
   }

  return htmlStr;
}

module.exports = parse;

