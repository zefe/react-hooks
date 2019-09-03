import React, { Fragment, useState } from 'react'

function Contador() {
    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <p>Your clicked {count} times </p>
            <button
                onClick={() => setCount(count + 1)}
            >
                sum +1
            </button>
            <button
                onClick={() => setCount(count - 1)}
            >
                rest -1
            </button>
        </Fragment>
    )
}

export default Contador