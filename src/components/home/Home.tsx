import { Box } from '@mui/system'
import { ReactElement } from 'react'
import homeImage from '../../assets/images/header.png'
import './Home.scss'

interface Props {
    author: string;
    title: string;
}

function Home(props: Props): ReactElement {
    return (
        <div
            className="home-container"
            style={{ backgroundImage: `url(${homeImage})` }}>
            <Box sx= {{ display: 'flex' }}>

            </Box>
                <div className="author-container_left">
                    blabla
                </div>
                <div className="title-contaner_right">
                    blabla
                </div>
        </div>
    )
}

export default Home
