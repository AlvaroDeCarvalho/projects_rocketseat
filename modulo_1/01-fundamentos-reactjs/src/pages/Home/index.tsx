import Aside from '../../components/Aside';
import Header  from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { WrapperHome } from './styles';




function Home() {
    return (
        <>
        <Header />
        <WrapperHome>
            <Aside />
            <Sidebar />

        </WrapperHome>
        </>
    )
}

export default Home