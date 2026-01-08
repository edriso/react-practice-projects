import { useState } from 'react';
import MenuItems from './components/MenuItems';
import Title from './components/Title';
import menu from './data';
import Categories from './components/Categories';

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    if (category === 'all') {
      return setMenuItems(menu);
    }

    const filteredItems = menu.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <br />
        <br />

        <Categories
          categories={['all', ...new Set(menu.map((item) => item.category))]}
          filterItems={filterItems}
        />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
};
export default App;
