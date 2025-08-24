# Form Nhập Giao Dịch

Ứng dụng React form để nhập thông tin giao dịch xăng dầu với validation và thông báo toast.

## Tính năng

- Form nhập giao dịch với các trường: thời gian, số lượng, trụ, doanh thu, đơn giá
- Validation form với React-Hook-Form
- Thông báo toast khi submit thành công (React-Toastify)
- Giao diện responsive với Bootstrap5/Tailwind CSS

## Cấu trúc dự án

```
src/
├── components/
│   └── FormPage.jsx      # Component form chính
├── App.jsx               # Component gốc
├── main.jsx             # Entry point
└── index.css            # Styles
public/
├── index.html           # HTML template
package.json             # Dependencies và scripts
```

## Cài đặt và chạy dự án

### 1. Cài đặt dependencies

```bash
yarn install
```

### 2. Cài đặt các package bổ sung

```bash
yarn add react-hook-form react-toastify bootstrap
```

### 3. Chạy ứng dụng

```bash
yarn dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### 4. Build production

```bash
yarn build
```

## Công nghệ sử dụng

- **React + Vite** - Framework và build tool
- **React Hook Form** - Quản lý form và validation
- **React Toastify** - Thông báo toast
- **Bootstrap** - UI framework
- **ESLint** - Code linting

## Cách thực hiện

- Sử dụng form của react-hook-form để khi click Button thì sẽ submit form dễ dàng.
- Với hiển thị các lỗi nếu các trường chưa hợp lệ thì sử dụng register, formState:{errors} của useForm(), trong mỗi thẻ input hoặc selection thêm {...register('tên_trường', {required: 'thông_báo_lỗi'})}, bên dưới thẻ input hoặc selection thì thêm {errors.tên_trường && (<p classname='có thể sử dụng bootstrap như text-danger'>{errors.tên_trường.message}</p>)}
- Ngoài ra các input đặc biệt như mật khẩu hoặc username thì có thể thêm pattern dưới required để thêm điều kiện input.
- Với hiển thị thông báo **Cập nhật thành công** thì sử dụng {toast và ToastContainer} từ react-toastify trong đó sử dụng toast.success("Cập nhật thành công!")
   
## Hướng dẫn sử dụng

1. Nhập thời gian giao dịch
2. Nhập số lượng xăng (lít)
3. Chọn trụ xăng (1-3)
4. Nhập doanh thu (VNĐ)
5. Nhập đơn giá (VNĐ/lít)
6. Nhấn "Cập nhật" để submit form 
7. Thông báo thành công sẽ hiển thị hoặc hiển thị lỗi nếu có trường chưa hợp lệ
