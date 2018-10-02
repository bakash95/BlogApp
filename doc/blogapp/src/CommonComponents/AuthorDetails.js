import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

const AuthorDetails = ({ authors }) => (
    <tr>
        <td><NavLink className={`btn btn-primary read-more-button`} to={routes.author.replace(':authorname', authors)}>{authors}</NavLink></td>
    </tr>
);

export default AuthorDetails;