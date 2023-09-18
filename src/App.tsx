import { Col, Row } from 'antd';
import { useState } from 'react';
import Item from './components/Item/Item.js';
import { mapper, NavEnum } from './constants/Nav.enum.js';
import { mergeCn } from './utils/mergeCn.js';
import All from './pages/All/All.js';
import { ManpowerSupply, MobileOrWebsite, UIUX } from './pages/index.js';

function App() {
  const [nav, setNav] = useState<NavEnum>(NavEnum.All);

  const render = () => {
    switch (nav) {
      case NavEnum.All:
        return <All />;
      case NavEnum.ManPower:
        return <ManpowerSupply />;
      case NavEnum.MobileApp:
        return <MobileOrWebsite />;
      case NavEnum.UIUX:
        return <UIUX />;
      default:
        break;
    }
  };

  const renderListTab = () => {
    return (
      <ul>
        {Object.keys(NavEnum).map((a) => {
          return (
            <li key={a}>
              <button
                className={mergeCn(
                  `btn-nav`,
                  nav === a ? 'is-active' : undefined
                )}
                onClick={() => {
                  setNav(a as NavEnum);
                }}
              >
                {mapper[a as NavEnum]}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {renderListTab()}
      {render()}
    </>
  );
}

export default App;
