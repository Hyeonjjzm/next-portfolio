import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectItem({data}) {
    const title = data.properties.이름.title[0]?.plain_text;
    const tag = data.properties.태그.multi_select;
    const start = data.properties?.작업기간.date.start;
    const end = data.properties?.작업기간.date.end;
    const description = data.properties?.설명.rich_text[0].plain_text;
    const github = data.properties?.Github.url;
    const imgSrc = data.cover.file?.url || data.cover.external.url;

    function countWorkDays(Start, End) {
        const StartDate = new Date(Start);
        const EndDate = End ? new Date(End) : new Date();

        let workdays = 0;
        let currentDate = new Date(StartDate);

        while (currentDate <= EndDate) {
            workdays++;
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return workdays;
    }

    const workDay = countWorkDays(start, end)
    return (
        <div>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{height : 140}}
                    image= {imgSrc}
                    title = {title}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>

                    <Typography variant="body1" sx={{color : 'text.secondary'}}>
                        {workDay} 일
                    </Typography>

                    <Typography variant="body2" sx={{color : 'text.secondary'}}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Visit Github</Button>
                </CardActions>
            </Card>
        </div>
    );
}