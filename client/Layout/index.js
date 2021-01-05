import { useState } from 'react';
import Header from '../components/Header'
import MainMenu from '../components/MainMenu';

export default function ClientLayout({children}) {
    const [toggle, setToggle] = useState(false);
    return(
        <>
            <Header toggle={toggle} setToggle={setToggle} />
            <main>
                {children}
            </main>
            <MainMenu show={toggle} setShow={setToggle} />
        </>
    );
}