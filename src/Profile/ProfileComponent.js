import React from 'react';
import PropTypes from 'prop-types'

function ProfileComponent(props) {
    return(
        <div>
            {props.FullName}
            {props.bio}
            {props.profession}
        </div>
)    
}

ProfileComponent.defaultProps = {
    FullName: "name"
}
ProfileComponent.propTypes = {
    FullName:  PropTypes.string.isRequired,
    profession:  PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
}

export default ProfileComponent;
