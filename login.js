// Hàm kiểm tra đăng nhập
function checkLogin(user, pass) {
    if (user === 'admin' && pass === '1234') {
        return true;
    }
    return false;
}

// Xuất hàm để có thể test bằng thư viện Jest (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = checkLogin;
}
