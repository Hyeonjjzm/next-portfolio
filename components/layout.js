import Header from './header';
import Footer from './footer';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

export default function Laydout({children}){
    return(
        <>
        <Header></Header>
        <Container fixed>
            <Button variant="outlined">테스트버튼</Button>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <div style={{border : '1px solid black'}}>size=8</div>
                </Grid>
                 <Grid size={4}>
                    <div style={{border : '1px solid black'}}>size=4</div>
                </Grid>
            </Grid>
        <h1>레이아웃</h1>
        <div>{children}</div>
        </Container>
        <Footer></Footer>
        </>
    )
}