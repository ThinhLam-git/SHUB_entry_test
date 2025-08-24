# Task 4 - Data Structures and Algorithms

Giải quyết bài toán xử lý truy vấn mảng dữ liệu với độ phức tạp O(n + q) sử dụng thuật toán Prefix Sum.

## Mô tả dự án

Dự án giải quyết bài toán xử lý 2 loại truy vấn tổng một mảng dữ liệu số nguyên không âm: 

- **Loại 1**: Tính tổng các phần tử trong đoạn từ chỉ số `l` đến `r`.
- **Loại 2**: Tính tổng các phần tử ở vị trí chẵn và trừ đi tổng các phần tử ở vị trí lẻ trong đoạn từ chỉ số `l` đến `r`. (tổng xen kẽ)

## Thuật toán sử dụng 

- **Prefix Sum** cho truy vấn loại 1
- **Alternating Prefix Sum** cho truy vấn loại 2
- Độ phức tạp: O(n + q) với n là độ dài mảng, q là số lượng truy vấn

## Cấu trúc dự án

```
Task4/
├── DSA.php             # File PHP chính xử lý thuật toán
└── README.md           # Tài liệu hướng dẫn
```

## API Endpoints

- **Input**: `GET https://share.shub.edu.vn/api/intern-test/input`
- **Output**: `POST https://share.shub.edu.vn/api/intern-test/output`
- Kết quả nhận được: **{"message":"Received"}**

## Cách thực hiện

### 1. Thuật toán Prefix Sum

```php
// Prefix Sum cho truy vấn loại 1
$sum1 = [0];
for ($i = 0; $i < $n; $i++) {
    $sum1[] = $sum1[$i] + $data[$i];
}

// Alternating Prefix Sum cho truy vấn loại 2  
$sum2 = [0];
for ($i = 0; $i < $n; $i++) {
    $sum2[] = $sum2[$i] + ($i % 2 == 0 ? $data[$i] : -$data[$i]);
}
```

### 2. Xử lý truy vấn

- **Loại 1**: `$result = $sum1[$r + 1] - $sum1[$l]`
- **Loại 2**: `$result = $sum2[$r + 1] - $sum2[$l] * ($l % 2 == 0 ? 1 : -1)`

### 3. Gửi kết quả với Bearer Token

```php
$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/json\r\nAuthorization: Bearer $token\r\n",
        'content' => json_encode([$result])
    ]
]);
```

- **stream_context_create**: Tạo context (ngữ cảnh) HTTP với header và body
- **file_get_contents**: Gửi yêu cầu POST với context (ngữ cảnh) đã tạo
- **json_encode**: Chuyển mảng kết quả thành định dạng JSON

## Hướng dẫn thực thi

### 1. Chạy script PHP

```bash
cd Task4
php DSA.php
```

### 2. Input Format

```json
{
    "token": "string",
    "data": [1, 2, 3, 4, 5],
    "query": [
        {
            "type": "1",
            "range": [0, 2]
        },
        {
            "type": "2", 
            "range": [1, 4]
        }
    ]
}
```

### 3. Output Format

Thêm code sau vào để encode ra dạng json từ mảng kết quả:

```json
$result_json = json_encode($result);
return $result_json;

//Kết quả trả về dạng: 
[14980,4542,6351,27956,356,-217,5334,9280,1094,18524,21618,15891,36517,1220,8051,736,22683,5098,12326,2702,12822,33101,9093,29506,788,52,2369,11735,20346,3822,7820,824,3514,29254,8715,630,20656]
```

## Công nghệ sử dụng

- **PHP** - Ngôn ngữ lập trình chính
- **Prefix Sum Algorithm** - Tối ưu độ phức tạp thời gian
- **REST API** - Giao tiếp với server
- **Bearer Authentication** - Xác thực API

## Lưu ý

- Mảng được đánh số từ 0
- Độ dài mảng tối đa: 100,000 phần tử
- Yêu cầu độ phức tạp O(n + q)
- Sử dụng Bearer Token để authenticate API
- Kết quả trả về dưới dạng mảng JSON