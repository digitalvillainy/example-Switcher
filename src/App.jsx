import { Switcher } from './Switcher';
function App() {
  const load = {
    comp: 'Banner',
    addOns: { name: 'Bobby' },
  };

  const loadB = {
    comp: 'BannerAds',
    addOns: { ads: 'Penny' },
  };

  return (
    <>
      <h1>Switcher</h1>
      <Switcher {...loadB} />
    </>
  );
}

export default App;
