let sum = 0;
document.querySelector("#details_form").addEventListener("submit", (e) => {
  e.preventDefault();

  //Getting User Infos
  const age = document.querySelector("#age").value;
  const education_level_score = document.querySelector("#education-level")
    .options[document.querySelector("#education-level").selectedIndex].dataset
    .score;
  const locative_situation_score = document.querySelector("#locative-situation")
    .options[document.querySelector("#locative-situation").selectedIndex]
    .dataset.score;
  const etat_civil_score = document.querySelector("#etat-civil").options[
    document.querySelector("#etat-civil").selectedIndex
  ].dataset.score;
  const personnes_charge_score = document.querySelector("#personnes-charge")
    .options[document.querySelector("#personnes-charge").selectedIndex].dataset
    .score;
  const forme_emploi_score = document.querySelector("#forme-emploi").options[
    document.querySelector("#forme-emploi").selectedIndex
  ].dataset.score;
  const revenu_score = document.querySelector("#revenu").options[
    document.querySelector("#revenu").selectedIndex
  ].dataset.score;
  const duree_occupation_score = document.querySelector("#duree-occupation")
    .options[document.querySelector("#duree-occupation").selectedIndex].dataset
    .score;
  const pret_banque_score = document.querySelector("#pret-banque").options[
    document.querySelector("#pret-banque").selectedIndex
  ].dataset.score;
  const existance_historique_score = document.querySelector(
    "#existance-historique"
  ).options[document.querySelector("#existance-historique").selectedIndex]
    .dataset.score;
  const valeur_pret_score = document.querySelector("#valeur-pret").options[
    document.querySelector("#valeur-pret").selectedIndex
  ].dataset.score;
  const durée_pret_score = document.querySelector("#durée-pret").options[
    document.querySelector("#durée-pret").selectedIndex
  ].dataset.score;
  const objectif_pret_score = document.querySelector("#objectif-pret").options[
    document.querySelector("#objectif-pret").selectedIndex
  ].dataset.score;
  const type_garantie_score = document.querySelector("#type-garantie").options[
    document.querySelector("#type-garantie").selectedIndex
  ].dataset.score;

  // Calculating score from age
  switch (true) {
    case age >= 20 && age <= 30:
      sum += 4;
      break;
    case age >= 31 && age <= 40:
      sum += 3;
      break;
    case age >= 41 && age <= 50:
      sum += 2;
      break;
    case age >= 51 && age <= 60:
      sum += 1;
      break;
  }
  sum +=
    education_level_score * 1 +
    locative_situation_score * 1 +
    etat_civil_score * 1 +
    personnes_charge_score * 1 +
    forme_emploi_score * 1 +
    revenu_score * 1 +
    duree_occupation_score * 1 +
    pret_banque_score * 1 +
    existance_historique_score * 1 +
    valeur_pret_score * 1 +
    duree_occupation_score * 1 +
    objectif_pret_score * 1 +
    type_garantie_score * 1;

  // Risk determination
  let risk = "A";
  switch (true) {
    case sum < 17:
      risk = "D";
      break;
    case sum <= 24:
      risk = "C";
      break;
    case sum <= 29:
      risk = "B";
      break;
  }
  alert(
    "Le score calculé est égale " +
      sum +
      "\n" +
      "La classe de risque est " +
      risk
  );
});
