function letkeyword(x) {
    var a = x, b, c;
    {
        let x = 2;
        b = x;
    }
    c = x;

    return {'1' : a, '2' : b, '3' : c};
}