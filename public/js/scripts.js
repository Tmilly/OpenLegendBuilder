var name;

tippy.setDefaults({
    arrow: true,
    allowHTML: true
})

tippy(document.getElementById('characterName'), {content: '<h3>A heroic name</h3><p style="text-align:left;">Be sure to check with your GM to see if they have any particular setting in mind. Phil the Fighter would feel quite out of place next to Therilas Windcaster and Gorion Skullcleaver.</p>'});
tippy(document.getElementById('characterRace'), {content: '<h3>Your race</h3><p style="text-align:left;">Your decision of race is limited only by your imagination, the setting, and the constraints provided by your GM. A typical fantasy campaign might feature dwarves, elves, halflings, celestials, and dragon-blooded. If you are playing in a futuristic space opera on the fringes of the galaxy, your GM might have several alien races to choose from. Some campaigns, such as a mystery of Lovecraftian horror, might allow only for regular old humans. Really, though, as long as it is approved by your GM, you can play anything you would like, whether that’s a psionic humanoid tiger, a 3-inch tall pixie, or anything in between.</p>'});
tippy(document.getElementById('characterSize'), {content: '<h3>Your size</h3><p style="text-align:left;">As part of deciding your race, you should also choose your size: small, medium, or large. A medium character is roughly the size of an average human. Small creatures range from about 2 - 4 feet in height, while large creatures are about 7 - 10 feet tall. A large creature occupies a 10’x10’ square in combat and has a 10’ reach (see Chapter 7: Combat for details). The GM may assign advantage or disadvantage during situations in which your size is relevant. For example, small creatures may gain advantage on rolls to hide and receive disadvantage on rolls to kick down a door. Likewise, large creatures might suffer disadvantage on attack rolls when fighting in confined spaces but gain advantage on rolls to intimidate smaller creatures.</p><p>At the GM’s discretion, you may choose to be even smaller or larger than the listed sizes. A large creature’s reach is always equal to the length of its base. So, a giant with a 15’x15’ base would have a 15’ reach. All creatures always have at least a 5’ reach.</p>'});
tippy(document.getElementById('physicalTrait'), {content: '<h3>Two exceptional physical traits</h3><p style="text-align:left;">Think of the first two features that other characters notice when they see you. Do your eyes glow red when you are angry? Are you seven feet tall? Is your hair a rainbow hue?</p>'});
tippy(document.getElementById('socialTrait'), {content: '<h3>Two defining social traits</h3><p style="text-align:left;">Maybe you stutter when you’re nervous. Maybe you don’t trust anyone until they’ve proven themselves to you. Or, perhaps, you are a winsome bard who almost always talks in sing-song. Your two social traits should be characteristics that others will learn shortly after getting to know you.</p>'});
tippy(document.getElementById('characterSecret'), {content: '<h3>A secret</h3><p style="text-align:left;">Your secret is something that other characters probably won’t find out about until they’ve gotten to know you quite well. It’s also a seed for great adventure that the GM can weave into the campaign.</p>'});

function increaseValue(input, cost){    
    //Increase Score
    var value = parseInt(document.getElementById(input).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    if(value > 5){value = 5};
    document.getElementById(input).value = value;    
    
    //Update Cost   
    updateCost(value, cost);   
}

function decreaseValue(input, cost){    
    var value = parseInt(document.getElementById(input).value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if(value < 0){value = 0};
    document.getElementById(input).value = value;

    //Update Cost   
    updateCost(value, cost);
}

function updateCost(value, cost){
    //Update Cost   
    var costNum;

    switch(value){
        case 0:
            costNum = "0";            
            break;
        case 1:
            costNum = "1";
            break;
        case 2:
            costNum = "3";
            break;
        case 3:
            costNum = "6";
            break;
        case 4:
            costNum = "10";
            break;
        case 5:
            costNum = "15";
            break;
    }

    document.getElementById(cost).innerHTML = costNum;
}

function updatePointsInvested(){
    //add up cost of all attributes
    //update points invested
}

function updatePointsAvailable(){
    //subtract points invested from 40
    //update points available
    //stop user from increasing value on any other attributes
}

