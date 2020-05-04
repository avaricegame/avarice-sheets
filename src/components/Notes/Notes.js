import React from 'react';


const Notes = () => {
    return (
                <React.Fragment>
                    
                    <div className="secondary-header">
                        <h1>Notes</h1>
                </div>

                <div className="all-notes bgb">
                        <div className="heading-bar">
                                <h2>All Notes</h2>
                        </div>

                        <button id="createNewNoteButton">Create a New Note</button>
                        <form id="createNewNoteForm">
                                <fieldset>
                                        <label>Note Title:</label>
                                        <input type="text" />
                                        <textarea></textarea>
                                        <input type="submit" className="submit-button" value="Save Note" />
                                </fieldset>
                        </form>
                        <ul>
                                <a href="">
                                        <li>Note #1</li>
                                </a>
                                <a href="">
                                        <li>Note #2</li>
                                </a>
                                <a href="">
                                        <li>Note #3</li>
                                </a>
                                <a href="">
                                        <li>Note #4</li>
                                </a>
                                <a href="">
                                        <li>Note #5</li>
                                </a>
                                <a href="">
                                        <li>Note #6</li>
                                </a>
                        </ul>
                </div>
                <div className="notes bgb">
                        <div className="heading-bar">
                                <h2>Title of the Note that is Open</h2>
                        </div>
                        <h4>Heading for the note</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque
                                viverra mauris. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean.
                                Auctor eu augue ut lectus arcu bibendum. Faucibus purus in massa tempor nec. Cras ornare
                                arcu dui vivamus arcu felis. Bibendum neque egestas congue quisque egestas diam in.
                                Volutpat diam ut venenatis tellus in metus vulputate eu. Dignissim cras tincidunt
                                lobortis feugiat vivamus. Iaculis urna id volutpat lacus laoreet non. Placerat in
                                egestas erat imperdiet sed. Non sodales neque sodales ut etiam sit amet nisl purus.
                        </p>
                        <h4>Heading for the note</h4>
                        <p>
                                Platea dictumst quisque sagittis purus sit. Amet risus nullam eget felis eget. Interdum
                                velit laoreet id donec ultrices tincidunt arcu. Risus nec feugiat in fermentum posuere
                                urna nec tincidunt praesent. Tellus integer feugiat scelerisque varius morbi enim. Nulla
                                porttitor massa id neque aliquam vestibulum morbi. Donec pretium vulputate sapien nec
                                sagittis aliquam. Gravida in fermentum et sollicitudin ac orci phasellus. Sed felis eget
                                velit aliquet sagittis. Est ultricies integer quis auctor. Porta non pulvinar neque
                                laoreet suspendisse interdum. Tellus pellentesque eu tincidunt tortor aliquam nulla
                                facilisi cras. Bibendum ut tristique et egestas quis. Tempus urna et pharetra pharetra.
</p>
                                
                </div>

 </React.Fragment>
        
    );
}



export default Notes;