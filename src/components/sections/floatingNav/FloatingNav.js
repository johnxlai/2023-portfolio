import FloatingNavData from './floatingNavData';
import Scrollspy from 'react-scrollspy';
import Nav from './Nav';

const FloatingNav = () => {
  return (
    <section
      id="floating-nav"
      className="flex items-center fixed bottom-10 left-[50%] -translate-x-1/2 z-50">
      <Scrollspy
        className="scrollSpy"
        items={['header', 'about', 'experience', 'portfolio', 'contact']}
        currentClassName="active">
        {FloatingNavData.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </section>
  );
};
export default FloatingNav;
