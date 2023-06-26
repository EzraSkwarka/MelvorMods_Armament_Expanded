export async function setup({ gameData, patch, loadTemplates, loadModule, onInterfaceAvailable, onInterfaceReady }) {
  console.warn("[AE] Loaded Armament Expanded");
  await loadTemplates("src/template.html"); 
  const { Tinkering } = await loadModule('src/tinkering.mjs'); 

  console.log("[AE] Registering Skill");
  game.registerSkill(game.registeredNamespaces.getNamespace('Armament_Expanded'), Tinkering); 

  onInterfaceAvailable(async () => {
      //const skill = game.skills.registeredObjects.get("Armament_Expanded:Tinkering");

      console.log("[AE] Appending Page");
      ui.createStatic('#tinkering-container-template', document.getElementById('main-container'));
  });
}