import { Col } from 'antd';
import Item from '../Item/Item.js';
import { ITableItem } from './ITableItem.interface.js';

const TableItem = ({ items }: ITableItem) => {
  const renderData = () => {
    return items.map((item, i) => (
      <Col lg={8} md={12} sm={24} key={i}>
        <Item title={item.title} linkImage={item.linkImage} link={item.link} />
      </Col>
    ));
  };
  return <>{renderData()}</>;
};

export default TableItem;
