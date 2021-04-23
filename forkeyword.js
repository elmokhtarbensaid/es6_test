function forkeyword() {
    var products = ["Tile", "Carpet", "Wood"];
    var p, result = '';
    for (p of products) {
        result += p + "\n";
    }
    return result;
}