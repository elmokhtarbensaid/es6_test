function constkeyword() {
    var a = [10], b, c;
    {
        const a = [22];
        a.push(4);
        b = a;

    }
    c = a;

    return {'1' : a, '2' : b, '3' : c};
}