function generateReminders() {
  const byPlayer = {}
  function addCard (obj, playerId, cardName) {
    if (playerId) {
      if (!obj[playerId]) {
        obj[playerId] = []
      }
      obj[playerId].push(cardName)
    }
  }

  const vetPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S203_Veterinarian)")
  if (vetPlayer) {
    const playerId = vetPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Vet')
  }

  const qlabPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S225_QuarantineLab)")
  if (qlabPlayer) {
    const playerId = qlabPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'QLab')
  }

  const explorerPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S262_Explorer)")
  if (explorerPlayer) {
    const playerId = explorerPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Explorer')
  }

  const diversityPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S219_DiversityResearcher)")
  if (diversityPlayer) {
    const playerId = diversityPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Div Researcher')
  }
  
  const scienceLabPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S201_ScienceLab)")
  if (scienceLabPlayer) {
    const playerId = scienceLabPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Sci Lab')
}

  const spokespersonPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S202_Spokesperson)")
  if (spokespersonPlayer) {
    const playerId = spokespersonPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Spokesperson')
  }

  const scienceMuseumPlayer  = document.querySelector(".player-board-inPlay-sponsors:has(#card-S204_ScienceMuseum )")
  if (scienceMuseumPlayer) {
    const playerId = scienceMuseumPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Sci Museum')
   }

  const medicalBreakthroughPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S206_MedicalBreakthrough)")
  if (medicalBreakthroughPlayer) {
    const playerId = medicalBreakthroughPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Med Breakthru')
  }

  const scienceLibraryPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S208_ScienceLibrary)")
  if (scienceLibraryPlayer) {
    const playerId = scienceLibraryPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Sci Lib')
  }

  const technologyInstitutePlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S209_TechnologyInstitute)")
  if (technologyInstitutePlayer) {
    const playerId = technologyInstitutePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Tech Inst')
  }

  const breedingCooperationPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S215_BreedingCooperation)")
  if (breedingCooperationPlayer) {
    const playerId = breedingCooperationPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Breed Coop')
  }

  const talentedCommunicatorPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S216_TalentedCommunicator)")
  if (talentedCommunicatorPlayer) {
    const playerId = talentedCommunicatorPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Tal Com')
  }

  const engineerPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S217_Engineer)")
  if (engineerPlayer) {
    const playerId = engineerPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Engineer')
  }

  const breedingProgramPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S218_BreedingProgram)")
  if (breedingProgramPlayer) {
    const playerId = breedingProgramPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Breed Pro')
  }

  const migrationRecordingPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S224_MigrationRecording)")
  if (migrationRecordingPlayer) {
    const playerId = migrationRecordingPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Migration Rec')
  }

  const expertInSmallAnimalsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S229_ExpertInSmallAnimals)")
  if (expertInSmallAnimalsPlayer) {
    const playerId = expertInSmallAnimalsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'xSmall')
  }

  const expertInLargeAnimalsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S230_ExpertInLargeAnimals)")
  if (expertInLargeAnimalsPlayer) {
    const playerId = expertInLargeAnimalsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'xLarge')
  }

  const primatologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S236_Primatologist)")
  if (primatologistPlayer) {
    const playerId = primatologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Prima')
  }

  const herpetologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S237_Herpetologist)")
  if (herpetologistPlayer) {
    const playerId = herpetologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Herpes')
  }

  const ornithologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S238_Ornithologist)")
  if (ornithologistPlayer) {
    const playerId = ornithologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Orny')
  }

  const expertInPredatorsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S239_ExpertInPredators)")
  if (expertInPredatorsPlayer) {
    const playerId = expertInPredatorsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'xPred')
  }

  const expertInHerbivoresPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S240_ExpertInHerbivores)")
  if (expertInHerbivoresPlayer) {
    const playerId = expertInHerbivoresPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'xHerb')
  }

  const sideEntrancePlayer = document.querySelector(".player-board-inPlay-sponsors:has(#card-S257_SideEntrance)")
  if (sideEntrancePlayer) {
    const playerId = sideEntrancePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Side Boob')
  }

  const africanBushElephantPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A426_AfricanBushElephant)")
  if (africanBushElephantPlayer) {
    const playerId = africanBushElephantPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'afElephant')
  }

  const asianElephantPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A431_AsianElephant)")
  if (asianElephantPlayer) {
    const playerId = asianElephantPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'asElephant')
  }

  const whiteRhinocerosPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A427_WhiteRhinoceros)")
  if (whiteRhinocerosPlayer) {
    const playerId = whiteRhinocerosPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'wRhino')
  }

  const indianRhinocerosPlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A432_IndianRhinoceros)")
  if (indianRhinocerosPlayer) {
    const playerId = indianRhinocerosPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'iRhino')
  }

  const baldEaglePlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A505_BaldEagle)")
  if (baldEaglePlayer) {
    const playerId = baldEaglePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'bEagle')
  }

  const goldenEaglePlayer = document.querySelector(".player-board-inPlay-animals:has(#card-A509_GoldenEagle)")
  if (goldenEaglePlayer) {
    const playerId = goldenEaglePlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'gEagle')
  }

  const franchiseBusinessPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S265_FranchiseBusiness)")
  if (franchiseBusinessPlayer) {
    const playerId = franchiseBusinessPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Franch Biz')
  }

  const marineBiologistPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S266_MarineBiologist)")
  if (marineBiologistPlayer) {
    const playerId = marineBiologistPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Marine Bio')
  }

  const marineResearchExpeditionPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S270_MarineResearchExpedition)")
  if (marineResearchExpeditionPlayer) {
    const playerId = marineResearchExpeditionPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Marine Res Exp')
  }

  const expansionAreaPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S272_ExpansionArea)")
  if (expansionAreaPlayer) {
    const playerId = expansionAreaPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Exp Area')
  }

  const publicationsPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S273_Publications)")
  if (publicationsPlayer) {
    const playerId = publicationsPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Pubs')
  }

  const horseWhispererPlayer = document.querySelector(".player-board-inPlay-sponsors:has(#S275_HorseWhisperer)")
  if (horseWhispererPlayer) {
    const playerId = horseWhispererPlayer.id.split('-')[2]
    addCard(byPlayer, playerId, 'Psst, Horse')
  }

  const playerLookup = Object.keys(byPlayer).reduce((obj, playerId) => {
    const playerDiv = document.querySelector(`#player_name_${playerId} a`)

    obj[playerId] = {
      id: playerId, 
      name: playerDiv.innerHTML,
      color: playerDiv.style.color,
    }

    return obj
  }, {})

  function formatPlayerCards(playerCards) {
    const [id, cards] = playerCards;
    const { name, color } = playerLookup[id];
    return `<div><span style="font-weight: 600; color: ${color}; font-size: 14px;">${name}:</span> ${cards.join(', ')}</div>`;
  }

  ourBox.innerHTML = 
  `<div style="font-style: italic; font-size: 10px; width: 60px; margin-left: 20px; color: #222;">Reminders</div>
   <div style="justify-content: center; display: flex; flex-direction: row; gap: 8px; align-items: center; margin-right: 80px; width: 100%; font-size: 14px;">
   ${Object.entries(byPlayer).map(formatPlayerCards).join('')}
  </div>`;
}

const mainHeader = document.querySelector('#page-title')
mainHeader.insertAdjacentHTML('afterend', `<div id="reminder-box" style="margin-top: 8px; background-color: #f0f0f0; box-shadow: 0 3px 8px rgba(0,0,0,.3); padding-top: 8px; padding-bottom: 8px; display: flex; flex-direction: row; align-items: center;"></div>`)
const ourBox = document.querySelector('#reminder-box')

setInterval(generateReminders, 5000)

generateReminders()

console.log('Ark Nova Reminders loaded successfully')
