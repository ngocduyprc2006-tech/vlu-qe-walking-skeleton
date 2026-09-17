// Nhúng hàm cần test từ file login.js
const checkLogin = require('./login');

describe('Kiểm thử hàm checkLogin', () => {
    
    test('Nên trả về true khi đúng tài khoản (admin) và mật khẩu (123)', () => {
        expect(checkLogin('admin', '123')).toBe(true);
    });

    test('Nên trả về false khi sai mật khẩu', () => {
        expect(checkLogin('admin', 'sai_mat_khau')).toBe(false);
    });

    test('Nên trả về false khi sai tài khoản', () => {
        expect(checkLogin('user_khac', '123')).toBe(false);
    });
    
    test('Nên trả về false khi bỏ trống tài khoản hoặc mật khẩu', () => {
        expect(checkLogin('', '')).toBe(false);
    });
});
