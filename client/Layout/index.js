import Header from '../components/Header'

export default function ClientLayout({children}) {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    );
}