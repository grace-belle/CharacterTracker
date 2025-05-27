let characters = (() => {
    try {
        const parsed = JSON.parse(localStorage.getItem("characters"));
        return (parsed && typeof parsed === "object" && !Array.isArray(parsed)) ? parsed : {};
    } catch {
        return {};
    }
})();
let currentCharacterId = null;
let formChanged = false;

function updateCharacterList() {
    const list = document.getElementById("character-list");
    list.innerHTML = "";
    console.log("Updating character list", characters);
    for (const id in characters) {
        const li = document.createElement("li");
        li.textContent = characters[id].firstName || "Unnamed Character";
        console.log("Character ID:", id, "Name:", li.textContent);
        li.onclick = () => loadCharacter(id);
        if (id == currentCharacterId) li.classList.add("active");
        list.appendChild(li);
    }
}

function createNewCharacter() {
    const firstname = prompt("Enter character's name:");

    if (!firstname) {
        alert("Character name cannot be empty.");
        return;
    }

    const id = "char_" + Date.now();
    currentCharacterId = id;

    characters[id] = {
        firstName: firstname.trim(),
        lastName: "",
        title: "",
        age: "",
        gender: "",
        species: "",
        occupation: "",
        homeland: "",
        appearance: {
            hairColor: "",
            eyeColor: "",
            height: "",
            weight: "",
            clothingStyle: ""
        },
        personality: {
            traits: "",
            likes: "",
            dislikes: "",
            hobbies: "",
            strengths: "",
            weaknesses: "",
            motivations: "",
            goals: "",
            fears: "",
            secrets: ""
        },
        background: {
            backstory: "",
            history: "",
            significantEvents: "",
            childhood: "",
            education: "",
            family: "",
            relationships: ""
        },
        abilities: {
            abilities: "",
            skills: "",
            specialSkills: "",
            trainedSkills: "",
            combatSkills: "",
            magicSkills: "",
            craftingSkills: "",
            powers: ""
        },
        misc: {
            inspirations: "",
            quotes: "",
            notes: "",
            tags: ""
        }
    };


    loadCharacter(id);
    updateCharacterList();
}

function loadCharacter(id) {
    if (currentCharacterId !== null && formChanged) {
        saveCharacter();
        formChanged = false;
    }

    currentCharacterId = id;
    const char = characters[id];
    if (!char) return;

    

    // Populate all forms
  document.getElementById("firstName").value = char.firstName || '';
  document.getElementById("lastName").value = char.lastName || '';
  document.getElementById("title").value = char.title || '';
  document.getElementById("age").value = char.age || '';
  document.getElementById("gender").value = char.gender || '';
  document.getElementById("species").value = char.species || '';
  document.getElementById("occupation").value = char.occupation || '';
  document.getElementById("homeland").value = char.homeland || '';

  const a = char.appearance || {};
  document.getElementById("hairColor").value = a.hairColor || '';
  document.getElementById("eyeColor").value = a.eyeColor || '';
  document.getElementById("height").value = a.height || '';
  document.getElementById("weight").value = a.weight || '';
  document.getElementById("clothingStyle").value = a.clothingStyle || '';

  const p = char.personality || {};
  document.getElementById("traits").value = p.traits || '';
  document.getElementById("likes").value = p.likes || '';
  document.getElementById("dislikes").value = p.dislikes || '';
  document.getElementById("hobbies").value = p.hobbies || '';
  document.getElementById("strengths").value = p.strengths || '';
  document.getElementById("weaknesses").value = p.weaknesses || '';
  document.getElementById("motivations").value = p.motivations || '';
  document.getElementById("goals").value = p.goals || '';
  document.getElementById("fears").value = p.fears || '';
  document.getElementById("secrets").value = p.secrets || '';

  const b = char.background || {};
  document.getElementById("backstory").value = b.backstory || '';
  document.getElementById("history").value = b.history || '';
  document.getElementById("significantEvents").value = b.significantEvents || '';
  document.getElementById("childhood").value = b.childhood || '';
  document.getElementById("education").value = b.education || '';
  document.getElementById("family").value = b.family || '';
  document.getElementById("relationships").value = b.relationships || '';

  const ab = char.abilities || {};
  document.getElementById("abilities").value = ab.abilities || '';
  document.getElementById("skills").value = ab.skills || '';
  document.getElementById("specialSkills").value = ab.specialSkills || '';
  document.getElementById("trainedSkills").value = ab.trainedSkills || '';
  document.getElementById("combatSkills").value = ab.combatSkills || '';
  document.getElementById("magicSkills").value = ab.magicSkills || '';
  document.getElementById("craftingSkills").value = ab.craftingSkills || '';
  document.getElementById("powers").value = ab.powers || '';

  const m = char.misc || {};
  document.getElementById("inspirations").value = m.inspirations || '';
  document.getElementById("quotes").value = m.quotes || '';
  document.getElementById("notes").value = m.notes || '';
  document.getElementById("tags").value = m.tags || '';

  updateCharacterList();
  localStorage.setItem("lastCharacterId", id);
}

function saveCharacter() {
    try{
        if (currentCharacterId) {
        characters[currentCharacterId] = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            title: document.getElementById("title").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            species: document.getElementById("species").value,
            occupation: document.getElementById("occupation").value,
            homeland: document.getElementById("homeland").value,
            appearance: {
                hairColor: document.getElementById("hairColor").value,
                eyeColor: document.getElementById("eyeColor").value,
                height: document.getElementById("height").value,
                weight: document.getElementById("weight").value,
                clothingStyle: document.getElementById("clothingStyle").value
            },
            personality: {
                traits: document.getElementById("traits").value,
                likes: document.getElementById("likes").value,
                dislikes: document.getElementById("dislikes").value,
                hobbies: document.getElementById("hobbies").value,
                strengths: document.getElementById("strengths").value,
                weaknesses: document.getElementById("weaknesses").value,
                motivations: document.getElementById("motivations").value,
                goals: document.getElementById("goals").value,
                fears: document.getElementById("fears").value,
                secrets: document.getElementById("secrets").value
            },
            background: {
                backstory: document.getElementById("backstory").value,
                history: document.getElementById("history").value,
                significantEvents: document.getElementById("significantEvents").value,
                childhood: document.getElementById("childhood").value,
                education: document.getElementById("education").value,
                family: document.getElementById("family").value,
                relationships: document.getElementById("relationships").value
            },
            abilities: {
                abilities: document.getElementById("abilities").value,
                skills: document.getElementById("skills").value,
                specialSkills: document.getElementById("specialSkills").value,
                trainedSkills: document.getElementById("trainedSkills").value,
                combatSkills: document.getElementById("combatSkills").value,
                magicSkills: document.getElementById("magicSkills").value,
                powers: document.getElementById("powers").value
            },
            misc: {
                inspirations: document.getElementById("inspirations").value,
                quotes: document.getElementById("quotes").value,
                notes: document.getElementById("notes").value,
                tags: document.getElementById("tags").value
            }
        };
    }
    localStorage.setItem("characters", JSON.stringify(characters));
    updateCharacterList();
    } catch (error) {
        console.error("Error saving character:", error);
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

window.addEventListener("beforeunload", function () {
    saveCharacter();
});

window.onload = function () {
    openTab('basic');
    updateCharacterList();

    const lastCharacterId = localStorage.getItem("lastCharacterId");
    if (lastCharacterId && characters[lastCharacterId]) {
        loadCharacter(lastCharacterId);
    }
    
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            formChanged = true;
        });
    });
}