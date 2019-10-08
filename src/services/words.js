export const firstUpperCaseTrim = (string) => {
    if(!string|| !string.trim()) return '';
    const s = string.trim();
    return (s[0].toUpperCase() + s.slice(1)).replace(/  /g, ' ')
}