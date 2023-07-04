generateJSON("Mod");

function generateJSON(target, generateItemObjects = true, generateUpgradeChains = true) {
  var jsonObjectArrayMod = [
    {
      id: "Bronze_Spear",
      name: "Bronze Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Bronze_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2,
      tier: "bronze",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 16,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 16,
        },
        {
          key: "meleeStrengthBonus",
          value: 16,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:spear_acc"],
    },
    {
      id: "Iron_Spear",
      name: "Iron Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Iron_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 21,
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 24,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 24,
        },
        {
          key: "meleeStrengthBonus",
          value: 25,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:spear_acc"],
    },
    {
      id: "Steel_Spear",
      name: "Steel Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Steel_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25,
      tier: "steel",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 38,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 38,
        },
        {
          key: "meleeStrengthBonus",
          value: 37,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:spear_acc"],
    },
    {
      id: "Mithril_Spear",
      name: "Mithril Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Mithril_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 182,
      tier: "mithril",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 43,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 43,
        },
        {
          key: "meleeStrengthBonus",
          value: 53,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:spear_acc"],
    },
    {
      id: "Adamant_Spear",
      name: "Adamant Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Adamant_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 252,
      tier: "adamant",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 62,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 62,
        },
        {
          key: "meleeStrengthBonus",
          value: 70,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:spear_acc"],
    },
    {
      id: "Rune_Spear",
      name: "Rune Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Rune_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 430,
      tier: "rune",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 84,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 84,
        },
        {
          key: "meleeStrengthBonus",
          value: 124,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:spear_acc"],
    },
    {
      id: "Dragon_Spear",
      name: "Dragon Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Dragon_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2250,
      tier: "dragon",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 113,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 113,
        },
        {
          key: "meleeStrengthBonus",
          value: 165,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:spear_acc"],
    },
    {
      id: "Black_Spear",
      name: "Black Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Black_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25,
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 10,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 40,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 40,
        },
        {
          key: "meleeStrengthBonus",
          value: 44,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Ice_Spear",
      name: "Ice Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/spears/Ice_Spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 430,
      tier: "ice",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3400,
        },
        {
          key: "stabAttackBonus",
          value: 65,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: 65,
        },
        {
          key: "meleeStrengthBonus",
          value: 122,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:Frozen_Wind"],
    },
    {
      id: "Bullwhip",
      name: "Bullwhip",
      category: "Combat",
      type: "Weapon",
      media: "assets/whips/Bullwhip.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 5,
      validSlots: ["Weapon"],
      occupiesSlots: ["Quiver"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
        {
          key: "rangedAttackBonus",
          value: 5,
        },
        {
          key: "rangedStrengthBonus",
          value: 20,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "None",
      specialAttacks: ["Armament_Expanded:whip_slow"],
    },
    {
      id: "Hardened_Bullwhip",
      name: "Hardened Bullwhip",
      category: "Combat",
      type: "Weapon",
      media: "assets/whips/Hardened_Bullwhip.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      validSlots: ["Weapon"],
      occupiesSlots: ["Quiver"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
        {
          key: "rangedAttackBonus",
          value: 10,
        },
        {
          key: "rangedStrengthBonus",
          value: 25,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "None",
      specialAttacks: ["Armament_Expanded:whip_slow"],
    },
    {
      id: "Green_Dragonwhip",
      name: "Green Dragonwhip",
      category: "Combat",
      type: "Weapon",
      media: "assets/whips/Green_Dragonwhip.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 15,
      validSlots: ["Weapon"],
      occupiesSlots: ["Quiver"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
        {
          key: "rangedAttackBonus",
          value: 16,
        },
        {
          key: "rangedStrengthBonus",
          value: 30,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "None",
      specialAttacks: ["Armament_Expanded:whip_slow"],
    },
    {
      id: "Blue_Dragonwhip",
      name: "Blue Dragonwhip",
      category: "Combat",
      type: "Weapon",
      media: "assets/whips/Blue_Dragonwhip.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 40,
      validSlots: ["Weapon"],
      occupiesSlots: ["Quiver"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
        {
          key: "rangedAttackBonus",
          value: 23,
        },
        {
          key: "rangedStrengthBonus",
          value: 35,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "None",
      specialAttacks: ["Armament_Expanded:whip_slow"],
    },
    {
      id: "Red_Dragonwhip",
      name: "Red Dragonwhip",
      category: "Combat",
      type: "Weapon",
      media: "assets/whips/Red_Dragonwhip.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 85,
      validSlots: ["Weapon"],
      occupiesSlots: ["Quiver"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
        {
          key: "rangedAttackBonus",
          value: 41,
        },
        {
          key: "rangedStrengthBonus",
          value: 40,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "None",
      specialAttacks: ["Armament_Expanded:whip_slow"],
    },
    {
      id: "Black_Dragonwhip",
      name: "Black Dragonwhip",
      category: "Combat",
      type: "Weapon",
      media: "assets/whips/Black_Dragonwhip.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 315,
      validSlots: ["Weapon"],
      occupiesSlots: ["Quiver"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 50,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
        {
          key: "rangedAttackBonus",
          value: 61,
        },
        {
          key: "rangedStrengthBonus",
          value: 45,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "None",
      specialAttacks: ["Armament_Expanded:whip_slow"],
    },
    {
      id: "Elder_Dragonwhip",
      name: "Elder Dragonwhip",
      category: "Combat",
      type: "Weapon",
      media: "assets/whips/Elder_Dragonwhip.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 500,
      validSlots: ["Weapon"],
      occupiesSlots: ["Quiver"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
        {
          key: "rangedAttackBonus",
          value: 68,
        },
        {
          key: "rangedStrengthBonus",
          value: 50,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "None",
      specialAttacks: ["Armament_Expanded:whip_slow"],
    },
  ];

  var jsonObjectArrayDemo = [
    {
      id: "Air_Battlestaff",
      name: "Air Battlestaff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/air_battlestaff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 560,
      customDescription: "Reduces the Air Rune cost of Magic Spells by 5 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 15,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 15,
        },
        {
          key: "magicDamageBonus",
          value: 10,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Air_Rune",
          quantity: 5,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Water_Battlestaff",
      name: "Water Battlestaff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/water_battlestaff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 630,
      customDescription: "Reduces the Water Rune cost of Magic Spells by 5 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 15,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 15,
        },
        {
          key: "magicDamageBonus",
          value: 10,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Water_Rune",
          quantity: 5,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Earth_Battlestaff",
      name: "Earth Battlestaff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/earth_battlestaff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 690,
      customDescription: "Reduces the Earth Rune cost of Magic Spells by 5 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 15,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 15,
        },
        {
          key: "magicDamageBonus",
          value: 10,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Earth_Rune",
          quantity: 5,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Fire_Battlestaff",
      name: "Fire Battlestaff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/fire_battlestaff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 730,
      customDescription: "Reduces the Fire Rune cost of Magic Spells by 5 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 15,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 15,
        },
        {
          key: "magicDamageBonus",
          value: 10,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Fire_Rune",
          quantity: 5,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Mystic_Air_Staff",
      name: "Mystic Air Staff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/mystic_air_staff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 6300,
      customDescription: "Reduces the Air Rune cost of Magic Spells by 7 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 23,
        },
        {
          key: "magicDamageBonus",
          value: 20,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 23,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Air_Rune",
          quantity: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Magic_Wand_Basic",
      name: "Magic Wand (Basic)",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/weapon_wand_standard.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 18,
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 12,
        },
        {
          key: "magicDefenceBonus",
          value: 12,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Magic_Wand_Powerful",
      name: "Magic Wand (Powerful)",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/weapon_wand_powerful.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 18500,
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 21,
        },
        {
          key: "magicDefenceBonus",
          value: 21,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Magic_Wand_Elite",
      name: "Magic Wand (Elite)",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/weapon_wand_elite.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 122400,
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 28,
        },
        {
          key: "magicDamageBonus",
          value: 12,
        },
        {
          key: "magicDefenceBonus",
          value: 28,
        },
      ],
      specialAttacks: ["melvorD:BruteForce"],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Bronze_Dagger",
      name: "Bronze Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_bronze.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 1,
      tier: "bronze",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 7,
        },
        {
          key: "slashAttackBonus",
          value: 2,
        },
        {
          key: "blockAttackBonus",
          value: 7,
        },
        {
          key: "meleeStrengthBonus",
          value: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Bronze_Sword",
      name: "Bronze Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_bronze.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 1,
      tier: "bronze",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 9,
        },
        {
          key: "slashAttackBonus",
          value: 2,
        },
        {
          key: "blockAttackBonus",
          value: 1,
        },
        {
          key: "meleeStrengthBonus",
          value: 5,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Bronze_Battleaxe",
      name: "Bronze Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_bronze.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2,
      tier: "bronze",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 3,
        },
        {
          key: "blockAttackBonus",
          value: 3,
        },
        {
          key: "meleeStrengthBonus",
          value: 16,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Bronze_2H_Sword",
      name: "Bronze 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_bronze.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2,
      tier: "bronze",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 18,
        },
        {
          key: "blockAttackBonus",
          value: 18,
        },
        {
          key: "meleeStrengthBonus",
          value: 18,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Iron_Dagger",
      name: "Iron Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_iron.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 8,
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 8,
        },
        {
          key: "slashAttackBonus",
          value: 3,
        },
        {
          key: "blockAttackBonus",
          value: 8,
        },
        {
          key: "meleeStrengthBonus",
          value: 4,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Iron_Sword",
      name: "Iron Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_iron.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 8,
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 11,
        },
        {
          key: "slashAttackBonus",
          value: 3,
        },
        {
          key: "blockAttackBonus",
          value: 2,
        },
        {
          key: "meleeStrengthBonus",
          value: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Iron_Battleaxe",
      name: "Iron Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_iron.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 21,
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 4,
        },
        {
          key: "blockAttackBonus",
          value: 4,
        },
        {
          key: "meleeStrengthBonus",
          value: 23,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Iron_2H_Sword",
      name: "Iron 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_iron.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 21,
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 26,
        },
        {
          key: "blockAttackBonus",
          value: 26,
        },
        {
          key: "meleeStrengthBonus",
          value: 25,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Steel_Dagger",
      name: "Steel Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_steel.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      tier: "steel",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 13,
        },
        {
          key: "slashAttackBonus",
          value: 4,
        },
        {
          key: "blockAttackBonus",
          value: 13,
        },
        {
          key: "meleeStrengthBonus",
          value: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Steel_Sword",
      name: "Steel Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_steel.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      tier: "steel",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 16,
        },
        {
          key: "slashAttackBonus",
          value: 6,
        },
        {
          key: "blockAttackBonus",
          value: 4,
        },
        {
          key: "meleeStrengthBonus",
          value: 12,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Steel_Battleaxe",
      name: "Steel Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_steel.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25,
      tier: "steel",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 8,
        },
        {
          key: "blockAttackBonus",
          value: 8,
        },
        {
          key: "meleeStrengthBonus",
          value: 35,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Steel_2H_Sword",
      name: "Steel 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_steel.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25,
      tier: "steel",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 40,
        },
        {
          key: "blockAttackBonus",
          value: 40,
        },
        {
          key: "meleeStrengthBonus",
          value: 39,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Mithril_Dagger",
      name: "Mithril Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_mithril.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 68,
      tier: "mithril",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 18,
        },
        {
          key: "slashAttackBonus",
          value: 5,
        },
        {
          key: "blockAttackBonus",
          value: 18,
        },
        {
          key: "meleeStrengthBonus",
          value: 10,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Mithril_Sword",
      name: "Mithril Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_mithril.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 68,
      tier: "mithril",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 20,
        },
        {
          key: "slashAttackBonus",
          value: 8,
        },
        {
          key: "blockAttackBonus",
          value: 6,
        },
        {
          key: "meleeStrengthBonus",
          value: 17,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Mithril_Battleaxe",
      name: "Mithril Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_mithril.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 179,
      tier: "mithril",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 11,
        },
        {
          key: "blockAttackBonus",
          value: 11,
        },
        {
          key: "meleeStrengthBonus",
          value: 51,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Mithril_2H_Sword",
      name: "Mithril 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_mithril.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 182,
      tier: "mithril",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 45,
        },
        {
          key: "blockAttackBonus",
          value: 45,
        },
        {
          key: "meleeStrengthBonus",
          value: 55,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Adamant_Dagger",
      name: "Adamant Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_adamant.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 80,
      tier: "adamant",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 22,
        },
        {
          key: "slashAttackBonus",
          value: 8,
        },
        {
          key: "blockAttackBonus",
          value: 22,
        },
        {
          key: "meleeStrengthBonus",
          value: 14,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Adamant_Sword",
      name: "Adamant Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_adamant.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 85,
      tier: "adamant",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 27,
        },
        {
          key: "slashAttackBonus",
          value: 13,
        },
        {
          key: "blockAttackBonus",
          value: 9,
        },
        {
          key: "meleeStrengthBonus",
          value: 24,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Adamant_Battleaxe",
      name: "Adamant Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_adamant.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 242,
      tier: "adamant",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 16,
        },
        {
          key: "blockAttackBonus",
          value: 16,
        },
        {
          key: "meleeStrengthBonus",
          value: 72,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Adamant_2H_Sword",
      name: "Adamant 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_adamant.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 252,
      tier: "adamant",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 64,
        },
        {
          key: "blockAttackBonus",
          value: 64,
        },
        {
          key: "meleeStrengthBonus",
          value: 79,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Rune_Dagger",
      name: "Rune Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_rune.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 140,
      tier: "rune",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 35,
        },
        {
          key: "slashAttackBonus",
          value: 12,
        },
        {
          key: "blockAttackBonus",
          value: 35,
        },
        {
          key: "meleeStrengthBonus",
          value: 24,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Rune_Sword",
      name: "Rune Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_rune.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 145,
      tier: "rune",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 40,
        },
        {
          key: "slashAttackBonus",
          value: 19,
        },
        {
          key: "blockAttackBonus",
          value: 15,
        },
        {
          key: "meleeStrengthBonus",
          value: 39,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Rune_Battleaxe",
      name: "Rune Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_rune.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 401,
      tier: "rune",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 24,
        },
        {
          key: "blockAttackBonus",
          value: 24,
        },
        {
          key: "meleeStrengthBonus",
          value: 112,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Rune_2H_Sword",
      name: "Rune 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_rune.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 430,
      tier: "rune",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 86,
        },
        {
          key: "blockAttackBonus",
          value: 86,
        },
        {
          key: "meleeStrengthBonus",
          value: 126,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Dragon_Dagger",
      name: "Dragon Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_dragon.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 645,
      tier: "dragon",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 50,
        },
        {
          key: "slashAttackBonus",
          value: 25,
        },
        {
          key: "blockAttackBonus",
          value: 50,
        },
        {
          key: "meleeStrengthBonus",
          value: 40,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Dragon_Sword",
      name: "Dragon Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_dragon.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 665,
      tier: "dragon",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 67,
        },
        {
          key: "slashAttackBonus",
          value: 41,
        },
        {
          key: "blockAttackBonus",
          value: 26,
        },
        {
          key: "meleeStrengthBonus",
          value: 63,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Dragon_Battleaxe",
      name: "Dragon Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_dragon.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2044,
      tier: "dragon",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 35,
        },
        {
          key: "blockAttackBonus",
          value: 35,
        },
        {
          key: "meleeStrengthBonus",
          value: 149,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Dragon_2H_Sword",
      name: "Dragon 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_dragon.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2250,
      tier: "dragon",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 115,
        },
        {
          key: "blockAttackBonus",
          value: 115,
        },
        {
          key: "meleeStrengthBonus",
          value: 167,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Black_Dagger",
      name: "Black Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_black.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      tier: "black",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 10,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 15,
        },
        {
          key: "slashAttackBonus",
          value: 5,
        },
        {
          key: "blockAttackBonus",
          value: 15,
        },
        {
          key: "meleeStrengthBonus",
          value: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Black_Sword",
      name: "Black Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_black.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      tier: "black",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 10,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 18,
        },
        {
          key: "slashAttackBonus",
          value: 7,
        },
        {
          key: "blockAttackBonus",
          value: 5,
        },
        {
          key: "meleeStrengthBonus",
          value: 12,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Black_Battleaxe",
      name: "Black Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_black.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25,
      tier: "black",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 10,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 10,
        },
        {
          key: "blockAttackBonus",
          value: 10,
        },
        {
          key: "meleeStrengthBonus",
          value: 42,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Black_2H_Sword",
      name: "Black 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_black.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25,
      tier: "black",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 10,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 42,
        },
        {
          key: "blockAttackBonus",
          value: 42,
        },
        {
          key: "meleeStrengthBonus",
          value: 46,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Ice_Dagger",
      name: "Ice Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_dagger_ice.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 140,
      tier: "ice",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 23,
        },
        {
          key: "slashAttackBonus",
          value: 12,
        },
        {
          key: "blockAttackBonus",
          value: 23,
        },
        {
          key: "meleeStrengthBonus",
          value: 22,
        },
      ],
      specialAttacks: ["melvorD:FrozenWind"],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:dagger_crit"],
    },
    {
      id: "Ice_Sword",
      name: "Ice Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_ice.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 145,
      tier: "ice",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 36,
        },
        {
          key: "slashAttackBonus",
          value: 25,
        },
        {
          key: "blockAttackBonus",
          value: 36,
        },
        {
          key: "meleeStrengthBonus",
          value: 37,
        },
      ],
      specialAttacks: ["melvorD:FrozenWind"],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:sword_dr_boost"],
    },
    {
      id: "Ice_Battleaxe",
      name: "Ice Battleaxe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_battleaxe_ice.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 401,
      tier: "ice",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3100,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 23,
        },
        {
          key: "blockAttackBonus",
          value: 23,
        },
        {
          key: "meleeStrengthBonus",
          value: 109,
        },
      ],
      specialAttacks: ["melvorD:FrozenWind"],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:axe_double"],
    },
    {
      id: "Ice_2h_Sword",
      name: "Ice 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_ice.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 430,
      tier: "ice",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 67,
        },
        {
          key: "blockAttackBonus",
          value: 67,
        },
        {
          key: "meleeStrengthBonus",
          value: 122,
        },
      ],
      specialAttacks: ["melvorD:FrozenWind"],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:2h_smash"],
    },
    {
      id: "Normal_Shortbow",
      name: "Normal Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_normal.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 5,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "normal",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 5,
        },
        {
          key: "rangedStrengthBonus",
          value: 20,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
    {
      id: "Oak_Shortbow",
      name: "Oak Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_oak.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "oak",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 10,
        },
        {
          key: "rangedStrengthBonus",
          value: 25,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
    {
      id: "Maple_Shortbow",
      name: "Maple Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_maple.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 40,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "maple",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 23,
        },
        {
          key: "rangedStrengthBonus",
          value: 35,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
    {
      id: "Yew_Shortbow",
      name: "Yew Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_yew.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 85,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "yew",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 41,
        },
        {
          key: "rangedStrengthBonus",
          value: 40,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
    {
      id: "Magic_Shortbow",
      name: "Magic Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_magic.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 315,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "magic",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 50,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 61,
        },
        {
          key: "rangedStrengthBonus",
          value: 45,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
    {
      id: "Maple_Longbow",
      name: "Maple Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_maple.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 40,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "maple",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 35,
        },
        {
          key: "rangedStrengthBonus",
          value: 70,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:longbow_shot"],
    },
    {
      id: "Magic_Longbow",
      name: "Magic Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_magic.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 315,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "magic",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 50,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 83,
        },
        {
          key: "rangedStrengthBonus",
          value: 90,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:longbow_shot"],
    },
    {
      id: "Ice_Shortbow",
      name: "Ice Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_ice.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 315,
      tier: "ice",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 60,
        },
        {
          key: "rangedStrengthBonus",
          value: 37,
        },
      ],
      specialAttacks: ["melvorD:FrozenShot"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
    },
    {
      id: "Ice_Longbow",
      name: "Ice Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_ice.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 315,
      tier: "ice",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 81,
        },
        {
          key: "rangedStrengthBonus",
          value: 75,
        },
      ],
      specialAttacks: ["melvorD:FrozenWind"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
    },
    {
      id: "Redwood_Longbow",
      name: "Redwood Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_redwood.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 20,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "redwood",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 93,
        },
        {
          key: "rangedStrengthBonus",
          value: 100,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
    {
      id: "Bronze_Scimitar",
      name: "Bronze Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_bronze.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 1,
      tier: "bronze",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 1,
        },
        {
          key: "slashAttackBonus",
          value: 7,
        },
        {
          key: "blockAttackBonus",
          value: 1,
        },
        {
          key: "meleeStrengthBonus",
          value: 6,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
    {
      id: "Iron_Scimitar",
      name: "Iron Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_iron.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 8,
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 2,
        },
        {
          key: "slashAttackBonus",
          value: 10,
        },
        {
          key: "blockAttackBonus",
          value: 2,
        },
        {
          key: "meleeStrengthBonus",
          value: 9,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
    {
      id: "Steel_Scimitar",
      name: "Steel Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_steel.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      tier: "steel",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 3,
        },
        {
          key: "slashAttackBonus",
          value: 15,
        },
        {
          key: "blockAttackBonus",
          value: 3,
        },
        {
          key: "meleeStrengthBonus",
          value: 14,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
    {
      id: "Black_Scimitar",
      name: "Black Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_black.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      tier: "black",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 10,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 4,
        },
        {
          key: "slashAttackBonus",
          value: 19,
        },
        {
          key: "blockAttackBonus",
          value: 4,
        },
        {
          key: "meleeStrengthBonus",
          value: 14,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
    {
      id: "Mithril_Scimitar",
      name: "Mithril Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_mithril.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 68,
      tier: "mithril",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 5,
        },
        {
          key: "slashAttackBonus",
          value: 21,
        },
        {
          key: "blockAttackBonus",
          value: 5,
        },
        {
          key: "meleeStrengthBonus",
          value: 20,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
    {
      id: "Adamant_Scimitar",
      name: "Adamant Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_adamant.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 85,
      tier: "adamant",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 6,
        },
        {
          key: "slashAttackBonus",
          value: 29,
        },
        {
          key: "blockAttackBonus",
          value: 6,
        },
        {
          key: "meleeStrengthBonus",
          value: 28,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
    {
      id: "Rune_Scimitar",
      name: "Rune Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_rune.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 145,
      tier: "rune",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 7,
        },
        {
          key: "slashAttackBonus",
          value: 45,
        },
        {
          key: "blockAttackBonus",
          value: 7,
        },
        {
          key: "meleeStrengthBonus",
          value: 44,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
    {
      id: "Dragon_Scimitar",
      name: "Dragon Scimitar",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_scimitar_dragon.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 505,
      tier: "dragon",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 8,
        },
        {
          key: "slashAttackBonus",
          value: 67,
        },
        {
          key: "blockAttackBonus",
          value: 8,
        },
        {
          key: "meleeStrengthBonus",
          value: 66,
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
      specialAttacks: ["Armament_Expanded:scimitar_fast"],
    },
  ];

  var jsonObjectArrayDemoNamed = [
    {
      id: "Ancient_Longbow",
      name: "Ancient Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_ancient.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 150000,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "ancient",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 85,
        },
        {
          key: "rangedStrengthBonus",
          value: 110,
        },
      ],
      specialAttacks: ["melvorD:PiercingArrow"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
    },

    {
      id: "Ancient_Sword",
      name: "Ancient Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sword_ancient.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 150000,
      customDescription: "If you have 100% Hitpoints, +20% Damage to All Monsters.",
      tier: "ancient",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 72,
        },
        {
          key: "slashAttackBonus",
          value: 24,
        },
        {
          key: "blockAttackBonus",
          value: 28,
        },
        {
          key: "meleeStrengthBonus",
          value: 75,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
      ],
      modifiers: {
        increasedDamageToAllMonsters: 20,
      },
      conditionalModifiers: [
        {
          condition: {
            type: "Hitpoints",
            character: "Player",
            value: 100,
            operator: "<",
          },
          modifiers: {
            decreasedDamageToAllMonsters: 20,
          },
        },
      ],
      specialAttacks: ["melvorD:LifeLeech"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Sunset_Rapier",
      name: "Sunset Rapier",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_sunset_rapier.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 52000,
      customDescription: "Created by Patreon (NewSon)",
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 72,
        },
        {
          key: "slashAttackBonus",
          value: 55,
        },
        {
          key: "blockAttackBonus",
          value: 65,
        },
        {
          key: "meleeStrengthBonus",
          value: 63,
        },
      ],
      specialAttacks: ["melvorD:SunsetStab"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Elerine_Longbow",
      name: "Elerine Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/elerine_longbow.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 15350,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 50,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 83,
        },
        {
          key: "rangedStrengthBonus",
          value: 90,
        },
      ],
      specialAttacks: ["melvorD:OnTheHunt"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
    },
    {
      id: "Elerine_Spear",
      name: "Elerine Spear",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/elerine_spear.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 18900,
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: 86,
        },
        {
          key: "slashAttackBonus",
          value: -4,
        },
        {
          key: "blockAttackBonus",
          value: -4,
        },
        {
          key: "meleeStrengthBonus",
          value: 126,
        },
      ],
      specialAttacks: ["melvorD:Onslaught"],
      itemType: "Weapon",
      attackType: "melee",
    },
  ];

  var jsonObjectArrayFull = [
    {
      id: "Staff_of_Air",
      name: "Staff of Air",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/staff_of_air.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 80,
      customDescription: "Reduces the Air Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 10,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 10,
        },
        {
          key: "magicDamageBonus",
          value: 5,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Air_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Staff_of_Water",
      name: "Staff of Water",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/staff_of_water.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 80,
      customDescription: "Reduces the Water Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 10,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 10,
        },
        {
          key: "magicDamageBonus",
          value: 5,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Water_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Staff_of_Earth",
      name: "Staff of Earth",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/staff_of_earth.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 80,
      customDescription: "Reduces the Earth Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 10,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 10,
        },
        {
          key: "magicDamageBonus",
          value: 5,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Earth_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Staff_of_Fire",
      name: "Staff of Fire",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/staff_of_fire.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 80,
      customDescription: "Reduces the Fire Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 10,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 10,
        },
        {
          key: "magicDamageBonus",
          value: 5,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Fire_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Mystic_Water_Staff",
      name: "Mystic Water Staff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/mystic_water_staff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 6900,
      customDescription: "Reduces the Water Rune cost of Magic Spells by 7 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 23,
        },
        {
          key: "magicDamageBonus",
          value: 20,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 23,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Water_Rune",
          quantity: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Mystic_Earth_Staff",
      name: "Mystic Earth Staff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/mystic_earth_staff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 7500,
      customDescription: "Reduces the Earth Rune cost of Magic Spells by 7 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 23,
        },
        {
          key: "magicDamageBonus",
          value: 20,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 23,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Earth_Rune",
          quantity: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Mystic_Fire_Staff",
      name: "Mystic Fire Staff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/mystic_fire_staff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 8800,
      customDescription: "Reduces the Fire Rune cost of Magic Spells by 7 when equipped as a Weapon.",
      tier: "staff",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 23,
        },
        {
          key: "magicDamageBonus",
          value: 20,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
        {
          key: "magicDefenceBonus",
          value: 23,
        },
      ],
      providedRunes: [
        {
          id: "melvorD:Fire_Rune",
          quantity: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Air_Imbued_Wand",
      name: "Air Imbued Wand",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/weapon_wand_air_imbue.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 135000,
      customDescription: "Reduces the Air Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 32,
        },
        {
          key: "magicDamageBonus",
          value: 18,
        },
        {
          key: "magicDefenceBonus",
          value: 32,
        },
      ],
      specialAttacks: ["melvorD:BruteForce"],
      providedRunes: [
        {
          id: "melvorD:Air_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Water_Imbued_Wand",
      name: "Water Imbued Wand",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/weapon_wand_water_imbue.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 135000,
      customDescription: "Reduces the Water Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 32,
        },
        {
          key: "magicDamageBonus",
          value: 18,
        },
        {
          key: "magicDefenceBonus",
          value: 32,
        },
      ],
      specialAttacks: ["melvorD:BruteForce"],
      providedRunes: [
        {
          id: "melvorD:Water_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Earth_Imbued_Wand",
      name: "Earth Imbued Wand",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/weapon_wand_earth_imbue.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 135000,
      customDescription: "Reduces the Earth Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 32,
        },
        {
          key: "magicDamageBonus",
          value: 18,
        },
        {
          key: "magicDefenceBonus",
          value: 32,
        },
      ],
      specialAttacks: ["melvorD:BruteForce"],
      providedRunes: [
        {
          id: "melvorD:Earth_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Fire_Imbued_Wand",
      name: "Fire Imbued Wand",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/weapon_wand_fire_imbue.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 135000,
      customDescription: "Reduces the Fire Rune cost of Magic Spells by 3 when equipped as a Weapon.",
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 32,
        },
        {
          key: "magicDamageBonus",
          value: 18,
        },
        {
          key: "magicDefenceBonus",
          value: 32,
        },
      ],
      specialAttacks: ["melvorD:BruteForce"],
      providedRunes: [
        {
          id: "melvorD:Fire_Rune",
          quantity: 3,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Bronze_Crossbow",
      name: "Bronze Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_bronze.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 30,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "bronze",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 16,
        },
        {
          key: "rangedStrengthBonus",
          value: 24,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
      specialAttacks: ["Armament_Expanded:crossbow_rapid"],
    },
    {
      id: "Iron_Crossbow",
      name: "Iron Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_iron.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 60,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "iron",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 22,
        },
        {
          key: "rangedStrengthBonus",
          value: 27,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
      specialAttacks: ["Armament_Expanded:crossbow_rapid"],
    },
    {
      id: "Steel_Crossbow",
      name: "Steel Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_steel.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 140,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "steel",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 28,
        },
        {
          key: "rangedStrengthBonus",
          value: 35,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
      specialAttacks: ["Armament_Expanded:crossbow_rapid"],
    },
    {
      id: "Mithril_Crossbow",
      name: "Mithril Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_mithril.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 510,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "mithril",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 34,
        },
        {
          key: "rangedStrengthBonus",
          value: 44,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
      specialAttacks: ["Armament_Expanded:crossbow_rapid"],
    },
    {
      id: "Adamant_Crossbow",
      name: "Adamant Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_adamant.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 750,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "adamant",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 30,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 40,
        },
        {
          key: "rangedStrengthBonus",
          value: 54,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
      specialAttacks: ["Armament_Expanded:crossbow_rapid"],
    },
    {
      id: "Rune_Crossbow",
      name: "Rune Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_rune.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 950,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "rune",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 56,
        },
        {
          key: "rangedStrengthBonus",
          value: 54,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
      specialAttacks: ["Armament_Expanded:crossbow_rapid"],
    },
    {
      id: "Dragon_Crossbow",
      name: "Dragon Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_dragon.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2150,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "dragon",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 65,
        },
        {
          key: "rangedStrengthBonus",
          value: 102,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
      specialAttacks: ["Armament_Expanded:crossbow_rapid"],
    },
    {
      id: "Willow_Shortbow",
      name: "Willow Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_willow.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 15,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "willow",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 16,
        },
        {
          key: "rangedStrengthBonus",
          value: 30,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
    {
      id: "Normal_Longbow",
      name: "Normal Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_normal.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 5,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "normal",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 1,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 10,
        },
        {
          key: "rangedStrengthBonus",
          value: 40,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:longbow_shot"],
    },
    {
      id: "Oak_Longbow",
      name: "Oak Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_oak.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "oak",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 5,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 16,
        },
        {
          key: "rangedStrengthBonus",
          value: 50,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:longbow_shot"],
    },
    {
      id: "Willow_Longbow",
      name: "Willow Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_willow.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 15,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "willow",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 24,
        },
        {
          key: "rangedStrengthBonus",
          value: 60,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:longbow_shot"],
    },
    {
      id: "Yew_Longbow",
      name: "Yew Longbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_longbow_yew.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 85,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "yew",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "rangedAttackBonus",
          value: 56,
        },
        {
          key: "rangedStrengthBonus",
          value: 80,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:longbow_shot"],
    },
    {
      id: "Redwood_Shortbow",
      name: "Redwood Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_shortbow_redwood.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 20,
      tier: "redwood",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 68,
        },
        {
          key: "rangedStrengthBonus",
          value: 50,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
      specialAttacks: ["Armament_Expanded:shortbow_shot"],
    },
  ];

  var jsonObjectArrayFullNamed = [
    {
      id: "Ancient_Crossbow",
      name: "Ancient Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_ancient.svg",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 500000,
      customDescription: "Requires Bolts as Ammunition.",
      tier: "ancient",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 76,
        },
        {
          key: "rangedStrengthBonus",
          value: 132,
        },
      ],
      specialAttacks: ["melvorF:ImpairingShot"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
    },
    {
      id: "Slayer_Crossbow",
      name: "Slayer's Crossbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/weapon_crossbow_slayer.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 75000,
      customDescription:
        "Created by Patreon (Elliott) Gain 33% Ranged Strength Bonus against Slayer Area or Slayer Task Monsters. Requires Bolts as Ammunition.",
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 65,
        },
        {
          key: "rangedStrengthBonus",
          value: 102,
        },
      ],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
    },
    {
      id: "Cloudburst_Staff",
      name: "Cloudburst Staff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/cloudburst_staff.png?2",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 1250000,
      customDescription:
        "+400 Maximum Water Spell Dmg. Reduces the Water Rune cost of Magic Spells by 7 when equipped as a Weapon.",
      mediaAnimation: "assets/media/bank/cloudburst_staff2.gif",
      tier: "god",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 85,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 45,
        },
        {
          key: "meleeDefenceBonus",
          value: 5,
        },
        {
          key: "magicDefenceBonus",
          value: 28,
        },
        {
          key: "magicDamageBonus",
          value: 30,
        },
      ],
      modifiers: {
        increasedMaxWaterSpellDmg: 40,
      },
      specialAttacks: ["melvorF:FreezeRay"],
      providedRunes: [
        {
          id: "melvorD:Water_Rune",
          quantity: 7,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Ancient_2H_Sword",
      name: "Ancient 2H Sword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/weapon_2h_ancient.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 225000,
      tier: "ancient",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 118,
        },
        {
          key: "blockAttackBonus",
          value: 118,
        },
        {
          key: "meleeStrengthBonus",
          value: 201,
        },
        {
          key: "meleeDefenceBonus",
          value: 21,
        },
      ],
      specialAttacks: ["melvorF:CrushingDoubleSlash"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Big_Ron",
      name: "Big ol Ron",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/big_ron.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 1250000,
      customDescription:
        "Created by Patreon (dog18speed) +100% Chance To Double Loot in Combat. For every 2000 base Maximum Hitpoints the enemy has (Capped at 10000): +9% Melee Strength Bonus from Equipment, +3% of Maximum Hit added to Minimum Hit and +1% Damage Reduction. Bonus is doubled if fighting a boss.",
      tier: "god",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 80,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 138,
        },
        {
          key: "blockAttackBonus",
          value: 138,
        },
        {
          key: "meleeStrengthBonus",
          value: 275,
        },
        {
          key: "meleeDefenceBonus",
          value: 21,
        },
      ],
      modifiers: {
        increasedChanceToDoubleLootCombat: 100,
      },
      conditionalModifiers: [
        {
          condition: {
            type: "IsFighting",
            character: "Player",
            inverted: false,
          },
          modifiers: {
            bigRon: 1,
          },
        },
      ],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Twin_Exiles",
      name: "Twin Exiles",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/twin_exiles.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 225000,
      customDescription: "Created by Patreon (Jarose)",
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2000,
        },
        {
          key: "stabAttackBonus",
          value: 71,
        },
        {
          key: "slashAttackBonus",
          value: 71,
        },
        {
          key: "blockAttackBonus",
          value: 71,
        },
        {
          key: "meleeStrengthBonus",
          value: 24,
        },
        {
          key: "meleeDefenceBonus",
          value: 3,
        },
      ],
      specialAttacks: ["melvorF:DualAttack"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Miolite_Sceptre",
      name: "Miolite Sceptre",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/miolite_sceptre.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 6420,
      tier: "miolite",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 50,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 40,
        },
        {
          key: "slashAttackBonus",
          value: 40,
        },
        {
          key: "blockAttackBonus",
          value: 40,
        },
        {
          key: "meleeStrengthBonus",
          value: 44,
        },
      ],
      modifiers: {
        allowAttackAugmentingMagic: 1,
      },
      specialAttacks: ["melvorF:DrowsySpores"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Desert_Sabre",
      name: "Desert Sabre",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/desert_sabre.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 6500,
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 50,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 8,
        },
        {
          key: "slashAttackBonus",
          value: 64,
        },
        {
          key: "blockAttackBonus",
          value: 8,
        },
        {
          key: "meleeStrengthBonus",
          value: 66,
        },
      ],
      specialAttacks: ["melvorF:Quicksand"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Desert_Shortbow",
      name: "Desert Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/desert_shortbow.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 3240,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 50,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 65,
        },
        {
          key: "rangedStrengthBonus",
          value: 50,
        },
      ],
      specialAttacks: ["melvorF:Sandblast"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
    },
    {
      id: "Stormsnap",
      name: "Stormsnap",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/stormsnap.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 1500000,
      customDescription:
        "Created by Patreon (Eusmusia) Strength Bonus and Accuracy Rating scales based on Enemy Magic Level",
      tier: "god",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 80,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
      ],
      specialAttacks: ["melvorF:Stormsnap"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
    },
    {
      id: "Darksteel_Dagger",
      name: "Darksteel Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/darksteel_dagger.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25900,
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 80,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 60,
        },
        {
          key: "slashAttackBonus",
          value: 30,
        },
        {
          key: "blockAttackBonus",
          value: 60,
        },
        {
          key: "meleeStrengthBonus",
          value: 50,
        },
      ],
      specialAttacks: ["melvorF:DeadlyCut"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Sanguine_Blade",
      name: "Sanguine Blade",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/sanguine_blade.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 365000,
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 80,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3600,
        },
        {
          key: "stabAttackBonus",
          value: -4,
        },
        {
          key: "slashAttackBonus",
          value: 124,
        },
        {
          key: "blockAttackBonus",
          value: 124,
        },
        {
          key: "meleeStrengthBonus",
          value: 211,
        },
        {
          key: "meleeDefenceBonus",
          value: 23,
        },
      ],
      specialAttacks: ["melvorF:Rend"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Infernal_Claw",
      name: "Infernal Claw",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/infernal_claw.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2500000,
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 75,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 71,
        },
        {
          key: "slashAttackBonus",
          value: 77,
        },
        {
          key: "blockAttackBonus",
          value: 71,
        },
        {
          key: "meleeStrengthBonus",
          value: 81,
        },
        {
          key: "meleeDefenceBonus",
          value: 39,
        },
      ],
      specialAttacks: ["melvorF:QuadSwipe"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Tidal_Edge",
      name: "Tidal Edge",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/tidal_edge.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 3200000,
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 90,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2400,
        },
        {
          key: "stabAttackBonus",
          value: 89,
        },
        {
          key: "slashAttackBonus",
          value: 120,
        },
        {
          key: "blockAttackBonus",
          value: 89,
        },
        {
          key: "meleeStrengthBonus",
          value: 100,
        },
      ],
      specialAttacks: ["melvorF:TidalWave"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Ocean_Song",
      name: "Ocean Song",
      category: "Combat",
      type: "Magic Wand",
      media: "assets/media/bank/ocean_song.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2600000,
      customDescription: "Reduces the Water Rune cost of Magic Spells by 4 when equipped as a Weapon.",
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 90,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "magicAttackBonus",
          value: 38,
        },
        {
          key: "magicDamageBonus",
          value: 60,
        },
        {
          key: "magicDefenceBonus",
          value: 38,
        },
      ],
      specialAttacks: ["melvorF:OceanSong"],
      providedRunes: [
        {
          id: "melvorD:Water_Rune",
          quantity: 4,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Shockwave",
      name: "Shockwave",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/shockwave.svg?2",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 3400000,
      tier: "misc",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 90,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3200,
        },
        {
          key: "rangedAttackBonus",
          value: 81,
        },
        {
          key: "rangedStrengthBonus",
          value: 142,
        },
      ],
      specialAttacks: ["melvorF:Shockwave"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Bolts",
    },
    {
      id: "War_Axe",
      name: "War Axe",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/war_axe.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 16350,
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 65,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3300,
        },
        {
          key: "stabAttackBonus",
          value: -2,
        },
        {
          key: "slashAttackBonus",
          value: 53,
        },
        {
          key: "blockAttackBonus",
          value: 53,
        },
        {
          key: "meleeStrengthBonus",
          value: 149,
        },
      ],
      specialAttacks: ["melvorF:DoubleEdged"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Warberd",
      name: "Warberd",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/Warberd.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 24300,
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 70,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "stabAttackBonus",
          value: 67,
        },
        {
          key: "slashAttackBonus",
          value: -3,
        },
        {
          key: "blockAttackBonus",
          value: 67,
        },
        {
          key: "meleeStrengthBonus",
          value: 179,
        },
      ],
      specialAttacks: ["melvorF:SwiftAttack"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Natures_Wrath_Staff",
      name: "Nature's Wrath Staff",
      category: "Combat",
      type: "Magic Staff",
      media: "assets/media/bank/natures_wrath_staff.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 110000,
      customDescription:
        "Reduces the Nature Rune cost of spells by 1, and grants access to the Nature's Wrath Spell.  <span class=\"text-warning\">When equipped with Nature's Blessing Ring: +50% Hitpoint Regeneration, +40 Maximum Hitpoints and +30% of Maximum Hit added to Minimum Hit when using Nature spells.",
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 65,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3000,
        },
        {
          key: "magicAttackBonus",
          value: 18,
        },
        {
          key: "magicDefenceBonus",
          value: 18,
        },
        {
          key: "magicDamageBonus",
          value: 6,
        },
      ],
      providedRunes: [
        {
          id: "melvorF:Nature_Rune",
          quantity: 1,
        },
      ],
      itemType: "Weapon",
      attackType: "magic",
    },
    {
      id: "Poisoned_Shortbow",
      name: "Poisoned Shortbow",
      category: "Combat",
      type: "Ranged Weapon",
      media: "assets/media/bank/poisoned_shortbow.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 47650,
      customDescription: "Requires Arrows as Ammunition.",
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "rangedAttackBonus",
          value: 68,
        },
        {
          key: "rangedStrengthBonus",
          value: 50,
        },
      ],
      specialAttacks: ["melvorF:PoisonedHit"],
      itemType: "Weapon",
      attackType: "ranged",
      ammoTypeRequired: "Arrows",
    },
    {
      id: "Poisoned_Dagger",
      name: "Poisoned Dagger",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/poisoned_dagger.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 48500,
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 60,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 50,
        },
        {
          key: "slashAttackBonus",
          value: 25,
        },
        {
          key: "blockAttackBonus",
          value: 50,
        },
        {
          key: "meleeStrengthBonus",
          value: 40,
        },
      ],
      specialAttacks: ["melvorF:PoisonedHit"],
      itemType: "Weapon",
      attackType: "melee",
    },
    {
      id: "Ultima_Godsword",
      name: "Ultima Godsword",
      category: "Combat",
      type: "Weapon",
      media: "assets/media/bank/ultima_godsword.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 25000000,
      tier: "god",
      validSlots: ["Weapon"],
      occupiesSlots: ["Shield"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 90,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Strength",
          level: 90,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 3800,
        },
        {
          key: "stabAttackBonus",
          value: -3,
        },
        {
          key: "slashAttackBonus",
          value: 174,
        },
        {
          key: "blockAttackBonus",
          value: 174,
        },
        {
          key: "meleeStrengthBonus",
          value: 365,
        },
        {
          key: "meleeDefenceBonus",
          value: 30,
        },
        {
          key: "damageReduction",
          value: 8,
        },
      ],
      specialAttacks: ["melvorF:Flurry", "melvorF:IcePrison", "melvorF:CrushingBlow", "melvorF:Infernum"],
      itemType: "Weapon",
      attackType: "melee",
    },
  ];

var  modspace = "Armament_Expanded";
  if (target == "Mod") {

    namespace = "Armament_Expanded";
    jsonObjectTarget = jsonObjectArrayMod;
  } else if (target == "Demo") {

    namespace = "melvorD";
    jsonObjectTarget = jsonObjectArrayDemo;
  } else if (target == "DemoNamed") {

    namespace = "melvorD";
    jsonObjectTarget = jsonObjectArrayDemoNamed;
  } else if (target == "Full") {

    namespace = "melvorF";
    jsonObjectTarget = jsonObjectArrayFull;
  } else if (target == "FullNamed") {

    namespace = "melvorF";
    jsonObjectTarget = jsonObjectArrayFullNamed;
  } else {
    console.log("Invalid generateJSON target.");
    return;
  }

  //Mat Trees
  if (target == "Mod" || target == "Demo" || target == "Full") {
    var appendIDArray = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", "_10"];
    var appendNameArray = [" +1", " +2", " +3", " +4", " +5", " +6", " +7", " +8", " +9", " +10"];
    var upgradeMatArray = [
      "Armament_Expanded:Weaponite_Shard",
      "Armament_Expanded:Weaponite_Shard",
      "Armament_Expanded:Weaponite_Shard",
      "Armament_Expanded:Large_Weaponite_Shard",
      "Armament_Expanded:Large_Weaponite_Shard",
      "Armament_Expanded:Large_Weaponite_Shard",
      "Armament_Expanded:Weaponite_Chunk",
      "Armament_Expanded:Weaponite_Chunk",
      "Armament_Expanded:Weaponite_Chunk",
      "Armament_Expanded:Weaponite_Slab",
    ];
    var upgradeMatCostArray = [2, 4, 6, 2, 4, 6, 2, 4, 6, 1];
    var scalingFactor = 0.1;
  } else {
    var appendIDArray = ["_1", "_2", "_3", "_4", "_5"];
    var appendNameArray = [" +1", " +2", " +3", " +5"];
    var upgradeMatArray = [
      "Armament_Expanded:Shiny_Weaponite",
      "Armament_Expanded:Shiny_Weaponite",
      "Armament_Expanded:Shiny_Weaponite",
      "Armament_Expanded:Shiny_Weaponite",
      "Armament_Expanded:Weaponite_Slab",
    ];
    var upgradeMatCostArray = [1, 2, 4, 8, 1];
    var scalingFactor = 0.2;
  }

  //starting text
  if (generateItemObjects) {
    document.getElementById("item").innerHTML +=
      '{    "$schema": "https://melvoridle.com/assets/schema/gameData.json",    "data": {"items": [';
  }
  if (generateUpgradeChains) {
    document.getElementById("itemUpgrades").innerHTML += '"itemUpgrades": [';
  }

  for (let superindex = 0; superindex < jsonObjectTarget.length; superindex++) {
    var jsonObject = JSON.parse(JSON.stringify(jsonObjectTarget[superindex]));
    //Json Item Objects

    var equipmentStatsDepth = jsonObject.equipmentStats.length;
    if (generateItemObjects) {
      for (let index = 0; index < appendIDArray.length; index++) {
        var jsonObjectCopy = JSON.parse(JSON.stringify(jsonObject));
        jsonObjectCopy.id = jsonObject.id + appendIDArray[index];
        jsonObjectCopy.name = jsonObject.name + appendNameArray[index];
        if (namespace.includes("melvor") && !jsonObject.media.includes("melvor:")) {
          jsonObjectCopy.media = "melvor:" + jsonObject.media;
        }
        for (let subindex = 1; subindex < equipmentStatsDepth; subindex++) {
          jsonObjectCopy.equipmentStats[subindex].value = Math.floor(
            jsonObject.equipmentStats[subindex].value * (1 + scalingFactor * index)
          );
        }
        var jsonStringCopy = JSON.stringify(jsonObjectCopy);
        document.getElementById("item").innerHTML += jsonStringCopy + ", \n";
      }
    }
    //Json Upgrade Chains
    var jsonUpgradeChainObject = {};
    if (generateUpgradeChains) {
      for (let index = 0; index < appendIDArray.length; index++) {
        jsonUpgradeChainObject.upgradedItemID = modspace + ":" + jsonObject.id + appendIDArray[index];
        jsonUpgradeChainObject.gpCost = 0;
        jsonUpgradeChainObject.scCost = index * 100;
        if (index == 0) {
          jsonUpgradeChainObject.itemCosts = [
            {
              id: namespace + ":" + jsonObject.id,
              quantity: 1,
            },
            {
              id: upgradeMatArray[index],
              quantity: upgradeMatCostArray[index],
            },
          ];
          jsonUpgradeChainObject.rootItemIDs = [namespace + ":" + jsonObject.id];
        } else {
          jsonUpgradeChainObject.itemCosts = [
            {
              id: modspace + ":" + jsonObject.id + appendIDArray[index - 1],
              quantity: 1,
            },
            {
              id: upgradeMatArray[index],
              quantity: upgradeMatCostArray[index],
            },
          ];
          jsonUpgradeChainObject.rootItemIDs = [modspace + ":" + jsonObject.id + appendIDArray[index - 1]];
        }

        jsonUpgradeChainObject.isDowngrade = false;

        //Print
        var jsonUpgradeChainString = JSON.stringify(jsonUpgradeChainObject);
        if (superindex == 0 && index == 0) {
          document.getElementById("itemUpgrades").innerHTML += jsonUpgradeChainString;
        } else {
          document.getElementById("itemUpgrades").innerHTML += ", \n" + jsonUpgradeChainString;
        }
      }
    }
  }

  //Closing text
  if (generateItemObjects) {
    document.getElementById("item").innerHTML += "]";
    if (generateUpgradeChains) {
      document.getElementById("item").innerHTML += ",";
    }
  }

  if (generateUpgradeChains) {
    document.getElementById("itemUpgrades").innerHTML += "]}}";
  }

  document.getElementById("item").innerHTML.replace(", ,", ",");
  console.log("Done");
}
