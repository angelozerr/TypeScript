//// [blockScopedBindingsReassignedInLoop3.ts]

for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break;
    }
    else {
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                break;
            }
            else {
                y++;
            }
        }
        
        y = 5;
    }
}


for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue;
    }
    else {
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                continue;
            }
            else {
                y++;
            }
        }
        
        y = 5;
    }
}

loop2:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break loop2;
    }
    else {
        loop1:
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                break loop1;
            }
            else {
                y++;
                break loop2
            }
        }
        
        y = 5;
    }
}

loop2:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue loop2;
    }
    else {
        loop1:
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                continue loop1;
            }
            else {
                y++;
                continue loop2
            }
        }
        
        y = 5;
    }
}


//// [blockScopedBindingsReassignedInLoop3.js]
var _loop_1 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_1 = x, _out_y_1 = y, "break";
    }
    else {
        var _loop_2 = function(a_1) {
            var f = function () { return a_1; };
            if (a_1) {
                a_1 = x;
                return _out_a_1_1 = a_1, "break";
            }
            else {
                y++;
            }
            _out_a_1_1 = a_1;
        };
        var _out_a_1_1;
        for (var a_1 = 1; a_1 < 5; --a_1) {
            _out_a_1_1 = a_1;
            var state_1 = _loop_2(a_1);
            a_1 = _out_a_1_1;
            if (state_1 === "break") break;
        }
        y = 5;
    }
    _out_x_1 = x, _out_y_1 = y;
};
var _out_x_1, _out_y_1;
for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_1 = x, _out_y_1 = y;
    var state_2 = _loop_1(x, y);
    x = _out_x_1, y = _out_y_1;
    if (state_2 === "break") break;
}
var _loop_3 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_2 = x, _out_y_2 = y, "continue";
    }
    else {
        var _loop_4 = function(a_2) {
            var f = function () { return a_2; };
            if (a_2) {
                a_2 = x;
                return _out_a_2_1 = a_2, "continue";
            }
            else {
                y++;
            }
            _out_a_2_1 = a_2;
        };
        var _out_a_2_1;
        for (var a_2 = 1; a_2 < 5; --a_2) {
            _out_a_2_1 = a_2;
            var state_3 = _loop_4(a_2);
            a_2 = _out_a_2_1;
            if (state_3 === "continue") continue;
        }
        y = 5;
    }
    _out_x_2 = x, _out_y_2 = y;
};
var _out_x_2, _out_y_2;
for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_2 = x, _out_y_2 = y;
    var state_4 = _loop_3(x, y);
    x = _out_x_2, y = _out_y_2;
    if (state_4 === "continue") continue;
}
var _loop_5 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_3 = x, _out_y_3 = y, "break-loop2";
    }
    else {
        var _loop_6 = function(a_3) {
            var f = function () { return a_3; };
            if (a_3) {
                a_3 = x;
                return _out_a_3_1 = a_3, "break-loop1";
            }
            else {
                y++;
                return _out_a_3_1 = a_3, "break-loop2";
            }
            _out_a_3_1 = a_3;
        };
        var _out_a_3_1;
        loop1: for (var a_3 = 1; a_3 < 5; --a_3) {
            _out_a_3_1 = a_3;
            var state_5 = _loop_6(a_3);
            a_3 = _out_a_3_1;
            switch(state_5) {
                case "break-loop1": break loop1;
                case "break-loop2": return state_5;
            }
        }
        y = 5;
    }
    _out_x_3 = x, _out_y_3 = y;
};
var _out_x_3, _out_y_3;
loop2: for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_3 = x, _out_y_3 = y;
    var state_6 = _loop_5(x, y);
    x = _out_x_3, y = _out_y_3;
    switch(state_6) {
        case "break-loop2": break loop2;
    }
}
var _loop_7 = function(x, y) {
    var a = function () { return x++ + y++; };
    if (x == 1) {
        return _out_x_4 = x, _out_y_4 = y, "continue-loop2";
    }
    else {
        var _loop_8 = function(a_4) {
            var f = function () { return a_4; };
            if (a_4) {
                a_4 = x;
                return _out_a_4_1 = a_4, "continue-loop1";
            }
            else {
                y++;
                return _out_a_4_1 = a_4, "continue-loop2";
            }
            _out_a_4_1 = a_4;
        };
        var _out_a_4_1;
        loop1: for (var a_4 = 1; a_4 < 5; --a_4) {
            _out_a_4_1 = a_4;
            var state_7 = _loop_8(a_4);
            a_4 = _out_a_4_1;
            switch(state_7) {
                case "continue-loop1": continue loop1;
                case "continue-loop2": return state_7;
            }
        }
        y = 5;
    }
    _out_x_4 = x, _out_y_4 = y;
};
var _out_x_4, _out_y_4;
loop2: for (var x = 1, y = 2; x < y; ++x, --y) {
    _out_x_4 = x, _out_y_4 = y;
    var state_8 = _loop_7(x, y);
    x = _out_x_4, y = _out_y_4;
    switch(state_8) {
        case "continue-loop2": continue loop2;
    }
}
