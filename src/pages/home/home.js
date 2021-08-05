import React from 'react';

export default class HomePage extends React.Component {

    static path = '/';
    
    render() {
        return (
// напишем что-нибудь, чтобы увидеть правильно ли все загружается
            <div>
                <div className='alert alert-success'>Hi</div>
            </div>
        );
    }
}
