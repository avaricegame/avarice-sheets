import React from 'react';

const Navbar = () => {
    return (
        <nav>
        <ul class="navigation">
                
                <a href="index.html" class="active">
                        <li>Gameplay</li>
                </a>
                <a href="inventory.html">
                        <li>Inventory</li>
                </a>
                <a href="stats.html">
                        <li>Stats</li>
                </a>
                <a href="abilities.html">
                        <li>Abilities</li>
                </a>
                <a href="info.html">
                        <li>Info</li>
                </a>
                <a href="messages.html">
                        <li>Messages</li>
                </a>
                <a href="notes.html">
                        <li>Notes</li>
                </a>
        </ul>
</nav> 
    );
}

export default Navbar