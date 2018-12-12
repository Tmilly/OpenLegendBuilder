//Move all to external JS file instead of include

//globals
var name;
var incValue = true;
var attributes = {agility:{score:0, cost:0}, fortitude:{score:0, cost:0}, might:{score:0, cost:0}, deception:{score:0, cost:0}, presence:{score:0, cost:0}, persuasion:{score:0, cost:0}, learning:{score:0, cost:0}, logic:{score:0, cost:0}, perception:{score:0, cost:0}, will:{score:0, cost:0}, alteration:{score:0, cost:0}, creation:{score:0, cost:0}, energy:{score:0, cost:0}, entropy:{score:0, cost:0}, influence:{score:0, cost:0}, movement:{score:0, cost:0}, prescience:{score:0, cost:0}, protection:{score:0, cost:0}};

//tooltips
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
    //increase score
    var value = parseInt(document.getElementById(input).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    if(value > 5){value = 5};
    //update attribute score & cost  
    updateAttributesObject(input, value, cost);
           
}

function decreaseValue(input, cost){    
    //decrease score
    var value = parseInt(document.getElementById(input).value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if(value < 0){value = 0};
    //update attribute score & cost
    updateAttributesObject(input, value, cost);
       
}

function updateAttributesObject(input, value, cost){      
    //calculate cost
    switch(value){
        case 0:
            costNum = 0;            
            break;
        case 1:
            costNum = 1;
            break;
        case 2:
            costNum = 3;
            break;
        case 3:
            costNum = 6;
            break;
        case 4:
            costNum = 10;
            break;
        case 5:
            costNum = 15;
            break;
    }
    
    //update value and cost in attributes object
    switch(input){
        case "agi_score":
            attributes.agility.score = value; 
            attributes.agility.cost = costNum;           
            break;
        case "fort_score":
            attributes.fortitude.score = value;
            attributes.fortitude.cost = costNum; 
            break;
        case "might_score":
            attributes.might.score = value;
            attributes.might.cost = costNum; 
            break;
        case "dec_score":
            attributes.deception.score = value;
            attributes.deception.cost = costNum; 
            break;
        case "pres_score":
            attributes.presence.score = value;
            attributes.presence.cost = costNum; 
            break;
        case "pers_score":
            attributes.persuasion.score = value;
            attributes.persuasion.cost = costNum; 
            break;
        case "learn_score":
            attributes.learning.score = value;
            attributes.learning.cost = costNum; 
            break;
        case "logic_score":
            attributes.logic.score = value;
            attributes.logic.cost = costNum; 
            break;
        case "perc_score":
            attributes.perception.score = value;
            attributes.perception.cost = costNum; 
            break;
        case "will_score":
            attributes.will.score = value;
            attributes.will.cost = costNum; 
            break;
        case "alt_score":
            attributes.alteration.score = value;
            attributes.alteration.cost = costNum; 
            break;
        case "creat_score":
            attributes.creation.score = value;
            attributes.creation.cost = costNum; 
            break;
        case "energy_score":
            attributes.energy.score = value;
            attributes.energy.cost = costNum; 
            break;
        case "ent_score":
            attributes.entropy.score = value;
            attributes.entropy.cost = costNum; 
            break;
        case "infl_score":
            attributes.influence.score = value;
            attributes.influence.cost = costNum; 
            break;
        case "move_score":
            attributes.movement.score = value;
            attributes.movement.cost = costNum; 
            break;
        case "presc_score":
            attributes.prescience.score = value;
            attributes.prescience.cost = costNum; 
            break;
        case "prot_score":
            attributes.protection.score = value;
            attributes.protection.cost = costNum; 
            break;
    }  
    //update form
    updatePointsValues(input, cost)
}

function updatePointsValues(input, cost){
    //add up cost of all attributes
    var costNum = attributes.agility.cost + attributes.fortitude.cost + attributes.might.cost + attributes.deception.cost + attributes.presence.cost + attributes.persuasion.cost + attributes.learning.cost + attributes.logic.cost + attributes.perception.cost + attributes.will.cost + attributes.alteration.cost + attributes.creation.cost + attributes.energy.cost + attributes.entropy.cost + attributes.influence.cost + attributes.movement.cost + attributes.prescience.cost + attributes.protection.cost;
    var availablePoints = 40 - costNum; 
    
    //only update form if update does not set points available to negative value
    if(availablePoints >= 0){
        document.getElementById('pointsInvested').innerHTML = costNum;
        document.getElementById('pointsAvailable').innerHTML = availablePoints;        
        
        switch(input){
            case "agi_score":
                document.getElementById(input).value = attributes.agility.score; 
                document.getElementById(cost).innerHTML = attributes.agility.cost;           
                break;
            case "fort_score":
                document.getElementById(input).value = attributes.fortitude.score;
                document.getElementById(cost).innerHTML = attributes.fortitude.cost; 
                break;
            case "might_score":
                document.getElementById(input).value = attributes.might.score;
                document.getElementById(cost).innerHTML = attributes.might.cost; 
                break;
            case "dec_score":
                document.getElementById(input).value = attributes.deception.score;
                document.getElementById(cost).innerHTML = attributes.deception.cost; 
                break;
            case "pres_score":
                document.getElementById(input).value = attributes.presence.score;
                document.getElementById(cost).innerHTML = attributes.presence.cost; 
                break;
            case "pers_score":
                document.getElementById(input).value = attributes.persuasion.score;
                document.getElementById(cost).innerHTML = attributes.persuasion.cost; 
                break;
            case "learn_score":
                document.getElementById(input).value = attributes.learning.score;
                document.getElementById(cost).innerHTML = attributes.learning.cost; 
                break;
            case "logic_score":
                document.getElementById(input).value =attributes.logic.score;
                document.getElementById(cost).innerHTML = attributes.logic.cost; 
                break;
            case "perc_score":
                document.getElementById(input).value =attributes.perception.score;
                document.getElementById(cost).innerHTML = attributes.perception.cost; 
                break;
            case "will_score":
                document.getElementById(input).value = attributes.will.score;
                document.getElementById(cost).innerHTML = attributes.will.cost; 
                break;
            case "alt_score":
                document.getElementById(input).value = attributes.alteration.score;
                document.getElementById(cost).innerHTML = attributes.alteration.cost; 
                break;
            case "creat_score":
                document.getElementById(input).value = attributes.creation.score;
                document.getElementById(cost).innerHTML = attributes.creation.cost; 
                break;
            case "energy_score":
                document.getElementById(input).value = attributes.energy.score;
                document.getElementById(cost).innerHTML = attributes.energy.cost; 
                break;
            case "ent_score":
                document.getElementById(input).value = attributes.entropy.score;
                document.getElementById(cost).innerHTML = attributes.entropy.cost; 
                break;
            case "infl_score":
                document.getElementById(input).value = attributes.influence.score;
                document.getElementById(cost).innerHTML = attributes.influence.cost; 
                break;
            case "move_score":
                document.getElementById(input).value = attributes.movement.score;
                document.getElementById(cost).innerHTML = attributes.movement.cost; 
                break;
            case "presc_score":
                document.getElementById(input).value = attributes.prescience.score;
                document.getElementById(cost).innerHTML = attributes.prescience.cost; 
                break;
            case "prot_score":
                document.getElementById(input).value = attributes.protection.score;
                document.getElementById(cost).innerHTML = attributes.protection.cost; 
                break;
        }
    }    
}

