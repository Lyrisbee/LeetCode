/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let land = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                land.push({x: i - 1, y: j});
                land.push({x: i + 1, y: j});
                land.push({x: i, y: j - 1});
                land.push({x: i, y: j + 1});
            }
        }
    }

    if (land.length === 0) {
        return -1;
    }

    let step = 0;
    while (land.length > 0) {
        step ++;
        let land1 = [];
        for (let i = 0; i < land.length; i++) {
            let
                x = land[i].x,
                y = land[i].y;

            if (x >= 0 && y >= 0 && x < grid.length && y < grid.length && x < grid.length && grid[x][y] === 0) {
                grid[x][y] = step;
                land1.push({x: x - 1, y: y});
                land1.push({x: x + 1, y: y});
                land1.push({x: x, y: y - 1});
                land1.push({x: x, y: y + 1});
            }
        }
        land = land1;
    }

    return (step === 1) ? -1 : step - 1;
};