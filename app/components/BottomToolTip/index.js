import React, { Component } from 'react';

import style from './style.css';

class BottomToolTip extends Component {
  constructor(props) {
    super(props);

    this.renderToolTip = this.renderToolTip.bind(this);  
  }

  renderToolTip() {
    const { countrie } = this.props;
    const {
      name, nativeName, region, subregion,
      capital, population, currencies, flag
    } = countrie;

    return (
      <div className={style.box}>
        <ul className={style.ul}>
          {name && <li>{name}</li>}
          {nativeName && <li>{nativeName}</li>}
          {flag && <li><img className={style.img} src={flag} alt="" /></li>}
        </ul>
        <div className={style.line} />
        {region && <div>Region: {region}</div>}
        {subregion && <div>Subregion: {subregion}</div>}
        <div>
          Capital: {capital || ''} {population ? `(${population})` : ''}
        </div>
        <div>
          Currencies:
          {currencies.map((currencie, i) => {
            const { symbol, code } = currencie;
            let renderSymbol = '';
            let renderCode = '';

            if (symbol && symbol !== '(none)') {
              renderSymbol = symbol;
            }

            if (code && code !== '(none)') {
              if (symbol) {
                renderCode = `(${code})`;
              } else {
                renderCode = code;
              }
            }

            const comma = i === currencies.length - 1 ? '' : ',';

            return (
              ` ${renderSymbol} ${renderCode}${comma}`
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      this.renderToolTip()
    );
  }
}

export default BottomToolTip;
