import React from "react"

function About() {
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">About &amp; Help</h1>
      </div>
      <div className="page-container">
        <div className="cw__100">
          <h2 className="heading">About Avarice Character Sheets</h2>
          <div className="cw__container">
            <p>********All headers will be accordian openers to not overwhelm readers with text********</p>
            <h3 className="item-container__subheading">What is an Avarice Character Sheet?</h3>
            <p>An Avarice character sheet is a place where you can keep track of your Avarice character as you play. It automagically calculates things for you and helps you play the game faster and easier with less set up. You can connect your character sheet to a Campaign Sheet (created by your Game Master), which allows you to participate in a campaign and missions with your team. When you connect your character sheet, you give some control and viewing permisions to your Game Master.</p>
          </div>
        </div>
        <div className="cw__50">
          <h2 className="heading">Gameplay Actions</h2>
          <div className="cw__container">
            <h3 className="item-container__subheading">Attack</h3>
            <p>When you choose the Attack action you will be prompted to choose a weapon. Note that only equipped weapons appear in this list.</p>
            <p>
              If you cannot find a weapon you know you have, go to the Inventory page and make sure it is equipped (note that equipping something takes one action during combat phases... <a>see all rules here</a>). After you choose your weapon, you may attack.
            </p>
            <p>The success or failure of your D20 roll is dependent on your Ranged or Melee skills (depending on the weapon). Your proficiency is determined by the skill associated with your chosen weapons proficiency. Proficiencies multiply your damage done by their value.</p>
            <h3 className="item-container__subheading">Make a Skill Check</h3>
            <p>You make a skill check any time your GM requests you to do so. There are 10 possible skills that you can roll for (Strength, Constitution, Academic Intelligence, Technical Intelligence, Reflex, Speed, Speech, Performance, Ranged Combat, and Melee Combat).</p>
            <p>When you roll, your success is dependent on the difficulty of the task you are trying to accomplish, and how leveled up you are in that skill (see chart below). The GM determines the difficulty of the task.</p>
            <p>If you fail, you do not complete the task, but if you succeed, you do, and you earn one Skill Token for the skill you checked. Skill Tokens are explained below. Also note that making a Skill Check uses one Energy Point for that skill, which is also explained below.</p>
            <h3 className="item-container__subheading">Use an Item</h3>
            <p>When you choose Use an Item action you will need to choose an item. Such as with Attacking, you must have the item equipped before you can use it. Choosing an item will bring up its details, then it is up to you to finish the action. You will often need to perform a Skill Check in order to use items, but occasionally will not have to.</p>
            <h3 className="item-container__subheading">Use an Ability</h3>
            <p>Use an Ability action allows you to choose an ability to perform. You can select an ability to view its details, and will have to make a Skill Check to use it (occasionally, as with items, abilities do not require a skill check, but most do).</p>
            <h3 className="item-container__subheading">Use a Thing</h3>
            <p>Use a Thing action is a very simple action. Selecting is allows you to use it. There will be an option to 'deplete' or 'use up' the thing if it is depletable, otherwise, you can follow the instructions and close the popup.</p>
            <h3 className="item-container__subheading">Equip and Unequip</h3>
            <p>Equipping and Unequiping weapons, wearables, and items takes one action during combat phases. Choosing this action will take you to the Inventory page, where you can equip yourself as needed. More information on this will be listed under the Inventory Page help.</p>
            <h3 className="item-container__subheading">Roll Die</h3>
            <p>There are a number of situations unaccounted for that may require you to roll a die, therefore we have provided you a way to easily roll a D4, D6, D8, D10, D12, D20, D60, D80, D100, and a custom, any sided die.</p>
            <h3 className="item-container__subheading">Take a Rest</h3>
            <p>Taking a Rest replenishes your Hit Points and Energy Points. If you take short rest, you replenish half of your hit points and half of your Energy Points (rounded down). If you take a Long Rest, you replenish all of your Hit Points and all of your Energy Points.</p>

            <hr className="hg__hr" />
            <div style={{ width: "100%", height: "50rem", backgroundColor: "lightgray", display: "flex", alignItems: "center", justifyContent: "center" }}>SKILL CHECK SUCCESS/FAILURE CHART</div>
            <hr className="hg__hr" />
            <p>
              To learn more about Avarice, visit{" "}
              <a href="https://avarice-website.netlify.app/" rel="noopener noreferrer" target="_blank">
                our official website.
              </a>
            </p>
            <p>
              To read more in depth Gamelay rules, visit{" "}
              <a href="https://avarice-website.netlify.app/" rel="noopener noreferrer" target="_blank">
                our official sites rules page.
              </a>
            </p>
          </div>
        </div>
        <div className="cw__50">
          <h2 className="heading">Help By Page</h2>
          <div className="cw__container">
            <h3 className="item-container__subheading">Gameplay</h3>
            <p>Gameplay is the page you will probably spend the most time on during an active mission. You can manage your money, perform actions, see previous actions and rolls, and keep track of your energy points on this page.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Hit Points</h3>
            <p>Hit Points represent your health. They are calculated based off your Constitution skill, plus any armour that you are wearing. You start with a base of 10 hit points, and 5 additional points are added each time you level up your Constitution.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Actions</h3>
            <p>Actions are actions you can take during the game. During a combat phase, an actions would take one actions (hence the name). During other game times, the actions serve as a reminder of your possible choices, but they don't fully represent everything you could possibly do.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Notifications</h3>
            <p>Anytime you character sheet is edited or used in any way, a notification will appear in this section, as well as temporarily appear in the bottom left of the screen. This allows you to keep a log of your rolls and what you have done allowing for smoother gameplay. These notifcations will clear out if the browser is closed or refreshed.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Energy Points and Rests</h3>
            <p>Energy points keep track of your energy between rests during the campaign. You start of with 3 energy points per skill (but 6 for ranged and melee), but when a skill is upgraded you get an additionial energy point. Making a check for a skill (D20 roll) uses one Energy Point. Energy Points are replenshed during long rests and short rests. Long rests replenish all Energy Points, and short rests replenish half (rounded down).</p>
            <p>When you have used all your Energy Points and have none left, you can still make checks (D20 roll), but for each check beyond the last one you temporarily go down 1 skill level (and any success you have does not earn you a Skill Token). Be careful! This makes it easy to fail.</p>

            <h3 className="item-container__subheading">Inventory</h3>
            <p>The Inventory page is where you can keep track of what Weapons, Items, and Wearables you have equipped, your money total, and the contents of your S.U.R.O.N.I.S. (i.e. your weapons, wearables, items, and things). You can also create, edit and delete your Inventory items on this page.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Equipping Weapons, Items, and Wearables</h3>
            <p>There are two facets to equipping. Wearables is the first, and Weapons and Items is the second. The Wearables you have equipped have a certain amount of weapon holsters and items slots, which determine how many weapons and items you can have equipped.</p>
            <p>
              Wearables are equipped to a body area, depending on the type of wearable it is (i.e. a helmet goes on your head). For <a href="#">more information on Wearables and body Areas</a> visit our website. Naturally, you can only have one wearable equipped to each body area available. Certain Wearables may require a certain level with a certain skill in order to be equipped as well.
            </p>
            <p>
              Weapons and Items, as stated above, need Weapon holsters and Item slots, respectively, in order to be equipped. Certain weapons and items will take up certain numbers of holsters and slots, so that is something to watch out for. If you do not have enough holsters or slots, you cannot equip the weapon or item. You can still use it, but taking something out of your S.U.R.O.N.I.S. during a combat phase takes one entire action. Read more <a href="#">rules about equipment and inventory</a> on our site.
            </p>
            <p></p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Money</h3>
            <p>It is simple to keep track of your gold by using the Pay money button or Recieve money button respectively, when you sell, steal, or discover loot.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">S.U.R.O.N.I.S.</h3>
            <p>S.U.R.O.N.I.S stands for Spacially Unaware Rucksack of Nearly Infinite Space. As the name implies, you can keep any number or size of items in your rucksack no problem. It is biologically coded to your character, so nobody can take anything out of it except for you. Your S.U.R.O.N.I.S carried your Weapons, Wearables, Items, and Things.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Weapons, Items, Wearables, and Things</h3>
            <p>Weapons are anything you use to attack with, and Wearables are anything that you would wear on your person. Those two are fairly straight forward. It is good to note the difference between Items and Things, though, as they are a bit less straightforward</p>
            <p>
              Items are equipable and take up 'Item Slots.' They will have some form of unique ability or effect when you use them. (i.e. a Magic Coin, a Spell Book, etc. Things do not have special abilities and are not equippable. Some examples of what would qualify as Things is a messkit, survival kit, rope, a compass (unless it's a magic compass) and so on. Read more about <a href="#">the differences between Items and Things</a> on our website.
            </p>

            <h3 className="item-container__subheading">Stats</h3>
            <p>Your stats page is where you can keep track of your level, excellence chips, skill level, and skill tokens.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Leveling Up</h3>
            <p>You level up at the end of a mission (or whenever your DM tells you to). When you level up you get to choose a new ability to upgrade or learn from your ability tree.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Excellence Chips</h3>
            <p>Excelence chips are earned at your Game Master discretion. They are typically given out when you perform a fantastical feat or something crazy awesome, but your Game Master can assign any standards they wish for how hard it is to earn them. Excellence chips can be cashed in whenever you would like for an immediate NAT D20 roll. Use them wisely!</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Skills and Skill Tokens</h3>
            <p>
              There are 10 Skills in Avarice. Strength, Constitution, Academic Intelligence, Technical Intelligence, Reflex, Speed, Speech, Performance, Ranged Combat, and Melee Combat. Any 'action' or 'feat' that you want to accomplish would fall under one of these categories. See a list of <a href="#">what falls under each category</a> on our website.
            </p>
            <p>
              Your skill level with each of the 10 skills is one of 6 options: Terrible, Bad, Normal, Good, Great, or Fantastic. Your level with the skill, along with whatever the difficulty of the action you are trying to make, determines what you need to roll in order to succeed. For example, if you were trying to lift a heavy boulder and had Normal strength, you would need to roll above a 15. See the chart on the right, or <a href="#">view the detailed chart</a> on our website.
            </p>
            <p>If you don't roll high enough, you fail, if you do roll high enough, you succeed (how well you succeed or bad you fail is up to your GM's discretion). If you succeed, you earn a Skill Token. Three Skill tokens in a particular skill will allow you to level up one step in that skill (i.e. from Bad to Normal).</p>
            <p>Using a Skill is called Making a Skill Check. Making a Skill Check uses one Energy Point. You start with three energy points and get an additional one each time you level up the skill. More about Energy Points and their use is written above under Gameplay and Energy Points.</p>

            <h3 className="item-container__subheading">Abilities</h3>
            <p>The Abilities tab is where you can go to view all of your current, usable abilities (the column on the right side) and your Ability Tree (more on the ability tree below). You can also make custom abilities for your character, as determined by your GM.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Abilities Tree</h3>
            <p>The Abilities Tree shows you what abilities you will have the option of choosing on your next level up. When you level up you can choose one ability to upgrade or add to your character. There are three columns, and each column has 4 abilities. Each ability can be upgraded from Power I to Power V.</p>
            <p>When you upgrade or learn a new ability, you get one point in that column. After earning three points in a column, you unlock the next new Ability as a choice. You will also always be able to choose to upgrade your preexsiting ablities one power level.</p>
            <p>Below the list of choices available on your next level up, you will see a tree of the abilities you have chosen on previous level ups. This allows you to keep careful track.</p>

            <h3 className="item-container__subheading">Info</h3>
            <p>Under the Info tab you will be able to keep track of information such as your Race and Class descriptions and details, your character description, character background, character log, and campaign details. You cannot edit character information once you create the character sheet, but you can create, edit and delete character logs to keep track of any changes that may occur in your character (see below).</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Character and Master Logs</h3>
            <p>Character Logs allow you to write a journal of your adventures so you can remember key points and fun things that have happened as you play Avarice. Master Logs are not written by you, but are written by the Game Master. All players can see the Master Log, but only you can see your Character Log.</p>

            <h3 className="item-container__subheading item-container__subheading--lighter">Joining a Campaign</h3>
            <p>If you have not joined a campaign, the master log and Campaign Details section will appear with a "Join a Campaign" button. To join a campaign, click the button and follow the prompts on the form. You will need to know your CharacterSheet ID and the ID of the Campaign you wish to join.</p>

            <h3 className="item-container__subheading">Messages</h3>
            <p>Messages page is currently under construction. When finished, it will allow you to message members of your campaign, either personally, or as a whole, or in specific groups.</p>

            <h3 className="item-container__subheading">Notes</h3>
            <p>
              On this page you can create, edit and delete notes. Your notes are for your own personal use to put down ideas, reminders, plans, or whatever comes to your mind. The Notes are formatted using Markdown, which is a lightweight Markup language, which is a fairly simple document annotation syntax.{" "}
              <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">
                Learn the syntax of markup
              </a>
              , and you will be able to have fine grain controll over your notes formatting.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
