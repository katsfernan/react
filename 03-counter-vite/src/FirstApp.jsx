// import { Fragment } from 'react'
import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola mundo',
    title: 'Fernando'
}

const convierteMessage = ({message, title}) => `message ${message} and author: ${title}`

export const FirstApp = ({ title, subTitle }) => {

    return (
        // <Fragment>
        //     <h1>Hola Mundo</h1>
        //     <p>Soy un subtitulo</p>
        // </Fragment>
        <>
            <h1 data-testid = 'test-title'>{ title }</h1>
            <h2>{ subTitle }</h2>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired

}

FirstApp.defaultProps = {
    // title: 'No hay ningun titulo',
    subTitle: 'No hay ningun subtitulo'
}
