# Data Report - Báo cáo dữ liệu Excel

Ứng dụng React để đọc file Excel và tính tổng doanh thu theo khoảng thời gian.

## Mô tả dự án

Ứng dụng cho phép người dùng:
- Upload file Excel (.xlsx, .xls) có format tương tự input đề bài
- Chọn khoảng thời gian bắt đầu và kết thúc
- Tự động tính tổng doanh thu trong khoảng thời gian đã chọn
- Hiển thị kết quả định dạng tiền tệ VNĐ

## Cấu trúc dự án

```
src/
├── components/
│   └── DataReport.jsx    # Component chính xử lý Excel và tính toán
├── App.jsx              # Component gốc
├── main.jsx            # Entry point
└── index.css           # Styles
public/
├── index.html          # HTML template
package.json            # Dependencies và scripts
```

## Cài đặt và chạy dự án

### 1. Di chuyển vào thư mục dự án
```bash
cd Task1/data-report
```

### 2. Cài đặt dependencies
```bash
yarn install
```

### 3. Cài đặt thư viện đọc Excel
```bash
yarn add xlsx
```

### 4. Chạy ứng dụng
```bash
yarn start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### 5. Build production
```bash
yarn build
```

## Công nghệ sử dụng

- **React** - Frontend framework
- **XLSX** - Thư viện đọc/ghi file Excel
- **Create React App** - Build tool và development server
- **Tailwind CSS** - Utility-first CSS framework

## Hướng dẫn sử dụng

1. **Upload file Excel**: Nhấn "Choose File" và chọn file Excel có dữ liệu
2. **Chọn thời gian bắt đầu**: Nhập thời gian bắt đầu (format: HH:MM)
3. **Chọn thời gian kết thúc**: Nhập thời gian kết thúc (format: HH:MM)
4. **Tính tổng**: Nhấn nút "Tính tổng" để xem kết quả
5. **Xem kết quả**: Tổng doanh thu sẽ hiển thị ở dưới với định dạng VNĐ

## Cách thực hiện

Định dạng file Excel cần có cấu trúc:
- Dữ liệu bắt đầu từ dòng thứ 9 (nên lược bỏ 8 row đầu)
- Cột 3: Thời gian (format: HH:MM:SS)
- Cột 9: Số tiền/doanh thu

Khi upload file vào, đọc sheet đầu tiên, chuyển dữ liệu thành JSON, {header: 1} để đọc theo từng hàng, lọc bỏ 8 dòng đầu, xem các thuộc tính **Giờ** và **Thành tiền** là thuộc vị trí bao nhiêu trong 1 dòng sau đó lọc và lưu với tên mới time và amount.

- Tạo biến FilteredData lọc thời gian trong khoảng thời gian đã chọn bằng cách so sánh giá trị time với startTime và endTime. 
- Tính tổng amount trong FilteredData bằng hàm reduce với accumulator ban đầu là 0, cộng dồn các giá trị amount lại với nhau.

## Lưu ý

- Đảm bảo file Excel có đúng định dạng dữ liệu
- Thời gian trong file phải theo format HH:MM:SS
- Ứng dụng sẽ lọc dữ liệu trong khoảng thời gian đã chọn
