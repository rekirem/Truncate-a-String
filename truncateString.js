function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str = str.slice(0, num) + '...';
}
