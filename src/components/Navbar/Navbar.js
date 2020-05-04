import React from 'react';

const Navbar = ( { onRouteChange }) => {
    return (
        <nav>
        <ul className="navigation">
                
                <a onClick={() => onRouteChange('gameplay')}>
                        <li>Gameplay</li>
                </a>
                <a onClick={() => onRouteChange('inventory')}>
                        <li>Inventory</li>
                </a>
                <a onClick={() => onRouteChange('stats')}>
                        <li>Stats</li>
                </a>
                <a onClick={() => onRouteChange('abilities')}>
                        <li>Abilities</li>
                </a>
                <a onClick={() => onRouteChange('info')}>
                        <li>Info</li>
                </a>
                <a onClick={() => onRouteChange('messages')}>
                        <li>Messages</li>
                </a>
                <a onClick={() => onRouteChange('notes')}>
                        <li>Notes</li>
                </a>
        </ul>
</nav> 
    );
}

export default Navbar