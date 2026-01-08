import MenuSingleItem from './MenuSingleItem';

const MenuItems = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        return <MenuSingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default MenuItems;
