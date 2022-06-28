import { Menu, MenuProps} from "antd"
import { 
  EyeFilled,
  DropboxOutlined, 
  AppstoreFilled, 
  TagsFilled, 
  BookFilled,
  SwapOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Tổng quan', '1', <EyeFilled />),
  getItem('Hàng hóa', 'sub1', <DropboxOutlined />, [
    getItem('Danh mục', '2', <AppstoreFilled />),
    getItem('Thiết lập giá', '3', <TagsFilled />),
    getItem('Kiểm kho', '4', <BookFilled />)
  ]),
  getItem('Giao dịch', 'sub2', <SwapOutlined />, [
    getItem('Đặt hàng', '5', <AppstoreFilled />),
    getItem('Hóa đơn', '6', <AppstoreFilled />),
    getItem('Vận đơn', '7', <AppstoreFilled />),
    getItem('Trả hàng', '8', <AppstoreFilled />),
    getItem('Nhập hàng', '9', <AppstoreFilled />),
    getItem('Trả hàng nhập', '10', <AppstoreFilled />),
    getItem('Xuất hủy', '11', <AppstoreFilled />),
  ]),

  getItem('Đối tác', 'sub3', <AppstoreFilled />, [
    getItem('Khách hàng', '12'),
    getItem('Nhà cung cấp', '13'),
    getItem('Đối tác giao hàng', '14'),
  ]),

  getItem('Nhân viên', 'sub4', <AppstoreFilled />, [
    getItem('Nhân viên', '9'),
    getItem('Chấm công', '10'),
    getItem('Bảng tính lương', '10'),
    getItem('Hoa hồng', '10'),
    getItem('Thiết lập chung', '10'),
  ]),
  getItem('Sổ quỹ', '1', <EyeFilled />),
];


export default function MenuNavbar(){
    //code ..
    return (<Menu mode="horizontal" items={items} />)
}