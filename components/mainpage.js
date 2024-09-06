import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player';
import lottiejson from '/public/mainpage.json';
import styles from './mainpage.module.css'
import {useRouter} from 'next/router';


export default function Mainpage() {
    const router = useRouter();
    const handleClick = () =>{
        router.push('/projects');
    };
    return(
    <>
        <Grid container spacing={4}>
                <Grid size={4}>
                    <div className={styles.introduce}>
                        <h2 style={{fontSize:'30px'}}>현준의 포트폴리오입니다!</h2>
                        <p>안녕하세요! 저는 충주 상업고등학교에 재학 중인 황현준입니다. 저는 상업 분야에 깊은 관심을 가지고 있으며, 학교에서 다양한 IT 관련 과목을 열심히 공부하고 있습니다.
                            이를 통해 특별한 경험이나 성과를 쌓아가고 있습니다. 또한, 현재 C언어, Python 등 다양한 언어에 도전하고 있습니다.
                            저의 목표는 항상 새로운 도전에 열린 마음으로 임하며, 협력과 소통을 중요하게 생각합니다. 앞으로도 많은 경험을 통해 성장해 나가고 싶습니다. 감사합니다!

                        </p>
                        <Button variant="outlined" onClick={handleClick}>테스트버튼</Button>
                    </div>
                </Grid>
                 <Grid size={8}>
                    <Lottie
                        loop
                        animationData={lottiejson}
                        play

                    />
                </Grid>
            </Grid>

    </>
    )
}