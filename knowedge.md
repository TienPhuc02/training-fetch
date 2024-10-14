## config color

- Primary: Màu chính, thường là màu thương hiệu hoặc màu nổi bật nhất.
- Secondary: Màu phụ, thường dùng để bổ sung cho màu chính.
- Tertiary: Màu thứ ba, có thể là màu bổ sung cho màu chính và phụ.
- Accent: Màu nhấn mạnh, thường dùng cho các nút hoặc thành phần cần sự chú ý.
- Neutral: Màu trung tính, thường dùng cho nền hoặc các thành phần không nổi bật.
- Background: Màu nền chính của giao diện.
- Text: Màu văn bản chính.
- Border: Màu viền cho các thành phần.
- Error: Màu dùng để hiển thị thông báo lỗi.
- Success: Màu dùng để hiển thị thông báo thành công.
- Warning: Màu dùng để hiển thị thông báo cảnh báo.
- Info: Màu dùng để hiển thị thông tin bổ sung.

## Khi nào dùng em,rem, %

- Sử dụng em: Khi bạn cần kích thước phụ thuộc vào phần tử cha, thường là cho các phần tử con.
- Sử dụng rem: Khi bạn cần kích thước ổn định, không bị ảnh hưởng bởi phần tử cha, phù hợp cho toàn bộ ứng dụng.
- Sử dụng %: Khi bạn cần tính toán kích thước dựa trên phần tử chứa, thường dùng cho layout và spacing.

## Tối ưu source Icon

## Responsive

375, 768, 992, 1024, 1280 (option 425 ,475)
và >= 1440

- dùng min hoặc max thoi
- Sử dụng tỷ lệ vàng (1.618) hoặc hệ số nhỏ hơn để giảm dần khoảng cách.
- Sử dụng tỷ lệ phần trăm (%) hoặc đơn vị viewport (vw, vh) để có sự co giãn linh hoạt.
- Sử dụng Modular Scale để đảm bảo hệ thống khoảng cách có tính nhất quán.
- Sử dụng cảm nhận thị giác để điều chỉnh spacing một cách hợp lý.
- Sử dụng hàm clamp() để có sự điều chỉnh linh hoạt giữa các kích thước.

- sm (640px): Áp dụng các kiểu CSS khi màn hình có chiều rộng từ 640px trở lên. Tương ứng với các thiết bị như điện thoại di động màn hình lớn hoặc nhỏ.

- Ví dụ: sm:text-[20px] sẽ áp dụng font-size: 20px cho màn hình có chiều rộng ít nhất 640px.
- md (768px): Áp dụng các kiểu CSS khi màn hình có chiều rộng từ 768px trở lên. Tương ứng với máy tính bảng hoặc thiết bị di động xoay ngang.

- Ví dụ: md:text-[24px] sẽ áp dụng font-size: 24px cho màn hình có chiều rộng ít nhất 768px.
  lg (1024px): Áp dụng các kiểu CSS khi màn hình có chiều rộng từ 1024px trở lên. Tương ứng với laptop nhỏ hoặc máy tính bảng lớn.

- Ví dụ: lg:text-[28px] sẽ áp dụng font-size: 28px cho màn hình có chiều rộng ít nhất 1024px.
- xl (1280px): Áp dụng các kiểu CSS khi màn hình có chiều rộng từ 1280px trở lên. Tương ứng với laptop lớn hoặc màn hình máy tính để bàn.

- Ví dụ: xl:text-[32px] sẽ áp dụng font-size: 32px cho màn hình có chiều rộng ít nhất 1280px.
- 2xl (1536px): Áp dụng các kiểu CSS khi màn hình có chiều rộng từ 1536px trở lên. Tương ứng với các màn hình desktop có độ phân giải cao.

- Ví dụ: 2xl:text-[36px] sẽ áp dụng font-size: 36px cho màn hình có chiều rộng ít nhất 1536px.

## feedback

- header(1200) - main(1200) - footer(1200)
- nhìn tổng quan, check font family, font size text
- config tailwindcss, tag html, leading/fontsize
- 1920x1080 (full hd)
- 375 : font size 20 - 16- 13 12 - 11 - 10
- button min 28
- view port và độ phân giải trong device
- body 100vh-header(fixed)-footer
- icon -> cursor pointer
- body -> container(tailwindcss)
- scroll,animation -> faded
