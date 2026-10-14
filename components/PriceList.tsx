'use client';
import { useState } from 'react';
import { priceTabs } from '@/lib/site';

export default function PriceList() {
  const [tab, setTab] = useState(priceTabs[0].key);
  const current = priceTabs.find((t) => t.key === tab)!;
  return (
    <>
      <div className="tabs" role="tablist">
        {priceTabs.map((t) => (
          <button key={t.key} role="tab" aria-selected={t.key === tab} className={'tab' + (t.key === tab ? ' is-active' : '')} onClick={() => setTab(t.key)}>{t.label}</button>
        ))}
      </div>
      <div className="pricelist" role="tabpanel">
        {current.rows.map((r) => (
          <div className="pricerow" key={r.t}>
            <img src={r.img} alt="" />
            <div className="pricerow__text"><strong>{r.t}</strong><span>{r.d}</span></div>
            <span className="pricerow__price">{r.p}</span>
          </div>
        ))}
      </div>
    </>
  );
}
