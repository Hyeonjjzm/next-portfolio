import Header from './header';
import Footer from './footer';
import Container from '@mui/material/Container';

export default function Laydout({children}){
    return(
        <>
        <Header></Header>
        <Container fixed style={{margin:"20vh"}}>
        <div>{children}</div>
        </Container>
        <Footer></Footer>
        </>
    )
}