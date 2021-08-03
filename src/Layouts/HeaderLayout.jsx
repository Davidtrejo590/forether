import { Component } from 'react';
import { IconButton } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import NavBar from '../Components/NavBar';
import Search from '../UI/Search';

const styles = {
    firstRow: 'col-sm d-flex justify-content-center',
    worldItems: 'col-sm d-flex justify-content-center align-items-center'
}

class HeaderLayout extends Component {
    render() {
        return (
            <>
                <div style={{backgroundColor: ' #003758 ', color:'white'}} className="d-flex align-items-baseline">
                    <div className={styles.firstRow}>Forether</div>
                    <div className={styles.firstRow}><Search></Search></div>
                    <div className={styles.worldItems}>
                        <IconButton><PublicIcon style={{color:'white'}} /></IconButton>
                        MX
                        |
                        <sup> °</sup>C
                        <Divider  orientation="vertical" style={{color: 'black'}}/>
                        <IconButton><ExpandMoreIcon style={{color:'white'}}/></IconButton>
                    </div>
                </div>

                <div className="d-flex" style ={{backgroundColor: ' #335f79 ', color: 'white'}}>
                    <div className="col-4 d-flex align-self-center justify-content-center">Current Weather/Current City</div>
                    <div className="col-8 d-flex justify-content-end"><NavBar></NavBar></div>
                </div>

            </>
        );
    }

}

export default HeaderLayout;