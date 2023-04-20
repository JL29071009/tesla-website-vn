// images
import Logo from '../src/assets/img/header/logo.svg';
import Diecast from '../src/assets/img/workouts/Diecast.png';
import Roadster from '../src/assets/img/workouts/Roadster.png';
import Model3blue from '../src/assets/img/workouts/Model3blue.png';
import Model3white from '../src/assets/img/workouts/Model3white.png';
import Model3grey from '../src/assets/img/workouts/Model3grey.png';
import Model3black from '../src/assets/img/workouts/Model3black.png';
import Cyberquad from '../src/assets/img/workouts/Cyberquad.png';
import CommunityImg1 from '../src/assets/img/community/img1.jpg';
import CommunityImg2 from '../src/assets/img/community/img2.jpg';
import CommunityImg3 from '../src/assets/img/community/img3.jpg';
import CommunityImg4 from '../src/assets/img/community/img4.jpg';
import JoinImg from '../src/assets/img/join/join.jpg';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Nhà', href: '#home' },
  { name: 'Về', href: '#about' },
  { name: 'Cửa hàng', href: '#shop' },
  { name: 'Giá cả', href: '#pricing' },
  { name: 'Cộng đồng', href: '#community' },
  { name: 'Câu hỏi thường gặp', href: '#faq' },
];

export const navb = [
  { name: 'Nhà', href: '/home' },
  { name: 'Về', href: '/about' },
  { name: 'Cửa hàng', href: '/shop' },
  { name: 'Giá cả', href: '/pricing' },
  { name: 'Cộng đồng', href: '/community' },
  //{ name: 'FAQ', href: '/faq' },
];

export const banner = {
  titlePart1: 'Mẫu 3',
  titlePart2: 'Đặt hàng trực tuyến',
  subtitle:
    'Cho giao hàng không tiếp xúc.',
  textBtn: 'Đơn hàng theo yêu cầu',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Sứ mệnh của chúng tôi',
  subtitle1:
    'Mái tôn năng lượng mặt trời giúp trả tiền cho chính nó bằng năng lượng mà nó sản xuất. Là một hệ thống tích hợp đầy đủ, Mái tôn năng lượng mặt trời có thể tối đa hóa việc phát điện mặt trời của bạn và giúp bạn kiểm soát hóa đơn tiền điện hàng tháng của mình.',
  subtitle2:
    'Với ứng dụng Tesla, bạn có thể theo dõi sản xuất năng lượng của mình theo thời gian thực. Kiểm soát hệ thống của bạn từ bất cứ đâu với cảnh báo ngay lập tức và truy cập từ xa.',
  link: 'Đặt hàng ngay',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Cửa hàng',
  programs: [
    {
      image: Diecast,
      name: 'Đồ chơi mô hình đúc',
    },
    {
      image: Roadster,
      name: 'Xe hai cửa thể thao',
    },
    {
      image: Model3blue,
      name: 'Mẫu 3 màu xanh',
    },
    {
      image: Model3white,
      name: 'Mẫu 3 màu trắng',
    },
    {
      image: Model3grey,
      name: 'Mẫu 3 màu xám',
    },
    {
      image: Model3black,
      name: 'Mẫu 3 màu đen',
    },
    {
      image: Cyberquad,
      name: 'Xe địa hình điện Cyberquad',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Kế hoạch giá cả',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'Chuyển đổi năng lượng từ ánh sáng mặt trời không giới hạn' },
        { name: '1 Energy Monitoring' },
        { name: 'Giá thấp nhất được đảm bảo miễn phí cho điện năng mặt trời' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'Chuyển đổi năng lượng từ ánh sáng mặt trời không giới hạn' },
        { name: '5 Energy Monitoring' },
        { name: 'Bảo đảm giá thấp nhất cho hệ thống điện mặt trời' },
        { name: 'Thông số kỹ thuật của tấm pin mặt trời' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'Chuyển đổi năng lượng từ ánh sáng mặt trời không giới hạn' },
        { name: 'all Energy Monitoring' },
        { name: 'Bảo đảm giá thấp nhất cho hệ thống điện mặt trời' },
        { name: 'Thông số kỹ thuật của tấm pin mặt trời' },
        { name: 'Tiết Kiệm 50% Năng Lượng Cho Ngôi Nhà Của Bạn' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Cộng đồng',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Model Y',
      message:
        '“Đặt hàng trực tuyến để được giao hàng không tiếp xúc”',
    },
    {
      image: CommunityImg2,
      name: 'Model S',
      message:
        '“Đặt hàng trực tuyến để được giao hàng không tiếp xúc”',
    },
    {
      image: CommunityImg3,
      name: 'Model X',
      message:
        '“Đặt hàng trực tuyến để được giao hàng không tiếp xúc”',
    },
    {
      image: CommunityImg4,
      name: 'Solar Panels',
      message:
        '“Bảng điện mặt trời giá thấp nhất tại Mỹ”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Câu hỏi thường gặp',
  accordions: [
    {
      question: 'Có những lựa chọn giao hàng nào?',
      answer:
        'Chúng tôi cung cấp nhiều lựa chọn giao hàng. Khi xe của bạn có sẵn, bạn sẽ nhận được một email và tin nhắn SMS trên điện thoại di động của bạn với một liên kết để đặt lịch hẹn giao hàng. Ở một số tiểu bang, các lựa chọn giao hàng có thể bị giới hạn do tính sẵn có và các quy định hành chính.',
    },
    {
      question: 'Tôi có thể mong đợi nhận hàng vào lúc nào?',
      answer:
        'Thời gian giao hàng khác nhau tùy thuộc vào dòng xe, địa điểm và sự sẵn có sản xuất hiện tại. Để nhận hàng ngay, hãy kiểm tra hàng tồn kho có sẵn tại khu vực của bạn.',
    },
    {
      question: 'Xe mới được trang bị gói kết nối nào?',
      answer:
        'Tất cả các xe được mua thông qua Tesla sẽ được nhận một thử nghiệm Kết nối Premium miễn phí. Sau khi kết thúc thời gian thử nghiệm, Kết nối Premium sẽ có sẵn dưới dạng đăng ký thông qua ứng dụng Tesla. Tìm hiểu thêm về Kết nối Premium.',
    },
    {
      question: 'Tesla chấp nhận loại xe nào?',
      answer:
        'Chúng tôi chấp nhận trao đổi xe hơi, xe tải, xe bán tải và xe SUV để mua một chiếc xe Tesla mới hoặc đã qua sử dụng.',
    },
    {
      question: 'Quy trình trao đổi xe hơi hoạt động như thế nào?',
      answer:
        'Để bắt đầu quá trình trao đổi xe, hãy nhận báo giá thông qua ứng dụng Tesla. Khi bạn đến gần ngày giao xe, bạn sẽ nhận được thông báo trên thiết bị di động của mình yêu cầu bạn thực hiện kiểm tra tự đánh giá.',
    },
    {
      question: 'Tesla xác định giá của xe của tôi như thế nào?',
      answer:
        'Tất cả các giá trị trao đổi của Tesla được tạo ra từ một phép tính tiêu chuẩn dựa trên cấu hình, lịch sử, số dặm và tuổi của xe.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Bạn muốn tham gia và có vui không?',
  subtitle:
    'Với ứng dụng Tesla, bạn có thể giám sát sản xuất năng lượng của mình theo thời gian thực. Điều khiển hệ thống của bạn từ bất cứ đâu với cảnh báo ngay lập tức và truy cập từ xa.',
  btnText: 'Đặt trước ngay bây giờ',
};

export const footer = {
  logo: Logo,
  copyrightText: '© 2023 | Created By Tesla | All rights reserved.',
};
