export function getPEWellsScore(signsOfDVT, isPEDiagnosis, isHeartRateAbove100, isSurgeryin4Weeks, isPEOrDVTDiagnosed, hemotypsis, maligancyOrpalliative) {
   let score = 0;
    if (signsOfDVT) {
      score += 3;
    }
    if (isPEDiagnosis) {
      score += 3;
    }
    if (isHeartRateAbove100) {
      score += 1.5;
    }
    if (isSurgeryin4Weeks) {
      score += 1.5;
    }
    if (isPEOrDVTDiagnosed) {
      score += 1.5;
    }
    if (hemotypsis) {
      score += 1;
    }
    if (maligancyOrpalliative) {
      score += 1;
    }

    return score;
}