function saveBasicInfo() {
  const character = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    species: document.getElementById("species").value
    };

    localStorage.setItem("currentCharacter", JSON.stringify(character));
    alert("Character Saved!");
}

function loadBasicInfo() {
    const saved = JSON.parse(localStorage.getItem("currentCharacter"));
    if (saved) {
        document.getElementById("firstName").value = saved.firstName || "";
        document.getElementById("lastName").value = saved.lastName || "";
        document.getElementById("age").value = saved.age || "";
        document.getElementById("gender").value = saved.gender || "";
        document.getElementById("species").value = saved.species || ""; 
        document.getElementById("occupation").value = saved.occupation || "";
        document.getElementById("homeland").value = saved.location || "";
    }
}

function saveAppearance() {
    let character = JSON.parse(localStorage.getItem("currentCharacter"));

    //Update appearance properties
    character.appearance = {
        hairColor: document.getElementById("hairColor").value,
        eyeColor: document.getElementById("eyeColor").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        clothingStyle: document.getElementById("clothingStyle").value
    };

    localStorage.setItem("currentCharacter", JSON.stringify(character));
    alert("Appearance Saved!");
}

function loadAppearance() {
    const saved = JSON.parse(localStorage.getItem("currentCharacter"));
    if (saved && saved.appearance) {
        document.getElementById("hairColor").value = saved.appearance.hairColor || "";
        document.getElementById("eyeColor").value = saved.appearance.eyeColor || "";
        document.getElementById("height").value = saved.appearance.height || "";
        document.getElementById("weight").value = saved.appearance.weight || "";
        document.getElementById("clothingStyle").value = saved.appearance.clothingStyle || ""; 
    }
}

function savePersonality() {
    let character = JSON.parse(localStorage.getItem("currentCharacter"));

    character.personality = {
        traits: document.getElementById("traits").value,
        likes: document.getElementById("likes").value,
        dislikes: document.getElementById("dislikes").value,
        strengths: document.getElementById("strengths").value,
        weaknesses: document.getElementById("weaknesses").value,
        hobbies: document.getElementById("hobbies").value,
        fears: document.getElementById("fears").value,
        motivations: document.getElementById("motivations").value,
        goals: document.getElementById("goals").value,
        secrets: document.getElementById("secrets").value
    };

    localStorage.setItem("currentCharacter", JSON.stringify(character));
    alert("Personality Saved!");
}

function loadPersonality() {
    const saved = JSON.parse(localStorage.getItem("currentCharacter"));
    if (saved && saved.personality) {
        document.getElementById("traits").value = saved.personality.traits || "";
        document.getElementById("likes").value = saved.personality.likes || "";
        document.getElementById("dislikes").value = saved.personality.dislikes || "";
        document.getElementById("strengths").value = saved.personality.strengths || "";
        document.getElementById("weaknesses").value = saved.personality.weaknesses || "";
        document.getElementById("hobbies").value = saved.personality.hobbies || ""; 
        document.getElementById("fears").value = saved.personality.fears || ""; 
        document.getElementById("motivations").value = saved.personality.motivations || ""; 
        document.getElementById("goals").value = saved.personality.goals || ""; 
        document.getElementById("secrets").value = saved.personality.secrets || ""; 
    }
}

function saveBackground() {
    let character = JSON.parse(localStorage.getItem("currentCharacter"));

    character.background = {
        backstory: document.getElementById("backstory").value,
        history: document.getElementById("history").value,
        significantEvents: document.getElementById("significantEvents").value,
        family: document.getElementById("family").value,
        relationships: document.getElementById("relationships").value
    };

    localStorage.setItem("currentCharacter", JSON.stringify(character));
    alert("Background Saved!");
}

function loadBackground() {
    const saved = JSON.parse(localStorage.getItem("currentCharacter"));
    if (saved && saved.background) {
        document.getElementById("backstory").value = saved.background.backstory || "";
        document.getElementById("history").value = saved.background.history || "";
        document.getElementById("significantEvents").value = saved.background.significantEvents || "";
        document.getElementById("family").value = saved.background.family || ""; 
        document.getElementById("relationships").value = saved.background.relationships || ""; 
    }
}

function saveAbilities() {
    let character = JSON.parse(localStorage.get("currentCharacter"));

    character.abilities = {
        abilities:document.getElementById("abilities").value,
        skills:document.getElementById("skills").value,
        specialskills:document.getElementById("specialSkills").value,
        trainedskills:document.getElementById("trainedSkills").value,
        combatskills:document.getElementById("combatSkills").value,
        magicskills:document.getElementById("magic").value,
        craftingskills:document.getElementById("craftingSkills").value,
        powers:document.getElementById("powers").value
    };

    localStorage.setItem("currentCharacter", JSON.stringify(character));
    alert("Abilities Saved!");
}

function loadAbilities() {
    const saved = JSON.parse(localStorage.getItem("currentCharacter"));
    if (saved && saved.abilities) {
        document.getElementById("abilities").value = saved.abilities.abilities || "";
        document.getElementById("skills").value = saved.abilities.skills || "";
        document.getElementById("specialSkills").value = saved.abilities.specialskills || "";
        document.getElementById("trainedSkills").value = saved.abilities.trainedskills || ""; 
        document.getElementById("combatSkills").value = saved.abilities.combatskills || ""; 
        document.getElementById("magic").value = saved.abilities.magicskills || ""; 
        document.getElementById("craftingSkills").value = saved.abilities.craftingskills || ""; 
        document.getElementById("powers").value = saved.abilities.powers || ""; 
    }
}

function saveMisc() {
    let character = JSON.parse(localStorage.getItem("currentCharacter"));

    character.misc = {
        inspirations: document.getElementById("inspirations").value,
        notes: document.getElementById("notes").value,
        quotes: document.getElementById("quotes").value
    };

    localStorage.setItem("currentCharacter", JSON.stringify(character));
    alert("Miscellaneous Saved!");
}

function loadMisc() {
    const saved = JSON.parse(localStorage.getItem("currentCharacter"));
    if (saved && saved.misc) {
        document.getElementById("inspirations").value = saved.misc.inspirations || "";
        document.getElementById("notes").value = saved.misc.notes || "";
        document.getElementById("quotes").value = saved.misc.quotes || ""; 
    }
}

function openTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add("active");
    }
}

window.onload = function () {
    openTab('basic');
    loadBasicInfo();
    loadAppearance();
    loadPersonality();
    loadBackground();
    loadAbilities();
    loadMisc();
}