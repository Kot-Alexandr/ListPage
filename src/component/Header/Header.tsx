import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.scss';



const Header = () => {

    const [currentTab, setCurrentTab] = useState<number>()


    return <div className={s.headersTabs}>
        <div className={currentTab === 0 ? s.tabsStyle + " " + s.active : s.tabsStyle} onClick={() => { setCurrentTab(0) }}>
            <NavLink to="/navigator?tab=0">Income</NavLink>
        </div >
        <div className={currentTab === 1 ? s.tabsStyle + " " + s.active : s.tabsStyle} onClick={() => { setCurrentTab(1) }}>
            <NavLink to="/navigator?tab=1">Outcome</NavLink>
        </div >
        <div className={currentTab === 2 ? s.tabsStyle + " " + s.active : s.tabsStyle} onClick={() => { setCurrentTab(2) }}>
            <NavLink to="/navigator?tab=2">Loans</NavLink>
        </div>
        <div className={currentTab === 3 ? s.tabsStyle + " " + s.active : s.tabsStyle} onClick={() => { setCurrentTab(3) }}>
            <NavLink to="/navigator?tab=3">Investments</NavLink>
        </div>
    </div>

}

export default Header