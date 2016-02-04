//// [blockScopedBindingsReassignedInLoop2.ts]
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break;
    }
    else {
        y = 5;
    }
}

for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue;
    }
    else {
        y = 5;
    }
}

loop:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break loop;
    }
    else {
        y = 5;
    }
}

loop:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue loop;
    }
    else {
        y = 5;
    }
}

//// [blockScopedBindingsReassignedInLoop2.js]
var _loop_1 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_1 = x, _out_y_1 = y, "break";
    }
    else {
        y = 5;
    }
    _out_x_1 = x, _out_y_1 = y;
};
var _out_x_1, _out_y_1;
for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_1 = x, _out_y_1 = y;
    var state_1 = _loop_1(x, y);
    x = _out_x_1, y = _out_y_1;
    if (state_1 === "break") break;
}
var _loop_2 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_2 = x, _out_y_2 = y, "continue";
    }
    else {
        y = 5;
    }
    _out_x_2 = x, _out_y_2 = y;
};
var _out_x_2, _out_y_2;
for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_2 = x, _out_y_2 = y;
    var state_2 = _loop_2(x, y);
    x = _out_x_2, y = _out_y_2;
    if (state_2 === "continue") continue;
}
var _loop_3 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_3 = x, _out_y_3 = y, "break-loop";
    }
    else {
        y = 5;
    }
    _out_x_3 = x, _out_y_3 = y;
};
var _out_x_3, _out_y_3;
loop: for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_3 = x, _out_y_3 = y;
    var state_3 = _loop_3(x, y);
    x = _out_x_3, y = _out_y_3;
    switch(state_3) {
        case "break-loop": break loop;
    }
}
var _loop_4 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_4 = x, _out_y_4 = y, "continue-loop";
    }
    else {
        y = 5;
    }
    _out_x_4 = x, _out_y_4 = y;
};
var _out_x_4, _out_y_4;
loop: for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_4 = x, _out_y_4 = y;
    var state_4 = _loop_4(x, y);
    x = _out_x_4, y = _out_y_4;
    switch(state_4) {
        case "continue-loop": continue loop;
    }
}
