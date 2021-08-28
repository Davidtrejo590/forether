import { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { green } from '@material-ui/core/colors';
import Icon from '../UI/Icon';



const styles = {
    column: 'col-sm-6 d-flex justify-content-center align-items-center',
    columnCopyright: 'col-sm-12 d-flex flex-column align-items-center',
    padding: 'm-3'
}

class FooterLayout extends Component {
    render() {
        return (
            <>
                <div className="d-flex" style={{ backgroundColor: '#002135', color: 'white' }}>
                    <div className={styles.column}>
                        <p className={styles.padding}>Siguenos</p>
                        <a href='https://facebook.com'><Icon className={styles.padding}><FacebookIcon style={{ color: green[50] }} /></Icon></a>
                        <p style={{ color: '#002135' }}>---</p>
                        <a href='https://twitter.com'><Icon className={styles.padding}><TwitterIcon style={{ color: green[50] }} /></Icon></a>
                        <p style={{ color: '#002135' }}>---</p>
                        <a href='https://instagram.com'><Icon className={styles.padding}><InstagramIcon style={{ color: green[50] }} /></Icon></a>

                    </div>
                    <div className={styles.column}>Icons</div>
                </div>

                <div style={{ backgroundColor: '#335f79' }}>
                    <div className={styles.columnCopyright} style={{ color: 'white' }}>
                        <h6>Forether</h6>
                        <p>Copyrigth 2021</p>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterLayout;