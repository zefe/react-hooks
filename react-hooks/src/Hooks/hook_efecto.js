import React, { Fragment, useState, useEffect } from 'react'

function Efecto() {
    const [count, setCount] = useState(0)
    //similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        //actualiza el titulo el documento usando la Browser Api
        document.title = `You clicked ${count} times`;
    });

    return (
        <Fragment>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}
            >
                Change title
            </button>
        </Fragment>
    )
}

export default Efecto