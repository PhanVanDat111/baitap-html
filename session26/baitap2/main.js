let words = ["spray", "elite", "exuberant", "destruction", "present"];
function locword(words) {

    if (Array.isArray(words) == false) {
        return ('dữ liệu không hợp lệ')
    };
    // Expected output: true

    if (words.length === 0) {
        return ('mảng rỗng');
    }

    // Expected output: false
    let result = words.filter((word) => word.length > 5);
    return result;

}
alert(locword(words))                                                