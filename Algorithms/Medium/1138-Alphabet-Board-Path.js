/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let x = 0,
        y = 0,
        output = '';

    for (let i = 0; i < target.length; i++) {
        let targetCode = target.charCodeAt(i) - 97,
            target_x = targetCode % 5,
            target_y = Math.floor(targetCode / 5),
            move_x = target_x - x,
            move_y = target_y - y;

        while (move_x < 0) {
            output += 'L';
            move_x += 1;
        }

        while (move_y < 0) {
            output += 'U';
            move_y += 1;
        }

        while (move_y > 0) {
            output += 'D';
            move_y -= 1;
        }

        while (move_x > 0) {
            output += 'R';
            move_x -= 1;
        }

        x = target_x;
        y = target_y;
        output += '!';
    }

    return output;
};
