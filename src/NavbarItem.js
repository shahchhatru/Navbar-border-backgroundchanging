import React from 'react';

const NavbarItem=(props)=>{
    return (
        <div class="NavbarItem">
            <div className='gradBack'></div>
            <button>
            {props.name}
            </button>
               
        </div>
    )
}

export default NavbarItem;