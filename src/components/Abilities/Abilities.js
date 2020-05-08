import React from 'react';


const Abilities = ({ races, classes, customAbilities, characterSheet, spells}) => {
        console.log(spells, "look here!")
    return (
                <React.Fragment>

                   <div className="secondary-header">
                        <h1>Abilities</h1>
                </div>

                <div className="race-class-abilities bgb">
                        <div className="heading-bar">
                                <h2>Race Abilities</h2>
                        </div>
                         {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  races[0].specialTraits.map(function(trait) {
                                        let x = [
                                                <h4>{trait.name}</h4>,
                                                <p>{trait.description}</p>
                                              ]

                                              console.log(x)
                                        
                                      console.log(trait)
                                      console.log(trait.name)


   return x
                                        })} 
                       
                </div>
                <div className="spells bgb">
                        <div className="heading-bar">
                                <h2>Spells</h2>
                        </div>
                        {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  spells[0].apaspells.map(function(spell) {
                                        let x = [
                                                <h4>{spell.spellName}</h4>,
                                                <h5> Spell Points: {spell.spellPoints}</h5>,
                                                <p>{spell.spellDescription}</p>
                                              ]

                                              console.log(x)
                                        
                                      console.log(spells)
                                      console.log(spell.name)


   return x
                                        })} 

                </div>
                <div className="item-abilities bgb">
                        <div className="heading-bar">
                                <h2>Class Abilities</h2>
                        </div>
                        {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  classes[0].abilities.map(function(classes) {
                                        let x = [
                                                <h4>{classes.name}</h4>,
                                                <h5>Available at Level {classes.level}</h5>,
                                                <p>{classes.description}</p>
                                              ]

                                              console.log(x)
                                        
                                      console.log(classes)
                                      console.log(classes.name)


   return x
                                        })} 
                </div>
                <div className="other-abilities bgb">
                        <div className="heading-bar">
                                <h2>Other Abilities</h2>
                        </div>
                        {/* {
                                  customAbilities[0].map(function(ability) {
                                        let x = [
                                                <h4>{ability.name}</h4>,
                                                <h5>Available at Level {ability.level}</h5>,
                                                <p>{ability.description}</p>
                                              ]

                                              console.log(x)
                                        
                                      console.log(ability)
                                      console.log(ability.name)


   return x
                                        })} */}

                </div> 
                     
 </React.Fragment>
        
    );
}



export default Abilities;