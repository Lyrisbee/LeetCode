/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const r_num_array = num1.split('').reverse(),
        r_num2_array = num2.split('').reverse();

    let answer = Array(r_num_array.length + r_num2_array.length).fill(0);

    for (let i = 0; i < r_num_array.length; i++) {
        for (let j = 0; j < r_num2_array.length; j++) {
            answer[i + j] += r_num2_array[j] * r_num_array[i];
        }
    }

    let add_next = 0;

    for (let i = 0; i < answer.length; i++) {
        let num = answer[i] + add_next;
        add_next = Math.floor(num / 10);
        answer[i] = num % 10;
    }

    let i = answer.length - 1;

    while (answer[i] === 0) {
        answer.pop();
        --i;
    }

    return answer.length > 0 ? answer.reverse().join('') : '0';
};
