//// [blockScopedBindingsReassignedInLoop5.ts]
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) 
        break;
    else 
        y = 5;
}


//// [blockScopedBindingsReassignedInLoop5.js]
var _loop_1 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1)
        return _out_x_1 = x, _out_y_1 = y, "break";
    else
        y = 5;
    _out_x_1 = x, _out_y_1 = y;
};
var _out_x_1, _out_y_1;
for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_1 = x, _out_y_1 = y;
    var state_1 = _loop_1(x, y);
    x = _out_x_1, y = _out_y_1;
    if (state_1 === "break") break;
}
