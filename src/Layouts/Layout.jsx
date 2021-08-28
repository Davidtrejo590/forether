import { Component } from 'react';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';

class Layout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <HeaderLayout data={this.props.data}></HeaderLayout>
                </div>

                <div className="row p-5" style={{ backgroundColor: ' #abebc6 ' }}>
                    {this.props.children}
                </div>

                <div className="row">
                    <FooterLayout></FooterLayout>
                </div>

            </div>
        );
    }
}


export default Layout;