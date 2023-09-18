import { IItem } from './IItem.interface.js';

const Item = ({ title, linkImage, link }: IItem) => {
  const handleRedirect = () => {
    window.location.href = link;
  };

  return (
    <div className='card' onClick={handleRedirect}>
      <img src={linkImage} alt='' />
      <div className='card-content'>
        <div className='card-title'>
          <div>{title}</div>
          <i className='fa-solid fa-greater-than'></i>
        </div>
      </div>
    </div>
  );
};

export default Item;
