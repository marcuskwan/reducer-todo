import React from 'react'
import PropTypes from 'prop-types'

function Form(props) {
    return (
        <div>
            <form>
                <input name="todo" placeholder="todo" />
                <button>add</button>
            </form>
        </div>
    )
}

Form.propTypes = {

}

export default Form
