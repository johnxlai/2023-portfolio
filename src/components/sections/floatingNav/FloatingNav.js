import FloatingNavData from './floatingNavData';
import Scrollspy from 'react-scrollspy';
import Nav from './Nav';

const FloatingNav = () => {
  return (
    <section
      id="floating-nav"
      className="flex items-center fixed bottom-[3rem] left-[50%] -translate-x-1/2 z-50 lg:hidden">
      <Scrollspy
        className="scrollSpy"
        items={['header', 'about', 'portfolio', 'skills', 'contact']}
        currentClassName="active">
        {FloatingNavData.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </section>
  );
};
export default FloatingNav;
