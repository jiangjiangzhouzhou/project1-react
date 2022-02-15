import React from 'react';

const NavItem = ({link, style, page}) =>(
    <a href={link} className={style}>{page}</a>
)

export default NavItem